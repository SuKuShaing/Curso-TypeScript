function saludar(nombre: string, saludo ?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `¡Hola, ${nombre}!`;
    }
}

console.log(saludar("Juan")); // Salida: ¡Hola, Juan!
console.log(saludar("Juan", "Buenos días")); // Salida: Buenos días, Juan!

// Parámetros multiples
function sumarTodos(...numeros: number[]): number {
    return numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
}

console.log("Resultados de sumar todos: ", sumarTodos(1, 2, 3, 4, 5)); // Salida: 15


// Valores por defecto
function despedir(nombre: string, despedida: string = "¡Hasta luego!"): string {
    return `${despedida}, ${nombre}!`;
}

console.log(despedir("Juan")); // Salida: ¡Hasta luego!, Juan!
console.log(despedir("Juan", "Adiós")); // Salida: Adiós, Juan!