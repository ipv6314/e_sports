window.onload = listar()

let Enviar = document.querySelector('#enviar')

//Datos de la toma
let maxi = document.querySelector('#tomaMaxima')
let mini = document.querySelector('tomaMinima')
let pul = document.querySelector('tomaPulso')

//fecha de la toma
let fecha_sistema = new Date();//Da la fecha completa
let dia = fecha_sistema.getDate();//Se obtiene el dia
let mes = fecha_sistema.getMonth()+1; //Da el numero de mes actual (del 0 al 11 por eso se suma 1) 
let año = fecha_sistema.getFullYear();//Se obtiene el año
let hora = fecha_sistema.getHours();//Da la hora al momento de la ejecucion
let minutos = fecha_sistema.getMinutes(); //Da los minutos al momento de la ejecucion
let fecha = dia + "/" + mes + "/" + año;
let fechaHora = hora +":" + minutos;
let datosToma = fecha + " " + fechaHora + " " + maxi.value


function carga(event) {
  event.preventDefault()
  console.log(datosToma);
  document.querySelector('form').reset()
}

Enviar.addEventListener('click', carga)


//LEER y MOSTRAR DATOS DEL ARCHIVO JSON
let registros = document.querySelector('#registros')

function listar(){
  fetch('./assets/data/control.json')
    .then(res => res.json())
    .then(data => {
      listado(data)
    })
}
function listado(data){
  for (let valor of data){
    registros.innerHTML += `
    <tr>
      <td scope="row">${fecha}</td>
      <td>${fechaHora}</td>
      <td>${valor.Maxima}</td>
      <td>${valor.Minima}</td>
      <td>${valor.Pulsaciones}</td>
    </tr>
    `
  }
}