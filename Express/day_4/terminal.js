
const path      = require("path");
const http      = require('http');
const spawn     = require('child_process').spawn;
const express   = require('express');
const socket_io = require('socket.io');

const app    = express();
const server = http.createServer(app);

const socket_room = {
	sockets : [],

	add_socket : function (socket) {
		this.sockets.push(socket);
    },
	remove_socket : function (socket) {
		const index = this.sockets.indexOf(socket);
		this.sockets.splice(index, 1);
    },
	broadcast : function (event_name, data) {
		this.sockets.forEach(function (socket) {
			socket.emit(event_name, data);
        });
    }
};

const cmd = spawn('cmd');

cmd.stdout.setEncoding("utf-8");
cmd.stdout.on('data', function (result) {
	socket_room.broadcast("stdout", result);
});

cmd.stderr.setEncoding("utf-8");
cmd.stderr.on('data', function (result) {
    socket_room.broadcast("stderr", result);
});

cmd.on('exit', function (code) {
	console.log("CMD exit code:", code);
});

cmd.on("SIGINT", () => {
	console.log("Do nothing");
});

// Socket io
const io = socket_io(server);

io.on('connection', function (socket) {
	console.log('a user connected');
	socket_room.add_socket(socket);

	socket.on("disconnect", function () {
		socket_room.remove_socket(socket);
    });

  	/*
	socket.on("message", function (message) {
      	socket.emit("message", `Server mirror: ${message}`);
    });
    */
	socket.on("command", function (command) {
		cmd.stdin.write(command);
    });

	socket.on("signal", function (signal) {
		cmd.kill(signal);
    });
});

// Route
app.get('/', function(req, res) {
  	const filepath = path.join(__dirname, "public", "term.html");
	res.sendFile(filepath);
});

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Server
server.listen(8080, function () {
	console.log('listening on *:8080');
});
