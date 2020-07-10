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

// ------------------------------------------------------------------------------------------------
// Array.Prototype.filter()
// array.filter(callback(element, index, arr), thisValue)

// It is used to get a new array that has only those array elements
// which pass the test implemented by the callback function.
// It accepts a callback function as an argument.
// This callback function has to return a true or false.
// 🌟Elements for which the callback function returned true are added to the newly returned array.
// ------------------------------------------------------------------------------------------------

// Filter out the students who got more than 80 percent marks.
function fnFilterStudents_filter(students) {
  return students.filter((student) => {
    return student.percentage > 80.0;
  });
}

const students = [
  { id: '001', percentage: 91.2 },
  { id: '002', percentage: 78.7 },
  { id: '003', percentage: 62.9 },
  { id: '004', percentage: 81.4 },
];

fnFilterStudents_filter(students); // [ { id: '001', percentage: 91.2 }, { id: '004', percentage: 81.4 } ];

// To remove undefined elements from an array.

// In the callback function, we are returning elements directly.
// So if the element has value,
// it will be treated as true
// and if the element is undefined, it will be automatically treated as false.
function removeUndefined(myArray) {
  return myArray.filter((element) => {
    return element;
  });
}

const arr = [1, undefined, 3, undefined, 5];

removeUndefined(arr); // [ 1, 3, 5 ]

// ------------------------------------------------------------------------------------------------------------------------
// Array.Prototype.map()
// array.map(callback(element, index, arr), thisValue)

// It is used to modify each element of the array according to the callback function.
// It calls the callback function once for each element in the array in order.
// The point to note is that callback function is called on indexes of elements who has assigned value including undefined.
// ------------------------------------------------------------------------------------------------------------------------

function fnAddDistinction_map(students_2) {
  return students_2.map((student) => {
    return {
      ...student,
      isPassed: student.percentage >= 75.0,
    };
  });
}

const students_2 = [
  { id: '001', percentage: 91.2 },
  { id: '002', percentage: 78.7 },
  { id: '003', percentage: 62.9 },
  { id: '004', percentage: 81.4 },
];

console.log(fnAddDistinction_map(students_2));
// [
//   { id: '001', percentage: 91.2, isPassed: true },
//   { id: '002', percentage: 78.7, isPassed: true },
//   { id: '003', percentage: 62.9, isPassed: false },
//   { id: '004', percentage: 81.4, isPassed: true },
// ];
