
"use strict";

const jwt = require("jsonwebtoken");

module.exports = secret => {
	return function auth_middleware (req, res, next) {
  		let token;
		const auth_header = req.headers.authorization; // Express headers are auto converted to lowercase

		if (auth_header && auth_header.startsWith("Bearer ")) {
			token = auth_header.slice(7);
    	} else {
			return res.sendStatus(401);
    	}

  		jwt.verify(token, secret, (err, userdata) => {
      		if (err) {
				return res.sendStatus(401);
        	}

      		req.user = userdata;
			next();
		});
	};
};
