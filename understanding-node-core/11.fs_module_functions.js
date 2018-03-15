/* fs functions example */

var fs = require ('fs');
var path = './fs.txt';

//read the attribute of a file
fs.stat (path, function (err, stats) {
  console.log (stats);
});

//appended
fs.appendFile ('./fs-write.txt', '\n Appended data', function (err) {
  if (err) {
    throw err;
  }
  console.log ('File Appended');
});

//renamed
fs.rename ('./fs-write.txt', './fs-write.bak', function (err) {
  if (err) {
    throw err;
  }
  console.log ('File renamed');
});

//moving file
fs.rename ('./fs-write.txt', './content/fs-write.bak', function (err) {
  if (err) {
    throw err;
  }
  console.log ('File Moved!');
});

//deleted
fs.unlink ('./fs-write.bak', function (err) {
  if (err) throw err;
  console.log ('Deleted successfully!');
});

//change permission to readonly
fs.chmod ('./fs-write.txt', '444', function (err) {
  if (err) {
    throw err;
  }
  console.log ('Change Permission');
});
