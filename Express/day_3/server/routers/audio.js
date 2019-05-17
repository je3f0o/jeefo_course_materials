// Reference : https://www.npmjs.com/package/formidable

"use strict";

const path         = require("path");
const IncomingForm = require("formidable").IncomingForm;

/*
	fse.ensureDir(form.uploadDir, function (err) {
		var fields = {};

		if (err) {
			console.error(err);
			return res.status(500).json({ error : "Internal server error." });
		}
		form.parse(req);

		form.on("field", function(name, value) {
			switch (name) {
				case "parent_id" :
					if (value === "null") {
						fields.parent_id = null;
					} else if (validate_id(value)) {
						validate_folder_id(req, res, +value, fields);
					} else {
						this._error(new InvalidValue(
							"parent_id",
							"must be a folder ID number."
						));
					}
					break;
				case "last_modified_at" :
					fields.last_modified_date = new Date(+value);

					if (isNaN(fields.last_modified_date)) {
						this._error(new InvalidValue(
							"last_modified_at",
							"must be a number that represents the number of milliseconds since the Unix epoch."
						));
					}
					break;
			}
		});

		form.on("aborted", function () {
			console.log("ABORTED:", this.openedFiles[0].name);
		});

		form.on("error", function (err) {
			if (res.status_code) {
				res.status(err.status_code).json(err);
			} else {
				res.status(500).end();
			}
		});

		form.on("end", function () {
			fields.file = this.openedFiles[0];

			if (fields.is_validated) {
				if (fields.is_valid) {
					finallize(fields, res);
				} else if (! fields.is_pending) {
					invalid_request(res);
				} else {
					fields.is_end = true;
				}
			} else {
				finallize(fields, res);
			}
		});
	});
*/

module.exports = function (router) {
	router.get("/api/v1/audio/:id", (req, res) => {
      	res.send("Unimplemented");
    });

  	// Upload stream
  	router.post("/api/v1/audio_stream", (req, res) => {
      	const form = new IncomingForm({
            uploadDir      : path.join(__dirname, "..", "..", "public", "chunks"),
            keepExtensions : true
        });

		/**
		 * Door comment bolgochihson event-uud zailshgui shaardlagatai bish [Optional]
		 */

		/**
		 * Enehuu event ni File tus bur upload hiigdeed duusah burt
		 * call hiigdene.
		form.on('file', function(name, file) {
		  	// hervee husen chi end custom file handler hiij bolno
		});
		*/

		/**
		 * Enehuu event ni client-s irsen request-end field data
		 * ireh burt call hiigdene.
		form.on('field', function(name, value) {
		  	// hervee husen chi end custom field handler hiij bolno
		});
		*/

		/**
		 * Client cancel hiih uyed ene event call hiigdene.
		form.on("aborted", function () {
		    console.log("ABORTED:", this.openedFiles.forEach);
		});
		*/

		/**
		 * Enehuu event ni yamar negen error garah uyed call hiigdene.
		form.on("error", function (err) {
		    res.sendStatus(500);
		});
		*/

		/**
		 * Enehuu event ni buh multipart request-uud bugd upload hiigdeed
		 * buh file-uud hard disken deer bichigdeed duussanii daraa call hiigdene.
		form.on("end", function () {
		  	// Database record back-end process
		    res.sendStatus(200);
		});
		*/

		// Progressivable upload
      	//form.on('progress', function(bytesReceived, bytesExpected) {});

		// ---------------------------------------------------------------

		// New version formidable callback version
		// Upload process duussanii daraa ene function callback function
		// call hiigdene.
		form.parse(req, function (err, fields, files) {
		  	if (err) {
		      	return res.sendStatus(500);
		    }

		  	// End database record hiih geh met buh logic-oo bichihed
		  	// hamgiin tohiromjtoi heseg.

		    //console.log(fields);
		  	res.sendStatus(200);
		});
    });
};
