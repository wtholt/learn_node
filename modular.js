var fs = require('fs')
var path = require('path')

module.exports = function (file, ext, callback){
  fs.readdir(process.argv[2], function (err, list){
    if (err)
      return callback(err);

    list.forEach(function(file){
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })

    callback(null, list)
  })
}