var botonUno = document.getElementById('botonUno')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')

botonUno.addEventListener('click',clickUno)


function clickUno(){actual.innerHTML+='1'}

/*
function clickSuma(){
    let valorActual = parseInt(actual.innerHTML)
    let valorResultado = parseInt(resultado.innerHTML)
    resultado.innerHTML = valorResultado + valorActual
    actual.innerHTML = '0'
}*/

