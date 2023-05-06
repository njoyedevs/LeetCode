# 1. Contains Duplicate
### Q. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### A. Use a Set() to determine if the Set has the number and if so return true.
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set()
    for(let n of nums){
        if(set.has(n)){
            return true
        }
        set.add(n)
        console.log(set)
    }
    return false
};
```

# 2. Valid Anagram
### Q. Given two strings s and t, return true if t is an anagram of s, and false otherwise.

### A. Create 26 item arrays initialized with zero's and incriment each based on the alphabetic Unicode number (char - 97).  Then return array1.every to check if array1 has exact count in same index of array2.

### Constraints:
s and t consist of lowercase English letters.
```js
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const freqS = new Array(26).fill(0);
    const freqT = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freqT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
    return freqS.every((count, index) => count === freqT[index]);
};
```

# 3. Two Sum
### Q. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
### Constraints:
You may assume that each input would have exactly one solution, and you may not use the same element twice.
## Space Complexity
### A. Use for loops to create double pointers with pointer1 starting at i=0 and pointer2 starting at i+1 to check if both sums equal target.  Then return target coordinates [ i , j ].
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Constraints:
// 1. Only one valid answer exists.
var twoSum = function(nums, target) {
    for(var i=0;i<nums.length;i++) {
        for(var j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};
```

## Time Complexity
### A. Use map anf for loop to hash the nums[i] = i. Calculate the result = target - nums[i] and check if in map.  If so, return array [map[result], i].
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Constraints:
// 1. Only one valid answer exists.
var twoSum = function(nums, target) {
    const map = {}
    for(let i = 0; i < nums.length; i++) {
        const result = target - nums[i]
        if(result in map) {
            return [map[result], i]
        }
        map[nums[i]] = i;
    }
};
```

# 4. Group Anagrams
### Q. Given an array of strings strs, group the anagrams together. You can return the answer in any order.
### A. Use a map and for loop to sort each string using spread.sort.join [...srt].sort().join(''), set each item of map as the sorted string and array with original string, sorted, [srt].  if the key sorted is already present in map, then push the secondary original string into [str] array.  Then return an Array.from(map.values()).
### Constraints:
strs[i] consists of lowercase English letters.
```js
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sets = new Map();
    for (const str of strs) {
        const sorted = [...str].sort().join('');
        if (sets.has(sorted)) {
            sets.get(sorted).push(str);
        } else {
            sets.set(sorted, [str]);
        }
    }
    return Array.from(sets.values());
};
```

# 5. Top K Frequent Elements
### Q. Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
### A. Use an object to create a frequency table to initialize each number with 0 and then increment by 1 if not undefined.  Then return an array of key,value pairs, sorted by value, sliced at 0,k, and mapped to single array.
### Constraints:
k is in the range [1, the number of unique elements in the array].

It is guaranteed that the answer is unique.
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const kNums = {}
    nums.forEach( n => {
        if (kNums[n] === undefined){
            kNums[n] = 0;
        }
        kNums[n]++
    })
    return Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1).slice(0,k).map(e=>e[0])
};
```

# 6. Product of Array Except Self
### Q. Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
### A. Use a set of arrays (left, right) and multipliers (left, right). Initialize leftMultiplier at 1.  First, create a left array by starting index 0 at 1 and updating index 1, 2, 3 as the product of leftMultiplier * nums at index 0, 1, 2.  Then initialize rightMultipler at 1.  Second, create a right array by starting index -1 at 1 and multiplying that by leftArray's index -1.  Then update rightMultiplier by rightMultiplier * nums at index -1, -2, -3.  Return rightArray.

### Constraints:
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    console.log('Input array nums: ', nums);

    let leftArr = [];
    let leftMultiplication = 1;
    for (let i = 0; i < nums.length; i++) {
        leftArr[i] = leftMultiplication;
        leftMultiplication *= nums[i];
    }

    let rightArr = [];
    let rightMultiplication = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        rightArr[i] = rightMultiplication;
        rightMultiplication *= nums[i];
        rightArr[i] *= leftArr[i];
    }
    console.log('Final rightArr: ', rightArr);
    return rightArr;
};
```