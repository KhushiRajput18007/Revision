function findMinMax(arr) {
  if (arr.length === 0) {
    return null; // or throw error
  }

  var min = arr[0];
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min: min, max: max };
}

// Example:
var a = [3, 1, 8, -2, 5];
var ans = findMinMax(a);
// ans.min = -2, ans.max = 8
