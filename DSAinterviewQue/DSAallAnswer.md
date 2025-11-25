# 1. Find maximum and minimum in an array

```javascript
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
```

# 2. Second and third largest element in an array

```javascript
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
```

# 3. Reverse an array (in-place, two pointers)

```javascript
function reverseArray(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    var temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}
```

# 4. Rotate an array by k positions (right rotate)

We’ll rotate to the right by k. Use reverse trick, but we already wrote our own reverse.

```javascript
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
```

# 5. Move all zeros to the end of an array

Keep order of non-zero elements.

```javascript
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
```

# 6. Remove duplicates (sorted & unsorted)

## 6A. Sorted array – remove duplicates in-place

```javascript
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
```

## 6B. Unsorted array – return new array with unique elements

No set, we’ll use plain object.

```javascript
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
```

# 7. Merge two sorted arrays without extra space

Classical in-place “gap method”. Assume both arrays sorted and we want them sorted overall but still separate.

```javascript
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
```

# 8. Union and intersection of two arrays

## 8A. Union (with unique elements)

```javascript
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
```

## 8B. Intersection

```javascript
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
```

# 9. Majority element (Boyer–Moore)

Element that appears more than n/2 times.

```javascript
function majorityElement(arr) {
  var candidate = null;
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else if (arr[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }

  // Verify candidate
  count = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) count++;
  }

  if (count > arr.length / 2) return candidate;
  return null;
}
```

# 10. Check if subarray with sum 0 exists

Use prefix sum + hash map.

```javascript
function subarrayWithZeroSumExists(arr) {
  var sum = 0;
  var map = {}; // sum -> true

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0) return true;
    if (map[sum] === true) return true;

    map[sum] = true;
  }
  return false;
}
```

# 11. Maximum subarray sum (Kadane’s Algorithm)

```javascript
function maxSubarraySum(arr) {
  if (arr.length === 0) return 0;

  var maxEndingHere = arr[0];
  var maxSoFar = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (maxEndingHere + arr[i] < arr[i]) {
      maxEndingHere = arr[i];
    } else {
      maxEndingHere = maxEndingHere + arr[i];
    }

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}
```

# 12. Subarray with given sum (positive numbers)

Sliding window (for non-negative integers).

```javascript
function subarrayWithGivenSum(arr, target) {
  var start = 0;
  var currentSum = 0;

  for (var end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Shrink window if sum > target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      // return indices (start, end)
      return { start: start, end: end };
    }
  }

  return null;
}
```

# 13. Maximum product subarray

Track max and min (because negative × negative = positive).

```javascript
function maxProductSubarray(arr) {
  if (arr.length === 0) return 0;

  var maxProd = arr[0];
  var minProd = arr[0];
  var result = arr[0];

  for (var i = 1; i < arr.length; i++) {
    var x = arr[i];

    // when x is negative, swap
    if (x < 0) {
      var temp = maxProd;
      maxProd = minProd;
      minProd = temp;
    }

    // maxProd = max(x, maxProd * x)
    if (maxProd * x > x) {
      maxProd = maxProd * x;
    } else {
      maxProd = x;
    }

    // minProd = min(x, minProd * x)
    if (minProd * x < x) {
      minProd = minProd * x;
    } else {
      minProd = x;
    }

    if (maxProd > result) {
      result = maxProd;
    }
  }

  return result;
}
```

# 14. Count of subarrays with sum = k (can have positives/negatives)

Prefix sum + frequency map.

```javascript
function countSubarraysWithSumK(arr, k) {
  var count = 0;
  var sum = 0;
  var freq = {}; // prefix sum -> frequency

  freq[0] = 1; // empty prefix

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];

    var needed = sum - k;
    if (freq[needed] !== undefined) {
      count += freq[needed];
    }

    if (freq[sum] === undefined) {
      freq[sum] = 1;
    } else {
      freq[sum]++;
    }
  }

  return count;
}
```

# 15. Two Sum

Return indices of pair whose sum = target.

```javascript
function twoSum(arr, target) {
  var map = {}; // value -> index

  for (var i = 0; i < arr.length; i++) {
    var x = arr[i];
    var needed = target - x;

    if (map[needed] !== undefined) {
      return { i: map[needed], j: i };
    }

    map[x] = i;
  }

  return null;
}
```

