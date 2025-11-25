// Classical in-place “gap method”. Assume both arrays sorted and we want them sorted overall but still separate.

function nextGap(gap) {
  if (gap <= 1) return 0;
  return Math.floor((gap / 2) + (gap % 2));
}

function mergeTwoSortedNoExtraSpace(a, b) {
  var n = a.length;
  var m = b.length;
  var gap = n + m;

  for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {

    var i, j;

    // Compare in first array
    for (i = 0; i + gap < n; i++) {
      if (a[i] > a[i + gap]) {
        var temp = a[i];
        a[i] = a[i + gap];
        a[i + gap] = temp;
      }
    }

    // Compare between arrays
    for (j = gap > n ? gap - n : 0, i = 0; i < n && j < m; i++, j++) {
      if (a[i] > b[j]) {
        var t = a[i];
        a[i] = b[j];
        b[j] = t;
      }
    }

    // Compare in second array
    if (j < m) {
      for (j = 0; j + gap < m; j++) {
        if (b[j] > b[j + gap]) {
          var tmp = b[j];
          b[j] = b[j + gap];
          b[j + gap] = tmp;
        }
      }
    }
  }
}
