const fs = require('fs');
const rutaDirectorio = "/home/rodrigotapia/repaso-tarea";

try {
    fs.mkdirSync(rutaDirectorio);
    console.log('Directorio creado exitosamente.');
} catch (error) {
    console.error('Error al crear el directorio:', error);
}