# 16. Three Sum (sum = 0)

We can’t use sort, but we can write our own simple sort (like bubble sort) and then use 2-pointer.

### Simple bubble sort

```javascript
function bubbleSort(arr) {
  var n = arr.length;
  var i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
```

### 3-Sum using 2-pointer

```javascript
function threeSumZero(nums) {
  var result = [];
  var resIndex = 0;

  // sort the array first
  bubbleSort(nums);

  var n = nums.length;

  for (var i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates

    var left = i + 1;
    var right = n - 1;

    while (left < right) {
      var sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        var triplet = [nums[i], nums[left], nums[right]];
        result[resIndex] = triplet;
        resIndex++;

        left++;
        right--;

        // skip duplicates
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}
```

# 17. Longest substring with at most K distinct numbers

Assume input is an array of digits or numbers. Sliding window + frequency.

```javascript
function longestSubarrayAtMostKDistinct(arr, K) {
  var freq = {}; // value -> count
  var distinct = 0;
  var left = 0;
  var maxLen = 0;

  for (var right = 0; right < arr.length; right++) {
    var val = arr[right];

    if (freq[val] === undefined || freq[val] === 0) {
      freq[val] = 1;
      distinct++;
    } else {
      freq[val]++;
    }

    while (distinct > K) {
      var leftVal = arr[left];
      freq[leftVal]--;
      if (freq[leftVal] === 0) {
        distinct--;
      }
      left++;
    }

    var windowLen = right - left + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
    }
  }

  return maxLen;
}
```

# 18. Search in rotated sorted array

Binary search with pivot logic.

```javascript
function searchInRotatedSorted(arr, target) {
  var left = 0;
  var right = arr.length - 1;

  while (left <= right) {
    var mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;

    // Left part is sorted
    if (arr[left] <= arr[mid]) {
      if (target >= arr[left] && target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // Right part is sorted
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}
```

# 19. Find missing number in an array

Assume array has numbers from 1 to n with one missing; length = n-1.

```javascript
function findMissingNumber(arr, n) {
  // n is the expected max number (1..n)
  var total = n * (n + 1) / 2;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return total - sum;
}
```

# 20. Union of two sorted arrays (without duplicates)

Two-pointer technique.

```javascript
function unionOfTwoSorted(a, b) {
  var i = 0, j = 0;
  var result = [];
  var idx = 0;
  var lastAdded; // to avoid duplicates

  while (i < a.length && j < b.length) {
    var x = a[i];
    var y = b[j];
    var toAdd;

    if (x < y) {
      toAdd = x;
      i++;
    } else if (y < x) {
      toAdd = y;
      j++;
    } else {
      toAdd = x; // same
      i++;
      j++;
    }

    if (idx === 0 || lastAdded !== toAdd) {
      result[idx] = toAdd;
      lastAdded = toAdd;
      idx++;
    }
  }

  // remaining in a
  while (i < a.length) {
    var valA = a[i];
    if (idx === 0 || lastAdded !== valA) {
      result[idx] = valA;
      lastAdded = valA;
      idx++;
    }
    i++;
  }

  // remaining in b
  while (j < b.length) {
    var valB = b[j];
    if (idx === 0 || lastAdded !== valB) {
      result[idx] = valB;
      lastAdded = valB;
      idx++;
    }
    j++;
  }

  return result;
}
```

# 21. Kth largest element in an array (simple selection method)

Modify the array, O(n·k), but easy to understand.

```javascript
function kthLargest(arr, k) {
  var n = arr.length;

  // selection-style approach
  for (var i = 0; i < k; i++) {
    var maxIndex = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    // swap arr[i] and arr[maxIndex]
    var temp = arr[i];
    arr[i] = arr[maxIndex];
    arr[maxIndex] = temp;
  }

  // after this, k-th largest will be at index k-1
  return arr[k - 1];
}
```

# 22. Kth smallest element in an array (same idea)

```javascript
function kthSmallest(arr, k) {
  var n = arr.length;

  for (var i = 0; i < k; i++) {
    var minIndex = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr[k - 1];
}
```

