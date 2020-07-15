import { 
    ServerUnaryCall, sendUnaryData, 
    ServerReadableStream, ServerWritableStream, 
    ServerDuplexStream, Server, ServerCredentials
} from '@grpc/grpc-js';
import { google, songs } from '../proto/protoBundle';
import getSong from './get-song';
import addSong from './add-song';
import getChat from './get-chat';
import { addComment, registerListener } from './live-chat';

import{ loadProto } from '../protoHelper';

const songProtoFile = 'proto/songs/songs.proto';

const protoDescriptor: any = loadProto(songProtoFile).songs;


const methodHandlers = {
    getSong(call: ServerUnaryCall<null, google.protobuf.Empty>, callback: sendUnaryData<songs.Song>): void {
        console.log(`${new Date().toISOString()}    getSong`);
        callback(null, getSong());
    },
    addSongs(call: ServerReadableStream<songs.Song, null>, callback: sendUnaryData<google.protobuf.Empty>): void {
        console.log(`${new Date().toISOString()}    addSongs`);
        call.on('data', (song: songs.Song) => {
            addSong(song);
        });
        call.on('end', () => callback(null, new google.protobuf.Empty()));
    },
    async getChat(call: ServerWritableStream<songs.Song, songs.Comment>): Promise<void> {
        console.log(`${new Date().toISOString()}    getChat`);
        const song = call.request as songs.Song;
        const comments = await getChat(song.id);
        for (const comment of comments) {
            call.write(comment);
        }
        call.end();
    },
    liveChat(call: ServerDuplexStream<songs.Comment, songs.Comment>): void {
        console.log(`${new Date().toISOString()}    liveChat`);
        registerListener(comment => call.write(comment));
        call.on('data', (comment: songs.Comment) => {
            addComment(comment);
        });
        call.on('end', () => call.end());
    }
}

function serve(): void {
    const server: Server = new Server();

    // register all the handler here...
    server.addService(protoDescriptor.SongService.service, methodHandlers);

    // define the host/port for server
    server.bindAsync(
        `localhost:${process.env.PORT}`,
        ServerCredentials.createInsecure(),
        (err: Error, port: number) => {
            if (err != null) {
                return console.error(err);
            }
            console.log(`gRPC listening on ${ port }`);
            // start the gRPC server
            server.start();
        }
    );  
}

export default {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
