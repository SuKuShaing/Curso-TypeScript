import { Persona } from "./clase";

export class Empleado extends Persona {
    public puesto: string;

    constructor(nombre: string, edad: number, esDesarrollador: boolean, puesto: string) {
        super(nombre, edad, esDesarrollador); // super: llama al constructor de la clase padre
        this.puesto = puesto;
    }

    public saludar(): string { // sobreescritura de método saludar de la clase padre
        return `Hola, me llamo ${this.nombre}, y trabajo de ${this.puesto}.`;
    }

    public obtenerInfo(): string { 
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y trabajo de ${this.puesto}.`;
    }
}
