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
let resultadoNivelAvanzado = parseFloat(resultadoNivelIntermedio);


const arrayListadoCursos = [];
let arrayListadoCursosFiltrado = [];

class ListadoCursos {
  constructor(listaCursos) {
    this.nivel = listaCursos.nivel;
    this.diaSemana = listaCursos.diaSemana;
    this.cantHoras = listaCursos.cantHoras;
    this.fechaInicio = listaCursos.fechaInicio;
    this.fechaFin = listaCursos.fechaFin;
    this.valorBruto = listaCursos.valorBruto
      }
}

arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", diaSemana: "Lunes", cantHoras: 15, fechaInicio: "02/02/2022", fechaFin:"04/04/2022",valorBruto: 3000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", diaSemana: "Martes", cantHoras: 15, fechaInicio: "10/02/2022", fechaFin:"14/04/2022",valorBruto: 3000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", diaSemana: "Jueves", cantHoras: 15, fechaInicio: "22/02/2022", fechaFin:"24/04/2022",valorBruto: 3000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio", diaSemana: "Lunes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"24/04/2022",valorBruto: 3500 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio", diaSemana: "Martes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"04/04/2022",valorBruto: 3500 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio", diaSemana: "Lunes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"04/04/2022",valorBruto: 3500 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", diaSemana: "Martes", cantHoras: 40, fechaInicio: "25/02/2022", fechaFin:"04/04/2022",valorBruto: 4000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", diaSemana: "Vierens", cantHoras: 40, fechaInicio: "30/02/2022", fechaFin:"04/04/2022",valorBruto: 4000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", diaSemana: "Jueves", cantHoras: 40, fechaInicio: "20/02/2022", fechaFin:"04/04/2022",valorBruto: 4000 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", diaSemana: "Sabado", cantHoras: 40, fechaInicio: "28/02/2022", fechaFin:"04/04/2022",valorBruto: 4000 }))


// console.log(arrayListadoCursos);





function precioHora() {
  nivel = prompt("Elegí tu nivel", "Inicial");
  console.log(nivel);
  switch (nivel) {
    case "Inicial":
      totalCurso = resultadoNivelInicial
      descuento = descuentoNivelInicial
      alert(`El valor del curso es de: $ ${resultadoNivelInicial},00`);
      console.log(`El valor de la hora es ${precioHoraNivelInicial}`);
      console.log(`El valor del curso es ${precioHoraNivelInicial*cantidadClasesNivelInicial}`);
      break;
    case "Intermedio":
      totalCurso = resultadoNivelIntermedio
      descuento = descuentoNivelIntermedio
      alert(`El valor del curso es de: ${resultadoNivelIntermedio,00}`);
      console.log(`El valor de la hora es ${precioHoraNivelIntermedio}`);
      console.log(`El valor del curso es ${precioHoraNivelIntermedio*cantidadClasesNivelIntermedio}`);
      break;
    case "Avanzado":
      totalCurso = resultadoNivelAvanzado
      descuento = descuentoNivelAvanzado
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


arrayListadoCursosFiltrado = arrayListadoCursos.filter(variable => variable.diaSemana === diaSemanal);
console.log(arrayListadoCursosFiltrado)



class CursoElegido {
  constructor(curso) {
    this.nivel = curso.nivel;
    this.totalCurso = curso.valor;
    this.diaSemanal = curso.diaSemanal;
    this.descuento = curso.descuento;
    this.totalNeto = curso.totalNeto;
    
  }

  aplicaDescuento() {
    if (nivel="Inicial"){
      this.totalNeto = this.totalCurso * this.descuento
      console.log(`Aplica descuento de ${descuentoNivelInicial}. El total neto es de: ${this.totalNeto}`) 
      console.log(this.totalNeto)     
       }
       else if (nivel="Intermedio")  {
        this.totalNeto = this.totalCurso * this.descuento
        console.log(`Aplica descuento de ${descuentoNivelIntermedio}. El total neto es de: ${this.totalNeto}`) 
        console.log(this.totalNeto)  
       }
       else if (nivel="Avanzado")  {
        this.totalNeto = this.totalCurso * this.descuento
        console.log(`Aplica descuento de ${descuentoNivelAvanzado}. El total neto es de: ${this.totalNeto}`) 
        console.log(this.totalNeto)  
       }

  }
}

const datosCurso = new CursoElegido({nivel: nivel, valor: totalCurso, diaSemanal:diaSemanal, descuento: descuento});


datosCurso.aplicaDescuento();

console.log(datosCurso.diaSemanal)

console.log(datosCurso)





