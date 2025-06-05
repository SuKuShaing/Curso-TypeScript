// Un archivo, una clase
// es ideal mantener las clases separadas de las implementaciones

export class Persona { // existen las clases publicas, privadas y protegidas
    public nombre: string;  // Public: por defecto es public, accesible desde la clase y sus subclases
    protected edad: number; // Protected: accesible desde la clase y sus subclases
    private esDesarrollador: boolean; // Private: accesible solo desde la clase

    constructor(nombre: string, edad: number, esDesarrollador: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }

    public saludar(): string { // método publico
        return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y ${this.esDev() ? "soy" : "no soy"} desarrollador.`;
    }

    protected obtenerEdad(): number { // método protegido
        return this.edad;
    }
    
    private esDev(): boolean { // método privado
        return this.esDesarrollador;
    }
}