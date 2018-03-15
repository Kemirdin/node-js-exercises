const buf = new Buffer (2);
buf[0] = 1;
buf[1] = 2;
console.log (buf);
console.log (buf.length);

//creating buffer from array

const arr = [1, 2, 3, 4];
const buff = new Buffer (arr);
console.log (buff);

//creating buffer from string
const buffer = new Buffer ('hello world!');
console.log (buffer);
console.log (buffer.length);

//Decode Buffers
const buffer = new Buffer ('hello world!');
console.log (buffer);
console.log (buffer.toString ()); //Hello World!
console.log (buffer.toString ('ascii')); //Hello World!
console.log (buffer.toString ('binary')); //Hello World!
console.log (buffer.toString ('hex')); //48656c6c6f20576f726c6421
console.log (buffer.toString ('base64')); //SGVsbG8gV29ybGQh
