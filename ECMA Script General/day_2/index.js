
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-7.8
// ref: https://www.ecma-international.org/ecma-262/5.1/#sec-11

const red        = 0xff0000;
const green      = 0x00ff00;
const blue       = 0x0000ff;
const dark_gray  = 0x333333;
const light_gray = 0xaaaaaa;

// Octal number
// ES5: 012131 (really bad)
// ES6 or later: 0x(0-7)
const modern_octal = 0o112317;

// Hex number
// Syntax: 0x(0-f)
const color = 0xFFaa33;

// Binary number
// Syntax: 0b(0-1)
const some_number = 0b1010101;

// Exponential number
const MICRO_SECONDS_PER_SECOND = 1e6;
const MICRO_SECOND_IN_A_SECOND = 1e-6;






// Binary Operators
// ---------

// Arithmetic operator
// +, -, *, /, %
var x = 5 + 5;

// Assign operators
// = assign
// x = y

// Arithmetic asignment
// +=, -=, *=, /=, %=,
// some_very_long_var_name += 5;
// x = x + 5;

// More assignment operatar for later: <<=, >>=, >>>=, &=, ^=, |=

// Comparision operatos
// --------------------
// <, >, <=, >=
// x > y
// 5 > 3
// x >= y
// 5 >= 5

// Prefix Unary NOT Operator
// ! = NOT
// ! false -> true
// ! true -> false
// !! true -> true

// Equality operators
// ------------------
// ==, !=, ===, !==
// 5 == 5
// '5' == 5 -> (false true)
// null == false (false true)
// null == 0 (false true)

// 5 === 5 -> true
// 5 !== 5 -> false

// Exponentiation operator
// **
// 4 === 2 ** 2 -> true
// 8 === 2 ** 3 -> true
// 16 === 2 ** 4 -> true

// Unary
// -----------------

// Prefix Unary Plus, Negate operators
// - +
// x = -1;
// x = +1;
// - -1 === 1 -> true

// Prefix Unary Increment, Decrement operators
// ++, --
function pre_increment (&x) { // -> & means memory address
  x += 1;
  return x;
}
x = 3;
y = pre_increment(x);
// y === 4 -> true
// x === 4 -> true

// x = 5;
// x += 1;
// (x += 1) === ++x;
// inrement(5) === ++x -> true
// (++x) === (x = x + 1)

// Example:
// x = 5
// y = ++x;
// y === 6 -> true
// x === 6 -> true
// x === y -> true

// Postfix Unary Increment, Decrement operators
// ++, --
function post_increment (&x) { // -> & means memory address
  var temp = x;
  x += 1;
  return temp;
}
x = 3;
y = post_increment(x);
// x = 3
// y = x++
// y === 3 -> true
// x === 4 -> true

// Example:
// x = 5;
// y = x++;
// y === 5 -> true
// x === 6 -> true
// x !== y -> true

// Prefix Unary typeof operator
// typeof x

// Binary Logical AND Operators
// x && y

// Example:
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
// (2 === 2) && (3 === 3); -> true


// Binary Logical OR Operators
// x || y

// Example:
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false
// (2 === 2) && (3 === 3); -> true
