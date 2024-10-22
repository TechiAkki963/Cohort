// Function calling other function
// callback function

const cutFruitPieces = function(fruits){
    return fruits * 4;
}

function fruitProcessor(apple, orange){
    const applePieces =  cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange)

    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces`
    return juice;
}

console.log(fruitProcessor(2,3));


// Function reviewing

const calcAge = function (birthYeaR){
    return 2037 - birthYeaR
}
const yearUntilRetirement = function(birthYear , firstName){
    const age = calcAge(birthYear)

    const retirement = 65 - age;
    if (retirement > 0){
        console.log( `${firstName} will retire in ${retirement} years`)
        return retirement;
    }
    else{
        console.log(`${firstName} will retire in ${retirement} years`)
        return -1;
    }
}

const result1= yearUntilRetirement(1994, 'Akshay')
console.log(result1)

const result2= yearUntilRetirement(1950, 'Sam')
console.log(result2)


// String Manipulation

function getLength (str){
    console.log(`Original Str: ${str}`)
    console.log(`Length: ${str.length}`)

}
getLength('Hello World')

