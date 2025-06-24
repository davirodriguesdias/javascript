iniciotxt = document.getElementById('inicio')
fimtxt = document.getElementById('fim')
passotxt = document.getElementById('passo')
texto = document.getElementById('texto')

function contar() {


    texto.innerHTML = ''
    texto.style.backgroundColor = 'rgb(198, 255, 236)'

    if (iniciotxt.value.length == 0 || passotxt.value.length == 0 || fimtxt.value.length == 0) {
        texto.innerHTML = 'IMPOSSÍVEL CONTAR!'
    }


    else {

        let inicio = Number(iniciotxt.value)
        let fim = Number(fimtxt.value)
        let passo = Number(passotxt.value)

        if (passo == 0) {
            passo = 1
        }
        
        if (inicio > fim) {
            while (inicio >= fim) {

                texto.innerHTML += `${inicio} \u{1F449} `
            
                inicio = inicio - passo
            
            }
        }


        else {
            while (inicio <= fim) {

                texto.innerHTML += `${inicio} \u{1F449} `
            
                inicio = inicio + passo
            
            }
        }

        texto.innerHTML += `\u{1F3C1}`

    }
}

