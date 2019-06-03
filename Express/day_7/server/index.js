
// ref : https://www.npmjs.com/package/cors
// ref : https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

const path            = require("path");
const cors            = require("cors");
const express         = require("express");
const jeefo_mysql     = require("jeefo-mysql");
const compression     = require("compression");
const body_parser     = require("body-parser");
const response_time   = require("response-time");
const config          = require("../config");
const auth_middleware = require("./middlewares/auth");

const app = express();

// Config
app.disable("x-powered-by");
jeefo_mysql.config(config.database);

// Bunch of middlewares
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended : true }));
app.use(compression({ threshold : 0 }));
app.use(response_time());
app.use(cors());
app.use("/api", auth_middleware(config.secret), require("./middlewares/auth_verify"));

if (process.env.NODE_ENV !== "production") {
	const morgan = require("morgan");
	app.use(morgan("short"));
}

// Set up routes
const router = express.Router();
const register_routes = require("./register_routes");
register_routes(router);
// require("./register_routes")(router)
app.use(express.static(config.public_dir));

app.use(router);
app.get('/', (req, res) => {
	const absolute_path = path.join(config.public_dir, "index.html");
	res.sendFile(absolute_path);
});
app.get('*', (req, res) => res.status(404).end());

// Start listen server
app.listen(config.port, () => {
	console.log(`Example app listening on port: http://localhost:${config.port}!`);
});
