var numtxt = document.getElementById('num')
var texto = document.getElementById('texto')

function tabuada() {

    var num = Number(numtxt.value)

    texto.innerHTML = ''
    texto.style.backgroundColor = 'rgb(198, 255, 236)'

    if(num == '') {
        texto.innerHTML = ('INFORME UM NÚMERO')
    }

    else {
        for(var i = 0; i <= 10; i++) {


            res = num * i 
            texto.innerHTML += (`${num} x ${i} = ${res}<br>`)
        }
    }
}