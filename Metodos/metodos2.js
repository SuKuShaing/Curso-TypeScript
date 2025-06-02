function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "\u00A1Hola, ".concat(nombre, "!");
    }
}
console.log(saludar("Juan")); // Salida: ¡Hola, Juan!
console.log(saludar("Juan", "Buenos días")); // Salida: Buenos días, Juan!
// Parámetros multiples
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulador, numeroActual) { return acumulador + numeroActual; }, 0);
}
console.log("Resultados de sumar todos: ", sumarTodos(1, 2, 3, 4, 5)); // Salida: 15
// Valores por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "¡Hasta luego!"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("Juan")); // Salida: ¡Hasta luego!, Juan!
console.log(despedir("Juan", "Adiós")); // Salida: Adiós, Juan!
