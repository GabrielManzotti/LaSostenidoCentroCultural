let usuario = prompt("Ingresá tu usuario para guardarlo en memoria");


while (usuario == "") {
    if (usuario == "") {
        console.log("El usuario ingresó un usuario vacio");
        usuario = prompt("No es es posible un valor vacío. Ingresá tu usuario para guardarlo en memoria");
    } else {

        break;
    }
}
console.log(`Usuario: ${usuario}`);

let contrasenia = prompt("Ingresá tu clave para guardarla en memoria");


while (contrasenia == "") {
    if (contrasenia == "") {
        console.log("El usuario ingresó una clave vacia");
        contrasenia = prompt("No es es posible un valor vacío. Ingresá tu clave para guardarla en memoria");
    } else {
        break;
    }
}
console.log(`Contraseña: ${contrasenia}`);

let nuevoIngresoUsuario = prompt("Ingresá el usuario nuevamente");
let nuevoIngresoClave = prompt("Ingresá clave guardada recientemente");
let i = 1;

while ((contrasenia != nuevoIngresoClave) || (usuario != nuevoIngresoUsuario)) {
    console.log(`Ingreso fallido nro ${i}: ${nuevoIngresoUsuario} / ${nuevoIngresoClave}`);
    i++;

   if (i<3) {
    alert("Ingresaste usuario o contraseña incorrectamente");
    nuevoIngresoUsuario = prompt("Ingresá el usuario nuevamente");
    nuevoIngresoClave = prompt("Ingresá la clave nuevamente");
    continue
   }
   
    if (i==3) { 
        alert("El proximo ingreso es tu última oportunidad");
        nuevoIngresoUsuario = prompt("Ingresá el usuario nuevamente");
         nuevoIngresoClave = prompt("Ingresá la clave nuevamente");
         continue
    }
    if (i == 4) {
       
        alert(`Ingresaste 3 veces mal las credenciales. Por seguridad se ha bloqueado tu usuario. En la consola verás tus intentos`);
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

alert("Ahora pongamos a prueba las matemáticas");

let ingresoPrimerNumero = (prompt("Ingresá un número"));

while (ingresoPrimerNumero == "") {
    if (ingresoPrimerNumero == "") {
        console.log("El usuario ingresó un primer número vacio");
        ingresoPrimerNumero = prompt("El valor no puede ser nulo. Por favor, ingresá un número");
    } else {
        
        break;
    }
}

console.log(`Primer número: ${ingresoPrimerNumero}`)

let ingresaSegundoNumero = prompt("Ingresá el número por el cual querés multiplicarlo");

while (ingresaSegundoNumero == "") {
    if (ingresaSegundoNumero == "") {
        console.log("El usuario ingresó un segundo número vacio");
        ingresaSegundoNumero = prompt("El valor no puede ser nulo. Por favor, ingresá un número");
    } else {
        
        break;
    }
}

console.log(`Segundo número: ${ingresaSegundoNumero}`);

let resultado = parseInt(ingresoPrimerNumero) * parseInt(ingresaSegundoNumero);
console.log(`Resultado de la multiplicación: ${resultado}`);
console.log(typeof resultado);
let ingresoResultado = parseInt(prompt("Ingresá el resultado"));

for (let i = 1; i < 4; i++) {
    if ((resultado !== ingresoResultado) && (i < 3)) {
        console.log(`Resultado fallido nro ${i} que ingresó el usuario: ${ingresoResultado}`)
        alert(`Fallaste, te quedan ${3-i} intentos`)
        ingresoResultado = parseInt(prompt("Ingresá el resultado"));
    } else {
        if (resultado == ingresoResultado) {
            console.log(`Resultado correcto que ingresó el usuario: ${ingresoResultado}`)
            alert(`Es correcto! El resultado era ${ingresoPrimerNumero} * ${ingresaSegundoNumero} =  ${resultado}. Te invito a ver la consola el paso a paso.`)
            console.log("Fin del aplicativo")
            break
        } else {
            alert("Perdiste. Hasta acá llegaste. Te invito a ver la consola el paso a paso.");
            console.log("Fin del aplicativo")
        }
    }
}