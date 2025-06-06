var firstName = "Sebastián Sanhueza Tapia";
console.log(firstName.length);
function obtenerLongitud(obj) {
    var longitud = obj.length;
    var tipo = typeof obj;
    console.log("El tipo de dato es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return obj.length;
}
console.log(obtenerLongitud("Hola"));
console.log(obtenerLongitud([1, 2, 3, 4, 5]));
console.log(obtenerLongitud({ length: 10 })); // en este caso si funciona porque el objeto tiene la propiedad length
console.log(obtenerLongitud(42)); // Error: el tipo number no tiene la propiedad length
