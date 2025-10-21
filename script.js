/*
document.addEventListener('DOMContentLoaded', function () {
  const chapterSection = document.getElementById('chapter-section-id');
  chapterSection.style.backgroundColor = 'gold';
  chapterSection.style.padding = '20px';
  chapterSection.style.color = '#623d3d';

  const paragraph = document.getElementById('paragraph-id');
  paragraph.style.color = '#9b3c3c';
  paragraph.style.fontWeight = 'bold';

  
});

document.addEventListener('DOMContentLoaded', function () {

  const highlightParagraphs = document.getElementsByClassName(
    'highlight-paragraph');


  // Modify the styls of the selected elements

  for (let i = 0; i < highlightParagraphs.length; i++) {
    highlightParagraphs[i].style.border = '2px solid yellow';
    highlightParagraphs[i].style.borderRadius = '5px';
  }
  
});

*/

// Selecting the section with the class 'highlight-paragraph'

const section = document.querySelector('.highlight-paragraph');

// Adding an even listener to toggle the highlight on a click

section.addEventListener('click', function () {
  // Toggling the 'highlight' on the section
  this.classList.toggle('highlight');
});


// Using Var to declare vaiables


var number = 46;

function addNumber() {
  answer = number + 35;
  console.log(answer);
}

addNumber();

var count = 0; // Global scope Var example

function addNumberUp() {
  var count = 1;
  count++;
  console.log('Inside the function:', count);
}

addNumberUp();
console.log('Outside the function:', count);


let price = 10;

function calculateTotalPrice(quantity) {
 price = price * quantity;
  console.log('Price inside function:', price);
}

calculateTotalPrice(5);
calculateTotalPrice(10);
console.log('Total price Outside function:', price);


// Assigning a variable without the key word
fruit = 'apples';
console.log(fruit);

// Assigning variable with one keyword and multiple declarations separeted by ','

// var x = 3, y = 79, age = 43, name = 'Simon', enjoyescoding = true;



// Using  Let as a variable

/*
function example() {
  for ( var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

example();

*/
// Change the variable to let
/*
function example() {
  for ( let i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
}

example();

// Using  const as a variable


  if (true) {
    const z = 10;
    console.log(z);
  }

console.log(z);

*/


/*
// Const reassignment example


const y = 20;
y = 30;

*/

/*
const person = {
  name: 'John',
  age: 43
}

person.age = 31; // Modyfying a property.
person.city = 'New York'; // Adding a new property.
delete person.name; // Removing a property.

console.log(person); // Output { age: 31, city: 'New York'}


person = { name: 'Jane'};// TypeError: Assignment to const variable.

*/




// Types of Operators

// Declare variables
let secretNumber = 5;
let userGuess = 5;

// Use comparison

/*
if (userGuess <= secretNumber) {
  console.log('Congratulation! You guessed the secret number.')

} else {
  console.log('Sorry, your guess is incorrect. Try again!')
}

*/

// NOT logical operator( and urinary operator/single operand)

/*
if (!userGuess) {
  console.log('You haven\'t made a guess yet.')

} else {
  console.log('You have made a guess.')
}

*/

/*
// Binary operators(Logical ANN(&&))

if (userGuess > 0 && userGuess > 10) {
  console.log('Your guess is between 1 and 9.')

} else {
  console.log('Your guess is not between 1 and 9.')
}

*/

// THe OR (||) operator

if (userGuess < 1 || userGuess > 10) {
  console.log('Your guess is outside of the range 1 to 10.')

} else {
  console.log('Your guess is within the range 1 to 10..')
}