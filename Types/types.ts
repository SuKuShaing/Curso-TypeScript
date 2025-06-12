// Type puede tener propiedades, pero no puede tener métodos

type PersonaType = {
    nombre: string;
    edad: number;
}

// class PersonaClass {
//     nombre: string;
//     edad: number;

//     constructor(nombre: string, edad: number) {
//         this.nombre = nombre;
//         this.edad = edad;
//     }
// }

type Parcial<T> = {
    [k in keyof T]?: T[k];
};

type PersonaParcial = Parcial<PersonaType>;
/*
    el mapped type de PersonaParcial es:
    PersonaParcial = {
        nombre?: string;
        edad?: number;
    }
*/



type SoloLectura<T> = {
    readonly [k in keyof T]: T[k];
};

type PersonaSoloLectura = SoloLectura<PersonaType>;
/*
    el mapped type de PersonaSoloLectura es:
    PersonaSoloLectura = {
        readonly nombre: string;
        readonly edad: number;
    }
*/


let personaA: PersonaSoloLectura = {
    nombre: "Juan",
    edad: 20
};

console.log(personaA.nombre);


// Template Literal Types
type Variantes = "pequeño" | "mediano" | "grande";
type ClassCSS = `boton-${Variantes}`;

// let botonPequeño: ClassCSS = "boton-pequeño";
// let botonMediano: ClassCSS = "boton-mediano";
// let botonGrande: ClassCSS = "boton-grande";



// Type Condicional
type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
    return (typeof valor === "number") as EsNumero<T>;
}

const result1 = esNumero(123);
const result2 = esNumero("hello");

console.log(result1);
console.log(result2);