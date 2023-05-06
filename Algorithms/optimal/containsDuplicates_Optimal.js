
// Duplicates in array = True
nums1 = [1,2,3,1];

// Empty array = False
nums2 = [];

// No duplicates in array = False
nums3 = [1,2,3];


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

console.log(containsDuplicate(nums1) + "\n");
console.log(containsDuplicate(nums2) + "\n");
console.log(containsDuplicate(nums3) + "\n");
