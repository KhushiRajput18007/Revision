# DSA Questions in C++ (VS Code-Friendly Markdown)

## 1️⃣ Find Maximum and Minimum in an Array

```cpp
class Solution {
public:
    // Returns {minValue, maxValue}
    pair<int, int> getMinMax(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return {0, 0}; // or handle as per constraints

        int mn = nums[0];
        int mx = nums[0];

        for (int i = 1; i < n; i++) {
            if (nums[i] < mn) mn = nums[i];
            if (nums[i] > mx) mx = nums[i];
        }

        return {mn, mx};
    }
};
```

- Time: `O(n)`
- Space: `O(1)`

## 2️⃣ Find the Second and Third Largest Element in an Array

Assume we want 3 distinct largest elements, return in a vector.

```cpp
class Solution {
public:
    // Returns {firstLargest, secondLargest, thirdLargest}
    // If not enough distinct elements, you can decide how to handle (e.g. return empty vector)
    vector<int> topThreeLargest(vector<int>& nums) {
        long long first = -1000000000000LL;
        long long second = -1000000000000LL;
        long long third = -1000000000000LL;

        for (int x : nums) {
            if (x > first) {
                third = second;
                second = first;
                first = x;
            } else if (x > second && x != first) {
                third = second;
                second = x;
            } else if (x > third && x != first && x != second) {
                third = x;
            }
        }

        vector<int> ans;
        if (first > -1000000000000LL) ans.push_back((int)first);
        if (second > -1000000000000LL) ans.push_back((int)second);
        if (third > -1000000000000LL) ans.push_back((int)third);
        return ans;
    }
};
```

- Time: `O(n)`
- Space: `O(1)` extra

## 3️⃣ Reverse an Array (In-place)

This is like a helper that some LeetCode problems use.

```cpp
class Solution {
public:
    void reverseArray(vector<int>& nums) {
        int left = 0;
        int right = (int)nums.size() - 1;

        while (left < right) {
            int temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right--;
        }
    }
};
```

- Time: `O(n)`
- Space: `O(1)`

## 4️⃣ Rotate an Array by k Positions (Right Rotation – LeetCode 189 style)

```cpp
class Solution {
public:
    void reverseRange(vector<int>& nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        if (n == 0) return;

        k = k % n;

        // Reverse whole array
        reverseRange(nums, 0, n - 1);
        // Reverse first k
        reverseRange(nums, 0, k - 1);
        // Reverse remaining n-k
        reverseRange(nums, k, n - 1);
    }
};
```

- Time: `O(n)`
- Space: `O(1)`

## 5️⃣ Move All Zeros to the End (LeetCode 283)

```cpp
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n = nums.size();
        int j = 0; // position to place next non-zero

        for (int i = 0; i < n; i++) {
            if (nums[i] != 0) {
                nums[j] = nums[i];
                j++;
            }
        }

        while (j < n) {
            nums[j] = 0;
            j++;
        }
    }
};
```

- Time: `O(n)`
- Space: `O(1)`

## ✅ 6️⃣ Remove Duplicates from Sorted / Unsorted Array

### (A) Remove Duplicates – Sorted Array (LeetCode 26)

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;

        int j = 1;
        for (int i = 1; i < n; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j; // new length
    }
};
```

### (B) Remove Duplicates – Unsorted Array (Without using set/map/sorting) — `O(n²)`

```cpp
class Solution {
public:
    int removeDuplicatesUnsorted(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;

        int j = 0;

        for (int i = 0; i < n; i++) {
            bool seen = false;

            for (int k = 0; k < j; k++) {
                if (nums[k] == nums[i]) {
                    seen = true;
                    break;
                }
            }

            if (!seen) {
                nums[j] = nums[i];
                j++;
            }
        }
        return j;
    }
};
```

## ✅ 7️⃣ Merge Two Sorted Arrays Without Extra Space (Gap Method)

```cpp
class Solution {
public:
    int nextGap(int gap) {
        if (gap <= 1) return 0;
        return (gap / 2) + (gap % 2);
    }

