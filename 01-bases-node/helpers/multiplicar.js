const fs = require('fs');


const createFile = async (base = 5) =>{

let salida = "";
for(let count = 1; count <= 10; count++){
    salida += `${base} x ${count} = ${base * count}\n`;
}
console.log(salida);

fs.writeFileSync(`tabla-${base}.txt`, salida)

return {fileName: `tabla-${base}.txt`}

}

module.exports = {
    createFile
}