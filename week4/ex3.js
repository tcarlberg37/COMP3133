const process = require('process');

process.on('exit', () => {
    console.log('process uptime on exit: ' + process.uptime());
    process.exit();
})

process.on('SIGINT', () => {
    console.log('process uptime on interrupt: ' + process.uptime());
    process.exit();
})

setInterval(() => null, 1000);