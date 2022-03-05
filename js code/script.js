let precioHoraNivelInicial = parseFloat(3000);
let cantidadClasesNivelInicial = parseInt(10);
let descuentoNivelInicial = 0.80;
let resultadoNivelInicial = precioHoraNivelInicial * cantidadClasesNivelInicial;

let precioHoraNivelIntermedio = parseFloat(3500);
let cantidadClasesNivelIntermedio = parseInt(15);
let descuentoNivelIntermedio = 0.70
let resultadoNivelIntermedio = parseFloat(precioHoraNivelIntermedio * cantidadClasesNivelIntermedio);

let precioHoraNivelAvanzado = parseFloat(4000);
let cantidadClasesNivelAvanzado = parseInt(25);
let descuentoNivelAvanzado = 0.65;
let resultadoNivelAvanzado = parseFloat(precioHoraNivelAvanzado * cantidadClasesNivelAvanzado);


const arrayListadoCursos = [];
let arrayListadoCursosFiltrado = [];

// defino como variable global para poder 
let nivelSeleccionado = ""
let diaSeleccionado = ""

console.log(nivelSeleccionado)

class ListadoCursos {
  constructor(listaCursos) {
    this.nivel = listaCursos.nivel;
    this.horario = listaCursos.horario;
    this.profesor = listaCursos.profesor;
    this.diaSemana = listaCursos.diaSemana;
    this.numeroDiaSemana = listaCursos.numeroDiaSemana
    this.cantHoras = listaCursos.cantHoras;
    this.fechaInicio = listaCursos.fechaInicio;
    this.fechaFin = listaCursos.fechaFin;
    this.valorBruto = listaCursos.valorBruto
    this.idCurso = listaCursos.idCurso
  }
}

arrayListadoCursos.push(new ListadoCursos({
  nivel: "Inicial",
  horario: "19:00 a 21:00",
  profesor: "Lautaro Aguilar",
  numeroDiaSemana: 1,
  diaSemana: "Lunes",
  cantHoras: 15,
  fechaInicio: "03/03/2022",
  fechaFin: "04/04/2022",
  valorBruto: 3000,
  idCurso: 001
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Inicial",
  horario: "14:00 a 16:00",
  profesor: "Lautaro Aguilar",
  numeroDiaSemana: 5,
  diaSemana: "Lunes",
  cantHoras: 15,
  fechaInicio: "10/02/2022",
  fechaFin: "14/04/2022",
  valorBruto: 3000,
  idCurso: 002
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Inicial",
  horario: "21:00 a 23:00",
  profesor: "Marisol Fernandez",
  numeroDiaSemana: 5,
  diaSemana: "Martes",
  cantHoras: 15,
  fechaInicio: "10/02/2022",
  fechaFin: "14/04/2022",
  valorBruto: 3000,
  idCurso: 003
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Inicial",
  horario: "12:00 a 14:00",
  profesor: "Marisol Fernandez",
  numeroDiaSemana: 4,
  diaSemana: "Jueves",
  cantHoras: 15,
  fechaInicio: "22/02/2022",
  fechaFin: "24/04/2022",
  valorBruto: 3000,
  idCurso: 004
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Intermedio",
  horario: "18:00 a 20:00",
  profesor: "Lautaro Aguilar",
  numeroDiaSemana: 1,
  diaSemana: "Martes",
  cantHoras: 20,
  fechaInicio: "02/02/2022",
  fechaFin: "24/04/2022",
  valorBruto: 3500,
  idCurso: 005
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Intermedio",
  horario: "22:00 a 24:00",
  profesor: "Lautaro Aguilar",
  numeroDiaSemana: 2,
  diaSemana: "Martes",
  cantHoras: 20,
  fechaInicio: "02/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 3500,
  idCurso: 006
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Intermedio",
  horario: "10:00 a 12:00",
  profesor: "Marisol Fernandez",
  numeroDiaSemana: 1,
  diaSemana: "Lunes",
  cantHoras: 20,
  fechaInicio: "02/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 3500,
  idCurso: 007
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Avanzado",
  horario: "13:00 a 15:00",
  profesor: "Marisol Fernandez",
  numeroDiaSemana: 2,
  diaSemana: "Martes",
  cantHoras: 40,
  fechaInicio: "25/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 4000,
  idCurso: 010
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Avanzado",
  horario: "16:00 a 18:00",
  profesor: "Renzo Polzella",
  numeroDiaSemana: 5,
  diaSemana: "Vierens",
  cantHoras: 40,
  fechaInicio: "30/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 4000,
  idCurso: 011
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Avanzado",
  horario: "19:30 a 21:30",
  profesor: "Renzo Polzella",
  numeroDiaSemana: 4,
  diaSemana: "Jueves",
  cantHoras: 40,
  fechaInicio: "20/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 4000,
  idCurso: 012
}))
arrayListadoCursos.push(new ListadoCursos({
  nivel: "Avanzado",
  horario: "17:00 a 19:00",
  profesor: "Lautaro Aguilar",
  numeroDiaSemana: 6,
  diaSemana: "Lunes",
  cantHoras: 40,
  fechaInicio: "28/02/2022",
  fechaFin: "04/04/2022",
  valorBruto: 4000,
  idCurso: 0113
}))


