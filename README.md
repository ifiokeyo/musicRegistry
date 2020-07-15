# grpc-ts-demo

🎵 Music-themed demo of a _fully typed_ gRPC client and server implementation in TypeScript. It implements each RPC type (unary, client streaming, server streaming and bidirectional), and uses type definitions generated with @grpc/grpc-js, protobufJs, and @grpc/proto-loader.



The demo application takes the form of a CLI tool that allows you to manage and discuss your favourite songs. 


## Install

```sh
yarn
yarn clean
yarn build
```

## Usage

### Start the server

```sh
yarn start serve
```

### [Unary](https://grpc.io/docs/guides/concepts/#unary-rpc): Get a random song

```sh
yarn start get-song
```

### [Client Streaming](https://grpc.io/docs/guides/concepts/#client-streaming-rpc): Add songs

```sh
yarn start add-songs
```

The songs you add will be persisted to the local JSON store `db.json`.

### [Server Streaming](https://grpc.io/docs/guides/concepts/#server-streaming-rpc): Get chat comments on a song

```sh
yarn start get-chat --songId <id>
```

### [Bidirectional Streaming](https://grpc.io/docs/guides/concepts/#bidirectional-streaming-rpc): Live chat on a song

```sh
yarn start chat
```

Say you set your username as `mike` and you choose to discuss the song with id `10`. Then, the application will dump chat messages to a local file called `chat-mike-10.txt`. You can observe messages as they come in:

```sh
watch cat chat-mike-10.txt
```

Go ahead and try running multiple chat clients at once!
