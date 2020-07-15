import { songs } from '../proto/protoBundle';
import db from './db';

export default function(): songs.Song {
    const song = new songs.Song();
    const allSongs = db.get('songs').value();
    const s = allSongs[Math.floor(Math.random() * allSongs.length)];
    song.id = s.id;
    song.title = s.title;
    song.artist = s.artist;
    song.genre = s.genre;
    return song;
}
