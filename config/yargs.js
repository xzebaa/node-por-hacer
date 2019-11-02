const descripcion = {
        alias: 'd',
        demand: true,
    }  
;
const completado = {
        alias: 'c',
        default: true,
};

const argv = require('yargs')
                .command('crear', 'se agrega una nueva tarea', { descripcion })
                .command('actualizar', 'actualiza el estado de una tarea', { completado, descripcion})
                .command('borrar', 'borra una tarea', { descripcion})
                .help()
                .argv;


module.exports = { argv }