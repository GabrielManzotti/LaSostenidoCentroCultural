let precioHoraNivelInicial = parseFloat(3000);
let cantidadClasesNivelInicial = parseInt(10);
let resultadoNivelInicial = precioHoraNivelInicial * cantidadClasesNivelInicial;

let precioHoraNivelIntermedio = parseFloat(3500);
let cantidadClasesNivelIntermedio = parseInt(15);
let resultadoNivelIntermedio = parseFloat(precioHoraNivelIntermedio * cantidadClasesNivelIntermedio);

let precioHoraNivelAvanzado = parseFloat(4000);
let cantidadClasesNivelAvanzado = parseInt(25);
resultadoNivelAvanzado = parseFloat(resultadoNivelIntermedio);

function precioHora() {
  nivel = prompt("Elegí tu nivel", "Inicial");
  console.log(nivel);
  switch (nivel) {
    case "Inicial":
      totalCurso = resultadoNivelInicial
      alert(`El valor del curso es de: $ ${resultadoNivelInicial},00`);
      console.log(`El valor de la hora es ${precioHoraNivelInicial}`);
      console.log(`El valor del curso es ${precioHoraNivelInicial*cantidadClasesNivelInicial}`);
      break;
    case "Intermedio":
      totalCurso = resultadoNivelIntermedio
      alert(`El valor del curso es de: ${resultadoNivelIntermedio,00}`);
      console.log(`El valor de la hora es ${precioHoraNivelIntermedio}`);
      console.log(`El valor del curso es ${precioHoraNivelIntermedio*cantidadClasesNivelIntermedio}`);
      break;
    case "Avanzado":
      totalCurso = resultadoNivelAvanzado
      alert(`El valor del curso es de: ${resultadoNivelAvanzado,00}`);
      console.log(`El valor de la hora es ${precioHoraNivelAvanzado}`);
      console.log(`El valor del curso es ${precioHoraNivelAvanzado*cantidadClasesNivelAvanzado}`);
      break;
  
  }
}


precioHora();







function seleccionDia() {
  diaSemanal = prompt("Elegí el día de la semana que querés iniciar", "Lunes");
  console.log(diaSemanal);
}
seleccionDia();


class DatosCurso {
  constructor(curso) {
    this.nivel = curso.nivel;
    this.totalCurso = curso.valor;
    this.diaSemanal = curso.diaSemanal;
  }
}

const datosCurso = new DatosCurso({nivel: nivel, valor: totalCurso, diaSemanal:diaSemanal});

console.log(datosCurso)

