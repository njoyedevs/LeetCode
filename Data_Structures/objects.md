Objects in JavaScript are a fundamental data structure that can be used to store key-value pairs. The keys must be strings or symbols, and the values can be of any type. Here is a comprehensive explanation and demonstration of commonly used operations with Objects in JavaScript:

Creating an Object:
```js
const myObject = {}; // Creates an empty Object
```

Adding properties to an Object:
```js
myObject[1] = 'one'; // Adds the key-value pair ('1', 'one') to the Object
myObject['two'] = 2; // Adds the key-value pair ('two', '2') to the Object
myObject['prop'] = {a: 1, b: 2}; // Adds the key-value pair ('prop', {a: 1, b: 2}) to the Object
```

Retrieving properties from an Object:
```js
console.log(myObject[1]); // Returns 'one'
console.log(myObject['two']); // Returns 2
console.log(myObject['prop']); // Returns {a: 1, b: 2}
```

Deleting properties from an Object:
```js
delete myObject[1]; // Removes the key-value pair with the key '1' from the Object
```

Checking if a property exists in an Object:
```js
console.log('1' in myObject); // Returns false, since '1' was removed in the previous step
console.log('two' in myObject); // Returns true, since 'two' is in the Object
```

Iterating through the keys of an Object:
```js
for (const key in myObject) {
  console.log(key);
}
// Output:
// two
// prop
```

Iterating through the values of an Object:
```js
for (const key in myObject) {
  console.log(myObject[key]);
}
// Output:
// 2
// {a: 1, b: 2}
```

Iterating through the key-value pairs of an Object:
```js
for (const key in myObject) {
  console.log(`${key} = ${myObject[key]}`);
}
// Output:
// two = 2
// prop = {a: 1, b: 2}
```

These are common operations for Maps and Objects in JavaScript. You can use these methods to manipulate and iterate through Maps and Objects efficiently.