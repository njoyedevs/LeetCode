

nums1 = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

nums2 = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    //console.log('Original nums: ', nums);

    if (!nums.length) {
        return 0;
    }

    nums = nums.sort((a, b) => a - b);
    //console.log('After sorting nums: ', nums, "\n");
    
    let counter = 1;
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        //console.log(`Starting Iteration i = ${i}`);
        if (nums[i] === nums[i - 1]) {
            //console.log('Continue');
            //console.log(`nums[${i}] === nums[${i}-1]: ${nums[i]} === ${nums[i - 1]} \n`);
            continue;
        }
        if (nums[i] - nums[i - 1] === 1) {
            //console.log('Increment counter');
            //console.log(`nums[${i}] - nums[${i} - 1] === 1: ${nums[i]} - ${nums[i - 1]} === 1`);
            counter++;
        } else if (nums[i] - nums[i - 1] !== 1) {
            //console.log('counter = 1');
            //console.log(`nums[${i}] - nums[${i} - 1] !== 1: ${nums[i]} - ${nums[i - 1]} !== 1`);
            counter = 1;
        }
        //console.log('This is the counter: ', counter);
        //console.log('This is the current max: ', max);
        max = Math.max(max, counter);
        //console.log('This is the updated max: ', max, "\n");
    }
    return max;

};

console.log('\nTest 1')
console.log(longestConsecutive(nums1))
console.log('\nTest 2')
console.log(longestConsecutive(nums2))