function PersonaDec(target: Function) { // esta función debe ir antes del decorar que la llame
    console.log(target);

    target.prototype.despedir = function (despedida: string) {
        return `${despedida}, ${this.nombre}`;
    }
}

@PersonaDec
class Persona2 {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(saludo: string): string {
        return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
    }

    despedir!: (despedida: string) => string; // esto es para que typescript sepa que el método despedir existe
    // el ! le dice a TypeScript: "confía en mí, este método despedir existirá en tiempo de ejecución, aunque tú no puedas verlo en el análisis estático
}

let usuario = new Persona2("Juan", 20);
console.log(usuario.saludar("Hola"));
console.log(usuario.despedir("Adios"));