    void merge(vector<int>& arr1, vector<int>& arr2) {
        int n = arr1.size();
        int m = arr2.size();

        int gap = nextGap(n + m);

        while (gap > 0) {
            int i, j;

            // Compare in arr1
            for (i = 0; i + gap < n; i++) {
                if (arr1[i] > arr1[i + gap]) {
                    int temp = arr1[i];
                    arr1[i] = arr1[i + gap];
                    arr1[i + gap] = temp;
                }
            }

            // Compare arr1 & arr2
            for (j = gap > n ? gap - n : 0; i < n && j < m; i++, j++) {
                if (arr1[i] > arr2[j]) {
                    int temp = arr1[i];
                    arr1[i] = arr2[j];
                    arr2[j] = temp;
                }
            }

            // Compare in arr2
            for (j = 0; j + gap < m; j++) {
                if (arr2[j] > arr2[j + gap]) {
                    int temp = arr2[j];
                    arr2[j] = arr2[j + gap];
                    arr2[j + gap] = temp;
                }
            }

            gap = nextGap(gap);
        }
    }
};
```

## ✅ 8️⃣ Find Union & Intersection of Two Arrays (Unsorted)

### Union of Two Unsorted Arrays

```cpp
class Solution {
public:
    vector<int> arrayUnion(vector<int>& a, vector<int>& b) {
        vector<int> res;
        
        // Add from a
        for (int x : a) {
            bool exists = false;
            for (int y : res)
                if (y == x) { exists = true; break; }
            if (!exists) res.push_back(x);
        }

        // Add from b
        for (int x : b) {
            bool exists = false;
            for (int y : res)
                if (y == x) { exists = true; break; }
            if (!exists) res.push_back(x);
        }

        return res;
    }
};
```

### Intersection of Two Unsorted Arrays

```cpp
class Solution {
public:
    vector<int> arrayIntersection(vector<int>& a, vector<int>& b) {
        vector<int> res;

        for (int x : a) {
            bool foundInB = false;
            for (int y : b)
                if (y == x) { foundInB = true; break; }

            if (foundInB) {
                bool alreadyInRes = false;
                for (int z : res)
                    if (z == x) { alreadyInRes = true; break; }

                if (!alreadyInRes) res.push_back(x);
            }
        }
        return res;
    }
};
```

## ✅ 9️⃣ Majority Element (Moore’s Voting — LC 169)

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate = nums[0];
        int count = 1;

        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] == candidate) count++;
            else {
                count--;
                if (count == 0) {
                    candidate = nums[i];
                    count = 1;
                }
            }
        }
        return candidate;
    }
};
```

## ✅ 🔟 Check if Subarray With Sum = 0 Exists (O(n²))

```cpp
class Solution {
public:
    bool subArrayZero(vector<int>& nums) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            int sum = 0;

            for (int j = i; j < n; j++) {
                sum += nums[j];

                if (sum == 0)
                    return true;
            }
        }

        return false;
    }
};
```

## ✅ 11️⃣ Maximum Subarray Sum — Kadane’s Algorithm (LeetCode 53)

```cpp
class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int curr = nums[0];
        int best = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            // start new or extend previous
            curr = (curr + nums[i] > nums[i]) ? curr + nums[i] : nums[i];

            // update best
            if (curr > best)
                best = curr;
        }

        return best;
    }
};
```

- Time: `O(n)`
- Space: `O(1)`

## ✅ 12️⃣ Subarray With Given Sum (Positive Numbers Only — Sliding Window)

LeetCode equivalent: "Minimum Size Subarray Sum", but here we return true/false.

