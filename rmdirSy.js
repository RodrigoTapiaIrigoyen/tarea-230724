const fs = require('fs');
const rutaDirectorio = '/home/rodrigotapia/repaso-tarea/preubarmdir';

try {
    fs.rmdirSync(rutaDirectorio);
    console.log('Directorio eliminado exitosamente.');
} catch (error) {
    console.error('Error al eliminar el directorio:', error);
}
