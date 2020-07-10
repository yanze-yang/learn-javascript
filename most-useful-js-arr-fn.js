// ---------------------------------------------------------
// Array.prototype.every()
// arr.every(callback(element[, index[, array]])[, thisArg])

// The every() method tests whether
// 🌟all elements in the array
// 🌟pass the test implemented by the provided function.
// It returns a Boolean value.
// ---------------------------------------------------------

// Given an array, write a function to check if all elements of that array are less than 100 or not.
function fnIsLessThan100_Every(arr) {
  return arr.every((element) => element < 100);
}
fnIsLessThan100_Every([30, 60, 90]); // true
fnIsLessThan100_Every([10, 40, 89, 120]); // false

// Examples: Given an array, write a function to check if all elements of that array are of a specified data type.
function fnCheckDataType_Every(arr, dataType) {
  return arr.every((element) => {
    return typeof element === dataType;
  }, dataType);
}

fnCheckDataType_Every(['John', 'Smith', 'Jay'], 'string');
fnCheckDataType_Every(['John', 'Smith', 123], 'string');

// -----------------------------------------------------------------------------------------------
// Array.prototype.some()
// arr.some(callback(element[, index[, array]])[, thisArg])

// The some() method executes the callback function once for each element present in the array
// until it finds the one where callback returns a truthy value
// (a value that becomes true when converted to a Boolean).
// If such an element is found, some() immediately returns true.
// Otherwise, some() returns false.
// callback is invoked only for indexes of the array with assigned values.
// It is not invoked for indexes which have been deleted or which have never been assigned values.
// -----------------------------------------------------------------------------------------------

// Given an array, write a function to check if an array contains any number greater than 100.
function fnIsGreaterThan100_some(arr) {
  return arr.some((element) => element > 100);
}

fnIsGreaterThan100_some([30, 60, 90, 120]); // true
fnIsGreaterThan100_some([30, 60, 90]); // false

// Given an array, write a function to check if an array contains an even number.
function fnIsEven_some(arr) {
  return arr.some((element) => element % 2 === 0);
}

fnIsEven_some([1, 3, 5]); // false
fnIsEven_some([1, 3, 5, 6]); // true