```cpp
class Solution {
public:
    bool subarraySum(vector<int>& nums, int target) {
        int left = 0, sum = 0;

        for (int right = 0; right < nums.size(); right++) {
            sum += nums[right];

            while (sum > target && left <= right) {
                sum -= nums[left];
                left++;
            }

            if (sum == target) return true;
        }
        return false;
    }
};
```

## ✅ 13️⃣ Maximum Product Subarray (LeetCode 152)

```cpp
class Solution {
public:
    int myMax(int a, int b) { return (a > b ? a : b); }
    int myMin(int a, int b) { return (a < b ? a : b); }

    int maxProduct(vector<int>& nums) {
        int maxP = nums[0];
        int minP = nums[0];
        int ans = nums[0];

        for (int i = 1; i < nums.size(); i++) {
            int curr = nums[i];

            if (curr < 0) {
                // swap manually
                int t = maxP;
                maxP = minP;
                minP = t;
            }

            maxP = myMax(curr, maxP * curr);
            minP = myMin(curr, minP * curr);

            ans = myMax(ans, maxP);
        }

        return ans;
    }
};
```

## ✅ 14️⃣ Count Subarrays With Sum = k (Brute Force O(n²))

Equivalent to LC 560 but without using maps (strict O(n²)).

```cpp
class Solution {
public:
    int countSubarrays(vector<int>& nums, int k) {
        int n = nums.size();
        int count = 0;

        for (int i = 0; i < n; i++) {
            int sum = 0;
            for (int j = i; j < n; j++) {
                sum += nums[j];
                if (sum == k) count++;
            }
        }

        return count;
    }
};
```

## ✅ 15️⃣ Two Sum — Brute Force (No Hashing, No Sorting)

```cpp
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int n = nums.size();

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (nums[i] + nums[j] == target)
                    return {i, j};
            }
        }

        return {}; // not found
    }
};
```

## ✅ 16️⃣ Three Sum (Find triplets with sum = 0) — O(n³) version (no sorting allowed)

This is NOT LeetCode’s optimal solution (which uses sorting),
because your condition = no inbuilt sort.

```cpp
class Solution {
public:
    vector<vector<int>> threeSumBrute(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> result;

        for (int i = 0; i < n - 2; i++) {
            for (int j = i + 1; j < n - 1; j++) {
                for (int k = j + 1; k < n; k++) {

                    if (nums[i] + nums[j] + nums[k] == 0) {
                        // Check if triplet already exists in result
                        bool exists = false;

                        for (auto &t : result) {
                            if ((t[0] == nums[i] || t[0] == nums[j] || t[0] == nums[k]) &&
                                (t[1] == nums[i] || t[1] == nums[j] || t[1] == nums[k]) &&
                                (t[2] == nums[i] || t[2] == nums[j] || t[2] == nums[k])) {
                                exists = true;
                                break;
                            }
                        }

                        if (!exists) {
                            result.push_back({nums[i], nums[j], nums[k]});
                        }
                    }
                }
            }
        }
        return result;
    }
};
```

## ✅ 17️⃣ Longest Substring with At Most K Distinct Characters — Sliding Window (LC 340)

```cpp
class Solution {
public:
    int lengthOfLongestSubstringKDistinct(string s, int k) {
        if (k == 0) return 0;

        int freq[256] = {0};
        int left = 0, distinct = 0, maxLen = 0;

        for (int right = 0; right < s.size(); right++) {
            char c = s[right];

            if (freq[(unsigned char)c] == 0)
                distinct++;

            freq[(unsigned char)c]++;

            while (distinct > k) {
                freq[(unsigned char)s[left]]--;
                if (freq[(unsigned char)s[left]] == 0)
                    distinct--;
                left++;
            }

            int window = right - left + 1;
            if (window > maxLen)
                maxLen = window;
        }
        return maxLen;
    }
};
```

## ✅ 18️⃣ Search in Rotated Sorted Array — Binary Search (LeetCode 33)

