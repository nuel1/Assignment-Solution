/**
 *
 * @param {Object} array array containing the intergers.
 * @param {*} n Number. n, the position of each value/item in array.
 * @param {*} Target Number. Target, target of the function.
 * @returns
 */
//Initialise a recursive function, and return a result based on the
// following conditions:
// 1. Return {result} as null if {n} is equivalent to the length of {array}
// 2. Return {result} as an array of numbers, containing two values that sums to {target}
// 3. Else call the function with {n} incremented by 1 and run again.

function findTarget(array, n, target) {
  let result = null;
  if (n === array.length) return (result = null), result;
  return (
    (result = array.filter(
      (int, index) => index !== n && array[n] + int === target
    )),
    result.length ? [array[n], ...result] : findTarget(array, (n += 1), target)
  );
}
