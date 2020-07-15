/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const genre = $root.genre = (() => {

    /**
     * Namespace genre.
     * @exports genre
     * @namespace
     */
    const genre = {};

    /**
     * GENRE enum.
     * @name genre.GENRE
     * @enum {number}
     * @property {number} SG_UNKNOWN=0 SG_UNKNOWN value
     * @property {number} SG_POP=1 SG_POP value
     * @property {number} SG_RAP=2 SG_RAP value
     * @property {number} SG_COUNTRY=3 SG_COUNTRY value
     * @property {number} SG_AFROPOP=4 SG_AFROPOP value
     * @property {number} SG_AFROBEATS=5 SG_AFROBEATS value
     * @property {number} SG_GOSPEL=6 SG_GOSPEL value
     * @property {number} SG_FUJI=7 SG_FUJI value
     * @property {number} SG_RnB=8 SG_RnB value
     */
    genre.GENRE = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SG_UNKNOWN"] = 0;
        values[valuesById[1] = "SG_POP"] = 1;
        values[valuesById[2] = "SG_RAP"] = 2;
        values[valuesById[3] = "SG_COUNTRY"] = 3;
        values[valuesById[4] = "SG_AFROPOP"] = 4;
        values[valuesById[5] = "SG_AFROBEATS"] = 5;
        values[valuesById[6] = "SG_GOSPEL"] = 6;
        values[valuesById[7] = "SG_FUJI"] = 7;
        values[valuesById[8] = "SG_RnB"] = 8;
        return values;
    })();

    return genre;
})();

