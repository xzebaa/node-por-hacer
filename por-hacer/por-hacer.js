const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = [];

const crear = async (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    const resultado = grabarDB();

    return { porHacer , resultado };
};

const grabarDB =  () => {
    let data = JSON.stringify(listadoPorHacer);

    // return new Promise( (resolve, reject) => {
        
        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err) return err;
            return (`el registro ha sido guardado`.green); 
        }); 
    //  })   
}

const listado = () => { 
    cargarDB(); 
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    console.log(descripcion, completado);
    let index = listadoPorHacer.findIndex( (tarea) => tarea.descripcion === descripcion );

    if( index >= 1 ){
        listadoPorHacer[index].completado=completado;
        grabarDB();
        return listadoPorHacer[index];
    }else{
        return 'no se encontro tarea';
    }
}

const borrar = (descripcion) => {
    cargarDB();
    const index = listadoPorHacer.findIndex( ( tarea ) => tarea.descripcion === descripcion );

    console.log(index);
    if( index >= 0){
        listadoPorHacer.splice(index, 1);
        grabarDB();
        return true;
    }else{
        return false;
    }

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
}

module.exports = { 
    crear, 
    listado,
    actualizar,
    borrar,
};