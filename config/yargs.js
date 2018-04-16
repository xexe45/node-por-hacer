const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un nuevo elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Borrar un elemento', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}