# 23. Spiral order traversal of matrix

Assume matrix mat with rows x cols. Return result array.

```javascript
function spiralOrder(mat) {
  var rows = mat.length;
  if (rows === 0) return [];
  var cols = mat[0].length;

  var top = 0, bottom = rows - 1;
  var left = 0, right = cols - 1;
  var res = [];
  var idx = 0;

  while (top <= bottom && left <= right) {
    // left → right
    for (var j = left; j <= right; j++) {
      res[idx] = mat[top][j];
      idx++;
    }
    top++;

    // top → bottom
    for (var i = top; i <= bottom; i++) {
      res[idx] = mat[i][right];
      idx++;
    }
    right--;

    if (top <= bottom) {
      // right → left
      for (j = right; j >= left; j--) {
        res[idx] = mat[bottom][j];
        idx++;
      }
      bottom--;
    }

    if (left <= right) {
      // bottom → top
      for (i = bottom; i >= top; i--) {
        res[idx] = mat[i][left];
        idx++;
      }
      left++;
    }
  }

  return res;
}
```

# 24. Rotate a matrix by 90 degrees clockwise (NxN)

Transpose

Reverse each row (manual two-pointer)

```javascript
function rotateMatrix90(mat) {
  var n = mat.length;
  if (n === 0) return mat;

  // transpose
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var temp = mat[i][j];
      mat[i][j] = mat[j][i];
      mat[j][i] = temp;
    }
  }

  // reverse each row
  for (i = 0; i < n; i++) {
    var left = 0;
    var right = n - 1;
    while (left < right) {
      var t = mat[i][left];
      mat[i][left] = mat[i][right];
      mat[i][right] = t;
      left++;
      right--;
    }
  }

  return mat;
}
```

# 25. Check if a number is prime

```javascript
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  var i = 3;
  while (i * i <= num) {
    if (num % i === 0) return false;
    i += 2;
  }
  return true;
}
```

# 26. Check if a number is palindrome

Check digits from both ends.

```javascript
function isNumberPalindrome(num) {
  if (num < 0) return false;

  var original = num;
  var reversed = 0;

  while (num > 0) {
    var digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return original === reversed;
}
```

# 27. Check if an array is sorted (non-decreasing)

```javascript
function isArraySorted(arr) {
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
}
```

# 28. Find index of target in an array (linear search)