```cpp
class Solution {
public:
    int search(vector<int>& nums, int target) {
        int low = 0, high = nums.size() - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (nums[mid] == target)
                return mid;

            // Left part sorted
            if (nums[low] <= nums[mid]) {
                if (target >= nums[low] && target < nums[mid])
                    high = mid - 1;
                else
                    low = mid + 1;
            }
            // Right part sorted
            else {
                if (target > nums[mid] && target <= nums[high])
                    low = mid + 1;
                else
                    high = mid - 1;
            }
        }
        return -1;
    }
};
```

## ✅ 19️⃣ Find Missing Number in Array (LeetCode 268 style)

Difference: your version is 1 to n, LeetCode’s is 0 to n,
so I’m giving your version in LeetCode format:

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums, int n) {
        int total = n * (n + 1) / 2;
        int sum = 0;

        for (int x : nums)
            sum += x;

        return total - sum;
    }
};
```

## ✅ 20️⃣ Union of Two Sorted Arrays (Two Pointer)

```cpp
class Solution {
public:
    vector<int> unionSorted(vector<int>& a, vector<int>& b) {
        int n = a.size(), m = b.size();
        vector<int> res;

        int i = 0, j = 0;

        while (i < n && j < m) {
            if (a[i] == b[j]) {
                if (res.empty() || res.back() != a[i])
                    res.push_back(a[i]);
                i; 
                j++;
            }
            else if (a[i] < b[j]) {
                if (res.empty() || res.back() != a[i])
                    res.push_back(a[i]);
                i++;
            }
            else {
                if (res.empty() || res.back() != b[j])
                    res.push_back(b[j]);
                j++;
            }
        }

        while (i < n) {
            if (res.empty() || res.back() != a[i])
                res.push_back(a[i]);
            i++;
        }

        while (j < m) {
            if (res.empty() || res.back() != b[j])
                res.push_back(b[j]);
            j++;
        }

        return res;
    }
};
```

## ✅ 21️⃣ Kth Largest Element in an Array (No sort, No heap)

Brute-force approach (pick max K times):

```cpp
class Solution {
public:
    int kthLargest(vector<int>& nums, int k) {
        int n = nums.size();
        int removed = -1000000000; // very small marker value

        for (int times = 1; times <= k; times++) {
            int maxVal = -1000000000;
            int idx = -1;

            for (int i = 0; i < n; i++) {
                if (nums[i] > maxVal) {
                    maxVal = nums[i];
                    idx = i;
                }
            }

            if (times == k)
                return maxVal;

            nums[idx] = removed;  // mark as removed
        }

        return -1;
    }
};
```

## ✅ 22️⃣ Kth Smallest Element (No sort, No heap)

Pick minimum K times:

```cpp
class Solution {
public:
    int kthSmallest(vector<int>& nums, int k) {
        int n = nums.size();
        int removed = 1000000000; // very large marker

        for (int times = 1; times <= k; times++) {
            int minVal = 1000000000;
            int idx = -1;

            for (int i = 0; i < n; i++) {
                if (nums[i] < minVal) {
                    minVal = nums[i];
                    idx = i;
                }
            }

            if (times == k)
                return minVal;

            nums[idx] = removed;
        }
        return -1;
    }
};
```

## ✅ 23️⃣ Spiral Order Traversal (LeetCode 54)

```cpp
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int r = matrix.size();
        int c = matrix[0].size();

        int top = 0, bottom = r - 1;
        int left = 0, right = c - 1;

        vector<int> ans;

        while (top <= bottom && left <= right) {
            
            // left → right
            for (int j = left; j <= right; j++)
                ans.push_back(matrix[top][j]);
            top++;

            // top → bottom
            for (int i = top; i <= bottom; i++)
                ans.push_back(matrix[i][right]);
            right--;

            // right → left
            if (top <= bottom) {
                for (int j = right; j >= left; j--)
                    ans.push_back(matrix[bottom][j]);
                bottom--;
            }

            // bottom → top
            if (left <= right) {
                for (int i = bottom; i >= top; i--)
                    ans.push_back(matrix[i][left]);
                left++;
            }
        }

        return ans;
    }
};
```

## ✅ 24️⃣ Rotate a Matrix by 90° Clockwise (LeetCode 48)

No inbuilt functions used.

```cpp
class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        int n = matrix.size();

        // Step 1: transpose
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }

        // Step 2: reverse each row
        for (int i = 0; i < n; i++) {
            int left = 0, right = n - 1;
            while (left < right) {
                int temp = matrix[i][left];
                matrix[i][left] = matrix[i][right];
                matrix[i][right] = temp;
                left++;
                right--;
            }
        }
    }
};
```

## ✅ 25️⃣ Check if a Number is Prime

```cpp
class Solution {
public:
    bool isPrime(int n) {
        if (n <= 1) return false;

        for (int i = 2; i * i <= n; i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    }
};
```

## ✅ 26️⃣ Check if a Number is Palindrome (LeetCode Style, No String Conversion)

Matches LeetCode 9 (Palindrome Number) but without using string or reverse inbuilt.

```cpp
class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false;

