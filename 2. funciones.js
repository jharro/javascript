//En la lección anterior aprendimos a escribir en la consola, pero en el mundo real no es así.
//Se quiere escribir varias líneas de código y no una a la vez y ejecutarla de inmediato
//Podemos usar codepen.io o ir directamente a un editor
//Funcipon es como una acción o verbo. Por ejemplo, si juestro pc fuera nuestra mascota, le podemos
//decir
correr()
saltar()
//En lugar de estas acciones, podemos decirle al navegador que cree una alerta o mensaje emergente
alert()
//la idea es que dentro de los () podemos pasarle valores o datos, y depende de la función, cómo tratar a
//esos datos
//Así como podemos enseñarle a nuestro perro un truco, podemos enseñarle a nuestro computador a través de funciones
saludar() //pero el navegador no tiene idea de lo que es saludar, porque no tiene una función con ese nombre
//pero como programadores podemos agregar nuestras propias instrucciones para que el navegador las realice
//y usarlas en cualquier momento
//¿Cómo creamos una función?
function saludar(){
    alert('Hola, mi nombre es Jhonnys')
}
//Dentro de las llaves le explicamos al computador lo que debe hacer y es lo que se ejecutará cuando
//se llama a la función
//¿Por qué no aparece nada en el navegador?
saludar()
//Ahora vamos a hacer una mejora en la función, para que sea flexible
function saludar(nombre,colorFavorito){
    alert('Hola, mi nombre es '+nombre+' y mi color favorito es '+colorFavorito+'.')
}
saludar("Karla","Azul")

//Vamos a crear otra función
function triplicame(numero){
    return 3*numero
}
let miNumeroFavorito=triplicame(8)
alert(miNumeroFavorito)

//Lo que debe quedar clar es que existen funciones y que se pueden llamar cuántas veces se quiera