const cursoElegidoReserva = JSON.parse(localStorage.getItem("Curso elegido"))
const formularioReserva = JSON.parse(localStorage.getItem("Formulario reserva"))
const datosDePago = JSON.parse(localStorage.getItem("Datos de Pago"))

console.log(cursoElegidoReserva)
console.log(formularioReserva)
console.log(datosDePago)


//variable nombre del titulo de la página
const divSeccionTituloTicket = document.getElementById("divSeccionTituloTicket")
let divSeccionTituloTicketEscribe = document.createElement("h2")
divSeccionTituloTicketEscribe.className = "tituloContainerDesplegable";
divSeccionTituloTicketEscribe.innerHTML = `${formularioReserva.nombre}, gracias por tu compra`
divSeccionTituloTicket.appendChild(divSeccionTituloTicketEscribe);



const contenedorTicket = document.getElementById("contenedorTicket")
let contenedorTicketEscribe = document.createElement("div");
contenedorTicketEscribe.className = "contenedorDatosTicket"
contenedorTicketEscribe.innerHTML = `
<div class="contenedorFila">
                <div class="valorFijo">
                    <p>Nombre:</p>
                </div>
                <div class="valorVariable">
                    <p>${formularioReserva.nombre}</p>
                    </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Apellido:</p>
                </div>
                <div class="valorVariable">
                    <p>${formularioReserva.apellido}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Email:</p>
                </div>
                <div class="valorVariable">
                    <p>${formularioReserva.email}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Domicilio</p>
                </div>
                <div class="valorVariable">
                    <p>${formularioReserva.calle} ${formularioReserva.departamento} - ${formularioReserva.localidad} </p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Datos del pago:</p>
                </div>
                <div class="valorVariable">
                    <p>${datosDePago.nombreTarjeta} - Tarjeta número: ${datosDePago.numeroTarjeta}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Monto abonado:</p>
                </div>
                <div class="valorVariable">
                    <p>$${cursoElegidoReserva.totalNeto},00</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Fecha del curso:</p>
                </div>
                <div class="valorVariable">
                    <p>${cursoElegidoReserva.fecha}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Horario:</p>
                </div>
                <div class="valorVariable">
                    <p>${cursoElegidoReserva.horario}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Día:</p>
                </div>
                <div class="valorVariable">
                    <p>${cursoElegidoReserva.diaSemanal}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Nivel:</p>
                </div>
                <div class="valorVariable">
                    <p>${cursoElegidoReserva.nivel}</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Cantidad de clases:</p>
                </div>
                <div class="valorVariable">
                    <p>${cursoElegidoReserva.total} clases</p>
                </div>
</div>
<div class="contenedorFila">
                <div class="valorFijo">
                <p>Profesor:</p>
                </div>
                <div class="valorVariable">
                <p>${cursoElegidoReserva.profesor}</p>
                </div>
 </div>
<div class="contenedorFilaValido">
                <div class="comprobanteValido">
                <p>Comprobante válido de compra</p>
                </div>
</div>
`
contenedorTicket.appendChild(contenedorTicketEscribe);
localStorage.clear()



const testButton = document.getElementById("testButton")


// imprime
testButton.addEventListener("click", (e) => {
      
        let pdf = new jsPDF
        ({
            orientation: 'p',
            unit: 'pt',
            format: 'a4',
            putOnlyUsedFonts:true,
            precision: 2
           })
        pdf.html(document.getElementById('contenedorTicket'), {
            callback: function (pdf) {
                pdf.save('Comprobante.pdf');
            }
        });
    })
