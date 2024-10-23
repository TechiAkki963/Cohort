// Loops
let sum = 0;
for (let i=0; i<=100;i++){
    sum = sum + i;
   console.log(sum) 
}

// Callback Functions

const square = function (side){
    return side*side;
}

const cube = function(side){
    return side*side*side
}

const sumOfShape = function (a,b, callbackfn){
    const val1 = callbackfn(a);
    const val2 = callbackfn(b);

    return val1 + val2;
}
console.log(sumOfShape(2, 2, cube));
