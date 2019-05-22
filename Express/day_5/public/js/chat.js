
// preventDefault ref: https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

const form   = document.getElementById("ss-form");
const input  = form.querySelector(".ss-q-short");
const socket = io.connect("http://localhost:8080", {
	query : {
		token : prompt("Token")
	}
});

function add_chat_message (data, is_other) {
	const chat_el    = document.createElement("div");
    const message_el = document.createElement("div");
	chat_el.classList.add("chat");
    message_el.classList.add("chat_message");

	if (is_other) {
		chat_el.classList.add("chat_other");
		const name_el = document.createElement("div");
		name_el.classList.add("chat_name");

      	name_el.textContent    = data.userdata.username;
		message_el.textContent = data.message;

		chat_el.appendChild(name_el);
    } else {
      	message_el.textContent = data;
    }

    chat_el.appendChild(message_el);
	chat_s.appendChild(chat_el);
}

form.onsubmit = function (event) {
	event.preventDefault();
	const message = input.value;
	if (message.trim() === '') { return; }

	add_chat_message(message);
	input.value = '';

	socket.emit("message", message);
};

socket.on("message", function (data) {
  	add_chat_message(data, true);
});
