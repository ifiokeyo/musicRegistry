import  { credentials } from '@grpc/grpc-js';
import{ loadProto } from '../protoHelper';

const songProtoFile = 'proto/songs/songs.proto';

const songs: any = loadProto(songProtoFile).songs;

export const songClient = new songs.SongService(`localhost:${process.env.PORT}`, credentials.createInsecure());
