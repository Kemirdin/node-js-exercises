/**
 * Example for Writeable Stream
 */

var fs = require ('fs');
var data = 'Some data for Writeable stream';

/* Create a writeable stream */
var ws = fs.createWriteStream ('output.txt');

/* Write data to stream with utf8 encoding */
ws.write (data, 'utf8');

/* Mark the end of the file: no more data to read */
ws.end ();

ws.on ('finish', function () {
  console.log ('Finished!');
});

ws.on ('error', function (err) {
  console.log (err.stack);
});
