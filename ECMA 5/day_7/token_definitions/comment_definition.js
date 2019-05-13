/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : comment.js
* Created at  : 2019-03-05
* Updated at  : 2019-03-05
* Author      : jeefo
* Purpose     :
* Description :
* Reference   :
.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.*/
// ignore:start
"use strict";

/* globals */
/* exported */

// ignore:end

module.exports = {
    id       : "Comment",
    priority : 40,

    is : (current_character, streamer) => {
        if (current_character === '/') {
            const next_character = streamer.at(streamer.cursor.index + 1);
            return next_character === '*' || next_character === '/';
        }
        return false;
    },
    initialize : (token, current_character, streamer) => {
        let comment, is_inline;
        const start = streamer.get_cursor();

        if (streamer.get_next_character() === '*') {
            let next_character = streamer.get_next_character(true), end_index;
            const start_index  = streamer.cursor.index;

            while (next_character) {
                if (next_character === '*' && streamer.at(streamer.cursor.index + 1) === '/') {
                    end_index = streamer.cursor.index;
                    streamer.get_next_character();
                    break;
                }
                next_character = streamer.get_next_character(true);
            }

            comment   = streamer.string.substring(start_index, end_index).trim();
            is_inline = false;
        } else {
            let next_character = streamer.get_next_character();
            const start_index  = streamer.cursor.index;

            while (next_character && next_character !== '\n') {
                next_character = streamer.get_next_character();
            }

            comment   = streamer.substring_from(start_index).trim();
            is_inline = true;
        }

        token.value     = '';
        token.comment   = comment;
        token.is_inline = is_inline;
        token.start     = start;
        token.end       = streamer.get_cursor();
    }
};
