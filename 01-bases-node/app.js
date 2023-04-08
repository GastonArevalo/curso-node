const fs = require('fs');

let salida = "";
const base = 5;
for(let count = 1; count <= 10; count++){
    salida += `${base} x ${count} = ${base * count}\n`;
}
console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if(err) throw err;

    console.log(`Archivo tabla de ${base} creado`);
})