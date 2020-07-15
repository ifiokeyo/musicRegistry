import { loadPackageDefinition } from '@grpc/grpc-js';
import { loadSync } from '@grpc/proto-loader';
import { join } from 'path';


const ROOT_DIR =  process.cwd();

export const PROTO_DIR = join(ROOT_DIR, '/protoDefintions');

export function loadProto (protoFile) {
    const pkgDefinition = loadSync(protoFile, {
        defaults: true,
        enums: String,
        includeDirs: [PROTO_DIR],
        keepCase: true,
        longs: String,
        oneofs: true,
    });
    return loadPackageDefinition(pkgDefinition);
}

export function createProtoMsgFromObject(protoClass: any, protoMessage: any) {
    try {
        protoClass.verify(protoMessage);
        // Create a new message from object
        const msg = protoClass.fromObject(protoMessage);
        return msg;
    } catch (error) {
        throw new Error(error);
    }
}
