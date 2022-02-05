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
let resultadoNivelAvanzado = parseFloat(precioHoraNivelAvanzado*cantidadClasesNivelAvanzado);


const arrayListadoCursos = [];
let arrayListadoCursosFiltrado = [];

class ListadoCursos {
  constructor(listaCursos) {
    this.nivel = listaCursos.nivel;
    this.diaSemana = listaCursos.diaSemana;
    this.numeroDiaSemana = listaCursos.numeroDiaSemana
    this.cantHoras = listaCursos.cantHoras;
    this.fechaInicio = listaCursos.fechaInicio;
    this.fechaFin = listaCursos.fechaFin;
    this.valorBruto = listaCursos.valorBruto
    this.idCurso = listaCursos.idCurso
      }
}

arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", numeroDiaSemana: 1, diaSemana: "Lunes", cantHoras: 15, fechaInicio: "March 03, 2022", fechaFin:"April 04, 2022",valorBruto: 3000, idCurso: 001 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", numeroDiaSemana: 5, diaSemana: "Viernes", cantHoras: 15, fechaInicio: "10/02/2022", fechaFin:"14/04/2022",valorBruto: 3000, idCurso: 002 }))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Inicial", numeroDiaSemana: 4,  diaSemana: "Jueves", cantHoras: 15, fechaInicio: "22/02/2022", fechaFin:"24/04/2022",valorBruto: 3000, idCurso:003}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio",  numeroDiaSemana: 1, diaSemana: "Lunes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"24/04/2022",valorBruto: 3500, idCurso:004}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio", numeroDiaSemana: 2, diaSemana: "Martes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"04/04/2022",valorBruto: 3500, idCurso:005}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Intermedio", numeroDiaSemana: 1, diaSemana: "Lunes", cantHoras: 20, fechaInicio: "02/02/2022", fechaFin:"04/04/2022",valorBruto: 3500, idCurso:006}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", numeroDiaSemana: 2, diaSemana: "Martes", cantHoras: 40, fechaInicio: "25/02/2022", fechaFin:"04/04/2022",valorBruto: 4000, idCurso:007}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", numeroDiaSemana: 5, diaSemana: "Vierens", cantHoras: 40, fechaInicio: "30/02/2022", fechaFin:"04/04/2022",valorBruto: 4000, idCurso:010}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", numeroDiaSemana: 4, diaSemana: "Jueves", cantHoras: 40, fechaInicio: "20/02/2022", fechaFin:"04/04/2022",valorBruto: 4000, idCurso:011}))
arrayListadoCursos.push( new ListadoCursos ({nivel: "Avanzado", numeroDiaSemana: 6, diaSemana: "Sabado", cantHoras: 40, fechaInicio: "28/02/2022", fechaFin:"04/04/2022",valorBruto: 4000, idCurso:012}))


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

arrayListadoCursosFiltrado = arrayListadoCursos.filter(cursosPorNivel => cursosPorNivel.nivel === nivel);
console.log(arrayListadoCursosFiltrado)

let copiaArrayListadoCursosFiltrado = Object.assign([], arrayListadoCursosFiltrado); // deep copy - Copia profunda


function ordenarPorDia (){
copiaArrayListadoCursosFiltrado.sort( (a, b) => {
  if(a.numeroDiaSemana < b.numeroDiaSemana ) {
    return -1;
  }
  if(a.numeroDiaSemana  > b.numeroDiaSemana ) {
    return 1;
  }})



console.log("lo de abajo es el curso ordenado por día")
console.log(copiaArrayListadoCursosFiltrado)
}

ordenarPorDia()



//elige día
function seleccionDia() {
  diaSemanal = prompt("Elegí el día de la semana que querés iniciar", "Lunes");
  console.log(diaSemanal);
}
seleccionDia();



// devuelve solo los cursos del día seleccionado conjunto con el nivel: EJ solo cursos iniciales de los lunes
arrayListadoCursosFiltrado = arrayListadoCursos.filter(cursosPorDia => (cursosPorDia.diaSemana === diaSemanal)&&(cursosPorDia.nivel === nivel));
console.log("Lo de abajo es arrayListadoCursosFiltrado")
console.log(arrayListadoCursosFiltrado)


//se crea el objeto del curso elegido
class CursoElegido {
  constructor(curso) {
    this.nivel = curso.nivel;
    this.totalCurso = curso.valor;
    this.diaSemanal = curso.diaSemanal;
    this.descuento = curso.descuento;
    this.totalNeto = curso.totalNeto;
    this.idCurso = curso.idCurso;
    
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







function fechaEnDDMMYYYY(){
  
	let fechaCursoFormato = new Date("March 03,2022");
    let dd = fechaCursoFormato.getDate();
    let mm = fechaCursoFormato.getMonth()+1; //January is 0!

    let yyyy = fechaCursoFormato.getFullYear();
    if(dd<10){
        dd='0'+dd
    }
    if(mm<10){
        mm='0'+mm
    }
    fechaCursoFormato = dd+'/'+mm+'/'+yyyy;
    
    console.log(`La fecha del curso con formato es: ${fechaCursoFormato}`) 
   
  
    }

    fechaEnDDMMYYYY()


    let today = new Date();
    let fechaCursoElegido = new Date("March 03, 2022")
    const milisegundosPorDia = 86400000;
    console.log( (fechaCursoElegido - today ) / milisegundosPorDia)


   



