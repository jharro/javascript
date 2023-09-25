//¿Qué es un array?
//Supongamos que un concesionario tiene carros con una amplia gama de colores
//Cuando escuchamos arrays pensamos en una colección de elementos

let miNumeroFavorito=7
let misNumerosFavoritos=[9,5,6,23,4]

let misPalabras=['rojo','hola','lunes']
let misMascotas=[{nombre:'Pepe',especie:'gato'},{nombre:'Ladrador',especie:'perro'}]
console.log(misMascotas[1].especie)

let correos=[{remitente:'email@gmail.com',asunto:'Saludo',mensaje:'Hola, quiero saludarte'},
    {remitente:'ymail@gmail.com',asunto:'Feliz navidad',mensaje:'Ho, Ho, Ho'}
]
console.log(correos)

//Gran parte de la programación consiste en trabajar con arrays
//Agreguemos y eliminemos una palabra...un array es un tipo especial de objetos
//push es un método al que los arrays pueden acceder de manera nativa
misPalabras.push('naranja')
//Cada tipo de datos teiene acceso a sus propios métodos, por ejemplo..
let miNombre="Juanito"
console.log(miNombre.toUpperCase())