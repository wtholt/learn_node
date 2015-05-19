// my solution...with help from GitHub
var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, callback){
  ext = "." + ext;
  fs.readdir(dir, function (err, list){
    if (err)
      return callback(err);

    var results = new Array();
    for (var i = 0; i < list.length; i++)
    {
      if (path.extname(list[i]) === ext)
        results.push(list[i]);
    }

    callback(null, results);
  });
}

// official solution

// var fs = require('fs')
//     var path = require('path')

//     module.exports = function (dir, filterStr, callback) {

//       fs.readdir(dir, function (err, list) {
//         if (err)
//           return callback(err)

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }