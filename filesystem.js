var fs = require('fs');

var str = fs.readFileSync(process.argv[2].toString());

var buf = str

var str = buf.toString();

var result = str.split('\n');

var sum = 0;

for(var i = 1, n = result.length; i < n; i++)
  {
    sum += parseInt(result[i]);
  }

console.log(result.length - 1);

