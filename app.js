
// Arrow Functions

let favMovie = (movie = 'The Room', name = 'Tommy Wiseau') => console.log(`My name is ${name} and my favorite movie is ${movie}`);


//First name function
let getFirstName = (fullName) => {
let firstName = fullName.split(' ')
console.log(firstName[0])
}

//First name concise function
let getFirstNameConcise = (fullName) => console.log(fullName.split(' ')[0])

getFirstName('Harrison')
getFirstNameConcise('Harrison Bender')

let doMath = (a, b) => {
    return {
        exponent: Math.pow(a, b),
        product: a * b
    }
}

console.log(`the exponent of 5 and 10 is ${doMath(5, 10).exponent} and the product is ${doMath(5,10).product}!`)



// Spread Syntax

let meArray = ['Harrison', 'Birmingham', 'Any Asian Food'];


let whoAmI = (name, location, favFood) => {
    console.log(`My name is ${name}, i live in ${location}, and my favorite food is ${favFood}`);
};

whoAmI(...meArray);

let myName = 'Harrison';

let newFunction = (name) => {
    let nameArray = [...name];

    for ( let i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i])
    }
}

newFunction(myName)