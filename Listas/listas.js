// Listas en TypeScript
console.log("LISTAS EN TYPESCRIPT");
var nombres = ["Juan", "Ana", "Pedro", "Maria"];
var edades = [25, 30, 22, 28];
console.log("Nombres:", nombres);
console.log("Edades:", edades);
var mixto = ["Juan", 25, true];
var stgYNum = ["Juan", 25, "Ana", 30];
console.log("Mixto:", mixto);
console.log("stgYNum:", stgYNum);
console.log("-----------------------");
console.log("INTERFACES");
// se hereda Person porque está en el mismo archivo
var personas = [
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
var personaTupla;
personaTupla = ["Juan", 25, true]; // no se le puede otro tipo de dato u otro dato
// personaTupla = ["Ana", 30]; // Error: falta el booleano
// personaTupla = [25, "Juan", true]; // Error: el orden y tipo no coinciden
console.log("Tupla Persona:", personaTupla);
// array de tuplas
var personaTuplaArray = [];
personaTuplaArray.push(["Ana", 30, false]);
personaTuplaArray.push(["Pedro", 22, true]);
personaTuplaArray.push(["Maria", 28, false]);
console.log("Array de Tuplas Persona:", personaTuplaArray);
personaTuplaArray.forEach(function (persona) {
    console.log("Persona en array de tuplas:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad, ", Desarrollador: ").concat(esDesarrollador));
});
console.log("-----------------------");
console.log("ENUMERADORES");
// Enumeradores
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["Lunes"] = 0] = "Lunes";
    DiaDeLaSemana[DiaDeLaSemana["Martes"] = 1] = "Martes";
    DiaDeLaSemana[DiaDeLaSemana["Miercoles"] = 2] = "Miercoles";
    DiaDeLaSemana[DiaDeLaSemana["Jueves"] = 3] = "Jueves";
    DiaDeLaSemana[DiaDeLaSemana["Viernes"] = 4] = "Viernes";
    DiaDeLaSemana[DiaDeLaSemana["Sabado"] = 5] = "Sabado";
    DiaDeLaSemana[DiaDeLaSemana["Domingo"] = 6] = "Domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.Martes;
console.log("Día de la semana:", dia); // Imprime el índice del enum, en este caso 1 para Martes
console.log("Día de la semana (nombre):", DiaDeLaSemana[dia]); // Imprime el nombre del enum, en este caso "Martes"
