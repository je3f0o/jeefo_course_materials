const numbers = (1024 * 768) * 3;
let counter = 0;

function process (iteration, callback) {
  const start = Date.now();
  for (let i = 0; i < iteration; ++i) {
    for (let j = 0; j < numbers; ++j) {
      const c = Math.cos(j);
      const s = Math.sin(j);
      const theta = c * s;
      const x = c * j + theta;
      const y = c * j - theta;
    }
  }
  const end = Date.now();
  const delta_time = end - start;
  counter += 1;
  callback(counter, delta_time);
}

console.log("Process start");

for (let i = 0; i < 5; ++i) {
	setTimeout(function () {
		process(1000, (counter, delta_time) => {
		    console.log(counter, delta_time);
		});
	}, 0);
}

console.log("Process end");
