
"use strict";

// Operators
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// falsy: false, null, undefined, 0, '', NaN
// truty: everything else

// NaN === NaN // -> false
// isNaN(NaN); // -> true
// isNaN(value);

// Variable statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.2
var my_var1 = 1,
    my_var2 = 2,
    my_var3;

// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.5
if (my_var3) {
	// code...
} else if (my_var1 - 1) {
    // code...
} else if (null) {
	// code...
} else {
  	// code...
}

//if (/* expression */);


// Iteration statements
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.6

// do while statement
// https://www.ecma-international.org/ecma-262/5.1/#sec-12.6.1
var i = 0;
do {
  i += 1;
} while (i < 5);

// while statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.6.2
var is_shutdown = false;
while (! is_shutdown)
	// code
	is_shutdown = true;
}

// for statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.6.3
/*
var _i = 0;
while (_i < 10) {
	console.log(_i);
    // code ...
	_i += 1;
}
*/
for (var _i = 0; _i < 10; _i += 1) {

}

// Continue
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.7
for (var x = 0; x < 10; x += 1) {
	if (x % 2 === 0) { continue; }
	console.log(x);
}
// 1,3,5,7,9

// Break statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.8
/*
var is_shutdown = false;
while (true) {
	// code ...
	if (is_shutdown) {
		break;
    }
	// code ...
}
*/
for (x = 0; x < 10; x += 1) {
	if (x === 5) { break; }
	console.log(x);
}
// 0,1,2,3,4

// return statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.9
function square (x) {
	return x * x;
}

var y = square(5);
console.log(y); // -> 25
console.log( square( square(3) ) ); // 81


// Switch statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.11
var expression = 5;
switch (expression) {
    case false:
    case null:
    case undefined:
    case '':
    case 0:
    	console.log("falsy expression");
    	break;
    default:
    	if (isNaN(expression)) {
			console.log("falsy expression");
        } else {
			console.log("truty expression");
        }
    	break;
}

// Labelled statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.12
LOOP:
for (var x = 0; x < width; x += 1) {
	for (var y = 0; y < height; y += 1) {
		switch (x) {
			case 100:
            	break LOOP;
        }
    }
}


// Throw statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.13
function square (x) {
	if (typeof x !== "number") {
		throw new TypeError("square function called with non number parameter");
    }
	return x * x;
}
square("5");


// Try statement
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-12.14
try {
	var y = square(user_input);
	// code...
} catch (error) {
	// error handle process...
} finally {
	// always works
}


// Operators
// ---------
var x = void /* any expression */;
if (x === undefined) {

}

// Conditional operator
// syntax: conditional_expression ? truty_expression : falsy_expression
var x = 5, y;
if (x > 5) {
  y = true;
} else {
  y = false;
}
function truty () { return true;  }
function falsy () { return false; }

y = (x > 5) ? truty() : falsy(); // -> false


// Comma operator, Sequential expression
x = 2 + 2, 3 + 3, 5 + 4;










/**
 * Ene function ni ogson toog anhnii too mon bish esehiig helne.
 *
 * @param x {number} - hereglegchiin ogson too.
 * @return {Boolean}
 */
function is_prime (x) {

}

// Utility, (misc), functions
// --------------------------

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_undefined (value) {

}

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_number (value) {

}

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_string (value) {

}

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_boolean (value) {

}

/**
 * Ene function ni ogson variable type-g shalgana.
 *
 * @param value {any} - hereglegchiin ogson variable.
 * @return {Boolean}
 */
function is_function (value) {

}

/**
 * Ene function ni ogson 2 toonii hoorond bgaa buh anhnii
 * toonuudiig printerlene.
 *
 * @param from {number} - Range start number
 * @param to   {number} - Range end number
 * @return void
 */
function print_prime_numbers (from, to) {

}
