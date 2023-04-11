
const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

createFile(argv.b, argv.l)
    .then(res => {
        console.log('file created, is called:', res.fileName);
    })
    .catch(err => {
        throw err;
    });