var numtxt = document.getElementById('num')
var texto = document.getElementById('texto')

function tabuada() {

    texto.innerHTML = ''
    

    if(numtxt.value.length == 0) {
        let item = document.createElement('option')
        item.text = 'Erro, informe um número...'
        texto.appendChild(item)
    }

    else {

        let num = Number(numtxt.value)
        

        for(let i = 1; i <= 10; i++) {

            let item = document.createElement('option')

            // innerHTML = mexe com o html e o contéudo

            // text = mexe diretamente com o conteúdo do elemnto, como o texto

            item.text += `${num} x ${i} = ${num * i }`

            texto.appendChild(item)
        }
    }

}