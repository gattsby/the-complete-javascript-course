//break down the code into functionalities, then invoke them in an order that makes sense and when necessary


// think as if you're writing out a set of instructions; like a recipe
// constant variable means the outcome will never change
// let variable means the value of it is likely to change, especially when changing the definitions of the key
2345678  // this is a number, these don't need and apostrophes or quotations in order to work, i guess js is just silly like that 🤪

let sentence ="hello world" // this is a string of characters, ya know, to make words and such

null //means the intentional absence of an object's value

undefined //absence of a value in which the value has not been determined

// boolean // a variable that can have a value of true or false

let friends = {
    Jake: 'is incredibly hot and sexy',
    Jacob: 'isn"t as incredibly hot and sexy',
    "hello world": sentence
}
    // this is in reference to the example_array below: but while this looks like a list, its better to think of a group of definitions for the different inputs you might use

// let example_array = [1, 5, 4, 8, 7, 23]
// arrays use the square brackets
// if using numbers, they have to be separated by commas 
// this is a storage of information
// index starts at 0, so in the above, 1 is in the 0 spot, 5 is in the 1 spot, and so on and so forth

let is_true = true
// this doesn't actually mean anything, just shows that you can assign any data type value to a variable

// console.log (example_array)
// log is a method, idk how to explain it yet

//this is a set of instructions you write one time, and then js will remember how to do the task for the rest of the file
function myFirstFunction (value, secondValue) {
    // multiplies two numbers
    console.log (value != secondValue)
    // console.log is what runs the function
    // parenthesis is what the function is doing
}

let multiplyTwoNumbers = myFirstFunction
// these are numerical operators... yay math 😅
// = means something... well... equals something
// + means addition 
// - means subtraction 
// * is multiplications
//  / is division
// % is modulous, another word for remainder, or what is left over

// these are comparison operators
// == asks if the first value is equal to the second in the function
// === this is more strict, they have to be the same, so no mixing script with numbers
// != the opposite of the first two


// functions helps group different related bodies of logic
// multiplyTwoNumbers (3, 5)
// multiplyTwoNumbers ('6', 6)
// multiplyTwoNumbers (7, 5)

// these are logical operators
// && means both condition 1 AND 2 are true
// || means either contition 1 OR 2 is true
// ! means neither condition 1 or 2 are true
// ! isn't used between conditions like the others, it assigns a single condition to be not true

let condition1 = true
let condition2 = false

// console.log (typeof example_array)

if (condition2 && condition1) {
    console.log ('hi mom, i love you',)

 } else if (condition1 || conditions2) {
    console.log ('one of the two was true, but what one???')
} else {
    console.log ('the value was false so suck it, no nice message')
}
// a good way to make sure a function isn't going to run every time

//loops!!!!!
let example_array = [1, 5, 7, 9, 4, 5, 6, 7, 3, 4, 5, 2342]
// i had to make the first time i typed this up top a comment because it was making my work below not work


let i = 0
let length = example_array.length
//while(i < length) {
   // console.log('value was true: ', i, example_array [i])
  //  i++
    //i++ is shorthand for i = i + 1, kinda neat, and -- is the same but for subtraction
// }

// for defines the bounds of the condition, which as shown below, there's 3 parts to it
// it appears you can be more specific with these
// for (let j = 0; j < length; j++) {

//     if (j % 2 === 6) {
//         break
//     }
//     console.log('value was true: ', j, example_array [j])

// }


// note to self: CHECK FOR TYPOS; i just spent like 15 minutes trying to figure out why this function wasn't working
function addStrings(string1 = 'default1', string2 = 'default2') {

    // if (!string1 || !string2) {
    //     console.log('You"re missing an input...')
    //     return                  // this function will break the loop
    // }                           // because the strings do exist down below, the above function didnt execute

    let concatString = string1 + ' ' + string2
    console.log(concatString) //concatonate: fancy word for adding things together (concat)
    // return concatString         // this will take the place of the missing 'mom' function that i deleted earlier
}


let newString = addStrings('hello')
console.log('The new string is:')