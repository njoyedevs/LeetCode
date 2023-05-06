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

    const anagramMap = new Map();
    
    for (const str of strs) {
        // Sort the string and use it as the key for the hashmap
        const sortedStr = [...str].sort().join('');
        
        if (anagramMap.has(sortedStr)) {
            // If the key already exists, push the string into the corresponding array
            anagramMap.get(sortedStr).push(str);
        } else {
            // If the key doesn't exist, create a new array with the string as its first element
            anagramMap.set(sortedStr, [str]);
        }
    }
    
    // Return the grouped anagrams as an array of arrays
    return Array.from(anagramMap.values());
};

console.log(groupAnagrams(strs1)); // Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(strs2)); // Output: [[""]]

console.log(groupAnagrams(strs3)); // Output: [["a"]]
