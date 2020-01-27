const { fork } = require('child_process');

const compute = fork('compute.js');

compute.on('message', (message) => {
    console.log('compute.js message: ' + message);
});

compute.send('message');