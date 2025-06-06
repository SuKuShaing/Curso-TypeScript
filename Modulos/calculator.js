"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PI = void 0;
exports.suma = suma;
exports.resta = resta;
exports.multiplicacion = multiplicacion;
exports.division = division;
exports.potencia = potencia;
function suma(numero1, numero2) {
    return numero1 + numero2;
}
function resta(numero1, numero2) {
    return numero1 - numero2;
}
function multiplicacion(numero1, numero2) {
    return numero1 * numero2;
}
function division(numero1, numero2) {
    return numero1 / numero2;
}
function potencia(numero1, numero2) {
    return Math.pow(numero1, numero2);
}
exports.PI = 3.1416;