// console.log(arrayListadoCursos);

// const formularioNivel = document.getElementById("selectNivel");

// console.log(formularioNivel)

// formularioNivel.addEventListener("submit", validarFormularioSelect);



//se crea el objeto del curso elegido
class CursoElegido {
  constructor(curso) {
    this.nivel = curso.nivel;
    this.totalCurso = curso.valor;
    this.diaSemanal = curso.diaSemanal;
    this.descuento = curso.descuento;
    this.totalNeto = curso.totalNeto;
    this.idCurso = curso.idCurso;
    this.profesor = curso.profesor;
    this.fecha = curso.fecha;
    this.horario = curso.horario;

  }
}

const datosCurso = new CursoElegido({});


// datosCurso.aplicaDescuento();

console.log(datosCurso.nivel)

console.log(datosCurso)


const seleccionNivel = document.getElementById("selectNivel");
seleccionNivel.addEventListener("change", (e) => {

  let selectNivel = document.querySelector("#selectNivel");
  nivelSeleccionado = selectNivel.value;

  console.log(`Nivel seleccionado es: ${nivelSeleccionado}`);

  datosCurso.nivel = nivelSeleccionado

  console.log("Lo de abajo es el array con el nivel")

  console.log(`datos curso nivel --> ${datosCurso.nivel}`)

  // devuelve solo los cursos del día seleccionado conjunto con el nivel: EJ solo cursos iniciales de los lunes
  arrayListadoCursosFiltrado = arrayListadoCursos.filter(cursosPorDia => (cursosPorDia.nivel === datosCurso.nivel));
  console.log("Lo de abajo es arrayListadoCursosFiltrado despues de seleccionar nivel.")
  console.log(arrayListadoCursosFiltrado)


})


//boton continuar en validar nivel
const continuarValidaNivel = document.querySelector("#continuarValidaNivel");

continuarValidaNivel.addEventListener("click", (e) => {
  if ((datosCurso.nivel === "Seleccioná tu nivel") || (datosCurso.nivel == "") || (nivelSeleccionado == "")) {
    // error seleccion nivel
    let errorSeleccionNivel = document.querySelector("#errorSeleccionNivel");
    let errorSeleccionNivelRojo = document.createElement("p");

    if (document.querySelector('#errorSeleccionNivel').childElementCount < 1) {
      errorSeleccionNivelRojo.innerHTML = "Por favor, seleccioná un nivel para poder avanzar";
      errorSeleccionNivelRojo.className = "textoError";
      errorSeleccionNivelRojo.id = "errorSeleccionNivelRojo"
      errorSeleccionNivel.appendChild(errorSeleccionNivelRojo);
      e.preventDefault();
    } else {
      e.preventDefault();

    }
  } else {

    if (document.querySelector('#errorSeleccionNivel').childElementCount >= 1) {
      //limpia error 
      errorSeleccionNivel2 = document.querySelector("#errorSeleccionNivelRojo");
      errorSeleccionNivel2.remove();
    }



  }
})



const seleccionDia = document.getElementById("selectDia");
seleccionDia.addEventListener("change", (e) => {

  let selectDia = document.querySelector("#selectDia");
  diaSeleccionado = selectDia.value;

  console.log(`Dia seleccionado es: ${diaSeleccionado}`);

  datosCurso.diaSemanal = diaSeleccionado

  console.log("Lo de abajo es el array con el dia")

  console.log(`datos curso nivel --> ${datosCurso.diaSemanal}`)

  // devuelve solo los cursos del día seleccionado conjunto con el nivel: EJ solo cursos iniciales de los lunes
  arrayListadoCursosFiltrado = arrayListadoCursos.filter(cursosPorDia => (cursosPorDia.diaSemana === datosCurso.diaSemanal) && (cursosPorDia.nivel === datosCurso.nivel));
  console.log("Lo de abajo es arrayListadoCursosFiltrado despues de seleccionar dia")
  console.log(arrayListadoCursosFiltrado)
  console.log(datosCurso)


})


