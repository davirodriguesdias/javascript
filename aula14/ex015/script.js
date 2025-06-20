iniciotxt = document.getElementById('inicio')
fimtxt = document.getElementById('fim')
passotxt = document.getElementById('passo')
texto = document.getElementById('texto')

function contar() {

    var inicio = Number(iniciotxt.value)
    var fim = Number(fimtxt.value)
    var passo = Number(passotxt.value)

    texto.innerHTML = ''
    texto.style.backgroundColor = 'rgb(198, 255, 236)'

    if (inicio == '' && inicio < 0) {
        texto.innerHTML = 'É NECESSÁRIO DE UM INÍCIO'
    }

    else if (passo == '') {
        texto.innerHTML = 'É NECESSÁRIO DE UM PASSO'
    }

    else {
        while (inicio <= fim) {

            texto.innerHTML += `${inicio} > `
    
            inicio = inicio + passo
    
        }
    
        if(inicio > fim) {
            texto.innerHTML += 'FIM'
        }
    }
}