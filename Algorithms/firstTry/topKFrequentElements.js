/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

nums1 = [1,1,1,2,2,3];
k1 = 2;
// Output: [1,2]

nums2 = [1];
k2 = 1;
// Output: [1]

var topKFrequent = function(nums, k) {
    
    const frequencyMap = new Map();

    // Count the frequency of each number in nums
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Sort the unique numbers based on their frequency
    const sortedUniqueNums = Array.from(frequencyMap.keys()).sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

    // Return the k most frequent elements
    return sortedUniqueNums.slice(0, k);

};

console.log(topKFrequent(nums1, k1) + "\n");
console.log(topKFrequent(nums2, k2) + "\n");