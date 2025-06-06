let firstName: string = "Sebastián Sanhueza Tapia";

console.log(firstName.length);

// La función acepta cualquier tipo T, Pero ese tipo T DEBE tener una propiedad length que sea un número
function obtenerLongitud<T extends { length: number }>(obj: T): number {
    let longitud : number = obj.length;
    let tipo : string = typeof obj;
    console.log(`El tipo de dato es: ${tipo} y la longitud es: ${longitud}`);
    return obj.length;
}

console.log(obtenerLongitud("Hola"));

console.log(obtenerLongitud([1, 2, 3, 4, 5]));

console.log(obtenerLongitud({length: 10})); // en este caso si funciona porque el objeto tiene la propiedad length

// console.log(obtenerLongitud(42)); // Error: el tipo number no tiene la propiedad length