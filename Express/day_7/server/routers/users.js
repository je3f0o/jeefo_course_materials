// Get users_mysql_connection
/*
access_tokens

CREATE TABLE `access_tokens` (
	`user_id` INT(10) UNSIGNED NOT NULL,
	`token` VARCHAR(256) NOT NULL,
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`id`),
	INDEX `user_id` (`user_id`),
	CONSTRAINT `FK_access_tokens_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
)
ENGINE=InnoDB;
*/

const jwt         = require("jsonwebtoken");
const async       = require("async");
const bcrypt      = require("bcrypt");
const config      = require("../../config");
const jeefo_mysql = require("jeefo-mysql");
const users_conn  = jeefo_mysql("users");
const tokens_conn = jeefo_mysql("access_tokens");

const MS_IN_MINUT = 60 * 1000;
const MS_IN_HOUR  = 60 * MS_IN_MINUT;
const MS_IN_DAY   = 24 * MS_IN_HOUR;
const MS_IN_YEAR  = 365 * MS_IN_DAY;

module.exports = function register_users_api (router) {
	router.post('/user/login', (req, res) => {
		let user_id, token;

		async.waterfall([
			cb => {
				const where = { username : req.body.username };
				users_conn.first(where, cb);
            },
			(userdata, cb) => {
				if (userdata) {
					user_id = userdata.id;
          			bcrypt.compare(req.body.password, userdata.password, cb);
          		} else {
					cb("Invalid user");
                }
            },
			(is_match, cb) => {
              	if (is_match) {
					// Store encrypted data on the client side
					const json_token = { id : user_id };
					jwt.sign(json_token, config.secret, { expiresIn: MS_IN_YEAR }, cb);
              	} else {
					cb("Invalid user");
                }
            },
			(_token, cb) => {
				token = _token;
				tokens_conn.insert({ user_id, token }, cb);
			}
        ], (err) => {
			if (err === "Invalid user") {
				res.sendStatus(401);
            } else if (err) {
				res.sendStatus(500);
            } else {
				res.json({ token });
            }
        });
	});

	router.post('/user/signup', (req, res) => {
		async.waterfall([
			cb => {
				bcrypt.hash(req.body.password, salt_round, cb);
            },
			(hash, cb) => {
				users_conn.insert({
					username : req.body.username,
					password : hash
                }, cb);
			}
        ], (err) => {
			if (err) {
				res.sendStatus(500);
            } else {
				res.sendStatus(200);
            }
        });
	});

	router.get('/api/v1/user/logout', (req, res) => {
		const auth_header = req.headers.authorization; // Express headers are auto converted to lowercase
		const where = {
          user_id : req.user.id,
          token   : auth_header.slice(7)
        };

		tokens_conn.delete(where, err => {
			if (err) {
				res.sendStatus(500);
            } else {
				res.sendStatus(200);
            }
        });
	});

	router.get('/api/v1/user', (req, res) => {
		const where = {
			id      : req.user.id,
			$select : ["id", "username"]
        };

		users_conn.first(where, (err, userdata) => {
			if (err) {
				res.sendStatus(500);
            } else {
				res.json(userdata);
            }
        });
	});

	router.put('/api/v1/user', (req, res) => {
		// process userdata
		const data  = { id : req.user.id };
		const where = { id : req.user.id };

		users_conn.update(data, where, (err) => {
			if (err) {
				res.sendStatus(500);
            } else {
				res.sendStatus(200);
            }
        });
	});

	router.delete('/api/v1/user', (req, res) => {
		const where = { id : req.user.id };

		users_conn.delete_first(where, (err) => {
			if (err) {
				res.sendStatus(500);
            } else {
				res.sendStatus(200);
            }
        });
	});
};
