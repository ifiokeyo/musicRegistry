import fs from 'fs';
import inquirer from 'inquirer';
import { songClient } from './client';
import { songs } from '../proto/protoBundle';
import { createProtoMsgFromObject } from '../protoHelper';

async function liveChat(): Promise<void> {
    const { name, songId } = await inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?',
        },
        {
            name: 'songId',
            message: 'Which song do you want to discuss?',
        },
    ]);
    const stream = songClient.liveChat();
    return new Promise(async (resolve, reject) => {
        stream.on('data', (comment: songs.Comment) => {
            fs.writeFileSync(
                `chat-${name}-${comment.songId}.txt`,
                `(${comment.username}) ${comment.body}\n`,
                {
                    flag: 'a',
                },
            );
        });
        stream.on('end', resolve);
        stream.on('error', reject);

        while (true) {
            const answer = await inquirer.prompt([
                {
                    name: 'message',
                    message: 'Type message:',
                },
            ]);
            const comment = createProtoMsgFromObject(songs.Comment, {
                username: name,
                body: answer.message,
                songId: songId

            });
            stream.write(comment);
        }
    });
}

export default {
    command: 'chat',
    describe: 'Chat about a song',
    builder: {},
    handler: async (): Promise<void> => {
        await liveChat();
    },
};
