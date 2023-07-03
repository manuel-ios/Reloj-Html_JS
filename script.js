console.log("Estoy dentro de index ")
function reloj(){
    let date =  new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    hr =  hr <=9 ? "0"+hr : hr;
    min =  min <= 9 ? "0"+min: min;
    seg =  seg <= 9 ? "0"+ min : seg;
    let horaActual =  hr + ":" + min + ":" + seg 
    let hrDiv  = document.createElement('div')
    setTimeout(()=>{
        reloj()
    },2000)

    if(hr => 12){
        // console.log("Buenas Tardes"+horaActual)
        let hrDiv  = document.createElement('div')
        hrDiv.innerHTML = `<h1><center>Buenas Tardes</center></h1>`
        document.body.append(hrDiv)
    
    }else{
        console.log(
            "Buenos Días"+horaActual)
    }
    

    
}
reloj()