export const songs = $root.songs = (() => {

    /**
     * Namespace songs.
     * @exports songs
     * @namespace
     */
    const songs = {};

    songs.Song = (function() {

        /**
         * Properties of a Song.
         * @memberof songs
         * @interface ISong
         * @property {number|null} [id] Song id
         * @property {string|null} [title] Song title
         * @property {string|null} [artist] Song artist
         * @property {genre.GENRE|null} [genre] Song genre
         */

        /**
         * Constructs a new Song.
         * @memberof songs
         * @classdesc Represents a Song.
         * @implements ISong
         * @constructor
         * @param {songs.ISong=} [properties] Properties to set
         */
        function Song(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Song id.
         * @member {number} id
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.id = 0;

        /**
         * Song title.
         * @member {string} title
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.title = "";

        /**
         * Song artist.
         * @member {string} artist
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.artist = "";

        /**
         * Song genre.
         * @member {genre.GENRE} genre
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.genre = 0;

        /**
         * Creates a new Song instance using the specified properties.
         * @function create
         * @memberof songs.Song
         * @static
         * @param {songs.ISong=} [properties] Properties to set
         * @returns {songs.Song} Song instance
         */
        Song.create = function create(properties) {
            return new Song(properties);
        };

        /**
         * Encodes the specified Song message. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @function encode
         * @memberof songs.Song
         * @static
         * @param {songs.ISong} message Song message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Song.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            if (message.artist != null && Object.hasOwnProperty.call(message, "artist"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.artist);
            if (message.genre != null && Object.hasOwnProperty.call(message, "genre"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.genre);
            return writer;
        };

        /**
         * Encodes the specified Song message, length delimited. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Song
         * @static
         * @param {songs.ISong} message Song message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Song.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Song message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Song
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Song} Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Song.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Song();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.title = reader.string();
                    break;
                case 3:
                    message.artist = reader.string();
                    break;
                case 4:
                    message.genre = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Song message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.Song
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Song} Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Song.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Song message.
         * @function verify
         * @memberof songs.Song
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Song.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.artist != null && message.hasOwnProperty("artist"))
                if (!$util.isString(message.artist))
                    return "artist: string expected";
            if (message.genre != null && message.hasOwnProperty("genre"))
                switch (message.genre) {
                default:
                    return "genre: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                    break;
                }
            return null;
        };

        /**
         * Creates a Song message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Song
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Song} Song
         */
        Song.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Song)
                return object;
            let message = new $root.songs.Song();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.title != null)
                message.title = String(object.title);
            if (object.artist != null)
                message.artist = String(object.artist);
            switch (object.genre) {
            case "SG_UNKNOWN":
            case 0:
                message.genre = 0;
                break;
            case "SG_POP":
            case 1:
                message.genre = 1;
                break;
            case "SG_RAP":
            case 2:
                message.genre = 2;
                break;
            case "SG_COUNTRY":
            case 3:
                message.genre = 3;
                break;
            case "SG_AFROPOP":
            case 4:
                message.genre = 4;
                break;
            case "SG_AFROBEATS":
            case 5:
                message.genre = 5;
                break;
            case "SG_GOSPEL":
            case 6:
                message.genre = 6;
                break;
            case "SG_FUJI":
            case 7:
                message.genre = 7;
                break;
            case "SG_RnB":
            case 8:
                message.genre = 8;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Song message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Song
         * @static
         * @param {songs.Song} message Song
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Song.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.id = 0;
                object.title = "";
                object.artist = "";
                object.genre = options.enums === String ? "SG_UNKNOWN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.artist != null && message.hasOwnProperty("artist"))
                object.artist = message.artist;
            if (message.genre != null && message.hasOwnProperty("genre"))
                object.genre = options.enums === String ? $root.genre.GENRE[message.genre] : message.genre;
            return object;
        };

        /**
         * Converts this Song to JSON.
         * @function toJSON
         * @memberof songs.Song
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Song.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Song;
    })();

    songs.Comment = (function() {

        /**
         * Properties of a Comment.
         * @memberof songs
         * @interface IComment
         * @property {number|null} [songId] Comment songId
         * @property {string|null} [username] Comment username
         * @property {string|null} [body] Comment body
         */

        /**
         * Constructs a new Comment.
         * @memberof songs
         * @classdesc Represents a Comment.
         * @implements IComment
         * @constructor
         * @param {songs.IComment=} [properties] Properties to set
         */
        function Comment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Comment songId.
         * @member {number} songId
         * @memberof songs.Comment
         * @instance
         */
        Comment.prototype.songId = 0;

        /**
         * Comment username.
         * @member {string} username
         * @memberof songs.Comment
         * @instance
         */
        Comment.prototype.username = "";

        /**
         * Comment body.
         * @member {string} body
         * @memberof songs.Comment
         * @instance
         */
        Comment.prototype.body = "";

        /**
         * Creates a new Comment instance using the specified properties.
         * @function create
         * @memberof songs.Comment
         * @static
         * @param {songs.IComment=} [properties] Properties to set
         * @returns {songs.Comment} Comment instance
         */
        Comment.create = function create(properties) {
            return new Comment(properties);
        };

        /**
         * Encodes the specified Comment message. Does not implicitly {@link songs.Comment.verify|verify} messages.
         * @function encode
         * @memberof songs.Comment
         * @static
         * @param {songs.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.songId != null && Object.hasOwnProperty.call(message, "songId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.songId);
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.body);
            return writer;
        };

        /**
         * Encodes the specified Comment message, length delimited. Does not implicitly {@link songs.Comment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Comment
         * @static
         * @param {songs.IComment} message Comment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Comment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Comment message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Comment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.songId = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.body = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Comment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.Comment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Comment} Comment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Comment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Comment message.
         * @function verify
         * @memberof songs.Comment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Comment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.songId != null && message.hasOwnProperty("songId"))
                if (!$util.isInteger(message.songId))
                    return "songId: integer expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            return null;
        };

        /**
         * Creates a Comment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Comment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Comment} Comment
         */
        Comment.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Comment)
                return object;
            let message = new $root.songs.Comment();
            if (object.songId != null)
                message.songId = object.songId | 0;
            if (object.username != null)
                message.username = String(object.username);
            if (object.body != null)
                message.body = String(object.body);
            return message;
        };

        /**
         * Creates a plain object from a Comment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Comment
         * @static
         * @param {songs.Comment} message Comment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Comment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.songId = 0;
                object.username = "";
                object.body = "";
            }
            if (message.songId != null && message.hasOwnProperty("songId"))
                object.songId = message.songId;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            return object;
        };

        /**
         * Converts this Comment to JSON.
         * @function toJSON
         * @memberof songs.Comment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Comment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Comment;
    })();

    songs.SongService = (function() {

        /**
         * Constructs a new SongService service.
         * @memberof songs
         * @classdesc Represents a SongService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function SongService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (SongService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = SongService;

        /**
         * Creates new SongService service using the specified rpc implementation.
         * @function create
         * @memberof songs.SongService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {SongService} RPC service. Useful where requests and/or responses are streamed.
         */
        SongService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link songs.SongService#getSong}.
         * @memberof songs.SongService
         * @typedef GetSongCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {songs.Song} [response] Song
         */

        /**
         * Calls GetSong.
         * @function getSong
         * @memberof songs.SongService
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @param {songs.SongService.GetSongCallback} callback Node-style callback called with the error, if any, and Song
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SongService.prototype.getSong = function getSong(request, callback) {
            return this.rpcCall(getSong, $root.google.protobuf.Empty, $root.songs.Song, request, callback);
        }, "name", { value: "GetSong" });

        /**
         * Calls GetSong.
         * @function getSong
         * @memberof songs.SongService
         * @instance
         * @param {google.protobuf.IEmpty} request Empty message or plain object
         * @returns {Promise<songs.Song>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link songs.SongService#addSongs}.
         * @memberof songs.SongService
         * @typedef AddSongsCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {google.protobuf.Empty} [response] Empty
         */

        /**
         * Calls AddSongs.
         * @function addSongs
         * @memberof songs.SongService
         * @instance
         * @param {songs.ISong} request Song message or plain object
         * @param {songs.SongService.AddSongsCallback} callback Node-style callback called with the error, if any, and Empty
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SongService.prototype.addSongs = function addSongs(request, callback) {
            return this.rpcCall(addSongs, $root.songs.Song, $root.google.protobuf.Empty, request, callback);
        }, "name", { value: "AddSongs" });

        /**
         * Calls AddSongs.
         * @function addSongs
         * @memberof songs.SongService
         * @instance
         * @param {songs.ISong} request Song message or plain object
         * @returns {Promise<google.protobuf.Empty>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link songs.SongService#getChat}.
         * @memberof songs.SongService
         * @typedef GetChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {songs.Comment} [response] Comment
         */

        /**
         * Calls GetChat.
         * @function getChat
         * @memberof songs.SongService
         * @instance
         * @param {songs.ISong} request Song message or plain object
         * @param {songs.SongService.GetChatCallback} callback Node-style callback called with the error, if any, and Comment
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SongService.prototype.getChat = function getChat(request, callback) {
            return this.rpcCall(getChat, $root.songs.Song, $root.songs.Comment, request, callback);
        }, "name", { value: "GetChat" });

        /**
         * Calls GetChat.
         * @function getChat
         * @memberof songs.SongService
         * @instance
         * @param {songs.ISong} request Song message or plain object
         * @returns {Promise<songs.Comment>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link songs.SongService#liveChat}.
         * @memberof songs.SongService
         * @typedef LiveChatCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {songs.Comment} [response] Comment
         */

        /**
         * Calls LiveChat.
         * @function liveChat
         * @memberof songs.SongService
         * @instance
         * @param {songs.IComment} request Comment message or plain object
         * @param {songs.SongService.LiveChatCallback} callback Node-style callback called with the error, if any, and Comment
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(SongService.prototype.liveChat = function liveChat(request, callback) {
            return this.rpcCall(liveChat, $root.songs.Comment, $root.songs.Comment, request, callback);
        }, "name", { value: "LiveChat" });

        /**
         * Calls LiveChat.
         * @function liveChat
         * @memberof songs.SongService
         * @instance
         * @param {songs.IComment} request Comment message or plain object
         * @returns {Promise<songs.Comment>} Promise
         * @variation 2
         */

        return SongService;
    })();

    return songs;
})();

export const google = $root.google = (() => {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    const google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        const protobuf = {};

        protobuf.Empty = (function() {

            /**
             * Properties of an Empty.
             * @memberof google.protobuf
             * @interface IEmpty
             */

            /**
             * Constructs a new Empty.
             * @memberof google.protobuf
             * @classdesc Represents an Empty.
             * @implements IEmpty
             * @constructor
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             */
            function Empty(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new Empty instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty=} [properties] Properties to set
             * @returns {google.protobuf.Empty} Empty instance
             */
            Empty.create = function create(properties) {
                return new Empty(properties);
            };

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Empty.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Empty
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Empty} Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Empty.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Empty message.
             * @function verify
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Empty.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Empty} Empty
             */
            Empty.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Empty)
                    return object;
                return new $root.google.protobuf.Empty();
            };

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Empty
             * @static
             * @param {google.protobuf.Empty} message Empty
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Empty.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this Empty to JSON.
             * @function toJSON
             * @memberof google.protobuf.Empty
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Empty.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Empty;
        })();

        return protobuf;
    })();

    return google;
})();

export { $root as default };
