import { songClient } from './client';
import { songs } from '../proto/protoBundle';
import { createProtoMsgFromObject } from '../protoHelper';

function printChat(songId: number): Promise<void> {
    console.log(`Getting chat for song ${songId}`);
    const song = createProtoMsgFromObject(songs.Song, {id: songId});
    return new Promise<void>((resolve, reject) => {
        const stream = songClient.getChat(song);
        stream.on('data', (comment: songs.Comment) => {
            console.log(`(${comment.username}) ${comment.body}`);
        });
        stream.on('end', resolve);
        stream.on('error', reject);
    });
}

export default {
    command: 'get-chat',
    describe: 'Get the chat comments on a song',
    builder: {
        songId: {
            demand: true,
            number: true,
        },
    },
    handler: async (argv): Promise<void> => {
        await printChat(argv.songId);
    },
};
