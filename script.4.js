// Concatenation
let firstName = 'Anna';
let lastName = 'Perszovok';
let age = 34;

//let fullName = firstName + ' ' + lastName;
let fullName = `${firstName} ${lastName}`;

console.log(fullName);


// JavaScript for Math
/*
let a = 40;
let b = 5;
let sum = a + b;

console.log(sum);

*/

// Compound operators
let a = 40;

//let sum = (a = a + 5);   OR
let addition = (a += 5);
console.log(addition);



let value = -4.7;

let absoluteValue = Math.abs(value);
console.log(absoluteValue);


let roundedValue = Math.round(value);
console.log(roundedValue);

let floorRound = Math.floor(value);
console.log(floorRound);


console.log(Math.round(3.5));




let numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = sum / numbers.length;
console.log('Average:', average);

