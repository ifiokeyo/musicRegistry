#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

echo `pwd` 

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# Json code generation
pbjs \
    -t json-module -w es6 \
    -o ${PROTO_DEST}/protoBundle.json.js $(echo $(find protoDefintions/proto  -type f  -name '*.proto'))

# TypeScript code generation
pbjs \
    -t static-module -w es6 \
    -o ${PROTO_DEST}/protoBundle.js \
    $(echo $(find protoDefintions/proto  -type f  -name '*.proto')) 

pbts -o ${PROTO_DEST}/protoBundle.d.ts ${PROTO_DEST}/protoBundle.js
