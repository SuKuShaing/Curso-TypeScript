# Comando usados para usar Node con Typescript y Express

## Inicializamos el proyecto Node
```sh
 npm init -y
```

## Instalamos las dependencias
```sh
npm i express cors dotenv
```

## Instalamos el tipado de las dependencias
y las instalamos como dependencias de desarrollo con la bandera --save-dev
```sh
 npm install --save-dev typescript ts-node @types/node @types/express @types/cors
```

## Creamos el archivo tsconfig.json
```json
{
    "compilerOptions": {
        "outDir": "./dist",  // Directorio de salida de los archivos compilados
        "target": "ES6",    // Versión de ECMAScript a la que se compilará el código
        "module": "commonjs", // Tipo de módulo a usar en la salida
        "strict": true, // Habilita todas las comprobaciones de tipo estricto
        "esModuleInterop": true, // Es un modulo interoperable que permite que typescript se relacione con express y los modulos de node
    }
}
```


```sh
```