
const container_game = document.querySelector(".container_game")
const colorPicker = document.querySelector("#colorpicker")
const rainbowButton= document.querySelector("#rainbowMode")
const size = document.querySelector("#quantity").value
let color = colorPicker.value
let rainbowMode = false
rainbowButton.addEventListener("click",()=>{
    if(rainbowMode == false) {rainbowMode=true}
    else if(rainbowMode == true) {rainbowMode=false}
})






for(let i =0;i<size*size;i++){
  

    let etch = document.createElement("div")
    etch.classList = "etch"
    etch.style.cssText += `width: ${600/size}px;`
    etch.style.cssText += `height: ${600/size}px;`
    container_game.appendChild(etch)
}

const skatches = document.querySelectorAll(".etch")

skatches.forEach(etch=>etch.addEventListener("mouseover",function(e){


if(rainbowMode==true){
    color =getRandomColor()
    
}
else{
    color = colorPicker.value
}

e.target.style.cssText += `background-color: ${color}`
    
}))



function getRandomColor(){
    
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    return `rgb(${random1},${random2},${random3})`
}
