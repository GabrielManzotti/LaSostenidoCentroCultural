const cursoElegidoReserva = JSON.parse(localStorage.getItem("Curso elegido"))
console.log(cursoElegidoReserva)



const muestraSeleccionCurso = () => {
    const cursoElegidoFinal = document.getElementById("seccionCarritoCursoElegido")
    let cursoElegidoFinalEscribe = document.createElement("div")
    cursoElegidoFinalEscribe.className = "reservaCursoElegido";
    cursoElegidoFinalEscribe.id = "contenedorPrincipalCursoElegido";
    cursoElegidoFinalEscribe.innerHTML = `
   
      <div class= contenedorNivel>  
          <p class="tituloListado">Día</p>
          <p>${cursoElegidoReserva.diaSemanal}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Horario</p>
          <p>${cursoElegidoReserva.horario}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Fecha</p>
          <p>${cursoElegidoReserva.fecha}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Profesor</p>
          <p>${cursoElegidoReserva.profesor}</p>
      </div>
      <div class="botonContinuar">
      <a type="button"
      href="../index.html#reserva"  class="btn btn-dark  buttonRadiousAndMoreEditaReserva">Editar selección</a>
    </div>

       `
    cursoElegidoFinal.appendChild(cursoElegidoFinalEscribe);

    const tituloContenedorPlanBeca = document.getElementById("contenedorPlanBeca");
    let headerContenedorPlanEscribe = document.createElement("div");
    headerContenedorPlanEscribe.className = "headerContenedorPlanBeca";
    headerContenedorPlanEscribe.id = "headerContenedorPlanBeca"
    headerContenedorPlanEscribe.innerHTML = `
        <div> <h5 class="tituContenedorPlan">Plan Beca $${cursoElegidoReserva.totalNeto}</h5> 
        </div>
       
       <div class = "recomendado"> Recomendado </div>
       `
    tituloContenedorPlanBeca.prepend(headerContenedorPlanEscribe);

    const tituloContenedorPlanBecaSinBeca = document.getElementById("contenedorPlanSinBeca");
    let headerContenedorPlanSinBecaEscribe = document.createElement("div");
    headerContenedorPlanSinBecaEscribe.className = "headerContenedorPlan";
    headerContenedorPlanSinBecaEscribe.id = "headerContenedorPlanSinBeca"
    headerContenedorPlanSinBecaEscribe.innerHTML = `
       <h5 class="tituContenedorPlan">Plan Standard $${cursoElegidoReserva.totalCurso}</h5>
       `
    tituloContenedorPlanBecaSinBeca.prepend(headerContenedorPlanSinBecaEscribe);


}

muestraSeleccionCurso()

//se crea el objeto del curso elegido
class FormularioReserva {
    constructor(input) {
        this.plan = input.plan
        this.valorFinal = input.valorFinal
        this.nombre = input.nombre;
        this.apellido = input.apellido;
        this.edad = input.edad;
        this.email = input.email;
        this.dni = input.dni;
        this.localidad = input.localidad;
        this.calle = input.calle;
        this.altura = input.altura;
        this.departamento = input.departamento;

    }
}

const datosFormulario = new FormularioReserva({});

//se crea el objeto del pago de tarjeta
class Formulariopago {
    constructor(inputTC) {
        this.numeroTarjeta = inputTC.numeroTarjeta;
        this.nombreTarjeta = inputTC.nombreTarjeta;

    }
}

const datosFormularioTarjeta = new Formulariopago({});

console.log(datosFormularioTarjeta.nombreTarjeta)



//boton elegir el plan Beca
const botonPlanBeca = document.getElementById("botonPlanBeca")
botonPlanBeca.addEventListener("click", (e) => {
    datosFormulario.plan = "Plan beca"
    datosFormulario.valorFinal = cursoElegidoReserva.totalNeto
    console.log(datosFormulario)

})

//boton elegir el plan sin Beca
const botonPlanSinBeca = document.getElementById("botonPlanSinBeca")
botonPlanSinBeca.addEventListener("click", (e) => {
    datosFormulario.plan = "Plan sin beca"
    datosFormulario.valorFinal = cursoElegidoReserva.totalCurso
    console.log(datosFormulario)

})




const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const emailConfirma = document.getElementById("emailConfirma");
const dni = document.getElementById("dni");
const localidad = document.getElementById("localidad");
const altura = document.getElementById("altura");
const departamento = document.getElementById("departamento");

const calle = document.getElementById("calle");
const formulario1 = document.getElementById("formulario");


// const eligeCurso = (arrayListadoCursoFiltrado) => {



const validar = function (campo) {
    let valor = campo.value;

    if (/\d/.test(valor)) {

        campo.value = valor.replace(/\d/g, '');
    }
};


formulario1.addEventListener("submit", (e) => {
    e.preventDefault();

    validarEmail();
    validaEmailCompleto();
    validaNombre();
    validaApellido();
    validarEdad();
    validarDni();
    validarLocalidad();
    validarCalle();
    validarAltura();
    

    datosFormulario.nombre = nombre.value
    datosFormulario.apellido = apellido.value
    datosFormulario.edad = edad.value
    datosFormulario.email = email.value
    datosFormulario.dni = dni.value
    datosFormulario.localidad = localidad.value
    datosFormulario.calle = calle.value
    datosFormulario.altura = altura.value
    datosFormulario.departamento = departamento.value
    localStorage.setItem("Formulario reserva", JSON.stringify(datosFormulario));
    console.log(datosFormulario)

})


