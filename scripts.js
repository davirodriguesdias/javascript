let numtxt = document.getElementById('num')

let nums = []
// let i = 0

function lista() {
    let num = Number(numtxt.value)
    let pro = nums.indexOf(num)
        if(pro == -1 && num >=1 && num <= 100 && num !== '') {
            let sel = document.getElementById('texto')
                let item = document.createElement('option')
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
    }
    


function teste() {
    let num = Number(numtxt.value)
    // let quant = 0
    let maior = 0
    if(num !== '') {

        // for(let i = 0; i<nums.length; i++) {
        //     if(nums[i] !== '') {
        //         quant++
        //     }
        // }
        document.write(nums.length)
        
        for(let i = 0; i<nums.length; i++) {
            if(nums[i] > maior) {
                maior = nums[i]
            }
        } 

        // for(let i = 0; i<nums.length; i++) {
        //     if(nums[i] < menor) {
        //         menor = nums[i]
        //     }
        // } 


        document.write(maior)


    }
}

