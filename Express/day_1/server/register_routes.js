
const register_users = require("./routers/users");

module.exports = function register_routes (router) {
	register_users(router);
}
