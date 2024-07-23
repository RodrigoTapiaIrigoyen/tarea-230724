const fs = require('fs');
const rutaArchivo = "/home/rodrigotapia/repaso-tarea/create-file.js";
const datosParaAgregar = 'hola roy.';

try {
    fs.appendFileSync("/home/rodrigotapia/repaso-tarea/create-file.js", datosParaAgregar);
    console.log('Datos agregados correctamente al archivo.');
} catch (error) {
    console.error('Error al agregar datos al archivo:', error);
}
