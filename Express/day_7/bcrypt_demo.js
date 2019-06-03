
"use strict";

const async       = require("async");
const bcrypt      = require("bcrypt");
const jeefo_mysql = require("jeefo-mysql");

jeefo_mysql.config(require("./config").database);

const users_conn = jeefo_mysql("users");

const salt_round = 10;
/*
bcrypt.hash("123", salt_round).then(hash => {
    console.log(hash);
}).catch(err => {
	console.log(err);
});

CREATE TABLE `jeefo` (
	`id` INT(11) NULL DEFAULT NULL,
	`username` VARCHAR(50) NULL DEFAULT NULL,
	`password` VARCHAR(256) NULL DEFAULT NULL,
	`created_at` DATETIME NULL DEFAULT NULL,
	`updated_at` DATETIME NULL DEFAULT NULL
)
ENGINE=InnoDB;

*/

const users = [
	{
		id       : 1,
		password : "123"
    },
	{
		id       : 2,
		password : "321"
    },
	{
		id       : 3,
		password : "xyz"
    },
];

function update (data, where) {
	return new Promise((resolve, reject) => {
		users_conn.update(data, where, (err, data, fields) => {
          	if (err) {
				reject(err);
            } else {
				resolve({ data, fields });
            }
        });
    });
}

async function encrypt_passwords () {
	for (let i = 0; i < users.length; i += 1) {
		const password = await bcrypt.hash(users[i].password, salt_round);
		const data  = { password : password };
		const where = { id : users[i].id };
		const result = await update(data, where);
		console.log(result);
    }
}

encrypt_passwords();



/*
// Waterfall demo
async.waterfall([
	cb => {
		bcrypt.hash("123", salt_round, cb);
    },
	(hash, cb) => {
		console.log(hash);
		bcrypt.hash("321", salt_round, cb);
	},
	(hash, cb) => {
		console.log(hash);
		bcrypt.hash("xyz", salt_round, cb);
	},
], (err, hash) => {
	if (err) {
        console.error("SOMETHING BAD HAPPENED:", err);
    } else {
      	console.log(hash);
    }
});
*/

// async await demo
/*
function sleep (delay) {
	return new Promise((resolve) => setTimeout(resolve, delay));
}

function timeout (callback, delay) {
	return new Promise((resolve) => setTimeout(() => {
		callback();
		resolve();
    }, delay));
}

async function async_demo () {
	for (let i = 0; i < 5; i += 1) {
		//await sleep(1000);
		//console.log(`${i} second passed`);
		await timeout(() => {
			console.log(`${i} second passed`);
        }, 1000);
    }
}

async_demo();
*/
