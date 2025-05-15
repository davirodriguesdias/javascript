function load() {
var msg = document.querySelector('div#hours')
var img = document.querySelector('img#photo')
var sys = new Date()
var hours = sys.getHours()

if (hours < 12) {
    msg.innerHTML = `IT IS NOW EXACTLY <strong>${hours}AM</strong>`

    img.src = "day.webp"

    document.body.style.backgroundColor = 'rgb(235, 231, 134)'
    

}

else if (hours < 18) {
    msg.innerHTML = `IT IS NOW EXACTLY <strong>${hours}PM</strong>`

    img.src = "afternoon.jpg"

    document.body.style.backgroundColor = 'rgb(225, 162, 46)'
    

}

else if(hours < 24) {
    msg.innerHTML = `IT IS NOW EXACTLY <strong>${hours}PM</strong>`

    img.src = "night.jpeg"

    document.body.style.backgroundColor = 'rgb(14, 14, 49)'
    

}
}