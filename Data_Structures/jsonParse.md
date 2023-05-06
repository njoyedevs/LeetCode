JSON.parse() is a built-in method in JavaScript that is used to convert a JSON string into a JavaScript object or value. Here is a comprehensive explanation and demonstration of using JSON.parse():

To use JSON.parse(), you need to provide a JSON string as an argument. The method will then parse the string and return the corresponding JavaScript object or value.

Example 1: Parsing a simple JSON string into a JavaScript object
```js
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject);
// Output:
// {name: "John", age: 30, city: "New York"}
```

Example 2: Parsing a JSON string containing an array into a JavaScript array
```js
const jsonArrayString = '[{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]';
const parsedArray = JSON.parse(jsonArrayString);

console.log(parsedArray);
// Output:
// [{id: 1, name: "Alice"}, {id: 2, name: "Bob"}]
```

Example 3: Parsing a JSON string containing a nested object
```js
const jsonStringWithNestedObject = '{"name": "John", "age": 30, "address": {"city": "New York", "country": "USA"}}';
const parsedObjectWithNestedObject = JSON.parse(jsonStringWithNestedObject);

console.log(parsedObjectWithNestedObject);
// Output:
// {name: "John", age: 30, address: {city: "New York", country: "USA"}}
```

Example 4: Using a reviver function with JSON.parse()
You can also provide a second argument to JSON.parse(), called a reviver function, which can be used to modify the result or perform custom parsing.
```js
const jsonString = '{"name": "John", "birthDate": "1990-01-01"}';
const parsedObject = JSON.parse(jsonString, (key, value) => {
  if (key === 'birthDate') {
    return new Date(value);
  }
  return value;
});

console.log(parsedObject);
// Output:
// {name: "John", birthDate: Date(1990-01-01)}
```

These examples demonstrate how to use JSON.parse() to convert JSON strings into JavaScript objects or values, and optionally use a reviver function to modify the result.

<hr>

JSON.parse() can throw exceptions if the provided JSON string is not valid or well-formed. Here are some common exceptions that can occur:

SyntaxError: Unexpected token

This exception occurs when there is an unexpected token in the JSON string, such as a trailing comma, missing quotes, or an extra brace.
Example:
```js
try {
  const jsonString = '{"name": "John", "age": 30,}';
  const parsedObject = JSON.parse(jsonString);
} catch (error) {
  console.error(error);
  // Output: SyntaxError: Unexpected token , in JSON at position 25
}
```

SyntaxError: Unexpected end of JSON input

This exception occurs when the JSON string is abruptly terminated or incomplete.
Example:

```js
try {
  const jsonString = '{"name": "John", "age": ';
  const parsedObject = JSON.parse(jsonString);
} catch (error) {
  console.error(error);
  // Output: SyntaxError: Unexpected end of JSON input
}
```

SyntaxError: Unexpected string in JSON at position X

This exception occurs when an unexpected string is found in the JSON string, such as a missing comma between values.
Example:
```js
try {
  const jsonString = '{"name": "John" "age": 30}';
  const parsedObject = JSON.parse(jsonString);
} catch (error) {
  console.error(error);
  // Output: SyntaxError: Unexpected string in JSON at position 16
}
```

SyntaxError: Unexpected number in JSON at position X

This exception occurs when an unexpected number is found in the JSON string, such as a missing comma between values.
Example:
```js
try {
  const jsonString = '{"name": "John", 42}';
  const parsedObject = JSON.parse(jsonString);
} catch (error) {
  console.error(error);
  // Output: SyntaxError: Unexpected number in JSON at position 17
}
```

These are some of the common exceptions that can be thrown by JSON.parse() when parsing an invalid or ill-formed JSON string. It is good practice to wrap your JSON parsing code in a try-catch block to handle these exceptions gracefully.

SyntaxError: Unexpected token X in JSON at position Y

This exception can occur for various other unexpected tokens or characters in the JSON string.

Missing a comma between elements in an object:
```js
const jsonString = '{"key1": "value1" "key2": "value2"}';
// Throws SyntaxError: Unexpected token k in JSON at position 19
const parsedObject = JSON.parse(jsonString);
```

Using single quotes instead of double quotes:
```js
const jsonString = "{'key': 'value'}";
// Throws SyntaxError: Unexpected token ' in JSON at position 1
const parsedObject = JSON.parse(jsonString);
```

Trailing comma in an object:
```js
const jsonString = '{"key1": "value1", "key2": "value2",}';
// Throws SyntaxError: Unexpected token } in JSON at position 37
const parsedObject = JSON.parse(jsonString);
```

Invalid number format:
```js
const jsonString = '{"value": 42.2.3}';
// Throws SyntaxError: Unexpected token . in JSON at position 14
const parsedObject = JSON.parse(jsonString);
```

Incorrectly formatted JSON:
```js
const jsonString = '{key: "value"}';
// Throws SyntaxError: Unexpected token k in JSON at position 1
const parsedObject = JSON.parse(jsonString);
```

These examples demonstrate various cases where the JSON string is malformed, and parsing it using JSON.parse() would result in a SyntaxError: Unexpected token X in JSON at position Y exception. To avoid these errors, ensure that the JSON string is properly formatted before calling JSON.parse(). You can also use try-catch blocks to handle exceptions gracefully.

<hr>

Here are examples demonstrating instances where JSON.parse() might not work as expected or throw exceptions involving NAN, infinity, hexadecimal, large numbers, and other instances?:

NaN and Infinity
```js
// Throws SyntaxError: Unexpected token N in JSON at position 0
JSON.parse('{"value": NaN}');
```

Hexadecimal numbers
```js
// Throws SyntaxError: Unexpected token x in JSON at position 11
JSON.parse('{"value": 0x42}');
```

Large numbers
```js
const largeNumber = 1.2345678910111213e+308;
const jsonString = JSON.stringify({ value: largeNumber });
const parsedObject = JSON.parse(jsonString);

console.log(largeNumber === parsedObject.value); // Output: false (due to loss of precision)
```

Date objects
```js
const date = new Date();
const jsonString = JSON.stringify({ date: date.toISOString() });

// Reviver function to convert date string back into a Date object
const reviver = (key, value) => {
  if (key === "date") {
    return new Date(value);
  }
  return value;
};

const parsedObject = JSON.parse(jsonString, reviver);
console.log(parsedObject.date instanceof Date); // Output: true
```

Function objects and other non-serializable values
```js
const obj = {
  value: 42,
  func: function () {
    console.log("Hello, World!");
  },
  regex: /hello/i,
};

const jsonString = JSON.stringify(obj); // '{"value":42}'
const parsedObject = JSON.parse(jsonString);

console.log(parsedObject.func); // Output: undefined
console.log(parsedObject.regex); // Output: undefined
```

These examples demonstrate how JSON.parse() behaves in various scenarios that don't conform to the JSON specification. It's essential to preprocess your data or use alternative serialization methods when working with data types that JSON doesn't support. Also, always wrap JSON.parse() calls in try-catch blocks to handle exceptions gracefully.