// 6A. Sorted array – remove duplicates in-place
function removeDuplicatesSorted(arr) {
  if (arr.length === 0) return 0;

  var writeIndex = 1;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }

  // writeIndex is new length
  return writeIndex;
}

// After call, unique elements are in arr[0..newLen-1]

// 6B. Unsorted array – return new array with unique elements

// No set, we’ll use plain object.

function removeDuplicatesUnsorted(arr) {
  var seen = {}; // map value -> true
  var result = [];
  var resIndex = 0;

  for (var i = 0; i < arr.length; i++) {
    var val = arr[i];
    if (seen[val] !== true) {
      seen[val] = true;
      // manual push: result[resIndex++] = val
      result[resIndex] = val;
      resIndex++;
    }
  }

  return result;
}
