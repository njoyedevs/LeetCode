/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Duplicates in array = True
nums1 = [1,2,3,1];

// Empty array = False
nums2 = [];

// No duplicates in array = False
nums3 = [1,2,3];


var containsDuplicate = function(nums) {
    
    if(nums.length == 0) {
        console.log("Empty array");
        return false;
    }

    newDictionary = {};

    for(var i=0; i < nums.length; i++) {
        console.log(nums[i]);

        if(newDictionary.hasOwnProperty(nums[i])) {
            console.log("Has Own Property");
            newDictionary[nums[i]] += 1;
        } else {
            newDictionary[nums[i]] = 1;
        }
    }

    console.log(newDictionary);

    for(var key in newDictionary) {
        var value = newDictionary[key];

        if(value > 1) {
            console.log("Value > 1");
            return true;
        }
    }

    console.log("No duplicates");
    return false;

};

console.log(containsDuplicate(nums1) + "\n");
console.log(containsDuplicate(nums2) + "\n");
console.log(containsDuplicate(nums3) + "\n");

