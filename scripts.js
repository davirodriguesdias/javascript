let num = document.getElementById('num')

let nums = []
// let i = 0

function lista() {
    let pro = nums.indexOf(num.value)
        if(pro == -1 && num.value >=1 && num.value <= 100 && num.value !== '') {
            let sel = document.getElementById('texto')
                let item = document.createElement('option')
                item.text = `O valor ${num.value} foi  adicionado`
                sel.appendChild(item)
        
                // if(num.value !== ''){
                //     nums[i] = num.value
                //     i++
                // }
        
                nums.push(num.value)
        } else {
            alert('Valor inválido ou já encontrado na lista!')
        }
    }
    


function teste() {
    document.write(nums)
}
