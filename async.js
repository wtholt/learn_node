// my solution

var fs = require('fs');

var solution = undefined

function addOne(callback){
  fs.readFile(process.argv[2], function doneReading(err, fileContents){
    solution = fileContents.toString().split('\n').length - 1
    solution++
    callback()
  })
}

function logMySolution() {
  console.log(solution - 1);
}

addOne(logMySolution);

// official solution

// var fs = require('fs')
//     var file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       // fs.readFile(file, 'utf8', callback) can also be used
//       var lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
