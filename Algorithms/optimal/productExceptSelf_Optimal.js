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
    console.log('Input array nums: ', nums);

    let leftArr = [];
    let leftMultiplication = 1;
    for (let i = 0; i < nums.length; i++) {
        //console.log('Left Iteration i = ' + i)
        //console.log('leftMultiplication = ' + leftMultiplication)
        leftArr[i] = leftMultiplication;
        //console.log(`Updating leftArr at index ${i}: leftArr[${i}] = leftMultiplication (leftArr[${i}] = ${leftMultiplication})`);
        //console.log('Current leftArr: ', leftArr);
        //console.log(`Updating leftMultiplication: leftMultiplication *= nums[${i}] (${leftMultiplication} *= ${nums[i]})`);
        leftMultiplication *= nums[i];
        //console.log('leftMultiplication = ', leftMultiplication, '\n');
    }
    //console.log('Final leftArr: ', leftArr, "\n");
    //console.log('Input array nums: ', nums, "\n");
    let rightArr = [];
    let rightMultiplication = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        // console.log('Right Iteration i = ' + i)
        //console.log('rightMultiplication = ' + rightMultiplication)
        rightArr[i] = rightMultiplication;
        //console.log(`Updating rightArr at index ${i}: rightArr[${i}] = ${rightArr[i]} (rightMultiplication = ${rightMultiplication})`);
        //console.log('Current rightArr: ', rightArr);
        //console.log(`Updating rightMultiplication: rightMultiplication *= nums[${i}] (${rightMultiplication} *= ${nums[i]})`);
        rightMultiplication *= nums[i];
        //console.log('rightMultiplication = ', rightMultiplication);
        //console.log(`Multiplying rightArr[${i}] by leftArr[${i}]: rightArr[${i}] *= leftArr[${i}] (${rightArr[i]} *= ${leftArr[i]})`);
        rightArr[i] *= leftArr[i];
        //console.log('Current rightArr: ', rightArr, '\n');
    }
    //console.log('Final rightArr: ', rightArr);
    
    return rightArr;
};


console.log("\nTest 1");
console.log(productExceptSelf(nums1));
console.log("\nTest 2");
console.log(productExceptSelf(nums2));
console.log("\nTest 3");
console.log(productExceptSelf(nums3));