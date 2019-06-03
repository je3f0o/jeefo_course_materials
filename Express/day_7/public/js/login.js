
"use strict";

const token = localStorage.getItem("access_token");

if (token) {
	window.location.replace(window.location.origin);
} else {
	const user_input = document.getElementById("username");
	const pass_input = document.getElementById("password");

	submit.onclick = event => {
		const username = user_input.value;
		const password = pass_input.value;

		fetch("/user/login", {
			method : "POST",
			headers : {
				"Content-type" : "Application/JSON"
        	},
			body : JSON.stringify({ username, password })
    	})
    	.then(res => res.json())
    	.then(json => {
			localStorage.setItem("access_token", json.token);
			window.location.replace(window.location.origin);
    	});
	};
}
