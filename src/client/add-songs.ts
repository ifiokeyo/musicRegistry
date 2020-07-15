import _ from 'lodash';
import { songClient } from './client';
import { songs, google } from '../proto/protoBundle';
import inquirer from 'inquirer';
import { createProtoMsgFromObject } from '../protoHelper';

function addSongs(): (song: songs.Song | null) => void {
    const stream = songClient.addSongs((err: Error, res: google.protobuf.Empty) => {
        if (err) {
            throw err;
        }
        _.noop(res);
    });
    return (song: songs.Song | null): void => {
        if (song == null) {
            stream.end();
            return;
        }
        stream.write(song);
    };
}

async function inputSong(): Promise<songs.Song> {
    const answers = await inquirer.prompt([
        {
            name: 'title',
            message: 'What is the song title?',
        },
        {
            name: 'artist',
            message: 'Who is the artist?',
        },
        {
            name: 'genre',
            message: 'What genre?',
        },
    ]);
    const newSong = {
        title: answers.title,
        artist: answers.artist,
        genre: answers.genre
    }
    return createProtoMsgFromObject(songs.Song, newSong);
}

async function shouldAddMore(): Promise<boolean> {
    const answer = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: 'Would you like to add another song?',
    });
    return answer.more;
}

export default {
    command: 'add-songs',
    describe: 'Add songs',
    builder: {},
    handler: async (): Promise<void> => {
        const addSong = addSongs();
        addSong(await inputSong());
        while (await shouldAddMore()) {
            addSong(await inputSong());
        }
        addSong(null);
    },
};
