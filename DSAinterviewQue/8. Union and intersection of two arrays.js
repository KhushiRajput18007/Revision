// 8A. Union (with unique elements)
function unionArrays(a, b) {
  var map = {};
  var result = [];
  var idx = 0;

  var i;
  for (i = 0; i < a.length; i++) {
    var val = a[i];
    if (map[val] !== true) {
      map[val] = true;
      result[idx] = val;
      idx++;
    }
  }

  for (i = 0; i < b.length; i++) {
    val = b[i];
    if (map[val] !== true) {
      map[val] = true;
      result[idx] = val;
      idx++;
    }
  }

  return result;
}

// 8B. Intersection
function intersectionArrays(a, b) {
  var map = {};
  var result = [];
  var idx = 0;

  var i;
  for (i = 0; i < a.length; i++) {
    map[a[i]] = true;
  }

  for (i = 0; i < b.length; i++) {
    var val = b[i];
    if (map[val] === true) {
      result[idx] = val;
      idx++;
      map[val] = false; // to avoid duplicates
    }
  }

  return result;
}
