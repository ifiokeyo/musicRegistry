import { songs } from '../proto/protoBundle';
import db from './db';

export default function(song: songs.Song): void {
    // Use of `any` required due to bug in @types/lowdb
    // SEE: https://github.com/typicode/lowdb/issues/349
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbSongs = db.get('songs') as any;
    song.id = dbSongs.value().length + 1;
    dbSongs.push(songs.Song.toObject(song)).write();
}
