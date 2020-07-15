import { songs } from '../proto/protoBundle';
import db from './db';

type ListenerFn = (c: songs.Comment) => void;

const listeners: ListenerFn[] = [];

export function registerListener(fn: ListenerFn): void {
    listeners.push(fn);
}

export function addComment(comment: songs.Comment): void {
    // Use of `any` required due to bug in @types/lowdb
    // SEE: https://github.com/typicode/lowdb/issues/349
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbComments = db.get('comments') as any;
    dbComments.push(songs.Comment.toObject(comment)).write();
    listeners.map(listener => listener(comment));
}
