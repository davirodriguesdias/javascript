let numtxt = document.getElementById('num')
let res = document.getElementById('res')
let nums = []
let sel = document.getElementById('texto')
let item = document.createElement('option')
// let i = 0

function lista() {
    res.innerHTML = ''
    let num = Number(numtxt.value)
    let pro = nums.indexOf(num)
        if(pro == -1 && num >=1 && num <= 100 && num !== '') {
            item.text = `O valor ${num} foi  adicionado`
            sel.appendChild(item)

        
                // if(num.value !== ''){
                //     nums[i] = num.value
                //     i++
                // }
        
                nums.push(num)
                
        } else {
            alert('Valor inválido ou já encontrado na lista!')
        }
    numtxt.value = ''    
    }
    


function teste() {
    let num = Number(numtxt.value)
    // let quant = 0
    let maior = 0
    let menor = 101
    let soma = 0
    if(nums.length !== 0) {

        // for(let i = 0; i<nums.length; i++) {
        //     if(nums[i] !== '') {
        //         quant++
        //     }
        // }
        
        
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] > maior) {
                maior = nums[i]
            }
        } 

        for(let i = 0; i<nums.length; i++) {
            if(nums[i] < menor) {
                menor = nums[i]
            }
        } 

        for(let i = 0; i < nums.length; i++) {
            soma = soma + nums[i]
        }

        let media = soma/nums.length

        res.innerHTML = `Existem ${nums.length} números cadastrados<br>O maior valor informado é ${maior}<br>O menor valor informado é ${menor}<br>A soma de todos os valores é ${soma}<br>A média dos valores digitados é ${media}`
        


    } else {
        alert('Informe um valor antes!')
    }
}

