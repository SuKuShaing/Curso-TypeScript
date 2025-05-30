// Listas en TypeScript
console.log("LISTAS EN TYPESCRIPT");

let nombres: string[] = ["Juan", "Ana", "Pedro", "Maria"];
let edades: number[] = [25, 30, 22, 28];

console.log("Nombres:", nombres);
console.log("Edades:", edades);

let mixto: any[] = ["Juan", 25, true];
let stgYNum: (string | number)[] = ["Juan", 25, "Ana", 30];

console.log("Mixto:", mixto);
console.log("stgYNum:", stgYNum);


console.log("-----------------------");
console.log("INTERFACES");

// Interface

// Es una forma de definir la estructura de un objeto, y como TS es tipado es muy útil ya que nos permite establecer que propiedades y tipos debe tener un objeto sin necesidad de inicializarlo

interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

// se hereda Person porque está en el mismo archivo
let personas: Persona[] = [
    { nombre: "Juan", edad: 25, esDesarrollador: true },
    { nombre: "Ana", edad: 30, esDesarrollador: false },
    { nombre: "Pedro", edad: 22, esDesarrollador: true },
    { nombre: "Maria", edad: 28, esDesarrollador: false }
];

console.log("Personas:", personas);

personas.push({ nombre: "Luis", edad: 35, esDesarrollador: true });
console.log("Personas después de agregar a Luis:", personas);

console.log("-----------------------");
console.log("TUPLAS");

// Tuplas
// En TypeScript, una tupla es un tipo especial de arreglo donde puedes definir el tipo y el número exacto de elementos que debe contener.

// Cuando transpilas tu código TypeScript a JavaScript, las tuplas se convierten en arreglos normales. JavaScript no tiene el concepto de tuplas, así que la verificación de tipos y el orden solo existen en tiempo de compilación con TypeScript.

let personaTupla: [string, number, boolean];
personaTupla = ["Juan", 25, true]; // no se le puede otro tipo de dato u otro dato
// personaTupla = ["Ana", 30]; // Error: falta el booleano
// personaTupla = [25, "Juan", true]; // Error: el orden y tipo no coinciden

console.log("Tupla Persona:", personaTupla);


// array de tuplas
let personaTuplaArray: [string, number, boolean][] = [];

personaTuplaArray.push(["Ana", 30, false]);
personaTuplaArray.push(["Pedro", 22, true]);
personaTuplaArray.push(["Maria", 28, false]);

console.log("Array de Tuplas Persona:", personaTuplaArray);


personaTuplaArray.forEach((persona) => {
    console.log("Persona en array de tuplas:", persona);

    let nombre: string = persona[0];
    let edad: number = persona[1];
    let esDesarrollador: boolean = persona[2];

    console.log(`Nombre: ${nombre}, Edad: ${edad}, Desarrollador: ${esDesarrollador}`);
});

console.log("-----------------------");
console.log("ENUMERADORES");

// Enumeradores
enum DiaDeLaSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let dia: DiaDeLaSemana = DiaDeLaSemana.Martes;
console.log("Día de la semana:", dia); // Imprime el índice del enum, en este caso 1 para Martes
console.log("Día de la semana (nombre):", DiaDeLaSemana[dia]); // Imprime el nombre del enum, en este caso "Martes"