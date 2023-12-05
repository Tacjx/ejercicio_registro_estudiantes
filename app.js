const readline = require('readline-sync');
const { mostrarListaEstudiantes } = require('./lista_estudiantes');
const registrarEstudiantes = () => { 
    const cantidadEstudiantes=readline.question("¿Cuántos estudiantes deseas registrar?");
    const estudiantes=[];

    for (let i = 0; i < cantidadEstudiantes; i++) {
        const nombre = readline.question(`Ingresa el nombre del estudiante ${i+1}: `);
        const edad = readline.question(`Ingresa la edad del estudiante ${i+1}: `);
        const estudiante = { nombre, edad };
        estudiantes.push(estudiante);
    }

    mostrarListaEstudiantes(estudiantes);
};



registrarEstudiantes();