        int original = x;
        long long rev = 0;

        while (x > 0) {
            int digit = x % 10;
            rev = rev * 10 + digit;
            x /= 10;
        }

        return rev == original;
    }
};
```

## ✅ 27️⃣ Check if an Array is Sorted

```cpp
class Solution {
public:
    bool isSorted(vector<int>& nums) {
        for (int i = 0; i < nums.size() - 1; i++) {
            if (nums[i] > nums[i + 1])
                return false;
        }
        return true;
    }
};
```

## ✅ 28️⃣ Find Index of Target in Array (Linear Search)

```cpp
class Solution {
public:
    int searchIndex(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] == target)
                return i;
        }
        return -1;
    }
};
```

## ✅ 29️⃣ Find Frequency of Each Element (No HashMap, No Sort)

`O(n²)` LeetCode-style.

```cpp
class Solution {
public:
    vector<pair<int,int>> frequency(vector<int>& nums) {
        int n = nums.size();
        vector<int> visited(n, 0);
        vector<pair<int,int>> ans;

        for (int i = 0; i < n; i++) {
            if (visited[i] == 1) continue;

            int count = 1;

            for (int j = i + 1; j < n; j++) {
                if (nums[i] == nums[j]) {
                    visited[j] = 1;
                    count++;
                }
            }

            ans.push_back({nums[i], count});
        }

        return ans;
    }
};
```

## ✅ 30️⃣ Reverse a String (Two Pointer, No Inbuilt Reverse)

Equivalent to LeetCode 344, but manually implemented.

```cpp
class Solution {
public:
    void reverseString(vector<char>& s) {
        int left = 0, right = s.size() - 1;

        while (left < right) {
            char temp = s[left];
            s[left] = s[right];
            s[right] = temp;

            left++;
            right--;
        }
    }
};
```

## ✅ 31️⃣ Find Missing Number in 1 to n

Similar to LeetCode 268 but uses 1..n instead of 0..n.

```cpp
class Solution {
public:
    int missingNumber(vector<int>& nums, int n) {
        int total = n * (n + 1) / 2;
        int sum = 0;

        for (int x : nums)
            sum += x;

        return total - sum;
    }
};
```

## ✅ 32️⃣ Check if Two Strings Are Anagrams (No Sorting, No Map)

Equivalent to LC 242 but without `sort()` or `unordered_map`.

```cpp
class Solution {
public:
    bool isAnagram(string s, string t) {
        int freq[256] = {0};

        for (char c : s)
            freq[(unsigned char)c]++;

        for (char c : t)
            freq[(unsigned char)c]--;

        for (int i = 0; i < 256; i++) {
            if (freq[i] != 0)
                return false;
        }
        return true;
    }
};
```

## ✅ 33️⃣ Implement Stack Using Array (LeetCode Style Class)

```cpp
class MyStack {
public:
    int arr[100];
    int top;

