// COMP3133 Lab Test 1
// Thomas Carlberg 101155271

// Question 3
const fs = require('fs');
const path = require('path');
const process = require('process');

console.log('Current directory: ' + process.cwd());

if (!fs.existsSync('./Logs')) {
    fs.mkdirSync('./Logs');
    process.chdir('./Logs');
    for (var i = 0; i < 10; i++){
        fs.writeFile('log' + i + '.txt', 'this is log file ' + i, (err)  => {
        });
        console.log('log' + i + '.txt');
    }
} else {
    //process.chdir('./Logs'); // have to be inside the Logs directory first
    fs.readdir('./Logs', (error, files) => {
        files.forEach(file => {
            fs.unlink('./Logs/' + file, (err) => { // fs.unlink deletes files
                if (err) {
                    console.log(err);
                }
                console.log('Deleting ' + file);
            })
        })
        process.chdir('./') // go back up one directory so we can delete the Logs directory
        fs.rmdir('./Logs', (err) => { // delete the whole directory after deleting all the files in it
            if (err) {
                console.log(err);
            }
            console.log('Deleting Logs directory');
        }); 
    });
    
}
