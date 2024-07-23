const fs = require('fs');
const rutaArchivo = "/home/rodrigotapia/repaso-tarea/nuevocopyFile.js";

try {
    fs.unlinkSync(rutaArchivo);
    console.log('Archivo eliminado exitosamente.');
} catch (error) {
    console.error('Error al eliminar el archivo:', error);
}
