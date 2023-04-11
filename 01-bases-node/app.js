
const { createFile } = require('./helpers/multiplicar');
const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    })
                    .option('l', {
                        alias: 'list',
                        type:'boolean',
                        default: false
                    })
                    .check( (argv, options) =>{
                        if ( isNaN(argv.b)){
                            throw 'base should be a number'
                        }
                        return true;
                    } )
                    .argv;


console.log("base: yargs", argv)

createFile(argv.b, argv.l)
    .then(res => {
        console.log('file created, is called:', res.fileName);
    })
    .catch(err => {
        throw err;
    });