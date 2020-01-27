const process = require('process');

console.log('==== SYSTEM ====');
console.log('platform: ' + process.platform);
console.log('architecture: ' + process.arch);

console.log('\n==== NODEJS ====');
console.log('node version: ' + process.version);
console.log('v8 version: ' + process.versions.v8);
console.log('libuv version: ' + process.versions.zlib);

console.log('\n==== PROCESS ====');
console.log('pid: ' + process.pid);
console.log('title: ' + process.title);
console.log('current directory: ' + process.cwd());