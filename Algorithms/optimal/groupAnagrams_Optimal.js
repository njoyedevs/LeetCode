strs1 = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

strs2 = [""];
// Output: [[""]]

strs3 = ["a"];
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sets = new Map();

    
    for (const str of strs) {
        const sorted = [...str].sort().join('');
        if (sets.has(sorted)) {
            console.log('This is sets.get(sorted): '+ sets.get(sorted))
            sets.get(sorted).push(str);
            console.log('Adding to a set: ' + JSON.stringify([...sets]));
        } else {
            sets.set(sorted, [str]);
            console.log('Creating a set: ' + JSON.stringify([...sets]));
        }
    }

    return Array.from(sets.values());
};

console.log(groupAnagrams(strs1)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
console.log(groupAnagrams(strs2)); // Output: [[""]]
console.log(groupAnagrams(strs3)); // Output: [["a"]]
