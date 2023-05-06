s1 = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

s2 = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

s3 = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    console.log(s);

    s = s.toLowerCase().replace(/[^a-z0-9]/gi, '').split('');

    console.log(s);

    let i = 0;
    let j = s.length - 1;
    
    while(i <= j){
        if(s[i] !== s[j]){
            return false
        }

        i++;
        j--;
    }

    return true

};

console.log('\nTest 1');
console.log(isPalindrome(s1));
console.log('\nTest 2');
console.log(isPalindrome(s2));
console.log('\nTest 3');
console.log(isPalindrome(s3));