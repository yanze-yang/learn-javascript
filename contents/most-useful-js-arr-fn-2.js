// https://alligator.io/js/finally-understand-reduce/

/**
 * ----------------------------------------------------------------------------
 * arr.reduce(callback, initialValue);
 * Reduce comes with some terminology such as `reducer` & `accumulator`.
 *
 * The accumulator is the value that we end with
 * and the reducer is what action we will perform in order to get to one value.
 * Remember that a reducer will only return one value
 * and one value only hence the name reduce.
 * ----------------------------------------------------------------------------
 */

/**
 * -----
 * Basic
 * -----
 */

(() => {
  let value = 0;
  const numbers = [5, 10, 15];

  for (let i = 0; i < numbers.length; i += 1) {
    value += numbers[i];
  }
  // value -> 30
})();

(() => {
  const initialValue = 0;
  const numbers = [5, 10, 15];

  // reducer method that takes in the accumulator and next item
  const reducer = (accumulator, item) => {
    // console.log('accumulator', accumulator, 'item', item);
    return accumulator + item;
  };

  // console:
  // accumulator 0 item 5
  // accumulator 5 item 10
  // accumulator 15 item 15

  // If no initialValue is supplied,
  // the first element in the array will be used as the initial accumulator value and skipped as currentValue.

  // accumulator 5 item 10
  // accumulator 15 item 15

  const total = numbers.reduce(reducer, initialValue); // total -> 30
})();

/**
 * ---------------------------------------------------------------------------------
 * Flattening an Array Using Reduce
 * Write a function to flatten any array no matter how deeply nested the arrays are:
 * ---------------------------------------------------------------------------------
 */
const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flattenArray(data) {
  // our initial value this time is a blank array
  const initialValue = [];

  // call reduce on our data
  return data.reduce((total, value) => {
    // if the value is an array then recursively call reduce
    // if the value is not an array then just concat our value
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
}

flattenArray(numArray); // [ 1, 2, 3, 10, 11, 12, 1, 2,  3,  4, 5, 6 ]

/**
 * ----------------------------
 * Changing an Object Structure
 * ----------------------------
 */
const pokemon = [
  { name: 'charmander', type: 'fire' },
  { name: 'squirtle', type: 'water' },
  { name: 'bulbasaur', type: 'grass' },
];

const getMapFromArray = (data) => {
  return data.reduce((acc, item) => {
    // add object key to our object i.e. charmander: { type: 'water' }
    acc[item.name] = { type: item.type };
    return acc;
  }, {});
};

getMapFromArray(pokemon);
// {
//     charmander: { type: 'fire' },
//     squirtle: { type: 'water' },
//     bulbasaur: { type: 'grass' }
// }
