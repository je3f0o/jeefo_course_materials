
const socket = io();
const KEY_ENTER = 13;
const KEY_C     = 67;

input.onkeyup = function (event) {
	switch (event.keyCode) {
		case KEY_ENTER:
			const command = input.value;
			input.value = '';

			socket.emit("command", command);
			break;
		case KEY_C:
			if (event.ctrlKey) {
				socket.emit("signal", "SIGINT");
			}
			break;
	}
};

socket.on("stdout", function (result) {
  	const pre = document.createElement("pre");
  	pre.textContent = result;
	terminal.appendChild(pre);
});

socket.on("stderr", function (result) {
  	const pre = document.createElement("pre");
	pre.classList.add("error");
  	pre.textContent = result;
	terminal.appendChild(pre);
});
