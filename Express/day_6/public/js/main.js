
"use strict";

const main_el   = document.getElementById("main");
const login_el  = document.getElementById("login");
const logout_el = document.getElementById("logout");
const header_el = document.getElementById("header");

const token = localStorage.getItem("access_token");

if (token) {
	fetch("/api/v1/user", {
		headers : {
			Authorization : `Bearer ${token}`
        }
    })
	.then(res => res.json())
	.then(userdata => {
		header_el.textContent = `Welcome ${userdata.username}`;
		login_el.classList.add("hide");
		main_el.classList.remove("hide");
    });
} else {
	header_el.textContent = `Welcome`;
	logout_el.classList.add("hide");
	main_el.classList.remove("hide");
}

logout_el.onclick = event => {
	event.preventDefault();

	fetch("/api/v1/user/logout", {
		headers : {
			Authorization : `Bearer ${token}`
        }
    })
	.then(() => {
		header_el.textContent = `Welcome`;
		login_el.classList.remove("hide");
		logout_el.classList.add("hide");

		localStorage.removeItem("access_token");
    });
};
