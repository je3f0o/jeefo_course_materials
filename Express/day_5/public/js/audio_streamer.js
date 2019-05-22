
// Fetch api     ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// MediaRecorder ref: https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
// Array.some    ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

/*
var blob = new Blob(, {type : 'application/json'});
var fileOfBlob = new File([blob], 'aFileName.json');
form.append("upload", fileOfBlob);
*/

const codecs = [
	{
        ext   : "webm",
        codec : "codecs=opus"
  	},
];
const CHUNK_INTERVAL = 3000;
const URL = "/api/v1/audio_stream";
let extension, codec, mime;

codecs.some(function (element) {
	const _mime = `audio/${element.ext}; ${element.codec}`;
	if (MediaRecorder.isTypeSupported(_mime)) {
		mime      = _mime
		codec     = element.codec;
		extension = element.ext;
		return true;
	}
});

navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
	console.log(`Supported mime and codec: '${mime}'`);
    const media_recorder = new MediaRecorder(stream, { mimeType : mime });
  	let id = 0, timeout;

  	function upload_chunks (blob) {
        const form = new FormData();
      	const old_id = id;

        form.append("id", id);
      	form.append("mime", mime);
      	form.append("codec", codec);
		form.append("extension", extension);

      	form.append("blob", blob, 'chunk.webm');

      	id += 1;

        fetch(URL, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            //headers: {
                //'Content-Type': 'application/json',
                //'Content-Type': 'application/x-www-form-urlencoded',
            //},
            //redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: form,
        }).then(() => {
            console.log(`Uploaded id: ${old_id}`);
        }).catch(error => {
          	// TODO: uuniig yaj shiideh talaar bodooroi
          	console.error("Failed :(");
        });
    }

    media_recorder.ondataavailable = event => {
		upload_chunks(event.data);
    };

  	window.record = function () {
      	media_recorder.start(CHUNK_INTERVAL);
    };

  	window.stop = function () {
      	media_recorder.stop();
    };
});
