/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : delimiter.js
* Created at  : 2019-03-08
* Updated at  : 2019-03-08
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

const delimiters = [
	':', ';',
	',', '?',
	'(', ')',
	'[', ']',
	'{', '}'
];

module.exports = {
    id       : "Delimiter",
    priority : 10,

    is : current_character => delimiters.includes(current_character),

    initialize : (token, current_character, streamer) => {
        token.value = current_character;
        token.start = token.end = streamer.get_cursor();
    }
};
