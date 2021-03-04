const fs = require("fs");
var filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  console.log(err);
  var nbLines = data.toString().split("\n").length - 1;
  console.log(nbLines);
});