```javascript
function indexOfTarget(arr, target) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

# 29. Frequency of each element (using object)

```javascript
function frequencyOfElements(arr) {
  var freq = {};
  for (var i = 0; i < arr.length; i++) {
    var v = arr[i];
    if (freq[v] === undefined) {
      freq[v] = 1;
    } else {
      freq[v]++;
    }
  }
  return freq; // key: element, value: count
}
```

# 30. Reverse a string (two-pointer, no split/reverse/join)

```javascript
function reverseString(str) {
  var n = str.length;
  var chars = new Array(n);
  var i;

  // copy string into char array
  for (i = 0; i < n; i++) {
    chars[i] = str.charAt(i);
  }

  // reverse char array
  var left = 0, right = n - 1;
  while (left < right) {
    var temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  // build new string
  var result = "";
  for (i = 0; i < n; i++) {
    result = result + chars[i];
  }
# 31. Find missing number in 1 to n (same idea as 19)

Array of size n-1 with numbers from 1..n missing one.

```javascript
function findMissing1ToN(arr, n) {
  var total = n * (n + 1) / 2;
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return total - sum;
}
```

# 32. Check if two strings are anagrams (no sort)

Count frequencies of characters.

```javascript
function areAnagrams(s1, s2) {
  if (s1.length !== s2.length) return false;

  var freq = {};
  var i;

  for (i = 0; i < s1.length; i++) {
    var ch1 = s1.charAt(i);
    if (freq[ch1] === undefined) freq[ch1] = 1;
    else freq[ch1]++;
  }

  for (i = 0; i < s2.length; i++) {
    var ch2 = s2.charAt(i);
    if (freq[ch2] === undefined) return false;
    freq[ch2]--;
    if (freq[ch2] < 0) return false;
  }

  return true;
}
```

# 33. Implement stack using array (no built-in push/pop)

```javascript
function Stack(capacity) {
  this.arr = new Array(capacity);
  this.top = -1;
  this.capacity = capacity;
}

Stack.prototype.isEmpty = function () {
  return this.top === -1;
};

Stack.prototype.isFull = function () {
  return this.top === this.capacity - 1;
};

Stack.prototype.push = function (value) {
  if (this.isFull()) {
    // overflow
    return false;
  }
  this.top++;
  this.arr[this.top] = value;
  return true;
};

Stack.prototype.pop = function () {
  if (this.isEmpty()) {
    // underflow
    return null;
  }
  var val = this.arr[this.top];
  this.top--;
  return val;
};

Stack.prototype.peek = function () {
  if (this.isEmpty()) return null;
  return this.arr[this.top];
};
```

# 34. Implement queue using array (simple non-circular)

```javascript
function Queue(capacity) {
  this.arr = new Array(capacity);
  this.front = 0;
  this.rear = -1;
  this.size = 0;
  this.capacity = capacity;
}

Queue.prototype.isEmpty = function () {
  return this.size === 0;
};

Queue.prototype.isFull = function () {
  return this.size === this.capacity;
};

Queue.prototype.enqueue = function (value) {
  if (this.isFull()) return false;
  this.rear++;
  this.arr[this.rear] = value;
  this.size++;
  return true;
};

Queue.prototype.dequeue = function () {
  if (this.isEmpty()) return null;
  var val = this.arr[this.front];
  this.front++;
  this.size--;
  return val;
};

Queue.prototype.peek = function () {
  if (this.isEmpty()) return null;
  return this.arr[this.front];
};
```

# 35. Print Fibonacci series up to n terms

Assume we just console.log(line) each row.

## 40. Right angle triangle

```
*
* *
* * *
* * * *
```

```javascript
function rightAngleTriangle(n) {
  for (var i = 1; i <= n; i++) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line = line + "* ";
    }
    console.log(line);
  }
}
```

## 41. Inverted right angle triangle

```javascript
function invertedRightAngleTriangle(n) {
  for (var i = n; i >= 1; i--) {
    var line = "";
    for (var j = 1; j <= i; j++) {
      line = line + "* ";
    }
    console.log(line);
  }
}
```

## 42. Full Pyramid

```javascript
function fullPyramid(n) {
  for (var i = 1; i <= n; i++) {
    var line = "";

    // spaces
    for (var s = 1; s <= n - i; s++) {
      line = line + " ";
    }

    // stars
    var stars = 2 * i - 1;
    for (var j = 1; j <= stars; j++) {
      line = line + "*";
    }

    console.log(line);
  }
}
```

## 43. Reverse Full Pyramid

```javascript
function reverseFullPyramid(n) {
  for (var i = n; i >= 1; i--) {
    var line = "";

    // spaces
    for (var s = 1; s <= n - i; s++) {
      line = line + " ";
    }

    // stars
    var stars = 2 * i - 1;
    for (var j = 1; j <= stars; j++) {
      line = line + "*";
    }

    console.log(line);
  }
}
```

## 44. Binary Triangle

```javascript
function binaryTriangle(n) {
  for (var i = 1; i <= n; i++) {
    var line = "";
    var start = i % 2; // row1->1,row2->0,row3->1,...

    var val = start;
    for (var j = 1; j <= i; j++) {
      line = line + val + " ";
      val = 1 - val; // flip
    }
    console.log(line);
  }
}
```

## 45. Hollow Square pattern n x n

```javascript
function hollowSquare(n) {
  for (var i = 1; i <= n; i++) {
    var line = "";
    for (var j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        line = line + "* ";
      } else {
        line = line + "  ";
      }
    }
    console.log(line);
  }
}
```

## 46. Hollow Pyramid

```javascript
function hollowPyramid(n) {
  for (var i = 1; i <= n; i++) {
    var line = "";

    // spaces
    for (var s = 1; s <= n - i; s++) {
      line = line + " ";
    }

    if (i === 1) {
      line = line + "*";
    } else if (i === n) {
      // bottom full
      var stars = 2 * n - 1;
      for (var j = 1; j <= stars; j++) {
        line = line + "*";
      }
    } else {
      line = line + "*";

      var insideSpaces = 2 * i - 3;
      for (var k = 1; k <= insideSpaces; k++) {
        line = line + " ";
      }
      line = line + "*";
    }

    console.log(line);
  }
}
```

## 47. Diamond pattern (solid)

```javascript
function diamondPattern(n) {
  // upper pyramid
  for (var i = 1; i <= n; i++) {
    var line = "";
    for (var s = 1; s <= n - i; s++) {
      line = line + " ";
    }
    var stars = 2 * i - 1;
    for (var j = 1; j <= stars; j++) {
      line = line + "*";
    }
    console.log(line);
  }

  // lower inverted pyramid
  for (i = n - 1; i >= 1; i--) {
    line = "";
    for (s = 1; s <= n - i; s++) {
      line = line + " ";
    }
    stars = 2 * i - 1;
    for (j = 1; j <= stars; j++) {
      line = line + "*";
    }
    console.log(line);
  }
}
```

## 48. Hollow Diamond

```javascript
function hollowDiamond(n) {
  // upper part
  for (var i = 1; i <= n; i++) {
    var line = "";
    for (var s = 1; s <= n - i; s++) {
      line = line + " ";
    }

    if (i === 1) {
      line = line + "*";
    } else {
      line = line + "*";
      var insideSpaces = 2 * i - 3;
      for (var k = 1; k <= insideSpaces; k++) {
        line = line + " ";
      }
      line = line + "*";
    }
    console.log(line);
  }

  // lower part
  for (i = n - 1; i >= 1; i--) {
    line = "";
    for (s = 1; s <= n - i; s++) {
      line = line + " ";
    }

    if (i === 1) {
      line = line + "*";
    } else {
      line = line + "*";
      insideSpaces = 2 * i - 3;
      for (k = 1; k <= insideSpaces; k++) {
        line = line + " ";
      }
      line = line + "*";
    }

    console.log(line);
  }
}
```

## 49. Pascal’s Triangle

```javascript
function pascalTriangle(n) {
  for (var line = 0; line < n; line++) {
    var val = 1;
    var rowStr = "";

    for (var i = 0; i <= line; i++) {
      rowStr = rowStr + val + " ";
      // next value = val * (line - i) / (i + 1)
      val = val * (line - i) / (i + 1);
    }

    console.log(rowStr);
  }
}
```

## 50. Implement Stack using Linked List

```javascript
function Node(val) {
  this.value = val;
  this.next = null;
}

function StackLL() {
  this.top = null;
}

StackLL.prototype.isEmpty = function () {
  return this.top === null;
};

StackLL.prototype.push = function (val) {
  var newNode = new Node(val);
  newNode.next = this.top;
  this.top = newNode;
};

StackLL.prototype.pop = function () {
  if (this.isEmpty()) return null;
  var val = this.top.value;
  this.top = this.top.next;
  return val;
};

StackLL.prototype.peek = function () {
  if (this.isEmpty()) return null;
  return this.top.value;
};
```

## 51. Implement Queue using Linked List

```javascript
function Node(val) {
  this.value = val;
  this.next = null;
}

function QueueLL() {
  this.front = null;
  this.rear = null;
}

QueueLL.prototype.isEmpty = function () {
  return this.front === null;
};

QueueLL.prototype.enqueue = function (val) {
  var newNode = new Node(val);

  if (this.rear === null) {
    this.front = newNode;
    this.rear = newNode;
    return;
  }
  this.rear.next = newNode;
  this.rear = newNode;
};

QueueLL.prototype.dequeue = function () {
  if (this.isEmpty()) return null;

  var val = this.front.value;
  this.front = this.front.next;

  if (this.front === null) this.rear = null;
  return val;
};

QueueLL.prototype.peek = function () {
  if (this.isEmpty()) return null;
  return this.front.value;
};
```

## 52. Circular Queue using Array (No built-ins)

```javascript
function CircularQueue(capacity) {
  this.arr = new Array(capacity);
  this.front = 0;
  this.rear = -1;
  this.size = 0;
  this.capacity = capacity;
}

CircularQueue.prototype.isFull = function () {
  return this.size === this.capacity;
};

CircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

CircularQueue.prototype.enqueue = function (val) {
  if (this.isFull()) return false;
  this.rear = (this.rear + 1) % this.capacity;
  this.arr[this.rear] = val;
  this.size++;
  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return null;

  var val = this.arr[this.front];
  this.front = (this.front + 1) % this.capacity;
  this.size--;
  return val;
};

CircularQueue.prototype.peek = function () {
  if (this.isEmpty()) return null;
  return this.arr[this.front];
};
```

## 53. Circular Queue using Linked List

```javascript
function Node(val) {
  this.value = val;
  this.next = null;
}

function CircularQueueLL() {
  this.front = null;
  this.rear = null;
}

CircularQueueLL.prototype.isEmpty = function () {
  return this.front === null;
};

CircularQueueLL.prototype.enqueue = function (val) {
  var newNode = new Node(val);

  if (this.isEmpty()) {
    this.front = newNode;
    this.rear = newNode;
    newNode.next = newNode;
    return;
  }

  this.rear.next = newNode;
  newNode.next = this.front;
  this.rear = newNode;
};

CircularQueueLL.prototype.dequeue = function () {
  if (this.isEmpty()) return null;

  var val = this.front.value;

  if (this.front === this.rear) {
    this.front = null;
    this.rear = null;
  } else {
    this.front = this.front.next;
    this.rear.next = this.front;
  }
  return val;
};
```

## 54. Deque Using Array (No built-ins)

```javascript
function Deque(capacity) {
  this.arr = new Array(capacity);
  this.front = -1;
  this.rear = 0;
  this.size = 0;
  this.capacity = capacity;
}

Deque.prototype.isFull = function () {
  return this.size === this.capacity;
};

Deque.prototype.isEmpty = function () {
  return this.size === 0;
};

Deque.prototype.insertFront = function (val) {
  if (this.isFull()) return false;

  if (this.front === -1) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.front = (this.front - 1 + this.capacity) % this.capacity;
  }
  this.arr[this.front] = val;
  this.size++;
};

Deque.prototype.insertRear = function (val) {
  if (this.isFull()) return false;

  if (this.front === -1) {
    this.front = 0;
    this.rear = 0;
  } else {
    this.rear = (this.rear + 1) % this.capacity;
  }
  this.arr[this.rear] = val;
  this.size++;
};

Deque.prototype.deleteFront = function () {
  if (this.isEmpty()) return null;
  var val = this.arr[this.front];

  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.front = (this.front + 1) % this.capacity;
  }
  this.size--;
  return val;
};

Deque.prototype.deleteRear = function () {
  if (this.isEmpty()) return null;
  var val = this.arr[this.rear];

  if (this.front === this.rear) {
    this.front = -1;
    this.rear = -1;
  } else {
    this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  }
  this.size--;
  return val;
};
```

## 55. Deque Using Linked List

```javascript
function Node(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
}

function DequeLL() {
  this.front = null;
  this.rear = null;
}

DequeLL.prototype.insertFront = function (val) {
  var newNode = new Node(val);

  if (!this.front) {
    this.front = this.rear = newNode;
    return;
  }

  newNode.next = this.front;
  this.front.prev = newNode;
  this.front = newNode;
};

DequeLL.prototype.insertRear = function (val) {
  var newNode = new Node(val);

  if (!this.rear) {
    this.front = this.rear = newNode;
    return;
  }

  this.rear.next = newNode;
  newNode.prev = this.rear;
  this.rear = newNode;
};

DequeLL.prototype.deleteFront = function () {
  if (!this.front) return null;

  var val = this.front.value;
  this.front = this.front.next;

  if (!this.front) this.rear = null;
  else this.front.prev = null;

  return val;
};

DequeLL.prototype.deleteRear = function () {
  if (!this.rear) return null;

  var val = this.rear.value;
  this.rear = this.rear.prev;

  if (!this.rear) this.front = null;
  else this.rear.next = null;

  return val;
};
```

## 56. Implement Singly Linked List

```javascript
function Node(val) {
  this.value = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
}

SinglyLinkedList.prototype.insertAtEnd = function (val) {
  var newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
    return;
  }

  var temp = this.head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
};

SinglyLinkedList.prototype.insertAtStart = function (val) {
  var newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
};

SinglyLinkedList.prototype.deleteValue = function (val) {
  if (!this.head) return;

  if (this.head.value === val) {
    this.head = this.head.next;
    return;
  }

  var temp = this.head;
  while (temp.next && temp.next.value !== val) {
    temp = temp.next;
  }

  if (temp.next) temp.next = temp.next.next;
};
```

## 57. Implement Doubly Linked List

```javascript
function Node(val) {
  this.value = val;
  this.prev = null;
  this.next = null;
}

function DoublyLinkedList() {
  this.head = null;
}

DoublyLinkedList.prototype.insertAtEnd = function (val) {
  var newNode = new Node(val);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  var temp = this.head;
  while (temp.next) temp = temp.next;
  temp.next = newNode;
  newNode.prev = temp;
};
```

## 58. Reverse a Singly Linked List

```javascript
function reverseSLL(head) {
  var prev = null;
  var curr = head;

  while (curr !== null) {
    var next = curr.next;
    curr.next = prev;

    prev = curr;
    curr = next;
  }
  return prev;
}
```

## 59. Reverse a Doubly Linked List

```javascript
function reverseDLL(head) {
  var curr = head;
  var temp = null;

  while (curr !== null) {
    temp = curr.prev;
    curr.prev = curr.next;
    curr.next = temp;

    curr = curr.prev;
  }

  if (temp !== null) {
    head = temp.prev;
  }
  return head;
}
```

## 60. Merge Sort on Linked List

```javascript
function getMiddle(head) {
  var slow = head;
  var fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function merge(a, b) {
  if (!a) return b;
  if (!b) return a;

  var result;

  if (a.value < b.value) {
    result = a;
    result.next = merge(a.next, b);
  } else {
    result = b;
    result.next = merge(a, b.next);
  }
  return result;
}

function mergeSortLL(head) {
  if (!head || !head.next) return head;

  var mid = getMiddle(head);
  var nextHalf = mid.next;
  mid.next = null;

  var left = mergeSortLL(head);
  var right = mergeSortLL(nextHalf);

  return merge(left, right);
}
```

## 61. Insertion Sort on Linked List

```javascript
function insertionSortLL(head) {
  var sorted = null;

  while (head !== null) {
    var next = head.next;
    sorted = insertSorted(sorted, head);
    head = next;
  }
  return sorted;
}

function insertSorted(sorted, newNode) {
  if (!sorted || newNode.value < sorted.value) {
    newNode.next = sorted;
    return newNode;
  }

  var curr = sorted;
  while (curr.next && curr.next.value < newNode.value) {
    curr = curr.next;
  }

  newNode.next = curr.next;
  curr.next = newNode;
  return sorted;
}
```

## 62. Bubble Sort on Linked List

```javascript
function bubbleSortLL(head) {
  if (!head) return head;

  var swapped;

  do {
    swapped = false;
    var curr = head;

    while (curr.next != null) {
      if (curr.value > curr.next.value) {
        var temp = curr.value;
        curr.value = curr.next.value;
        curr.next.value = temp;
        swapped = true;
      }
      curr = curr.next;
    }
  } while (swapped);

  return head;
}
```

## 63. Selection Sort on Linked List

```javascript
function selectionSortLL(head) {
  var start = head;

  while (start) {
    var minNode = start;
    var next = start.next;

    while (next) {
      if (next.value < minNode.value) minNode = next;
      next = next.next;
    }

    var temp = start.value;
    start.value = minNode.value;
    minNode.value = temp;

    start = start.next;
  }
  return head;
}
```

## 64. Binary Search Tree (BST) Implementation

```javascript
function BSTNode(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;
}

BST.prototype.insert = function (val) {
  this.root = this._insert(this.root, val);
};

BST.prototype._insert = function (node, val) {
  if (!node) return new BSTNode(val);

  if (val < node.value) node.left = this._insert(node.left, val);
  else node.right = this._insert(node.right, val);

  return node;
};
```

## 65. Inorder Traversal of BST

```javascript
function inorder(node) {
  if (!node) return;

  inorder(node.left);
  console.log(node.value);
  inorder(node.right);
}