const validaNombre = () => {
    if (nombre.value !== "") {
        nombre.classList.remove("inputError");
        nombre.classList.remove("inputError");
    } else {
        nombre.classList.add("inputError");
        nombre.classList.add("inputError");
    }
}

const validaApellido = () => {
    if (apellido.value !== "") {
        apellido.classList.remove("inputError");
        apellido.classList.remove("inputError");
    } else {
        apellido.classList.add("inputError");
        apellido.classList.add("inputError");
    }
}

const validarEdad = () => {
    if (edad.value !== "") {
        edad.classList.remove("inputError");
        edad.classList.remove("inputError");
    } else {
        edad.classList.add("inputError");
        edad.classList.add("inputError");
    }
}

const validarEmail = () => {
    if ((email.value === emailConfirma.value)) {
        emailConfirma.classList.remove("inputError");
        email.classList.remove("inputError");

    } else {
        email.classList.add("inputError");
        emailConfirma.classList.add("inputError");

    }
}

const validaEmailCompleto = () => {
    if (email.value !== "") {
        email.classList.remove("inputError");
        email.classList.remove("inputError");
    } else {
        email.classList.add("inputError");
        email.classList.add("inputError");
    }
}

const validarDni = () => {
    if (dni.value !== "") {
        dni.classList.remove("inputError");
        dni.classList.remove("inputError");
    } else {
        dni.classList.add("inputError");
        dni.classList.add("inputError");
    }
}

const validarLocalidad = () => {
    if (localidad.value !== "") {
        localidad.classList.remove("inputError");
        localidad.classList.remove("inputError");
    } else {
        localidad.classList.add("inputError");
        localidad.classList.add("inputError");
    }
}

const validarCalle = () => {
    if (calle.value !== "") {
        calle.classList.remove("inputError");
        calle.classList.remove("inputError");
    } else {
        calle.classList.add("inputError");
        calle.classList.add("inputError");
    }
}

const validarAltura = () => {
    if (altura.value !== "") {
        altura.classList.remove("inputError");
        altura.classList.remove("inputError");
    } else {
        altura.classList.add("inputError");
        altura.classList.add("inputError");
    }
}





// --------------Tarjeta de crédito---------------------------

const tarjeta = document.querySelector('#tarjeta'),
    btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
    formulario = document.querySelector('#formulario-tarjeta'),
    numeroTarjeta = document.querySelector('#tarjeta .numero'),
    nombreTarjeta = document.querySelector('#tarjeta .nombre'),
    logoMarca = document.querySelector('#logo-marca'),
    firma = document.querySelector('#tarjeta .firma p'),
    mesExpiracion = document.querySelector('#tarjeta .mes'),
    yearExpiracion = document.querySelector('#tarjeta .year');
ccv = document.querySelector('#tarjeta .ccv');
nombreTC = document.getElementById("inputNombre")
numeroTC = document.getElementById("inputNumero")


// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro numeros
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();

    numeroTarjeta.textContent = valorInput;

    if (valorInput == '') {
        numeroTarjeta.textContent = '#### #### #### ####';

        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = "../Imagenes/img/logos/visa.png";
        logoMarca.appendChild(imagen);
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../Imagenes/img/logos/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    // Volteamos la tarjeta para que el usuario vea el frente.
    mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if (valorInput == '') {
        nombreTarjeta.textContent = 'tu nombre';
    }

    mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
    mesExpiracion.textContent = e.target.value;
    mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
    }

    formulario.inputCCV.value = formulario.inputCCV.value
        // Eliminar los espacios
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '');

    ccv.textContent = formulario.inputCCV.value;
});

// -------boton enviar------------

const enviarPago = document.getElementById("enviarPago")

enviarPago.addEventListener("click", (e) => {
  
    let errorCompletitudFormulario = document.getElementById("errorCompletitud")
    let errorCompletitud = document.createElement("p");
    datosFormularioTarjeta.nombreTarjeta = nombreTC.value;
    datosFormularioTarjeta.numeroTarjeta = numeroTC.value;

    if ((datosFormulario.altura === undefined) || (datosFormulario.altura === "") || (datosFormulario.apellido === undefined) || (datosFormulario.apellido === "") || (datosFormulario.calle === undefined) || (datosFormulario.calle === "") || (datosFormulario.dni === undefined) || (datosFormulario.dni === "") || (datosFormulario.edad === undefined) || (datosFormulario.edad === "") || (datosFormulario.email === undefined) || (datosFormulario.email === "") || (datosFormulario.localidad === undefined) || (datosFormulario.localidad === "") || (datosFormulario.nombre === undefined) || (datosFormulario.nombre === "") || (datosFormulario.plan === undefined) || (datosFormulario.plan === "") || (datosFormulario.valorFinal === undefined) || (datosFormulario.valorFinal === "") || (datosFormularioTarjeta.nombreTarjeta === undefined) || (datosFormularioTarjeta.nombreTarjeta === "") || (datosFormularioTarjeta.numeroTarjeta === undefined) || (datosFormularioTarjeta.numeroTarjeta === "")) {

        errorCompletitud.innerHTML = "";
        errorCompletitud.innerHTML = "Faltan completar datos en el formulario. Una vez completos, clickeá continuar";
        errorCompletitud.className = "textoError";
        errorCompletitud.id = "errorCompletitud"
        errorCompletitudFormulario.appendChild(errorCompletitud);
        e.preventDefault()


    } else {
        let errorCompletitudFormulario2 = document.getElementById("errorCompletitud");
        errorCompletitudFormulario2.remove();
    }
   
    localStorage.setItem("Datos de Pago", JSON.stringify(datosFormularioTarjeta));

    console.log(datosFormularioTarjeta)


})



