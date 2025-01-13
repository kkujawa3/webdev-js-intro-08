// Prevent us from attempting to use variables
// that are not declared
"use strict"
/*
// Array and loop thru, logging out each value
let num =[10, 18, 37, 64, 99];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);                           // output: 10, 18, 37, 64, 99
}

// Array and loop, logging out each value using for...of
let nextNumbs = [5, 14, 29, 56, 62, 88];
for (let nextNumb of nextNumbs) {
    console.log(nextNumb);                        // output: 5, 14, 29, 56, 62, 88
}

// array and loop, logging out each value using the array.forEach()
const digits = [12, 21, 42, 66, 79];
digits.forEach(function(digits) {
    console.log(digits);                       // output: 12, 21, 42, 66, 79
})


// Loop thru array using for..of, try assigning all elements a new value
let arrs = [5, 6, 8, 10];
for (let value of arrs) {
    value = value * 2;                            // assigning a new value, doesn't change original array
}
console.log(arrs);                                // (4) [5, 6, 8, 10]


// Loop thru array using array.forEach(), try assigning all elements a new value
let arr1 = [1, 4, 6, 9];
arr1.forEach(function(element) {
    element = element * 2;
    console.log(element);                         // output: 2, 8, 12, 18 ~ This will double values, but array is unchanged   
});
console.log(arr1);                                // output: (4) [ 1, 4, 6, 9]
*/

// research for...in loop
// Syntax for a for...in loop is:
// for(variable in object)
//    statement 

// The loop will iterate over all enumerble properties of the object itself and those 
// objects inherits from it prototype chain. Can also use break and continue statements.
// The variable aceptd aything that comes before the = operator. */

// trying example found to try to understand this
/*
const object = { a: 1, b:2, c:3 };

for (const property in object) {
    console.log('${property}: = ${object[property]}');    // expected output: "a: 1" "b: 2" "c: 3"
}                                                         // my output: ${property}: ${object[property]}
// I will continue to go over this more
*/




