JavaScript has several built-in data structures that are commonly used to store and manipulate data. The most frequently used JavaScript data structures include:

## Arrays
Arrays are ordered collections of elements, where each element can be of any type. Elements in an array are accessed using their index (zero-based).
```js
const fruits = ['apple', 'banana', 'orange'];
```

## Objects
Objects are unordered collections of key-value pairs, also known as properties. The keys are strings or Symbols, while the values can be of any type.
```js
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
```

## Sets
Sets are collections of unique values, where each value can be of any type. Sets are useful when you need to store a list of distinct values without duplicates.
```js
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);
```

## Maps
Maps are collections of key-value pairs, similar to objects, but with more flexible keys. Keys in a Map can be of any type (not just strings or Symbols).
```js
const myMap = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'New York']
]);
```

## WeakSets
WeakSets are collections of unique object references, where the object references are weakly held. This means that the garbage collector can remove an object from a WeakSet if no other part of the code is using it.
```js
const myWeakSet = new WeakSet([{ a: 1 }, { b: 2 }]);
```

## WeakMaps
WeakMaps are collections of key-value pairs, similar to Maps, but with weakly held object keys. WeakMaps allow for the garbage collector to remove key-value pairs when the keys are no longer used elsewhere in the code.
```js
const myWeakMap = new WeakMap([
  [{ a: 1 }, 'value1'],
  [{ b: 2 }, 'value2']
]);
```

These are the primary built-in data structures in JavaScript. Each has its specific use cases, and you can use them individually or in combination to model and manage data in your JavaScript applications.

<hr>

In addition to the primary built-in data structures mentioned earlier, JavaScript also has a few more specialized data structures available:

## Typed Arrays
Typed Arrays are fixed-size, array-like structures designed for working with binary data. They provide efficient ways to manipulate raw binary data, such as in graphics, audio, or other performance-sensitive applications. There are several types of Typed Arrays, including Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, and Float64Array.
Example:
```js
const myInt8Array = new Int8Array(3); // Creates a new Int8Array with a length of 3
myInt8Array[0] = 42;
```

## ArrayBuffer
ArrayBuffer is a fixed-size, raw binary data buffer used to represent generic, fixed-length binary data. You typically use ArrayBuffers in combination with Typed Arrays or DataView to manipulate binary data.
Example:
```js
const buffer = new ArrayBuffer(16); // Creates a new ArrayBuffer with a length of 16 bytes
```

## DataView
DataView is a low-level interface for reading and writing multiple types of data on an ArrayBuffer, allowing you to work with binary data in a more fine-grained manner.
Example:
```js
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);
view.setInt8(0, 42); // Sets the first byte of the buffer to 42
```

## String
Although not a typical data structure, Strings are often used as data structures in JavaScript for storing and manipulating sequences of characters. They are immutable and have several built-in methods for searching, replacing, and modifying text.
Example:
```js
const myString = 'Hello, World!';
```

## Promises
Promises are not traditional data structures, but they represent asynchronous values and are used extensively in JavaScript for handling asynchronous operations.
Example:
```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});
```

These are additional data structures in JavaScript that you may encounter in various scenarios. Some are specialized for specific use cases, while others are more general-purpose. Understanding these data structures and their use cases will help you work more effectively with data in JavaScript.

<hr>

While JavaScript doesn't have many other built-in data structures, there are data structures from third-party libraries or ones you can implement using JavaScript's existing built-in data structures. Here are some general-purpose and specialized data structures you might encounter or implement:

## Stacks
A Stack is a Last-In-First-Out (LIFO) data structure where elements are added and removed from the top. You can use Arrays to create a simple Stack in JavaScript.
Example:
```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}
```

## Queues
A Queue is a First-In-First-Out (FIFO) data structure where elements are added to the rear and removed from the front. You can use Arrays or Linked Lists to create a Queue in JavaScript.
Example:
```js
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }
}
```

## Linked Lists
A Linked List is a linear data structure where elements are stored in nodes, and each node points to the next node. There are several types of Linked Lists, including Singly Linked Lists, Doubly Linked Lists, and Circular Linked Lists.
Example (Singly Linked List):
```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Other methods for adding, removing, and searching nodes
}
```

## Trees
A Tree is a hierarchical data structure consisting of nodes connected by edges. There are various types of trees, such as Binary Trees, Binary Search Trees, AVL Trees, and Trie.
Example (Binary Search Tree):
```js
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Other methods for inserting, searching, deleting, and traversing nodes
}
```

## Graphs
A Graph is a non-linear data structure consisting of nodes (or vertices) connected by edges. Graphs can be represented using adjacency lists or adjacency matrices.
Example (using adjacency list):
```js
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Methods for adding vertices, adding edges, and traversing the graph
}
```

## Heaps
A Heap is a specialized tree-based data structure that satisfies the heap property. The most common types of heaps are Min-Heaps and Max-Heaps.
Example (Min-Heap):
```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Methods for inserting, deleting, and retrieving the minimum element
}
```

These are some examples of general-purpose and specialized data structures that you might encounter or implement in JavaScript. Depending on your specific use case, you might need to use one or more of these data structures or even create your custom data structure tailored to your requirements.