
const container_game = document.querySelector(".container_game")
const colorPicker = document.querySelector("#colorpicker")
const normalMode = document.querySelector("#normalMode")
const rainbowButton= document.querySelector("#rainbowMode")
const sizeButton = document.querySelector("#size")
const clearButton = document.querySelector("#clear")
const sizeInput = document.querySelector("#quantity")
const mode = document.querySelector(".mode")
let color = colorPicker.value
let rainbowMode = false
let size = parseInt(document.querySelector("#quantity").value)




layout()





rainbowButton.addEventListener("click",()=>{
    if(rainbowMode == false) {rainbowMode=true}
})

normalMode.addEventListener("click",()=> {if (rainbowMode) {rainbowMode=false}})

sizeButton.addEventListener("click", resize)
clearButton.addEventListener("click", resize)

sizeInput.addEventListener('input', function () {
	
	// As a number
    sizeVal()

});


function layout(){
    
    let pixels = sizeVal()
    
    for(let i =0;i<pixels*pixels;i++){

        let etch = document.createElement("div")
        etch.classList = "etch"
        etch.id = i
        etch.style.cssText += `width: ${600/size}px;`
        etch.style.cssText += `height: ${600/size}px;`
        container_game.appendChild(etch)

        mode.textContent = "Size: " +pixels+"x"+ pixels
        mode.style.color = color
    }
    let skatches = document.querySelectorAll(".etch")

    skatches.forEach(etch=>etch.addEventListener("mouseover",function(e){


        if(rainbowMode==true){
            color =getRandomColor()
            
        }
        else{
            color = colorPicker.value
        }
    
        mode.style.color = color
        e.target.style.cssText += `background-color: ${color}`
        
    }))

}


function sizeVal(){
    let val = sizeInput.valueAsNumber;

    if (val>100) {
        val = 100 
        sizeInput.value = 100
    }
	
    size = val
    return size
}

function getRandomColor(){
    
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255);
    return `rgb(${random1},${random2},${random3})`
}

function resize (){
    let skatches = document.querySelectorAll(".etch")
    skatches.forEach(etch=>  etch.remove())
    
    
    layout()
  
}
