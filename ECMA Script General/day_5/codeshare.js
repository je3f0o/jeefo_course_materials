
"use script";
			//  0,1,2,3,4
const array = [ 1,2,3,4,5,6,7,8,9 ];
const index = 4;
const value = array[index]; // -> 5

// itaration method
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
array.forEach(function (value, index) {
	console.log(index, value)
});

// Element nemeh
function get_array_index_of (array, value) {
	for (let index = 0; index < array.length; index += 1) {
		if (array[index] === value) {
			return index;
        }
    }
	return -1;
}

function array_includes (array, value) {
	return get_array_index_of(array, value) >= 0;
}

function array_for_each (array, callback) {
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];
		callback(value, index);
    }
}

function get_reversed_array (array) {
	const reversed = [];
	for (let index = 0; index < array.length; index += 1) {
		const value = array[index];
		reversed.unshift(value);
    }

  	/*
	for (let index = array.length - 1; index >= 0; index -= 1) {
		const value = array[index];
		reversed.push(value);
    }

	// jeefo's way
  	let i = array.length;
	while (i--) {
		reversed.push(array[i]);
    }
    */

	return reserved;
}

function array_last_index_of (array, value) {
	for (let last_index = array.length - 1; last_index >= 0; last_index -= 1) {
		if (array[last_index] === value) {
			return last_index;
		}
	}
	return -1;

	// jeefo's way
	/*
	let last_index = array.length;
	while (last_index--) {
		if (array[last_index] === value) {
			return last_index;
		}
    }
    return -1;
    */
}

function my_secret_place () {
  	/*
  	 * indexOf demo

	const my_test_array = [ 1, 3, 5, 9 ];
	const index1  = get_array_index_of(my_test_array, 5);
	const index12 = my_test_array.indexOf(5);

	const animals = ['cats', 'dogs', 'sheeps'];
	const index2 = get_array_index_of(animals, 'dogs');
    */

	const animals = ['cats', 'dogs', 'sheeps'];
	console.log(array_includes(animals, 'dogs')); // -> true
	console.log(array_includes(animals, 'bird')); // -> false

	array_for_each(animals, function (value, index) {
		console.log(index, value);
    });
	// output: 0, 'cats'
	// output: 1, 'dogs'
	// output: 2, 'sheeps'

	// reverse
	const reversed = get_reversed_array(animals);
	console.log(reversed); // Array['sheeps', 'dogs', 'cats']
	console.log(animals); // Array['cats', 'dogs', 'sheeps']
	console.log(reversed === animals); // -> false

	// last_index_of
	const numbers = [1, 3, 5, 7, 4, 3, 2, 1, 4];
                  // 0, 1, 2, 3, 4, 5
	const last_index_of_three = array_last_index_of(numbers, 3);
	console.log(last_index_of_three); // -> 5
	console.log(array_last_index_of(numbers, 99)); // ->
}
my_secret_place();






// Home work
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
