let usuario = prompt("Ingresá tu usuario para guardarlo en memoria");
console.log(`Usuario: ${usuario}`);

while (usuario == "") {
    if (usuario == "") {
        console.log("El usuario ingresó un usuario vacio");
        usuario = prompt("No es es posible un valor vacío. Ingresá tu usuario para guardarlo en memoria");
    }
    console.log(`Usuario ${usuario}`);
    break;
}

let contrasenia = prompt("Ingresá tu clave para guardarla en memoria");
console.log(`Contraseña: ${contrasenia}`);

while (contrasenia == "") {
    if (contrasenia == "") {
        console.log("El usuario ingresó una clave vacia");
        contrasenia = prompt("No es es posible un valor vacío. Ingresá tu clave para guardarla en memoria");
    }
    console.log(`Contraseña: ${contrasenia}`);
    break;
}

let nuevoIngresoUsuario = prompt("Ingresá el usuario nuevamente");
let nuevoIngresoClave = prompt("Ingresá clave guardada recientemente");
let i = 1;

while ((contrasenia != nuevoIngresoClave) || (usuario != nuevoIngresoUsuario)) {
    console.log(`Ingreso fallido nro ${i}: ${nuevoIngresoUsuario} / ${nuevoIngresoClave}`);
    alert("Ingresaste usuario o contraseña incorrectamente");
    nuevoIngresoUsuario = prompt("Ingresá el usuario nuevamente");
    nuevoIngresoClave = prompt("Ingresá la clave nuevamente");
    i++;
    if (i == 3) {
        console.log(`Ingreso nro ${i}: ${nuevoIngresoUsuario} / ${nuevoIngresoClave}`);
        alert(`Ingresaste ${i} veces mal las credenciales. Por seguridad se ha bloqueado tu usuario. En la consola verás tus intentos`);
        break;
    }
}

if ((contrasenia == nuevoIngresoClave) && (usuario == nuevoIngresoUsuario)) {
    console.log("Acceso habilitado");
    alert("Bienvenido al sitio");

} else {
    console.log("Acceso inhabilitado. Continua el flujo sin log in");
    alert("Continuarás en el sitio sin estar logueado");
}

let nuevoNumero = parseInt(prompt("Ingresá la tabla de multiplicación que querés que se imprima por consola"))
console.log(`El usuari ingresó: ${nuevoNumero}`)

for (let i = 0; i <= 10; i++) {
    let resultado = nuevoNumero * i;
    console.log(`${nuevoNumero} * ${i} = ${resultado}`);
}

alert("Ahora pongamos a prueba las matematicas");

let ingresoPrimerNumero = parseInt(prompt("Ingresá un número"));
let ingresaSegundoNumero = parseInt(prompt("Ingresá el número por el cual querés multiplicarlo"));
let resultado = ingresoPrimerNumero * ingresaSegundoNumero;
console.log(`Resultado de la multiplicación: ${resultado}`);
console.log(typeof resultado);
let ingresoResultado = parseInt(prompt("Ingresá el resultado"));

console.log(typeof ingresoResultado);

for (let i = 0; i < 3; i--) {
    if ((resultado !== ingresoResultado) && (i < 3)) {
        console.log(`Resultado fallido nro ${i} que ingresó el usuario: ${ingresoResultado}`)
        alert(`Fallaste, te quedan ${i} intentos`)
        ingresoResultado = parseInt(prompt("Ingresá el resultado"));
    } else {
        if (resultado == ingresoResultado) {
            console.log(`Resultado correcto que ingresó el usuario: ${ingresoResultado}`)
            alert(`Es correcto! El resultado era ${ingresoPrimerNumero} * ${ingresaSegundoNumero} =  ${resultado}`)
            console.log("Fin del aplicativo")
            break
        } else {
            alert("Perdiste. Hasta acá llegaste");
            console.log("Fin del aplicativo")
        }
    }

}