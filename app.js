const  {argv} = require('./config/yargs');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

const crear = (descripcion) => {
    const resultado= porHacer.crear(descripcion);
    console.log(resultado);
}

const listarTareas = () => {
    const listado = porHacer.listado();

    listado.forEach( (tarea) => {
        console.log('=============='.green);
        console.log('por hacer ');
        console.log(tarea.descripcion);
        console.log('estado',tarea.completado? ('completado'.green):('por hacer'.red));
        console.log('==============');
    })
}

const actualizarTarea = () => {
    const resultado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(resultado);

}

const borrarTarea = () => {
    const isDeleted = porHacer.boborrarrar(argv.descripcion);
    console.log( isDeleted? JSON.stringify(isDeleted).green:JSON.stringify(isDeleted).red );
}

switch (comando) {
    case 'crear':
        crear(argv.descripcion);
        break;
    case 'listar':
            listarTareas();
        break;
    case 'actualizar':
            actualizarTarea();
        break;
    case 'borrar':
            borrarTarea();
        break;
    default:
        console.log('no se encontro comando');
        break;
}