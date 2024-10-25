
// const fs = require('fs');

// function readFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//        cb(data)
//     })
// }

// function onDone(data){
//     console.log(data)
// }

// readFile(onDone)


const fs = require('fs');

function readFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data)
         })
    })
    
}

function onDone(data){
    console.log(data)
}

readFile().then(onDone)