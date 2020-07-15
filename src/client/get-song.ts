import { songClient } from './client';
import { songs, google } from '../proto/protoBundle';
import Table from 'cli-table';

function getSong(): Promise<songs.Song> {
    return new Promise<songs.Song>((resolve, reject) => {
        songClient.getSong(new google.protobuf.Empty(), (err: Error, song) => {
            if (err) {
                return reject(err);
            }
            return resolve(song);
        });
    });
}

export default {
    command: 'get-song',
    describe: 'Get a random song',
    builder: {},
    handler: async (): Promise<void> => {
        const song = await getSong();
        const table = new Table();
        table.push(
            {
                'Song ID': song.id,
            },
            {
                Title: song.title,
            },
            {
                Artist: song.artist,
            },
            {
                Genre: song.genre,
            },
        );
        console.log(table.toString());
    },
};
