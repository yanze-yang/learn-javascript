// http://www.wirfs-brock.com/allen/posts/166

// What's is the result of this JS expression?
// ["1","2","3"].map(parseInt)
// [1, NaN, NaN]

/**
 * ------------------------------------
 * Why we can use `parseInt` in .map()?
 * ------------------------------------
 */

// a callback function inside .map() is just a function statment,
// we don't excute it. So it's parseInt instead of praseInt()
const myCallback = (arg1, arg2, arg3) => {
  return arg1 * arg1;
};

['1', '2', '3'].map(myCallback);

// We can also use parseInt, Math.sqrt, Numnber, etc as a callback
[1, 4, 9].map(Math.sqrt); // [1, 2, 3]
['1', '2', '3'].map(Number); // [1, 2, 3]

/**
 * ------------------
 * What is parseInt()
 * ------------------
 */

// The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).
// parseInt(string[, radix]);
// `radix` does not default to 10!

// If radix is undefined, 0, or unspecified, JavaScript assumes the following:
// 1. If the input string begins with "0x" or "0X" (a zero, followed by lowercase or uppercase X),
//    radix is assumed to be 16 and the rest of the string is parsed as a hexidecimal number.
// 2. If the input string begins with "0" (a zero), radix is assumed to be 8 (octal) or 10 (decimal). Exactly which radix is chosen is implementation-dependent.
//    ECMAScript 5 clarifies that 10 (decimal) should be used, but not all browsers support this yet. For this reason, always specify a radix when using parseInt.
// 3. If the input string begins with any other value, the radix is 10 (decimal).
parseInt('0xF', 16); // 15
parseInt('0xF'); // 15

parseInt('10', 10); // 10
parseInt('10'); // 10

/**
 * --------------------------------------------
 * What's is the result of this JS expression?
 * ['10', '10', '10', '10', '10'].map(parseInt)
 * --------------------------------------------
 */

// array.map(callback(element, index, arr), thisValue)
['10', '10', '10', '10', '10'].map(parseInt); // [10, NaN, 2, 3, 4]

// So this is what is happening:
parseInt(10, 0); // 10
parseInt('10', 1); // NaN
parseInt('10', 2); // 2
parseInt('10', 3); // 3
parseInt('10', 4); // 4

// We should use:
['10', '10', '10', '10', '10'].map(Number); // [10, 10, 10, 10, 10]
