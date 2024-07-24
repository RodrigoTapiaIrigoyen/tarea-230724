const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'koders.json');

const readData = () => {
    if (fs.existsSync(filePath)) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error al leer o analizar el archivo JSON:', error);
            return [];
        }
    }
    return [];
};

const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const [,, command, ...args] = process.argv;

switch (command) {
    case 'add':
        const newKoder = args.join(' ');
        if (newKoder) {
            const koders = readData();
            koders.push(newKoder);
            writeData(koders);
            console.log(`Koder ${newKoder} agregado.`);
        } else {
            console.log('Por favor proporciona un nombre para el nuevo koder.');
        }
        break;

    case 'ls':
        const kodersList = readData();
        if (kodersList.length > 0) {
            console.log('Lista de Koders:');
            kodersList.forEach((koder, index) => console.log(`${index + 1}. ${koder}`));
        } else {
            console.log('No hay Koders registrados.');
        }
        break;

    case 'rm':
        const koderToRemove = args.join(' ');
        if (koderToRemove) {
            let koders = readData();
            koders = koders.filter(koder => koder !== koderToRemove);
            writeData(koders);
            console.log(`Koder ${koderToRemove} eliminado.`);
        } else {
            console.log('Por favor proporciona el nombre del koder a eliminar.');
        }
        break;

    case 'reset':
        writeData([]);
        console.log('Todos los Koders han sido eliminados.');
        break;

    default:
        console.log('Comando no reconocido. Los comandos disponibles son: add, ls, rm, reset.');
        break;
}
