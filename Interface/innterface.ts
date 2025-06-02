interface Persona {
    nombre: string;
    edad: number;
    esDesarrollador: boolean;
}

let persona: Persona = {
    nombre: "Juan",
    edad: 30,
    esDesarrollador: true
};

console.log(`Nombre: ${persona}`);
console.log("Persona:", persona);

let arrayPersonas: Persona[] = [
    {
        nombre: "Ana",
        edad: 25,
        esDesarrollador: false
    },
    {
        nombre: "Luis",
        edad: 28,
        esDesarrollador: true
    },
    {
        nombre: "Marta",
        edad: 35,
        esDesarrollador: true
    }
];

console.log("Array de personas:", arrayPersonas);

interface Sumar {
    (a: number, b: number): number;
}

let sumar: Sumar = (a, b) => a + b;

console.log("Suma:", sumar(5, 10));