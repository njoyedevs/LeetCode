/**
 * @param {string[]} strs
 * @return {string[][]}
 */

strs1 = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

strs2 = [""];
// Output: [[""]]

strs3 = ["a"];
// Output: [["a"]]


var groupAnagrams = function(strs) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    const map = new Map();

    for(let str of strs) {
        let count = 1;
        for(let ch of str) {
            let code = ch.charCodeAt() - 97;
            count *= primes[code];
        }

        if(map.has(count)) {
            const list = map.get(count);
            list.push(str);
            map.set(count, list);
        }
        else {
            map.set(count, [str]);
        }
    }

    return Array.from(map.values());

};

console.log(groupAnagrams(strs1)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(strs2)); // Output: [[""]]

console.log(groupAnagrams(strs3)); // Output: [["a"]]