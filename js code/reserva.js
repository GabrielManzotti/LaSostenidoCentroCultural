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
}

muestraSeleccionCurso()