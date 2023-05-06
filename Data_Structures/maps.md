In JavaScript, a Map is a built-in object that allows you to store key-value pairs, where keys can be of any data type and are not restricted to strings or symbols as they are with Objects. Here is a comprehensive explanation and demonstration of each built-in function of a Map:

new Map(): Creates a new Map
```js
const myMap = new Map(); // Creates an empty Map
set(): Adds a new key-value pair to the Map
```

```js
myMap.set(1, 'one'); // Adds the key-value pair (1, 'one') to the Map
myMap.set('two', 2); // Adds the key-value pair ('two', 2) to the Map
myMap.set({a: 1}, 'object'); // Adds the key-value pair ({a: 1}, 'object') to the Map
```

get(): Retrieves the value associated with a key
```js
console.log(myMap.get(1)); // Returns 'one'
console.log(myMap.get('two')); // Returns 2
console.log(myMap.get({a: 1})); // Returns undefined, because the object provided is a new reference
```

delete(): Removes a key-value pair from a Map
```js
myMap.delete(1); // Removes the key-value pair with the key 1 from the Map
```

has(): Returns true if a key exists
```js
console.log(myMap.has(1)); // Returns false, since 1 was removed in the previous step
console.log(myMap.has('two')); // Returns true, since 'two' is in the Map
```

clear(): Removes all key-value pairs from a Map
```js
myMap.clear(); // Empties the Map
```

forEach(): Invokes a callback for each key-value pair
```js
myMap.set(1, 'one');
myMap.set(2, 'two');
myMap.set(3, 'three');

myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});
// Output: 
// 1 = one
// 2 = two
// 3 = three
```

keys(): Returns an Iterator with all the keys in a Map
```js
const keysIterator = myMap.keys();

for (const key of keysIterator) {
  console.log(key);
}
// Output: 
// 1
// 2
// 3
```

values(): Returns an Iterator with all the values in a Map
```js
const valuesIterator = myMap.values();

for (const value of valuesIterator) {
  console.log(value);
}
// Output: 
// one
// two
// three
```

entries(): Returns an Iterator with the [key, value] pairs from a Map
```js
const entriesIterator = myMap.entries();

for (const [key, value] of entriesIterator) {
  console.log(`${key} = ${value}`);
}
// Output: 
// 1 = one
// 2 = two
// 3 = three
```