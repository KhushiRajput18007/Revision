// We’ll rotate to the right by k. Use reverse trick, but we already wrote our own reverse.
function reverseRange(arr, start, end) {
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateRight(arr, k) {
  var n = arr.length;
  if (n === 0) return arr;
  k = k % n;

  if (k === 0) return arr;

  // reverse whole array
  reverseRange(arr, 0, n - 1);
  // reverse first k
  reverseRange(arr, 0, k - 1);
  // reverse last n-k
  reverseRange(arr, k, n - 1);

  return arr;
}
