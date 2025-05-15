var txtano = document.querySelector('input#txtano')

var res = document.querySelector('p#res')

var sys = new Date()

var txtsex = document.getElementsByName('radiosex')

function calcular() {

    var ano = Number(txtano.value)
    var anoAtual = sys.getFullYear()

    var idade = anoAtual - ano

    var genero = ''

    if(txtsex[0].checked) {
        genero = 'um Homem'
        if(idade < 0) {
            //espermatozoide
        } else if(idade <= 2) {
            //bebê
        } else if(idade <= 10) {
            //criança
        } else if(idade <= 12) {
            //pre-adolescente
        } else if(idade <= 17) {
            //adolescente
        } else if(idade <= 29) {
            //jovem adulto
        } else if(idade <= 59) {
            //adulto
        } else if(idade <= 90) {
            //idoso
        } else{
            //morte
        }
    } else if(txtsex[1].checked) {
        genero = 'uma Mulher'
    }

    document.querySelector('section#content').style.height = '420px'
    res.innerHTML = `Você é ${genero} de ${idade} anos`

    
}