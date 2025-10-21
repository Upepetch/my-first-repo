/*

// Array of numerical values
let numbers = [1, 2, 3, 4, 5];

// Array of strings
let fruits = ['apple', 'banana', 'orange', 'grape'];

// Array of mixed data types
let mixedArray = [1, 'hello', true, null, {name: 'John'}, [1, 2, 3]];

// Array of objects
let students = [
  { name: 'john', age: 20 },
  { name: 'Jane', age: 22 },
  { name: 'Mark', age: 21 },

];

// Array of other arrays the we call a matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Array of other arrays with different lengths
let nestedArray = [
  ['a', 'b', 'c'],
  ['d', 'e'],
  ['f', 'g', 'h', 'i'],
];

// An empty array
let emptyArray = [];

*/


  const books = [
    'Lord of the Rings', 
    'To Kill a Mockingbird',
    '1984',
    'The Alchemist', 
    'The Great Gatsby'
  ];
//console.log(books);

console.log(books[4]);


// For adding another value(length)
books[books.length] = 'A vida e bela';
console.log(books)

// For defining specific position/ index.
books[10] = 'Start With Why';
console.log(books);
