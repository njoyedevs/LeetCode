nums1 = [1,1,1,2,2,3];
k1 = 2;
// Output: [1,2]

nums2 = [1];
k2 = 1;
// Output: [1]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const kNums = {}

    console.log('Creating frequency table')
    nums.forEach( n => {
        if (kNums[n] === undefined){
            kNums[n] = 0;
        }
        kNums[n]++
        console.log(kNums)
    })

    console.log('\nCreate an array of key,value pairs:');
    console.log(Object.entries(kNums))
    console.log('\nSort the key,value pairs by value:');
    console.log(Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1))
    console.log('\nSlice the key,value pairs array by 0,k:');
    console.log(Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1).slice(0,k))
    console.log('\nMap each key (e[0]) to result array:');
    console.log(Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1).slice(0,k).map(e=>e[0]))

    return Object.entries(kNums).sort((a,b)=>a[1] > b[1]?-1:1).slice(0,k).map(e=>e[0])

};

console.log('\nTest 1');
console.log(topKFrequent(nums1, k1));
console.log('\nTest 2');
console.log(topKFrequent(nums2, k2));