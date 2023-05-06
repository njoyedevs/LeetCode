# Here's a list of basic regex symbols and expressions to help you build your own regex patterns:

## Beginning the Regex string

The forward slashes (/) are not part of the regex symbols or expressions themselves, but they are used as delimiters in some programming languages, such as JavaScript, to indicate the start and end of a regex pattern.

For example, in JavaScript:
```js
const regex = /[a-z]/;
```

Here, the forward slashes (/) are used to enclose the regex pattern [a-z], which matches any lowercase letter from 'a' to 'z'.

In some other languages, like Python, you don't use forward slashes to delimit regex patterns. Instead, you represent regex patterns as strings:
```py
import re
regex = r'[a-z]'
```

In this case, the r prefix before the string indicates a raw string, which is used to avoid escaping backslashes in regex patterns.

So, the forward slashes (/) are not regex symbols or expressions themselves but are used to delimit regex patterns in certain programming languages.

<hr>

## Regex Characters

Literal characters: Any character that matches itself, e.g., 'a', '1', '%', etc.

Metacharacters: Special characters with a specific meaning in regex patterns:

```js
.: Matches any single character, except newline characters.
^: Asserts the position at the start of a line.
$: Asserts the position at the end of a line.
*: Matches the preceding element 0 or more times.
+: Matches the preceding element 1 or more times.
?: Matches the preceding element 0 or 1 time.
{m,n}: Matches the preceding element at least 'm' times and at most 'n' times.
{m}: Matches the preceding element exactly 'm' times.
|: Alternation, matches either the expression before or after the '|'.
[...]: Character class, matches any single character in the brackets.
[^...]: Negated character class, matches any single character NOT in the brackets.
(…): Capturing group, groups multiple elements together as a single unit.
(?:…): Non-capturing group, groups multiple elements without capturing the matched text.
\: Escapes metacharacters to match them as literal characters, e.g., \., \\, \*.
```

Character classes (shortcuts):

```js
\d: Matches any digit (0-9).
\D: Matches any non-digit character.
\w: Matches any word character (letters, digits, or underscores).
\W: Matches any non-word character.
\s: Matches any whitespace character (space, tab, newline, etc.).
\S: Matches any non-whitespace character.
```

Assertions (lookaround):

```js
(?=…): Positive lookahead, asserts that the pattern inside the parentheses can be matched after the current position.
(?!…): Negative lookahead, asserts that the pattern inside the parentheses cannot be matched after the current position.
(?<=…): Positive lookbehind, asserts that the pattern inside the parentheses can be matched before the current position.
(?<!…): Negative lookbehind, asserts that the pattern inside the parentheses cannot be matched before the current position.
```

Flags: Modify the behavior of the regex pattern:

```js
g: Global search, searches for all matches in the input string.
i: Case-insensitive search.
m: Multiline mode, treats ^ and $ as start and end of a line, not just the string.
s: Dotall mode, makes the . metacharacter match newline characters as well.
u: Unicode mode, treats the input string as Unicode and enables some Unicode-specific features.
y: Sticky mode, searches for the next match starting exactly at the lastIndex property of the regex object.
```

This list covers the most common regex symbols and expressions. You can use these building blocks to create your own regex patterns for various purposes. Keep in mind that regex syntax can vary slightly between programming languages, so make sure to consult the documentation for the specific language you're working with.