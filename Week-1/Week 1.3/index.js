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


//Arrays

const arr = [1,2,3]
arr.push(2)
console.log(arr) //[1,2,3,2]

arr.unshift(5)
console.log(arr)  // [5,1,2,3,2]

arr.shift()
console.log(arr) // [1,2,3,2]

const arr2 = [4,5,6]
const finalarr = arr.concat(arr2)
console.log(finalarr)

//Foreach
const num = [10,20,30]

function eachNum(num){
    console.log(num)
}
num.forEach(eachNum)


// Classes
class Species{
    constructor(name, legCount, speaks ){
        this.name = name;
        this.legCount = legCount;
        this.speaks=speaks
    }
    static 
    speak(){
        console.log(`hi there ${this.speaks}`)
    }
}

const dog = new Species('dog',4,'bhow bhow')
dog.speak()