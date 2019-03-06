/* -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
* File Name   : es5_tokenizer.js
* Created at  : 2019-03-04
* Updated at  : 2019-03-04
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

const JeefoTokenizer = require("jeefo_tokenizer");

const es5_tokenizer = new JeefoTokenizer();

es5_tokenizer.register(require("./token_definitions/comment.js"));
es5_tokenizer.register(require("./token_definitions/string.js"));
es5_tokenizer.register(require("./token_definitions/number.js"));
es5_tokenizer.register(require("./token_definitions/operator.js"));
es5_tokenizer.register(require("./token_definitions/identifier.js"));

module.exports = es5_tokenizer;

// Debug
if (require.main === module) {
	// Debug
	// Initialize source code
	const fs = require('fs');
	const source = fs.readFileSync("./source.js", "utf8");
	es5_tokenizer.init(source, 2);

	//
	while (true) {
		const token = es5_tokenizer.get_next_token();
		if (token === null) {break;}
		console.log("Id: " + token.id);
		console.log(token);
		console.log("---------------");
	}
}