    MyStack() {
        top = -1;
    }

    void push(int x) {
        if (top == 99) return;
        arr[++top] = x;
    }

    int pop() {
        if (top == -1) return -1;
        return arr[top--];
    }

    int peek() {
        if (top == -1) return -1;
        return arr[top];
    }

    bool empty() {
        return top == -1;
    }
};
```

## ✅ 34️⃣ Implement Queue Using Array (LeetCode-style)

```cpp
class MyQueue {
public:
    int arr[100];
    int front, rear;

    MyQueue() {
        front = 0;
        rear = -1;
    }

    void push(int x) {
        if (rear == 99) return;
        arr[++rear] = x;
    }

    int pop() {
        if (front > rear) return -1;
        return arr[front++];
    }

    int peek() {
        if (front > rear) return -1;
        return arr[front];
    }

    bool empty() {
        return front > rear;
    }
};
```

## ✅ 35️⃣ Print Fibonacci Series (LeetCode style function)

Instead of printing, LeetCode returns a vector.

```cpp
class Solution {
public:
    vector<int> fibonacciSeries(int n) {
        vector<int> result;
        if (n <= 0) return result;

        if (n >= 1) result.push_back(0);
        if (n >= 2) result.push_back(1);

        int a = 0, b = 1;

        for (int i = 3; i <= n; i++) {
            int next = a + b;
            result.push_back(next);
            a = b;
            b = next;
        }

        return result;
    }
};
```

## ✅ 36️⃣ Find the nth Fibonacci Number (LeetCode style, iterative)

Equivalent to LeetCode 509 but without recursion.

```cpp
class Solution {
public:
    int fibNumber(int n) {
        if (n == 1) return 0;
        if (n == 2) return 1;

        int a = 0, b = 1, next;

        for (int i = 3; i <= n; i++) {
            next = a + b;
            a = b;
            b = next;
        }

        return b;
    }
};
```

## ✅ 37️⃣ Count Digits in a Number (LeetCode-style)

```cpp
class Solution {
public:
    int countDigits(int n) {
        if (n == 0) return 1;

        int count = 0;

        while (n > 0) {
            count++;
            n /= 10;
        }

        return count;
    }
};
```

## ✅ 38️⃣ Check if a Number is Armstrong (No pow(), manual power calc)

```cpp
class Solution {
public:
    bool isArmstrong(int n) {
        int original = n;

        // Step 1: Count digits
        int digits = 0, temp = n;
        while (temp > 0) {
            digits++;
            temp /= 10;
        }

        // Step 2: Calculate sum of digits^digits
        int sum = 0;
        while (n > 0) {
            int d = n % 10;

            int power = 1;
            for (int i = 0; i < digits; i++)
                power *= d;

            sum += power;
            n /= 10;
        }

        return sum == original;
    }
};
```

## ✅ 39️⃣ Count Positive, Negative, and Zero in an Array

Return a vector in LeetCode style.

```cpp
class Solution {
public:
    vector<int> countPNZ(vector<int>& nums) {
        int pos = 0, neg = 0, zero = 0;

        for (int x : nums) {
            if (x > 0) pos++;
            else if (x < 0) neg++;
            else zero++;
        }

        return {pos, neg, zero};
    }
};
```

## ✅ 40️⃣ Right Angle Triangle Pattern (Return vector<string>)

LeetCode NEVER prints output — it returns structured data.
So we will return each row of the pattern as a string.

Pattern example for `n = 4`:

```
*
* *
* * *
* * * *
```

```cpp
class Solution {
public:
    vector<string> rightTriangle(int n) {
        vector<string> ans;

        for (int i = 1; i <= n; i++) {
            string row = "";
            for (int j = 1; j <= i; j++) {
                row += "*";
                if (j < i) row += " ";
            }
            ans.push_back(row);
        }

        return ans;
    }
};
```