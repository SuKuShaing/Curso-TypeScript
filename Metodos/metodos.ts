function imprimeMensaje(message: string): void { // void indica que la función no retorna un valor
    console.log(message);
}

imprimeMensaje("¡Hola, TypeScript!");


function suma(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

const resultado : number  = suma(5, 10);
console.log(`El resultado de la suma es: ${suma(5, 10)}`);