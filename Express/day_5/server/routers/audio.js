// Reference : https://www.npmjs.com/package/formidable

"use strict";

const fs           = require("fs");
const path         = require("path");
const IncomingForm = require("formidable").IncomingForm;

const MAX_WAIT = 60e3;
let audio_stream, timeout;

module.exports = function (router) {
	router.get("/api/v1/audio/:id", (req, res) => {
      	res.send("Unimplemented");
    });

  	// Upload stream
  	router.post("/api/v1/audio_stream", (req, res) => {
		if (! audio_stream) {
			const upload_path = path.join(__dirname, "..", "..", "public", "chunks", "audio.webm");
			audio_stream = fs.createWriteStream(upload_path, {flags: 'a'});
		}

      	const form = new IncomingForm();

		form.onPart = function (streamer) {
			if (! streamer.filename) {
				// let formidable handle all non-file parts
    			form.handlePart(streamer);
			} else {
				streamer.on("data", function (buffer) {
					audio_stream.write(buffer);
				});

				streamer.on("end", function () {
					clearTimeout(timeout);
					console.log("chunks wrote");
					timeout = setTimeout(function () {
						audio_stream.end();
                      	audio_stream = null;
						console.log("Done waiting...");
					}, MAX_WAIT);
				});
			}
		};

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
