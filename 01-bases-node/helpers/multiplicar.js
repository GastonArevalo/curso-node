const fs = require('fs');


const createFile = (base = 5) =>{

    return new Promise( (resolve, reject) =>{

        let salida = "";
        for(let count = 1; count <= 10; count++){
            salida += `${base} x ${count} = ${base * count}\n`;
        }
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida)
        
        resolve({fileName: `tabla-${base}.txt`});

    })

}

module.exports = {
    createFile
}