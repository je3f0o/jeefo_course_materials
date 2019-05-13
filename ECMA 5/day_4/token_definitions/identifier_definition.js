
/*

Rule1:
	Хамгийн эхний тэмдэгт тоо байж болохгүй.
Rule2:
	Delimiters тэмдэгт байж болохгүй.
Rule3:
	White space тэмдэгт байж болохгүй.

*/

const delimiters   = require("./delimiters"),
	  white_spaces = require("./white_spaces");

module.exports = {
	id       : "Identifier",
	priority : 0,

	is : () => true,

    initialize : (token, current_character, streamer) => {
		const start = streamer.get_cursor();
		let length         = 1,
			next_character = streamer.at(start.index + length);

		// code...
		while (next_character !== null) {
			let is_terminated = delimiters.includes(next_character);
			is_terminated    |= white_spaces.includes(next_character);

			if (is_terminated) {
				break;
			}

			length        += 1;
			next_character = streamer.at(start.index + length);
		}

		streamer.move_cursor(length - 1);

		token.value = streamer.string.substring(start.index, start.index + length);
		token.start = start;
		token.end   = streamer.get_cursor();
	}
};
