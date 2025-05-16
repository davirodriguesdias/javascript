var txtano = document.querySelector('input#txtano')

var res = document.querySelector('p#res')

var sys = new Date()

var txtsex = document.getElementsByName('radiosex')

var img = document.createElement('img')
img.setAttribute('id', 'foto')

function calcular() {

    var ano = Number(txtano.value)
    var anoAtual = sys.getFullYear()

    var idade = anoAtual - ano

    var genero = ''

    if(txtsex[0].checked) {
        genero = 'um Homem'
        if(idade < 0) {
            img.setAttribute('src', 'imagens/esper.jpeg')
        } else if(idade <= 2) {
            img.setAttribute('src', 'imagens/bebeboy.jpeg')
        } else if(idade <= 10) {
            img.setAttribute('src', 'imagens/kidboy.webp')
        } else if(idade <= 15) {
            img.setAttribute('src', 'imagens/teenboy.webp')
        } else if(idade <= 29) {
            img.setAttribute('src', 'imagens/teenadultboy.webp')
        } else if(idade <= 59) {
            img.setAttribute('src', 'imagens/adultboy.jpeg')
        } else if(idade <= 90) {
            img.setAttribute('src', 'imagens/oldman.jpeg')
        } else{
           img.setAttribute('src', 'imagens/death.jpg')
        }
    } else if(txtsex[1].checked) {
        genero = 'uma Mulher'
        if(idade < 0) {
            img.setAttribute('src', 'imagens/esper.jpeg')
        } else if(idade <= 2) {
            img.setAttribute('src', 'imagens/bebe.jpeg')
        } else if(idade <= 10) {
            img.setAttribute('src', 'imagens/kidgirl.webp')
        } else if(idade <= 15) {
            img.setAttribute('src', 'imagens/teengirl.webp')
        } else if(idade <= 29) {
            img.setAttribute('src', 'imagens/teenadultgirl.webp')
        } else if(idade <= 59) {
            img.setAttribute('src', 'imagens/adultgirl.jpeg')
        } else if(idade <= 90) {
            img.setAttribute('src', 'imagens/oldwoman.jpeg')
        } else{
           img.setAttribute('src', 'imagens/death.jpg')
        }
    }

    document.querySelector('section#content').style.height = '420px'
    res.innerHTML = `Você é ${genero} de ${idade} anos`
    document.querySelector('div#result').appendChild(img)

    
}