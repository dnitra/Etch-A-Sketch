
const container_game = document.querySelector(".container_game")
const colorPicker = document.querySelector("#colorpicker")
const normalMode = document.querySelector("#normalMode")

const eraserButton = document.querySelector("#eraser")
const rainbowButton= document.querySelector("#rainbowMode")
const sizeButton = document.querySelector("#size")
const clearButton = document.querySelector("#clear")
const mode = document.querySelector(".mode")

let modeText = "Normal mode "
let color = colorPicker.value
let normalModeS = true
let rainbowMode = false
let eraser = false
let pixels = sizeButton.valueAsNumber;

const modes = [normalMode, eraserButton, rainbowButton]


layout()



modes.forEach(mode=>mode.addEventListener("click",e=>{

    modes.forEach(mode=>{mode.classList.remove("clicked")})
    e.target.classList.add("clicked")

    }))



normalMode.addEventListener("click",()=>  {
    rainbowMode=false
    eraser =false
    modeText = "Normal mode " 
    mode.textContent =modeText+pixels+"x"+ pixels
    color = colorPicker.value
    mode.style.color = color
})

rainbowButton.addEventListener("click",()=>{
    if(!rainbowMode) {
        rainbowMode=true
        eraser = false}
        modeText = "Rainbow mode "
        mode.textContent = modeText+pixels+"x"+ pixels
})

eraserButton.addEventListener("click",()=> {if (!eraser) {
        
        rainbowMode=false
        eraser =true
        modeText = "Eraser mode "
        mode.style.color = "white"
        mode.textContent = modeText+ +pixels+"x"+ pixels
    }})


sizeButton.addEventListener('input', ()=>{

    let pixels = sizeButton.valueAsNumber;
    mode.textContent = modeText +pixels+"x"+ pixels
    mode.style.color = color
    
    
});
sizeButton.addEventListener('mouseup', resize);


clearButton.addEventListener("click", resize)




function layout(){

    let pixels = sizeButton.valueAsNumber;
    
    mode.textContent = modeText+ +pixels+"x"+ pixels
    
    for(let i =0;i<pixels*pixels;i++){
        
        let etch = document.createElement("div")
        etch.classList = "etch"
        etch.id = i
        etch.style.cssText += `width: ${600/pixels}px;`
        etch.style.cssText += `height: ${600/pixels}px;`
        container_game.appendChild(etch)
       
        mode.style.color = color
       
    }
    let skatches = document.querySelectorAll(".etch")

    skatches.forEach(etch=>etch.addEventListener("mouseover",function(e){


        if(rainbowMode){
            color =getRandomColor()
            
        }
        else if (eraser){
            
            color = "white"
        }
        else{
            
            color = colorPicker.value
        }
    
        mode.style.color = color
        e.target.style.cssText += `background-color: ${color}`
        
    }))

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




