"use strict";
// Un archivo, una clase
// es ideal mantener las clases separadas de las implementaciones
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad, esDesarrollador) {
        this.nombre = nombre;
        this.edad = edad;
        this.esDesarrollador = esDesarrollador;
    }
    Persona.prototype.saludar = function () {
        return "Hola, me llamo ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os y ").concat(this.esDev() ? "soy" : "no soy", " desarrollador.");
    };
    Persona.prototype.obtenerEdad = function () {
        return this.edad;
    };
    Persona.prototype.esDev = function () {
        return this.esDesarrollador;
    };
    return Persona;
}());
exports.Persona = Persona;
