/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : string.js
* Created at  : 2019-03-05
* Updated at  : 2019-03-07
* Author      : jeefo
* Purpose     :
* Description :
* Reference   : https://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.*/
// ignore:start
"use strict";

/* globals */
/* exported */

// ignore:end

module.exports = {
    id       : "String",
    priority : 1,

	is         : current_character => current_character === '"' || current_character === "'",
    initialize : (token, current_character, streamer) => {
        const start = streamer.get_cursor(),
              quote = current_character;

        let length         = 1,
            current_index  = start.index,
            virtual_length = 1,
            next_character = streamer.at(current_index + length);

        while (true) {
            if (next_character === null) {
                throw new SyntaxError("Invalid or unexpected token");
            }

            if (next_character === '\t') {
                length         += 1;
                virtual_length += streamer.tab_size;
                next_character  = streamer.at(current_index + length);
            }

            if (next_character === '\\') {
                length         += 1;
                virtual_length += 1;
                next_character  = streamer.at(current_index + length);

                if (next_character === '\r') {
                    length         += 1;
                    virtual_length += 1;
                    next_character  = streamer.at(current_index + length);
                }

                switch (next_character) {
                    case '\n' :
                        streamer.move_cursor(length - 1);
                        next_character = streamer.get_next_character();
                        current_index  = streamer.cursor.index;
                        length = virtual_length = 0;
                        break;
                    case quote :
                        length         += 2;
                        virtual_length += 1;
                        next_character  = streamer.at(current_index + length);
                        break;
                    default :
                        length         += 1;
                        virtual_length += 1;
                        next_character  = streamer.at(current_index + length);
                        break;
                }
            }

            if (next_character === quote) {
                break;
            } else {
                length         += 1;
                virtual_length += 1;
                next_character  = streamer.at(current_index + length);
            }
        }

        streamer.move_cursor(length, virtual_length);

        token.value = streamer.string.substring(start.index + 1, streamer.cursor.index);
        token.quote = quote;
        token.start = start;
        token.end   = streamer.get_cursor();
    }
};
