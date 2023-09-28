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

//igual los números
let miNumero=29.54
console.log(miNumero.toFixed())

//Vamos a eliminar un elemento de un array. Recibe dos argumentos. el primero es el índice que quiero
//eliminar y el segundo es cúantos elementos quiero eliminar a partir de ese índice
misPalabras.splice(1,1)
//Vamos a acceder a la segunda especie de misMascotas
console.log(misMascotas[1].especie)
//To do lo que debes saber es que un array es una colección de elementos
//Ejercicio: Agregar una tercera mascota al array misMascotas
misMascotas.push({nombre:"Tony",especie:'Ave'})
