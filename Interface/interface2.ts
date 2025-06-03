interface Dirección {
    calle: string;
    numero: number;  // propiedad
    ciudad?: string;  // propiedad opcional
    pais: string;
}

let direccion: Dirección = {
    calle: "Calle Falsa",
    numero: 123,  // propiedad obligatoria
    ciudad: "Ciudad Ejemplo",  // propiedad opcional, puedo no incluirla
    pais: "País Imaginario"
}

console.log(direccion);

// Read only
interface Personal {
    readonly nombre: string;   // propiedad de solo lectura
    readonly edad: number;
    readonly esDesarrollador: boolean; 
}

let personRead: Personal = {
    nombre: "admin",
    edad: 30,
    esDesarrollador: true
}

console.log("personRead: ", personRead);

// personRead.nombre = "admin2";  // Error: Cannot assign to 'nombre' because it is a read-only property

// Interfaz extendida
interface Empleado extends Personal {
    readonly cargo: string;
    readonly salario: number;
}

let empleado: Empleado = {
    nombre: "admin",
    edad: 30,
    esDesarrollador: true,
    cargo: "Desarrollador",
    salario: 50000
}

console.log("Empleado:", empleado);