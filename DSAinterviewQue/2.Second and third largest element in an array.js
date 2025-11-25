function secondAndThirdLargest(arr) {
  if (arr.length < 3) return null;

  // Let them be -Infinity initially
  var first = -Infinity;
  var second = -Infinity;
  var third = -Infinity;

  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];

    if (x > first) {
      third = second;
      second = first;
      first = x;
    } else if (x > second && x !== first) {
      third = second;
      second = x;
    } else if (x > third && x !== second && x !== first) {
      third = x;
    }
  }

  if (second === -Infinity || third === -Infinity) return null;

  return { second: second, third: third };
}
