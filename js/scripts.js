//let boton=document.getElementById('cambiarFondo')


/*boton.addEventListener('click',()=>{
    document.body.style.backgroundColor='fuchsia'
})
*/


function mostrar(){
    document.getElementById('texto').style.display = 'block';
    document.getElementById('mostrar').style.display='none'
    document.getElementById('ocultar').style.display='inline'
}

function ocultar(){
    document.getElementById('texto').style.display = 'none';
    document.getElementById('mostrar').style.display='inline'
    document.getElementById('ocultar').style.display='none'
}