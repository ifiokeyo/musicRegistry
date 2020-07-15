#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

echo `pwd` 

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# Json code generation
pbjs \
    -t json-module -w es6 \
    -o ${PROTO_DEST}/protoBundle.json.js \
    protoDefintions/proto/common/genre.proto protoDefintions/proto/songs/songs.proto 

# TypeScript code generation
pbjs \
    -t static-module -w es6 \
    -o ${PROTO_DEST}/protoBundle.js \
    protoDefintions/proto/common/genre.proto protoDefintions/proto/songs/songs.proto 

pbts -o ${PROTO_DEST}/protoBundle.d.ts ${PROTO_DEST}/protoBundle.js
