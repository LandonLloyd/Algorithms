//Instructions from FreeCodeCamp:
//Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([1, [2], [3, [[4]]]], Infinity);
function steamrollArray(arr, d = 5) {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? steamrollArray(val, d - 1) : val),
        []
      )
    : arr.slice();
}

steamrollArray([1, [2], [3, [[4]]]], Infinity);
