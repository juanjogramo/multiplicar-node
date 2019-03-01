const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('==================='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base no es un número');
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        let fileName = `tabla-${base}-al-${limite}.txt`
        let path = `tablas/` + fileName

        fs.writeFile(path, data, (err) => {
            if (err) reject(err);
            else
                resolve(`${fileName}`);
        });

    });
};

module.exports = {
    crearArchivo,
    listarTabla
}