# Express API for JavaScript Basics

This is an Express API that provides functionality for basic JavaScript concepts such as arrays, booleans, numbers, objects, and strings. The API has been developed to work with the previously written javascript-basics code.
Getting started

Make sure you have Visual Studio Code installed and updated to the latest version. Also, ensure that you have the ESLint extension installed and enabled.

## Clone the repository and navigate to the project folder:

```bash

git clone git@github.com:MCRcodes/javascript-basics-express.git
cd javascript-basics-express

```

## Install the dependencies:

```bash

npm install

```

## Copy over your JavaScript Basics code

```css
src
├── app.js
└── lib
    ├── arrays.js
    ├── booleans.js
    ├── numbers.js
    ├── objects.js
    └── strings.js
```

## Running tests

You can run tests with the command:

```bash

npm test

```

## API Endpoints

### GET /arrays/element-at-index/:index

Returns the element at the specified index of an array.

### POST /arrays/append

Appends a value to an array and returns the resulting array.

### POST /arrays/remove-element

Removes the element at the specified index from an array and returns the resulting array.

### GET /booleans/negate/:value

Returns the negation of a boolean value.

### GET /booleans/truthiness/:value

Returns a string indicating the truthiness of a value.

### GET /numbers/add/:a/and/:b

Adds two numbers and returns the result.

### GET /numbers/power/:base/to-the/:exponent

Raises a base number to a specified exponent and returns the result.

### POST /numbers/round

Rounds a number to a specified number of decimal places and returns the result.

### GET /objects/merge

Merges two objects and returns the resulting object.

### GET /objects/has-property/:property

Returns true if an object has the specified property, false otherwise.

### GET /strings/characters/:string

Returns the number of characters in a string.

### GET /strings/first-character/:string

Returns the first character of a string.

### GET /strings/last-character/:string

Returns the last character of a string.

### GET /strings/character-at-index/:string/:index

Returns the character at a specified index in a string.

### GET /strings/first-characters/:string

Returns the first character of a string, or the first n characters if a length parameter is specified.
