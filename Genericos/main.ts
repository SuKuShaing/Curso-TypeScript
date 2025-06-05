// Tipado genérico
// Un genérico es una forma de decirle a TypeScript:
// “No sé exactamente qué tipo usaré todavía, pero lo sabré más adelante, y cuando lo sepa, 
// quiero que lo respetes en todo el código.”

function identity<T>(param: T): T {
	return param;
}

let output1 = identity<string>("Hello");
console.log(`output1: ${output1} y es de tipo ${typeof output1}`);

let output2 = identity<number>(123);
console.log(`output2: ${output2} y es de tipo ${typeof output2}`);

let output3 = identity<boolean>(true);
console.log(`output3: ${output3} y es de tipo ${typeof output3}`);


class Caja<T> {
	private contenido: T;

	constructor(contenido: T) {
		this.contenido = contenido;
	}

	public obtenerContenido(): T {
		return this.contenido;
	}
}

let cajaDeString = new Caja<string>("Libros");
console.log(`Contenido de la caja: ${cajaDeString.obtenerContenido()}`);

let cajaDeNumero = new Caja<number>(123);
console.log(`Contenido de la caja: ${cajaDeNumero.obtenerContenido()}`);

let cajaDeBooleano = new Caja<boolean>(true);
console.log(`Contenido de la caja: ${cajaDeBooleano.obtenerContenido()}`);



interface Generico<T> {
	valor: T;
	valor2: T;
	valor3: T;
	edad: number;
	nombre: string;
	esDev: boolean;
	salario: number;
}

const objetoGen: Generico<number> = {
	valor: 1,
	valor2: 2,
	valor3: 3,
	edad: 20,
	nombre: "Juan",
	esDev: true,
	salario: 4000,
};



// puedes usar cualquier nombre, pero T es una convención común
interface Par<T, U> {
	primero: T;
	segundo: U;
}

const par: Par<number, string> = {
	primero: 1,
	segundo: "dos",
};



/////////////////////////////////////////////////////////
// diferencia entre <T> (generico) y Any (cualquier tipo)
/////////////////////////////////////////////////////////

// Usando any
function conAny(param: any): any {
	return param;
}
let resultado1 = conAny("hola");
resultado1.toFixed(2); // TypeScript no detectará este error

// Usando genéricos
function conGenerico<T>(param: T): T {
	return param;
}
let resultado2 = conGenerico("hola");
resultado2.toFixed(2); // TypeScript detectará el error porque sabe que es un string

/*
any: Desactiva completamente el sistema de tipos de TypeScript. Cuando usas any, 
TypeScript no realizará ninguna verificación de tipos, lo que significa que puedes 
asignar cualquier valor y acceder a cualquier propiedad sin restricciones.

<T> (Genéricos): Mantiene la seguridad de tipos. El tipo genérico T se infiere o 
especifica explícitamente, y TypeScript asegura que el tipo se mantenga 
consistente en todo el código.
*/
