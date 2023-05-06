const start = performance.now();
const initialMemoryUsage = process.memoryUsage().heapUsed;

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
var threeSum = function (nums) {
  const result = [];
  
  console.log(nums)
  nums.sort((a,b)=> a-b);
  console.log(nums)

  for (let [i, a] of nums.entries()) {

      console.log(`\n--------------Round ${i}-------------------------------`)
      console.log('This is i and a: ', [i,a]);
      if ((i > 0) && a === nums[i - 1]) {
        console.log('This is the if statement (i > 0) && a === nums[i - 1] so continue');
        continue;
      }

      let [left, right] = [i + 1, nums.length - 1];
      console.log('Initial left and right: ', [left, right]);

      while (left < right) {
          console.log('Start of while looped left and right: ', [left, right]);

          const threeSum = a + nums[left] + nums[right];
          console.log('ThreeSum = a + nums[left] + nums[right]: ', [threeSum, a, nums[left], nums[right]]);

          if (threeSum > 0) {
            console.log('If statement (threeSum > 0) = decrement right--');
            right--;
          }

          else if (threeSum < 0) {
            console.log('If statement (threeSum < 0) = increment left++');
            left++;
          }

          else {
              console.log('Else statement increment left ++, push result (a, nums[left], nums[right], and left and right = ', [left, right])
              result.push([a, nums[left], nums[right]])
              left++;
              console.log('Before while loop (nums[left] === nums[left-1] && left < right) where Left and right = ', [left, right], 'nums[left] and nums[left-1] = ', [nums[left], nums[left-1]])
              while(nums[left] === nums[left-1] && left < right) 
                left++;
                console.log('Before while loop (nums[left] === nums[left-1] && left < right) where Left and right = ', [left, right], 'nums[left] and nums[left-1] = ', [nums[left], nums[left-1]])
          }

      }
  }
  return result;
};

console.log('\nTest 1');
console.log(threeSum(nums1));
console.log('\nTest 2');
console.log(threeSum(nums2));
console.log('\nTest 3');
console.log(threeSum(nums3));

console.log(`\nThis took ${performance.now() - start} milliseconds to run`);
const finalMemoryUsage = process.memoryUsage().heapUsed;
console.log(`\nThis took approximately ${(finalMemoryUsage - initialMemoryUsage) / 1024 / 1024} megabytes of memory to run.`);