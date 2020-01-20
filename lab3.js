// COMP3133 Lab 3 Practice Questions
// Thomas Carlberg 101155271

// Ex 1
const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9]);
const buffer_string = Buffer.from("I'm a string!", "utf-8");

console.log(buffer_string.toString());
console.log(buffer_string.toString('hex'));
console.log(buffer_string.toString('utf-8', 0, 10));
const buffer_concat = Buffer.concat([buffer_array, buffer_string]);
console.log(buffer_concat);
console.log(JSON.stringify(buffer_concat));


// Ex 2
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const EventEmitter = require('events');
const convert = new EventEmitter();

convert.addListener('convert', (buffer) => {
    buffer.forEach(element => {
        console.log(element)
    });
    console.log('buffer converted')
})
convert.emit('convert', buf);
