function moveZerosToEnd(arr) {
  var n = arr.length;
  var insertPos = 0;

  // Move non-zero elements to front
  for (var i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  // Fill remaining with zeros
  while (insertPos < n) {
    arr[insertPos] = 0;
    insertPos++;
  }

  return arr;
}
