
const path      = require("path");
const http      = require('http');
const express   = require('express');
const socket_io = require('socket.io');

const app    = express();
const server = http.createServer(app);

// Socket io
const io = socket_io(server);

const auth_session = {
	abc : {
		username : "jeefo"
    },
  	cba : {
		username : "tulgaa"
    },
	xyz : {
		username : "Jadamba"
    },
};

function socket_auth_middleware (socket, next) {
  	if (socket.handshake.query) {
		const userdata = auth_session[socket.handshake.query.token];
		if (userdata) {
			socket.userdata = userdata;
			next();
        } else {
			next("Undefined user");
        }
    } else {
        next("Invalid request");
    }
}

io.use(socket_auth_middleware).on('connection', function (socket) {
	console.log('a user connected');

	//socket.on("disconnect", function () {});

  	socket.on("message", function (message) {
		socket.broadcast.emit("message", {
            userdata : socket.userdata,
            message  : message
        });
    });
});

// Route
app.get('/', function(req, res) {
  	const filepath = path.join(__dirname, "public", "chat.html");
	res.sendFile(filepath);
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Server
server.listen(8080, function () {
	console.log('listening on *:8080');
});
