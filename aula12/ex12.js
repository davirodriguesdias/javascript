var sys = new Date()
var hour = sys.getHours()
var min = sys.getMinutes()
var date = sys.getDate()
var day = sys.getDay()
var month = sys.getMonth()
var year = sys.getFullYear()

// switch (month) {
//     case 4:
//         month = '05'
// }

// console.log(`${date}/${month}/${year}`)

switch(day) {
    case 0:
        day = 'domingo'
        break

    case 1:
        day = 'segunda-feira'
        break

    case 2:
        day = 'terça-feira'
        break 
    
    case 3:
        day = 'quarta-feira'
        break

    case 4:
        day = 'quinta-feira'
        break 
        
    case 5:
        day = 'sexta-feira'    
}

switch(month) {
    case 0:
        month = 'janeiro'
        break

    case 1:
        month = 'fevereiro'
        break

    case 2:
        month = 'março'
        break 
    
    case 3:
        month = 'abril'
        break

    case 4:
        month = 'maio'
        break 
        
    case 5:
        month = 'junho'   
        
    case 6:
        month = 'julho'
        break

    case 7:
        month = 'agosto'
        break

    case 8:
        month = 'outubro'
        break 
    
    case 9:
        month = 'setembro'
        break

    case 10:
        month = 'novembro'
        break 
        
    case 11:
        month = 'dezembro'
}

console.log(`${hour}:${min}`)
console.log(`${day}, ${date} de ${month} de ${year}`)
