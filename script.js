
window.onload = () => {

    
    
    
    let generateNumber = () => {
        let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let indexNum = Math.floor(Math.random() * numeros.length);
        return numeros[indexNum];
    }
    let generateIcon = () => {
        
        let iconos = ["\u2665", "\u2666", "\u2660", "\u2663"];
        let indexIcon = Math.floor(Math.random() * iconos.length);
        let colorIcono = document.querySelector(".icono")
        let colorIcono2 = document.querySelector(".icono2")
        if(iconos[indexIcon] == "\u2665" || iconos[indexIcon] == "\u2666")
        {
           colorIcono.classList.replace("text-dark","text-danger")
           colorIcono2.classList.replace("text-dark","text-danger")
        }
        else{
            colorIcono.classList.replace("text-danger","text-dark")
            colorIcono2.classList.replace("text-danger","text-dark")
        }
        return iconos[indexIcon];
        
        
    }
    let icono = generateIcon()
    document.querySelector('.icono').innerHTML = icono;
    document.querySelector('.icono2').innerHTML = icono;
    document.getElementById("medio").innerHTML = generateNumber();
    document.querySelector(".boton").addEventListener("click",()=>{
    document.getElementById("medio").innerHTML = generateNumber();
    let icono2 = generateIcon()
    document.querySelector('.icono').innerHTML = icono2;
    document.querySelector('.icono2').innerHTML = icono2;

    })
}
