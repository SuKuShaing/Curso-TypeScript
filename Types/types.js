// Type puede tener propiedades, pero no puede tener métodos
/*
    el mapped type de PersonaSoloLectura es:
    PersonaSoloLectura = {
        readonly nombre: string;
        readonly edad: number;
    }
*/
var personaA = {
    nombre: "Juan",
    edad: 20
};
console.log(personaA.nombre);
function esNumero(valor) {
    return (typeof valor === "number");
}
var result1 = esNumero(123);
var result2 = esNumero("hello");
console.log(result1);
console.log(result2);
