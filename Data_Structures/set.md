### In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive or object references. Here is a comprehensive explanation and demonstration of each built-in function of a Set:

new Set(): Creates a new Set
```js
const mySet = new Set(); // Creates an empty Set
add(): Adds a new element to the Set
```

```js
mySet.add(1); // Adds the number 1 to the Set
mySet.add('Hello'); // Adds the string 'Hello' to the Set
mySet.add({a: 1, b: 2}); // Adds an object to the Set
```

delete(): Removes an element from a Set
```js
mySet.delete(1); // Removes the number 1 from the Set
```

has(): Returns true if a value exists
```js
console.log(mySet.has(1)); // Returns false, since 1 was removed in the previous step
console.log(mySet.has('Hello')); // Returns true, since 'Hello' is in the Set
```

clear(): Removes all elements from a Set
```js
mySet.clear(); // Empties the Set
```

forEach(): Invokes a callback for each element
```js
mySet.add(1);
mySet.add(2);
mySet.add(3);

mySet.forEach(value => {
  console.log(value);
});
// Output: 
// 1
// 2
// 3
```

values(): Returns an Iterator with all the values in a Set
```js
const valuesIterator = mySet.values();

for (const value of valuesIterator) {
  console.log(value);
}
// Output: 
// 1
// 2
// 3
```

keys(): Same as values()
```js
const keysIterator = mySet.keys();

for (const key of keysIterator) {
  console.log(key);
}
// Output: 
// 1
// 2
// 3
```

entries(): Returns an Iterator with the [value, value] pairs from a Set
```js
const entriesIterator = mySet.entries();

for (const [key, value] of entriesIterator) {
  console.log(`${key} = ${value}`);
}
// Output: 
// 1 = 1
// 2 = 2
// 3 = 3
```

### These are the built-in functions of a Set in JavaScript. You can use these methods to manipulate and iterate through Sets efficiently.