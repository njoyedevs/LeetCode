nums1 = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

nums2 = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.

nums3 = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    console.log(nums)

};

console.log('\nTest 1');
console.log(threeSum(nums1));
console.log('\nTest 2');
console.log(threeSum(nums2));
console.log('\nTest 3');
console.log(threeSum(nums3));