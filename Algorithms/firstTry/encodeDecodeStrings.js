// This algorithm uses a simple length-prefixed encoding method, where each string is prefixed
// with its length followed by a '#' delimiter. The encode function iterates through the list
// of strings, concatenating each length-prefixed string to the encoded result. The decode
// function then parses the length-prefixed strings by reading the length, extracting the
// string, and adding it to the decoded list of strings.


/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let encoded = '';
    for (let str of strs) {
        encoded += str.length + '#' + str;
    }
    return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let decoded = [];
    let i = 0;
    while (i < s.length) {
        let delimiterIndex = s.indexOf('#', i);
        let strLength = parseInt(s.substring(i, delimiterIndex));
        let str = s.substring(delimiterIndex + 1, delimiterIndex + 1 + strLength);
        decoded.push(str);
        i = delimiterIndex + 1 + strLength;
    }
    return decoded;
};

/**
 * Your Codec object will be instantiated and called as such:
 * var codec = new Codec();
 * codec.decode(codec.encode(strs));
 */

function testEncodeDecode() {
    const testCases = [
        {
            input: ['hello', 'world'],
            encoded: '5#hello5#world'
        },
        {
            input: ['abc', 'def', '123', '', 'xyz'],
            encoded: '3#abc3#def3#1231#0#xyz'
        },
        {
            input: ['This', 'is', 'a', 'test'],
            encoded: '4#This2#is1#a4#test'
        },
        {
            input: ['Encode', 'and', 'Decode'],
            encoded: '6#Encode3#and6#Decode'
        },
        {
            input: [],
            encoded: ''
        }
    ];

    for (const testCase of testCases) {
        const { input, encoded } = testCase;
        const encodedResult = encode(input);
        const decodedResult = decode(encodedResult);

        console.log('Input:', input);
        console.log('Expected Encoded:', encoded);
        console.log('Encoded:', encodedResult);
        console.log('Decoded:', decodedResult);
        console.log('Encode/Decode Test Passed:', JSON.stringify(input) === JSON.stringify(decodedResult));
        console.log('---');
    }
}

testEncodeDecode();