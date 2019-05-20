
"use strict";

const register_users = require("./routers/users");
const register_audio = require("./routers/audio");

module.exports = function register_routes (router) {
	register_users(router);
  	register_audio(router);
};
