const h1 = document.querySelector("h1") as HTMLHeadingElement;
console.log(h1?.textContent);

let title: HTMLHeadingElement = document.querySelector(".title") as HTMLHeadingElement;
console.log(title?.textContent);

const message = document.querySelector("#message") as HTMLInputElement;
console.log(message?.placeholder);

console.log("El valor del mensaje es: ", message?.value);
console.log("Hola de nuevo");