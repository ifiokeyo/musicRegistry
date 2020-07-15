/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/light";

const $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  genre: {
    nested: {
      GENRE: {
        values: {
          SG_UNKNOWN: 0,
          SG_POP: 1,
          SG_RAP: 2,
          SG_COUNTRY: 3,
          SG_AFROPOP: 4,
          SG_AFROBEATS: 5,
          SG_GOSPEL: 6,
          SG_FUJI: 7,
          SG_RnB: 8
        }
      }
    }
  },
  songs: {
    nested: {
      Song: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          artist: {
            type: "string",
            id: 3
          },
          genre: {
            type: "genre.GENRE",
            id: 4
          }
        }
      },
      Comment: {
        fields: {
          songId: {
            type: "int32",
            id: 1
          },
          username: {
            type: "string",
            id: 2
          },
          body: {
            type: "string",
            id: 3
          }
        }
      },
      SongService: {
        methods: {
          GetSong: {
            requestType: "google.protobuf.Empty",
            responseType: "Song"
          },
          AddSongs: {
            requestType: "Song",
            requestStream: true,
            responseType: "google.protobuf.Empty"
          },
          GetChat: {
            requestType: "Song",
            responseType: "Comment",
            responseStream: true
          },
          LiveChat: {
            requestType: "Comment",
            requestStream: true,
            responseType: "Comment",
            responseStream: true
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Empty: {
            fields: {}
          }
        }
      }
    }
  }
});

export { $root as default };
