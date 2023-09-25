var date= new Date()
var convert = date.toString()
var copy = convert.slice(0,15)

setInterval(function(){ 
    var date = new Date()

    var getsec = date.getSeconds() 
    var getmin = date.getMinutes()
    var gethour = date.getHours()
    document.getElementById('date').innerHTML = copy 
    document.getElementById('hour').innerHTML = gethour
    document.getElementById('min').innerHTML= getmin
    document.getElementById('sec').innerHTML = getsec

}, 1000)