// my solution
var fs = require('fs');
var path = require('path');
var ext = process.argv[3];

var solution = undefined

function makeList(callback) {
  fs.readdir(process.argv[2], function doneReading(err, data){
    solution = data.filter(function(data){
      return (path.extname(data).split('.').join("") === ext);
    });
    callback()
  })
}

function logMySolution() {
  solution.forEach(function (solution){ console.log(solution)});
}

makeList(logMySolution)

// official solution

// var fs = require('fs')
//     var path = require('path')

//     fs.readdir(process.argv[2], function (err, list) {
//       list.forEach(function (file) {
//         if (path.extname(file) === '.' + process.argv[3])
//           console.log(file)
//       })
//     })