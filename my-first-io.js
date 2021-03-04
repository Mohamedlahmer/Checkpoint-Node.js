const fs = require("fs");
var filePath = fs.readFileSync(process.argv[2]);
var filePathStr = filePath.toString();
var splitFilePathStr = filePathStr.split("\n");
var nbLines = splitFilePathStr.length - 1;
console.log(nbLines);
