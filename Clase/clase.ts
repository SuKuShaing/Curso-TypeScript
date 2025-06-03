// Un archivo, una clase
// es ideal mantener las clases separadas de las implementaciones

export class Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    saludar(): string {
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y ${this.esDesarrollador ? "soy" : "no soy"} desarrollador.`;
    }
}