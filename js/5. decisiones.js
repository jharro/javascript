//supongamos que tenemos un negocio donde vendemos futas, y si se compran 10 o más
//mostrar al cliente el mensaje "Felicitaciones" o "Lo sentimos, es una cantidad muy pequeña para un domicilio"

let cantidadDeFrutas=2
if(cantidadDeFrutas>9){
  document.write('Felicitaciones')
}else{
  document.write('Lo sentimos')
}

//Aquí vamos a ver otro tipo de dato: boolean
cantidadDeFrutas=true //"" falso "fff" true
if(cantidadDeFrutas){
  document.write('Felicitaciones')
}else{
  document.write('Lo sentimos')
}

//Otro tipo de decisiones...repeticiones
let contador=2
while(contador<100){//Se aprovecha el valor de true
    document.write(`Hay ${contador} valores.<br>`)
    contador++
}