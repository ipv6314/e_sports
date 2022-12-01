
let TEAM_A = document.querySelector('#tomaMaxima')
let TEAM_B = document.querySelector('#tomaMinima')
let send = document.querySelector('#enviar')
let totalScore_A = 0
let totalScore_B = 0


function clear() {
  TEAM_A.value = ''
  TEAM_B.value = ''
}
function check() {
  if (TEAM_A.value === '') {
    alert('NO PUEDE HABER CAMPOS VACIOS'); 
  }
  if (TEAM_B.value === '') {
    alert('NO PUEDE HABER CAMPOS VACIOS'); 
  }
}
function winner() {
  if (TEAM_A.value > TEAM_B.value) {
    totalScore_A.push = +3
    console.log('GANA TEAM A');
    console.log(totalScore_A);
  } else if (TEAM_A.value < TEAM_B.value) {
    totalScore_B = +3
    console.log('GANA TEAM B');
    console.log(totalScore_B);
  } else {
    console.log('empate');
  }
}
// Rangos para los condicionales
// >= 180 / >= 110
// 160-179 / 100-109
// 140-159 / 90-99
// 130-139 / 85-89
// 120-129 / 80-84
// < 120 / 80

function enviar(event) {
  event.preventDefault()
  console.clear()
  check()
  winner() 
  clear()
}


send.addEventListener('click', enviar)


//TRABAJO CON LA FECHA
//Esto se debe agregar a la tabla al clickear el submit, no con la recarga de la pagina cómo ahora
nuevoFormato()

function nuevoFormato () {
  let fecha_sistema = new Date();//Da la fecha completa
  dia = fecha_sistema.getDate();//Se obtiene el dia
  mes = fecha_sistema.getMonth()+1; //Da el numero de mes actual (del 0 al 11 por eso se suma 1) 
  año = fecha_sistema.getFullYear();//Se obtiene el año
  hora = fecha_sistema.getHours();//Da la hora al momento de la ejecucion
  minutos = fecha_sistema.getMinutes(); //Da los minutos al momento de la ejecucion
  fecha = dia + "/" + mes + "/" + año;
  fechaHora = hora +":" + minutos; 
  console.log(fecha + " - " + fechaHora);
}
