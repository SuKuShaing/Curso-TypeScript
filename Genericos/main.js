function identity(param) {
    return param;
}
var output1 = identity("Hello");
console.log("output1: ".concat(output1, " y es de tipo ").concat(typeof (output1)));
var output2 = identity(123);
console.log("output2: ".concat(output2, " y es de tipo ").concat(typeof (output2)));
var output3 = identity(true);
console.log("output3: ".concat(output3, " y es de tipo ").concat(typeof (output3)));
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
var cajaDeString = new Caja("Libros");
console.log("Contenido de la caja: ".concat(cajaDeString.obtenerContenido()));
