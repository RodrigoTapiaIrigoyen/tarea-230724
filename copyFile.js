const fs = require('fs');
const rutaArchivoOrigen = "/home/rodrigotapia/repaso-tarea/create-file.js";
const rutaArchivoDestino = "/home/rodrigotapia/repaso-tarea/tercer_archivo.txt";

try {
    fs.copyFileSync(rutaArchivoOrigen, rutaArchivoDestino);
    console.log('Archivo copiado exitosamente.');
} catch (error) {
    console.error('Error al copiar el archivo:', error);
}
