In JavaScript, the Array.prototype.sort() function is used to sort the elements of an array in place, meaning that it modifies the original array. By default, the sort() function sorts the elements as strings. However, you can provide a custom compare function to define your own sorting logic.

Here is a comprehensive explanation and demonstration of different types of sorts using the Array.prototype.sort() function:

Default sorting (as strings):
```js
const arr = [5, 1, 10, 2, 8];
arr.sort();
console.log(arr); // Output: [1, 10, 2, 5, 8]
```

Numeric sorting (ascending order):
```js
const arr = [5, 1, 10, 2, 8];
arr.sort((a, b) => a - b);
console.log(arr); // Output: [1, 2, 5, 8, 10]
```

Numeric sorting (descending order):
```js
const arr = [5, 1, 10, 2, 8];
arr.sort((a, b) => b - a);
console.log(arr); // Output: [10, 8, 5, 2, 1]
```

Sorting objects based on a property (ascending order):
```js
const arr = [
  { id: 3, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Charlie' }
];
arr.sort((a, b) => a.id - b.id);
console.log(arr);
// Output: [{ id: 1, name: 'Bob' }, { id: 2, name: 'Charlie' }, { id: 3, name: 'Alice' }]
```

Sorting objects based on a property (descending order):
```js
const arr = [
  { id: 3, name: 'Alice' },
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Charlie' }
];
arr.sort((a, b) => b.id - a.id);
console.log(arr);
// Output: [{ id: 3, name: 'Alice' }, { id: 2, name: 'Charlie' }, { id: 1, name: 'Bob' }]
```

Sorting strings case-insensitively (ascending order):
```js
const arr = ['apple', 'Orange', 'banana', 'Pineapple'];
arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
console.log(arr); // Output: ["apple", "banana", "Orange", "Pineapple"]
```

Sorting sub-arrays based on a specific element (descending order):
```js
const arr = [
  ['apple', 5],
  ['orange', 1],
  ['banana', 10],
  ['pineapple', 2]
];
arr.sort((a, b) => b[1] - a[1]);
console.log(arr);
// Output: [["banana", 10], ["apple", 5], ["pineapple", 2], ["orange", 1]]
```

These examples cover various types of sorting, such as default, numeric, object-based, case-insensitive string sorting, and sorting sub-arrays based on a specific element.