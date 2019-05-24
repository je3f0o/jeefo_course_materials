
"use strict";

const path = require("path");

const root_dir = process.cwd();

module.exports = {
    port       : process.env.PORT   || 3000,
	secret     : process.env.SECRET || "My awesome secret key",
    root_dir   : root_dir,
    public_dir : path.join(root_dir, "public")
};
