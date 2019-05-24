// Get users_mysql_connection

const jwt    = require("jsonwebtoken");
const config = require("../../config");

const MS_IN_MINUT = 60 * 1000;
const MS_IN_HOUR  = 60 * MS_IN_MINUT;
const MS_IN_DAY   = 24 * MS_IN_HOUR;
const MS_IN_YEAR  = 365 * MS_IN_DAY;

const users_db = {
	1 : {
		id       : 1,
		username : "jeefo",
		password : "123"
    },
	2 : {
		id       : 2,
		username : "tulgaa",
		password : "321"
    },
	3 : {
		id       : 3,
		username : "jadamba",
		password : "xyz"
    },
};

function find_user (username) {
	const keys = Object.keys(users_db);

	const id = keys.find(key => {
		return users_db[key].username === username;
    });

	return users_db[id];
}

module.exports = function register_users_api (router) {
	router.post('/user/login', (req, res) => {
		const user = find_user(req.body.username);
		if (user.password !== req.body.password) {
			return res.sendStatus(401);
        }
		const json_token = { id: user.id };

		jwt.sign(json_token, config.secret, { expiresIn: MS_IN_YEAR }, (err, token) => {
			if (err) {
				return res.sendStatus(500);
            }
			res.json({ token : token });
		});
	});

	router.post('/user/signup', (req, res) => {

	});

	router.get('/api/v1/user/logout', (req, res) => {
		// remove token from database
		res.sendStatus(200);
	});

	router.get('/api/v1/user', (req, res) => {
		res.json(users_db[req.user.id]);
	});

	router.put('/api/v1/user', (req, res) => {

	});

	router.delete('/api/v1/user', (req, res) => {

	});
};
