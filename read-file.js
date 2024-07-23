const fs = require('fs');
const rutaArchivo = "/home/rodrigotapia/repaso-tarea/create-file.js";
const opciones = { encoding: 'utf8' };

const contenido = fs.readFileSync("/home/rodrigotapia/repaso-tarea/create-file.js", opciones);
console.log('Contenido del archivo:');