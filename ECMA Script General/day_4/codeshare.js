
"use strict";

// Utility, (misc), functions
// --------------------------

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_undefined (value) {
	return value === undefined;
}


/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_number (value) {
	var type = typeof value;
	return type === "number";
}


/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_string (value) {
  	return typeof value === "string";
}


/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_boolean (value) {
	var type = typeof value;
	return type === 'boolean';
}


/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_function (value) {
	return typeof value === "function";
}

/**
 * Ene function ni ogson toog anhnii too mon bish esehiig helne.
 * Brute force...
 *
 * @param number {number} - hereglegchiin ogson too.
 * @return {Boolean}
 */
function is_prime (number) {
	if (number > 3) {
		if (number % 2 === 0) {
			return false;
    	}

		for (var i = 3; i < number; i += 2) {
			if (number % i === 0) {
				return false;
        	}
    	}
    }

	return true;
}


/**
 * Ene function ni ogson 2 toonii hoorond bgaa buh anhnii
 * toonuudiig printerlene.
 *
 * @param from {Number} - Range start number
 * @param to   {Number} - Range end number
 * @return {Number}
 */
function print_prime_numbers (from, to) {
	var counter = 0;

	for (var number = from; number < to; number += 1) {
		if (is_prime(number)) {
			counter += 1;
			console.log('Prime id[' + counter + ']: ' + number);
        }
    }

	return counter;
}

print_prime_numbers(10, 100);
print_prime_numbers(1, 10000);
