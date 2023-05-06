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

    let formattedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(formattedString);

    rightArrayLength = formattedString.length-1;
    leftArrayLength = 0;

    while(rightArrayLength >= formattedString.length/2 && leftArrayLength < formattedString.length/2) {

    console.log(rightArrayLength);
    console.log(leftArrayLength);
    
    if (formattedString[leftArrayLength] !== formattedString[rightArrayLength]) {
        return false;
    }

    rightArrayLength--;
    leftArrayLength++;

    }
    return true;

};

console.log('\nTest 1');
console.log(isPalindrome(s1));
console.log('\nTest 2');
console.log(isPalindrome(s2));
console.log('\nTest 3');
console.log(isPalindrome(s3));