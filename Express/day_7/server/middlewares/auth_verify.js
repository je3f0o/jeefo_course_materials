"use strict";

const tokens_conn = require("jeefo-mysql")("access_tokens");

module.exports = function auth_verify (req, res, next) {
	const where = {
		user_id : req.user.id,
		token   : req.access_token
    };

	tokens_conn.first(where, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else if (data === null) {
			res.sendStatus(401);
		} else {
			next();
		}
    });
};
