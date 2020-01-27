const fs = require('fs');
const path = require('path');
const process = require('process');

console.log('Current directory: ' + process.cwd());
console.log('Command Arg Extension: ' + process.argv[2]); // process.argv gets command line arguments split by a space in an array

fs.readdir(process.cwd(), (error, files) => { // make sure to use all variables given by readdir callback (error and files)
    files.forEach(file => {
        console.log(file)
    });
})