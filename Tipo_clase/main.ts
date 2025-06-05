import { Empleado } from "./empleado";

let empleado = new Empleado("Juan", 30, true, "Desarrollador");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("Nombre:", empleado.nombre);
