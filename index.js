var Mousetrap = require('mousetrap')
var valorActual
var valorResultado
var operacion

var botonUno = document.getElementById('botonUno')
var botonDos = document.getElementById('botonDos')
var botonTres = document.getElementById('botonTres')
var botonCuatro = document.getElementById('botonCuatro')
var botonCinco = document.getElementById('botonCinco')
var botonSeis = document.getElementById('botonSeis')
var botonSiete = document.getElementById('botonSiete')
var botonOcho = document.getElementById('botonOcho')
var botonNueve = document.getElementById('botonNueve')
var botonCero = document.getElementById('botonCero')
var botonSuma = document.getElementById('botonSuma')
var botonResta = document.getElementById('botonResta')
var botonMulti = document.getElementById('botonMulti')
var botonDiv = document.getElementById('botonDiv')
var actual = document.getElementById('actual')
var resultado = document.getElementById('resultado')
var botonDel = document.getElementById('botonDel')
var botonRegresar = document.getElementById('botonRegresar')
var botonIgual = document.getElementById('botonIgual')
var botonHisto = document.getElementById('botonHisto')
var botonHis = document.getElementById('botonHis')
var histo = document.getElementById('histo')
var historial = document.getElementById('historial')


botonUno.addEventListener('click',clickUno)
botonDos.addEventListener('click',clickDos)
botonTres.addEventListener('click',clickTres)
botonCuatro.addEventListener('click',clickCuatro)
botonCinco.addEventListener('click',clickCinco)
botonSeis.addEventListener('click',clickSeis)
botonSiete.addEventListener('click',clickSiete)
botonOcho.addEventListener('click',clickOcho)
botonNueve.addEventListener('click',clickNueve)
botonCero.addEventListener('click',clickCero)
botonSuma.addEventListener('click',clickSuma)
botonResta.addEventListener('click',clickResta)
botonMulti.addEventListener('click',clickMultiplicacion)
botonDiv.addEventListener('click',clickDivision)
botonDel.addEventListener('click',clickDel)
botonRegresar.addEventListener('click',clickRegresar)
botonIgual.addEventListener('click', clickIgual)
botonHisto.addEventListener('click', clickHisto)
botonHis.addEventListener('click', clickHis)

Mousetrap.bind('1', clickUno)
Mousetrap.bind('2', clickDos)
Mousetrap.bind('3', clickTres)
Mousetrap.bind('4', clickCuatro)
Mousetrap.bind('5', clickCinco)
Mousetrap.bind('6', clickSeis)
Mousetrap.bind('7', clickSiete)
Mousetrap.bind('8', clickOcho)
Mousetrap.bind('9', clickNueve)
Mousetrap.bind('0', clickCero)
Mousetrap.bind('+', clickSuma)
Mousetrap.bind('-', clickResta)
Mousetrap.bind('x', clickMultiplicacion)
Mousetrap.bind('C', clickDel)
Mousetrap.bind('backspace', clickRegresar)

function clickUno(){
    actual.innerHTML+='1'
    historial.innerHTML+= '1'
}
    
function clickDos(){
    actual.innerHTML+='2'
    historial.innerHTML +='2'
}
function clickTres(){
    actual.innerHTML+='3'
    historial.innerHTML +='3'
}
function clickCuatro(){
    actual.innerHTML+='4'
    historial.innerHTML +='4'
}
function clickCinco(){
    actual.innerHTML+='5'
    historial.innerHTML +='5'
}
function clickSeis(){
    actual.innerHTML+='6'
    historial.innerHTML +='6'
}
function clickSiete(){
    actual.innerHTML+='7'
    historial.innerHTML +='7'
}
function clickOcho(){
    actual.innerHTML+='8'
    historial.innerHTML +='8'
}
function clickNueve(){
    actual.innerHTML+='9'
    historial.innerHTML +='9'
}
function clickCero(){
    actual.innerHTML+='0'
    historial.innerHTML +='0'
}

function clickSuma(){
    valorActual = parseInt(actual.innerHTML)
    resultado.innerHTML = parseInt(valorActual)
    operacion = '+'
    actual.innerHTML = '0'
    historial.innerHTML +='<br>'
    historial.innerHTML +='+'
    historial.innerHTML +='<br>'
}
function clickResta(){
    valorActual = parseInt(actual.innerHTML)
    resultado.innerHTML += valorActual
    operacion = '-'
    actual.innerHTML = '0'
    historial.innerHTML +='<br>'
    historial.innerHTML +='-'
    historial.innerHTML +='<br>'
    
}
function clickMultiplicacion(){
    valorActual = parseInt(actual.innerHTML)
    resultado.innerHTML += parseInt(valorActual)
    operacion = '*'
    actual.innerHTML = '0'
    historial.innerHTML +='<br>'
    historial.innerHTML +='x'
    historial.innerHTML +='<br>'
}
function clickDivision(){
    valorActual = parseInt(actual.innerHTML)
    resultado.innerHTML += valorActual
    operacion = '/'
    actual.innerHTML = '0'
    historial.innerHTML +='<br>'
    historial.innerHTML +='/'
    historial.innerHTML +='<br>'
}

function clickIgual(){
    valorActual = parseInt(actual.innerHTML)
    operar()
    historial.innerHTML += '<br>'
    historial.innerHTML += resultado.innerHTML
    historial.innerHTML += '<br>'
    
}

function clickDel(){
    location.reload()
}

function clickRegresar(){
    var valorActual = actual.innerHTML
    valorActual = valorActual.substring(0,valorActual.length -1)
    actual.innerHTML = valorActual
    historial.innerHTML = valorActual
}

function operar(){
    var total = 0
    switch(operacion){
        case'+':
            total = parseInt(resultado.innerHTML) + parseInt(valorActual)            
            break
        case'-':
            total = parseInt(resultado.innerHTML) - parseInt(valorActual)
            break
        case'*':
            total = parseInt(resultado.innerHTML) * parseInt(valorActual)
            break
        case'/':
            total = parseInt(resultado.innerHTML) / parseInt(valorActual)
            break
    }
    actual.innerHTML = '0'
    resultado.innerHTML = total
}

function clickHisto(){
    document.getElementById('histo').style='display: block'
    document.getElementById('botonHisto').style='display: none'
    document.getElementById('botonHis').style='display: block'
}

function clickHis(){
    document.getElementById('histo').style='display: none'
    document.getElementById('botonHisto').style='display: block'
    document.getElementById('botonHis').style='display: none'
}