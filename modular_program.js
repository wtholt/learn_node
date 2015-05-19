// my solution
var myModule = require('./modular.js');

var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir, ext, function(err, list){
  if (err)
    return console.log(err);

  for (var i = 0; i < list.length; i++)
  {
    console.log(list[i]);
  }
});

// official solution

// var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]

//     filterFn(dir, filterStr, function (err, list) {
//       if (err)
//         return console.error('There was an error:', err)

//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })
