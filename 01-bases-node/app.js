
const { createFile } = require('./helpers/multiplicar');
const base = 5;

createFile( base )
.then( res =>{
    console.log('file created, is called:', res.fileName);
})
.catch( err =>{
    throw err;
});