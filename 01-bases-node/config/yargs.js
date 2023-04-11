const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true
                    })
                    .option('l', {
                        alias: 'list',
                        type:'boolean',
                        default: false,
                        describe: 'show table into console'
                    })
                    .check( (argv, options) =>{
                        if ( isNaN(argv.b)){
                            throw 'base should be a number'
                        }
                        return true;
                    } )
                    .argv;

module.exports = argv;