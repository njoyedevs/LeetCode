/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s1 = "anagram";
let t1 = "nagaram";

let s2 = "rat";
let t2 = "car";

let s3 = "";
let t3 = "";

function sortString(s) {
    console.log(s.split('').sort().join(''));
    return s.split('').sort().join('');
}

var isAnagram = function(s, t) {

    console.log(s);
    console.log(t);


    if(s.length == 0 || t.length == 0) {
        return false;
    }

    if(s.length !== t.length) {
        return false;
    }

    return sortString(s) === sortString(t);
};

console.log(isAnagram(s1,t1) + "\n");
console.log(isAnagram(s2,t2) + "\n");
console.log(isAnagram(s3,t3) + "\n");