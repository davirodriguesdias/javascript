var sys = new Date()
var hours = sys.getHours()

if (hours < 12) {
    document.querySelector('div#hours').innerHTML = `IT IS NOW EXACTLY <strong>${hours}AM</strong>`

    document.querySelector('div#image').innerHTML = `<img width="280px" height="270px" src="day.webp" alt="day">`

    document.body.style.backgroundColor = 'rgb(235, 231, 134)'
    

}

else if (hours < 18) {
    document.querySelector('div#hours').innerHTML = `IT IS NOW EXACTLY <strong>${hours}PM</strong>`

    document.querySelector('div#image').innerHTML = `<img width="280px" height="270px" src="afternoon.jpg" alt="afternoon">`

    document.body.style.backgroundColor = 'rgb(225, 162, 46)'
    

}

else if(hours < 24) {
    document.querySelector('div#hours').innerHTML = `IT IS NOW EXACTLY <strong>${hours}PM</strong>`

    document.querySelector('div#image').innerHTML = `<img width="280px" height="270px" src="night.jpeg" alt="night">`

    document.body.style.backgroundColor = 'rgb(14, 14, 49)'
    

}