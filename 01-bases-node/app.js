
const { createFile } = require('./helpers/multiplicar');
// const base = 5;

console.log(process.argv)

const [, , arg3 = "base=5"] = process.argv
const [, base] = arg3.split('=')

console.log(base)
createFile(base)
    .then(res => {
        console.log('file created, is called:', res.fileName);
    })
    .catch(err => {
        throw err;
    });