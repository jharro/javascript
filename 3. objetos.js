//¿Por qué se utilizan los objetos?
//Imaginemos que necesitamos almacenar los datos de un gato
let nombreGato='Michi'
let edadGato=4

function miau(){
    alert('Miauuu...')
}

//Todo funciona bien, y si queremos acceder al nombre del gato, escribimos la variable nombreGato
//o si queremos ejecutar la función simplemente escribimos su nombre
miau()
//Este código técnicamente funciona, pero no es ideal desde la perspectiva de almacenar o gestionar información organizada
//Nosotros vemos las variables y las relacionamos, pero el computador estas variables y la función no tienen
//absolutamente nada que ver entre sí.
//¿Cómo escribir nuestro código para que estos datos estén relacionados entre sí?...la respuesta es: objetos

//En este contexto las {} no tienen que ver con funciones sino con objetos
let gato={
    nombreGato:'Michi',
    edadGato:4,
    colorOjos:'Azules',
    comidas:{
        favorita:'pescado',
        menosFavorita:'Naranja'
    },
    miau(){
        alert('Miau..')
    }
}
gato.miau()
//ahora sí se entiende que estos valores están relacionados entre sí. Todo lo que tiene que ver con el gato vive
//dentro de las {}
//¿Cómo podemos acceder a sua propiedades?
gato.nombreGato

//Un objeto puede tener funciones dentro del mismo
//En el contexto del objeto, no neecitamos la palabra function para crear una función. Cuando una función
//vide dentro de un objeto, nos referimos a ella como un método.
//Podemos tener un objeto dentro de otro

//¿Cómo accedemos desde fuera a sus comidas favoritas?
console.log(gato.comidas.favorita)

//Ahora, hagamos un ejercicio. Cada vez que el suuario haga click en el navegador, 
//se emita una alerta. El navegador trae sus propios onejtos preconstruidos
//document: representa la página web como un todo. Tiene un método llamado addEventListener
//recibe dos argumentos. El primero, qué evento queremos escuchar
//document.addEventListener(a,b), donde a puede ser: scroll, click, keydown, y b: qué función
//queremos ejecutar
document.addEventListener("click",saludo)

function saludo(){
  alert('hola')
}

//Nos debió quedar claro al menos, que para mirar dentro de un objeto usamos el .
