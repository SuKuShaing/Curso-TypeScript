/////////////////////////////////////
/////////// Any /////////////////////
/////////////////////////////////////

let variableAny: any;
// variableAny = "Hola";
// variableAny = 42;
variableAny = true;

console.log(
	"🚀 ~ variableAny:",
	variableAny,
	`es de tipo ${typeof variableAny}`
);

/////////////////////////////////////
///////////// Unknown ///////////////
/////////////////////////////////////

let variableDesconocida: unknown;

// variableDesconocida = "Hola";
variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === "string") {
	console.log(
		"🚀 ~ variableDesconocida:",
		variableDesconocida,
		`es de tipo: ${typeof variableDesconocida}`
	);
} else if (typeof variableDesconocida === "number") {
	console.log(
		"🚀 ~ variableDesconocida:",
		variableDesconocida,
		`es de tipo: ${typeof variableDesconocida}`
	);
} else if (typeof variableDesconocida === "boolean") {
	console.log(
		"🚀 ~ variableDesconocida:",
		variableDesconocida,
		`es de tipo: ${typeof variableDesconocida}`
	);
}

/*
La diferencia es que con any puedes usar el valor directamente, mientras que con unknown necesitas comprobar (con un if) el tipo antes de usarlo. 
Pero ambas aceptan cualquier tipo de valor y pueden ser reasignadas.
*/

/////////////////////////////////////
///////////// Never /////////////////
/////////////////////////////////////

function throwError(message: string): never {
    throw new Error(message);
}

// throwError("Este es un error");

/*
El tipo never se usa en TypeScript para indicar que una función nunca retorna un valor porque:
- Lanza una excepción (como en tu función throwError)
- O entra en un bucle infinito
- en decir funciones que no terminan su ejecución de forma normal.
Conviene usar never cuando quieres dejar claro que una función no puede terminar su ejecución de forma normal. Esto ayuda al compilador a detectar errores y a mejorar la seguridad del código.
*/ 

/////////////////////////////////////
///////////// Void //////////////////
/////////////////////////////////////

function logMessage(message: string): void {
    console.log("log message", message);
}

logMessage("Hola, TypeScript!, este es un mensaje del log con void");

/*
El tipo void en TypeScript se usa principalmente para indicar que una función no retorna ningún valor
*/