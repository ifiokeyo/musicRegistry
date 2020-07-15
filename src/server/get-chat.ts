import { songs } from '../proto/protoBundle';
import db from './db';

export default async function(songId: number): Promise<songs.Comment[]> {
    const comments = db.get('comments').value();
    return comments
        .filter(comment => comment.songId === songId)
        .map(c => {
            const comment = new songs.Comment();
            comment.songId = c.songId;
            comment.body = c.body;
            comment.username = c.username;
            return comment;
        });
}
