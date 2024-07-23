const fs = require('fs');
const rutaDirectorio = "/home/rodrigotapia/repaso-tarea";

try {
    const archivos = fs.readdirSync(rutaDirectorio);
    console.log('Contenido del directorio:', archivos);
} catch (error) {
    console.error('Error al leer el directorio:', error);
}
