nums1 = [1,2,3,4]
// Output: [24,12,8,6]
nums2 = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
nums3 = [0,0]
// Output: [0,0]

/// Constraints:
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    console.log('This is the original array: ' + nums);
    result = [];
    for (let i=0; i<nums.length; i++) {
        let mainItem = nums[i];
        console.log('This is the item to replace: ' + mainItem);
        let excludedArray = nums.filter(function (item, index) {
            return index !== i;
        })
        console.log('This is the new array: ' + excludedArray);
        console.log('This is the original array: ' + nums);
        let product = 1;
        for(let j=0; j<excludedArray.length;j++) {
            console.log('This is an item in excludedArray: ' + excludedArray[j]);
            product *= excludedArray[j];
        }
        console.log('This is the product of excludedArray: ' + product);
        result.push(product);
    }
    return result;
};

console.log("\nTest 1");
console.log(productExceptSelf(nums1));
console.log("\nTest 2");
console.log(productExceptSelf(nums2));
console.log("\nTest 3");
console.log(productExceptSelf(nums3));