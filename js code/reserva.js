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
    headerContenedorPlanEscribe.className = "headerContenedorPlan";
    headerContenedorPlanEscribe.id = "headerContenedorPlanBeca"
    headerContenedorPlanEscribe.innerHTML = `
       <h5 class="tituContenedorPlan">Plan Beca $${cursoElegidoReserva.totalNeto}</h5>
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
const formulario = document.getElementById("formulario");


// const eligeCurso = (arrayListadoCursoFiltrado) => {



const validar = function (campo) {
    let valor = campo.value;

    if (/\d/.test(valor)) {

        campo.value = valor.replace(/\d/g, '');
    }
};


formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    validarEmail();

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
    if (nombre = "") {
        
    }
}

const validarEmail = () => {
    if (email.value === emailConfirma.value) {
        emailConfirma.classList.remove("inputError");
        email.classList.remove("inputError");
    } else {
        email.classList.add("inputError");
        emailConfirma.classList.add("inputError");
    }
}