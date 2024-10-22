const arr = [10, 5, 20, 3, 15];

let greatestNumber = arr[0];

for (let i=0; i < arr.length; i++){
    if(greatestNumber < arr[i]){
        greatestNumber = arr[i]
    }
}

console.log(greatestNumber);


// Printing 0 to 1000 using for loop
for (let i = 0; i <= 1000; i++) {
    console.log(i);
  }


// Arrays
const fruits = ["apple", "banana", "orange"];

// Accessing elements
console.log(fruits[0]); // Output: apple
console.log(fruits[fruits.length - 1]); // Output: orange

// Modifying elements
fruits[1] = "grapefruit";
console.log(fruits); // Output: ["apple", "grapefruit", "orange"]

// Adding elements
fruits.push("mango");
console.log(fruits); // Output: ["apple", "grapefruit", "orange", "mango"]

// Removing elements
const removedFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "grapefruit", "orange"]
console.log(removedFruit); // Output: mango

// Joining elements
const fruitsString = fruits.join(", ");
console.log(fruitsString); // Output: apple, grapefruit, orange


// Object
const person = {
    name: "Alice",
    age: 30,
    greet: function() {
      console.log("Hello, my name is " + this.name);
    }
  };
  
  person.greet(); // Output: Hello, my name is Alice

//callback function

function sum (num1,num2,fnToCall){
    let result =num1 + num2;
    fnToCall(result)
}


// Settimeout

function greet(){
    console.log("Hello World")
}

setTimeout(greet,1000)


