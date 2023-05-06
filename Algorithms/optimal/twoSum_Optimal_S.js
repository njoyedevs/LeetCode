nums1 = [2,7,11,15];
target1 = 9;
// Output: [0,1]

nums2 = [3,2,4];
target2 = 6;
// Output: [1,2]

nums3 = [3,3];
target3 = 6;
// Output: [0,1]

nums4 = [3,2,3];
target4 = 6;
// Output: [0,2]

nums5 = [2,5,5,11];
target5 = 10;
// Output: [1,2]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Constraints:
// 1. Only one valid answer exists.
var twoSum = function(nums, target) {
    
    // console.log(nums);
    // console.log(target);
    for(var i=0;i<nums.length;i++) {
        for(var j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
};

console.log(twoSum(nums1, target1) + "\n");
console.log(twoSum(nums2, target2) + "\n");
console.log(twoSum(nums3, target3) + "\n");
console.log(twoSum(nums4, target4) + "\n");
console.log(twoSum(nums5, target5) + "\n");