//boton continuar en validar día

const continuarValidaDia = document.querySelector("#continuarValidaDia");

continuarValidaDia.addEventListener("click", (e) => {
  if ((datosCurso.diaSemanal === "Seleccioná el día") || (datosCurso.diaSemanal == "") || (diaSeleccionado == "") || (datosCurso.nivel == "") || (datosCurso.nivel === "Seleccioná tu nivel")) {

    // error seleccion de dia semanal
    let errorSeleccionDia = document.querySelector("#errorSeleccionDia");
    let errorSeleccionDiaRojo = document.createElement("p");

    if (document.querySelector('#errorSeleccionDia').childElementCount < 1) {
      errorSeleccionDiaRojo.innerHTML = "Por favor, seleccioná un día para poder avanzar";
      errorSeleccionDiaRojo.className = "textoError";
      errorSeleccionDiaRojo.id = "errorSeleccionDiaRojo"
      errorSeleccionDia.appendChild(errorSeleccionDiaRojo);
      e.preventDefault();
    } else {
      e.preventDefault()
    }

  } else {
    if (document.querySelector('#errorSeleccionDia').childElementCount >= 1) {
      //limpia error
      errorSeleccionDia2 = document.querySelector("#errorSeleccionDiaRojo");
      errorSeleccionDia2.remove();
    }
  }
})



let copiaArrayListadoCursosFiltrado = Object.assign([], arrayListadoCursosFiltrado); // deep copy 


const muestraCursos = () => {
  if ((document.getElementById('listado').childElementCount >= 1)) {

    let listado = document.getElementById('listado');

    while (listado.firstChild) {
      listado.removeChild(listado.firstChild);
    }

    for (const arrayListadoCursoFiltrado of arrayListadoCursosFiltrado) {
      const listado = document.getElementById("listado");
      let contenedor = document.createElement("li");
      contenedor.className = "pruebaClassName";
      contenedor.id = arrayListadoCursoFiltrado.idCurso;
      contenedor.innerHTML =
        ` <div class="contenedorPorListado" id=${arrayListadoCursoFiltrado.idCurso}>
      <div class= contenedorNivel>  
          <p class="tituloListado">Día</p>
          <p>${arrayListadoCursoFiltrado.diaSemana}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Horario</p>
          <p>${arrayListadoCursoFiltrado.horario}</p>
      </div>
      <div class="contenedorNivel">
          <p class="tituloListado">Fecha</p>
          <p><strong>${arrayListadoCursoFiltrado.fechaInicio}</strong> hasta <strong>${arrayListadoCursoFiltrado.fechaFin}</strong></p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Nivel</p>
          <p>${arrayListadoCursoFiltrado.nivel}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Hs. totales</p>
          <p>${arrayListadoCursoFiltrado.cantHoras}</p>
      </div>
      <div class= contenedorNivel>  
      <p class="tituloListado">Profesor@</p>
      <p>${arrayListadoCursoFiltrado.profesor}</p>
  </div>
      <div class= contenedorNivel>  
      <p class="tituloListado">Valor</p>
      <p>${arrayListadoCursoFiltrado.valorBruto}</p>
      </div>
      <div class="botonContinuar" id="seleccionaCurso">
        <a type="button" id="botonSeleccionaElCurso${arrayListadoCursoFiltrado.idCurso}" 
        href="./Paginas/reserva.html" class="btn btn-dark  buttonRadiousAndMoreListado">Seleccionar curso</a>
      </div>
    </div>`;



      contenedor.onclick = () => eligeCurso(arrayListadoCursoFiltrado)

      listado.appendChild(contenedor);

    }
  } else {

    for (const arrayListadoCursoFiltrado of arrayListadoCursosFiltrado) {
      const listado = document.getElementById("listado");
      let contenedor = document.createElement("li");
      contenedor.className = "pruebaClassName";
      contenedor.id = arrayListadoCursoFiltrado.idCurso;
      contenedor.innerHTML =
        ` <div class="contenedorPorListado" id=${arrayListadoCursoFiltrado.idCurso}>
      <div class= contenedorNivel>  
          <p class="tituloListado">Día</p>
          <p>${arrayListadoCursoFiltrado.diaSemana}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Horario</p>
          <p>${arrayListadoCursoFiltrado.horario}</p>
      </div>
      <div class="contenedorNivel">
          <p class="tituloListado">Fecha</p>
          <p><strong>${arrayListadoCursoFiltrado.fechaInicio}</strong> hasta <strong>${arrayListadoCursoFiltrado.fechaFin}</strong></p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Nivel</p>
          <p>${arrayListadoCursoFiltrado.nivel}</p>
      </div>
      <div class= contenedorNivel>  
          <p class="tituloListado">Hs. totales</p>
          <p>${arrayListadoCursoFiltrado.cantHoras}</p>
      </div>
      <div class= contenedorNivel>  
      <p class="tituloListado">Profesor@</p>
      <p>${arrayListadoCursoFiltrado.profesor}</p>
  </div>
      <div class= contenedorNivel>  
      <p class="tituloListado">Valor</p>
      <p>${arrayListadoCursoFiltrado.valorBruto}</p>
      </div>
      <div class="botonContinuar" id="seleccionaCurso${arrayListadoCursoFiltrado.idCurso}">
        <a type="button" id="botonSeleccionaElCurso${arrayListadoCursoFiltrado.idCurso}"
        href="./Paginas/reserva.html"  class="btn btn-dark  buttonRadiousAndMoreListado">Seleccionar curso</a>
      </div>
    </div>`;


      contenedor.onclick = () => eligeCurso(arrayListadoCursoFiltrado)



      listado.appendChild(contenedor);
    }



  }
}



