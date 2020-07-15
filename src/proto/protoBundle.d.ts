import * as $protobuf from "protobufjs";
/** Namespace genre. */
export namespace genre {

    /** GENRE enum. */
    enum GENRE {
        SG_UNKNOWN = 0,
        SG_POP = 1,
        SG_RAP = 2,
        SG_COUNTRY = 3,
        SG_AFROPOP = 4,
        SG_AFROBEATS = 5,
        SG_GOSPEL = 6,
        SG_FUJI = 7,
        SG_RnB = 8
    }
}

/** Namespace songs. */
export namespace songs {

    /** Properties of a Song. */
    interface ISong {

        /** Song id */
        id?: (number|null);

        /** Song title */
        title?: (string|null);

        /** Song artist */
        artist?: (string|null);

        /** Song genre */
        genre?: (genre.GENRE|null);
    }

    /** Represents a Song. */
    class Song implements ISong {

        /**
         * Constructs a new Song.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISong);

        /** Song id. */
        public id: number;

        /** Song title. */
        public title: string;

        /** Song artist. */
        public artist: string;

        /** Song genre. */
        public genre: genre.GENRE;

        /**
         * Creates a new Song instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Song instance
         */
        public static create(properties?: songs.ISong): songs.Song;

        /**
         * Encodes the specified Song message. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Song message, length delimited. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Song message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Song;

        /**
         * Decodes a Song message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Song;

        /**
         * Verifies a Song message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Song message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Song
         */
        public static fromObject(object: { [k: string]: any }): songs.Song;

        /**
         * Creates a plain object from a Song message. Also converts values to other types if specified.
         * @param message Song
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Song, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Song to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Comment. */
    interface IComment {

        /** Comment songId */
        songId?: (number|null);

        /** Comment username */
        username?: (string|null);

        /** Comment body */
        body?: (string|null);
    }

    /** Represents a Comment. */
    class Comment implements IComment {

        /**
         * Constructs a new Comment.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IComment);

        /** Comment songId. */
        public songId: number;

        /** Comment username. */
        public username: string;

        /** Comment body. */
        public body: string;

        /**
         * Creates a new Comment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Comment instance
         */
        public static create(properties?: songs.IComment): songs.Comment;

        /**
         * Encodes the specified Comment message. Does not implicitly {@link songs.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link songs.Comment.verify|verify} messages.
         * @param message Comment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IComment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Comment;

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Comment;

        /**
         * Verifies a Comment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Comment
         */
        public static fromObject(object: { [k: string]: any }): songs.Comment;

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @param message Comment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Comment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a SongService */
    class SongService extends $protobuf.rpc.Service {

        /**
         * Constructs a new SongService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new SongService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SongService;

        /**
         * Calls GetSong.
         * @param request Empty message or plain object
         * @param callback Node-style callback called with the error, if any, and Song
         */
        public getSong(request: google.protobuf.IEmpty, callback: songs.SongService.GetSongCallback): void;

        /**
         * Calls GetSong.
         * @param request Empty message or plain object
         * @returns Promise
         */
        public getSong(request: google.protobuf.IEmpty): Promise<songs.Song>;

        /**
         * Calls AddSongs.
         * @param request Song message or plain object
         * @param callback Node-style callback called with the error, if any, and Empty
         */
        public addSongs(request: songs.ISong, callback: songs.SongService.AddSongsCallback): void;

        /**
         * Calls AddSongs.
         * @param request Song message or plain object
         * @returns Promise
         */
        public addSongs(request: songs.ISong): Promise<google.protobuf.Empty>;

        /**
         * Calls GetChat.
         * @param request Song message or plain object
         * @param callback Node-style callback called with the error, if any, and Comment
         */
        public getChat(request: songs.ISong, callback: songs.SongService.GetChatCallback): void;

        /**
         * Calls GetChat.
         * @param request Song message or plain object
         * @returns Promise
         */
        public getChat(request: songs.ISong): Promise<songs.Comment>;

        /**
         * Calls LiveChat.
         * @param request Comment message or plain object
         * @param callback Node-style callback called with the error, if any, and Comment
         */
        public liveChat(request: songs.IComment, callback: songs.SongService.LiveChatCallback): void;

        /**
         * Calls LiveChat.
         * @param request Comment message or plain object
         * @returns Promise
         */
        public liveChat(request: songs.IComment): Promise<songs.Comment>;
    }

    namespace SongService {

        /**
         * Callback as used by {@link songs.SongService#getSong}.
         * @param error Error, if any
         * @param [response] Song
         */
        type GetSongCallback = (error: (Error|null), response?: songs.Song) => void;

        /**
         * Callback as used by {@link songs.SongService#addSongs}.
         * @param error Error, if any
         * @param [response] Empty
         */
        type AddSongsCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

        /**
         * Callback as used by {@link songs.SongService#getChat}.
         * @param error Error, if any
         * @param [response] Comment
         */
        type GetChatCallback = (error: (Error|null), response?: songs.Comment) => void;

        /**
         * Callback as used by {@link songs.SongService#liveChat}.
         * @param error Error, if any
         * @param [response] Comment
         */
        type LiveChatCallback = (error: (Error|null), response?: songs.Comment) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
