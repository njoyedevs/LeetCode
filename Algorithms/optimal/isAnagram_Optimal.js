
let s1 = "anagram";
let t1 = "nagaram";

let s2 = "rat";
let t2 = "car";

let s3 = "";
let t3 = "";

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    console.log(s);
    console.log(t);

    const freqS = new Array(26).fill(0);
    console.log(freqS);
    const freqT = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {

        console.log('Unicode sItem: ' + s.charCodeAt(i));
        console.log('Unicode a: ' + 'a'.charCodeAt(0));
        console.log('sItem - a: ' + [s.charCodeAt(i) - 'a'.charCodeAt(0)]);

        freqS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        freqT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    console.log(freqS);
    console.log(freqT);

    return freqS.every((count, index) => count === freqT[index]);
};

console.log(isAnagram(s1,t1) + "\n");
console.log(isAnagram(s2,t2) + "\n");
console.log(isAnagram(s3,t3) + "\n");