const buscarCursos = document.querySelector("#buscarCursos");


buscarCursos.addEventListener("click", (e) => {
  return new Promise((resolve, reject) => {
    // SIMULANDO
    sinDatosParaMostrar.innerHTML = "Cargando...";
    setTimeout(() => {
      // Petición de BE determina si es TRUE O FALSE
      const res = true;
      if (res) {
        resolve(arrayListadoCursosFiltrado);
      } else {
        reject("Ha ocurrido un error");
      }
    }, 2000)
  })



  .then(respuesta => {
    const sinDatosParaMostrar = document.querySelector("#sinDatosParaMostrar");
    const sinDatosParaMostrarRojo = document.createElement("p");
    sinDatosParaMostrar.innerHTML = "";
  
    if ((datosCurso.nivel === "Seleccioná tu nivel") || (datosCurso.nivel == "") || (nivelSeleccionado == "") || (datosCurso.diaSemanal === "Seleccioná el día") || (datosCurso.diaSemanal == "") || (diaSeleccionado == "")) {
  
      sinDatosParaMostrarRojo.className = "textoError";
      sinDatosParaMostrarRojo.innerHTML = "Por favor, completar día y/o nivel en los anteriores pasos";
      sinDatosParaMostrar.appendChild(sinDatosParaMostrarRojo);
    } else {
      if (arrayListadoCursosFiltrado.length === 0) {
        // sin datos para mostrar en el filtro
  
        if (document.querySelector('#sinDatosParaMostrar').childElementCount <= 1) {
          const sinDatosParaMostrar = document.querySelector("#sinDatosParaMostrar");
          const sinDatosParaMostrarRojo = document.createElement("p");
          sinDatosParaMostrarRojo.className = "textoError";
          sinDatosParaMostrarRojo.innerHTML = "No se encuentraron cursos. Por favor, seleccioná otro día.";
          sinDatosParaMostrarRojo.id = "sinDatosParaMostrarRojo";
          sinDatosParaMostrar.appendChild(sinDatosParaMostrarRojo);
        } else {
        }
        } else {
        if (document.querySelector('#sinDatosParaMostrar').childElementCount >= 2) {
          //limpia error de no hay datos
          sinDatosParaMostrarRojo2 = document.querySelector("#sinDatosParaMostrarRojo");
          sinDatosParaMostrarRojo2.remove();
        } else {
          muestraCursos();
          }
      }
    }
  })
  
  
  .catch(error => {
    sinDatosParaMostrar.innerHTML = error;
  })
  .finally(() => {
    //Por ahora no cargo finally
  });
})
  













function eligeCurso(arrayListadoCursoFiltrado) {
  //grabo datos del curso elegido en el array datosCurso, lo hago string y guardo en local storage
  datosCurso.totalCurso = arrayListadoCursoFiltrado.valorBruto;
  datosCurso.descuento = 0.80;
  datosCurso.totalNeto = (+arrayListadoCursoFiltrado.valorBruto * +datosCurso.descuento);
  datosCurso.total = arrayListadoCursoFiltrado.cantHoras;
  datosCurso.profesor = arrayListadoCursoFiltrado.profesor;
  datosCurso.idCurso = arrayListadoCursoFiltrado.idCurso;
  datosCurso.fecha = `${arrayListadoCursoFiltrado.fechaInicio} hasta ${arrayListadoCursoFiltrado.fechaFin} `;
  datosCurso.horario = arrayListadoCursoFiltrado.horario;

  console.log(datosCurso);
  localStorage.setItem("Curso elegido", JSON.stringify(datosCurso));




}

