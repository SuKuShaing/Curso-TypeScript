# Curso inicial de Typescript de Platzi

### Tipos de datos en TypeScript
En TypeScript, los tipos de datos son fundamentales para definir la naturaleza de las variables y funciones, asegurar que el código sea más predecible y fácil de mantener. Aquí hay una lista de los tipos de datos más comunes:
```typescript
1. string: // Cadenas de texto.
2. number: // Números, tanto enteros como decimales.
3. boolean: // Valores de verdadero o falso.
4. null: // Representa la ausencia de un valor.
5. undefined: // Una variable que no ha sido asignada.
6. any: // Permite cualquier tipo de valor.
7. unknown: // Un tipo seguro que representa un valor desconocido, debe ser verificado antes de su uso.
8. object: // Representa un objeto no primitivo.
9. array: // Colecciones de elementos del mismo tipo.
10. tuple: // Arreglos con un número fijo de elementos de diferentes tipos.
11. enum: // Enumeraciones para definir un conjunto de constantes con nombre.
12. bigint: // Números enteros grandes.
13. symbol: // Un tipo de dato único e inmutable, utilizado para identificar propiedades de objetos.
14. date: // Representa fechas y horas.
15. <T>: // Tipado genérico, permite usar cualquier tipo de dato y respetar el asignado al momento de usarlo.
```

### Typos exclusivas para funciones:
```typescript
1. void: // Indica que no se devuelve ningún valor.
2. never: // Representa funciones que nunca terminan, ciclos infinitos y errores.
```

### Maneras de compilar el código de TypeScript

Para instalar TypeScript globalmente:
```sh
npm install -g typescript
```

Comandos para compilar el código de TypeScript y más
```sh
tsc --init              # Inicializa un archivo tsconfig.json en el directorio actual.
tsc --watch             # Activamente está mirando el archivo de TypeScript y lo compila cada vez que se guarda.
tsc nombreArchivo.ts    # Compila el archivo de TypeScript y lo guarda en la carpeta de destino (sí no se especifica, se guarda en la misma carpeta), con el mismo nombre, pero con la extensión .js.
tsc -p tsconfig.json    # Compila el archivo de TypeScript permitiendo especificar el archivo de configuración, en el cual se indica por ejemplo que permitimos promesas, sí no se hace así la compilación normal fallaría.
```
En tsconfig.json se puede configurar el compilador de TypeScript, y definir el archivo de salida, el modo de emisión, el nivel de compatibilidad, entre otras muchas cosas más.

Para ejecutar el archivo compilado de TypeScript, se debe usar el comando, la extensión ahora es .js puesto que el compilador lo convierte a JavaScript.
```sh
node nombreArchivo.js
```

