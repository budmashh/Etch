const appContainer = document.querySelector('.app-container');
const clearButton = document.querySelector('.clear');
 const eraserButton = document.querySelector('.eraser');
 const rgbButton = document.querySelector('.rgb-color');
 const greyButton = document.querySelector('.grey');
 const pickButton = document.querySelector('.pick-color');
 const gridSizeButton = document.querySelector('.grid-size');

 let rgb = false;
 let eraser = false;
 let grey = false;
 let pick = false;

 function makeDivs(gridNum = 16){
     let totalDivs = gridNum * gridNum;
     appContainer.style.gridTemplateColumns =`repeat(${gridNum}, auto)`;
     appContainer.style.gridTemplateRows =`repeat(${gridNum}, auto)`;

     for (let i=1; i<=totalDivs; i++){
         let div = document.createElement('div');
         //div.style.backgroundColor='pink'
         //div.style.borderStyle = 'dashed';
         div.addEventListener('mouseover', changeBackground)
         appContainer.appendChild(div);
     }
 }

 makeDivs();

 function changeBackground(e){
    if(rgbColor) {
        let red =  Math.floor(Math.random() *256);
        let green =  Math.floor(Math.random() *256);
        let blue =  Math.floor(Math.random() *256);
        let color = `rgb(${red}, ${green}, ${blue})`;

        e.target.style.backgroundColor = color;
        return;
}
    if(grey) {
        e.target.style.backgroundColor = 'red';
    return;
}   if(eraser) {
    e.target.style.backgroundColor = 'white';
    return;
    }
    if(pick){
        e.target.style.backgroundColor = userColor;
    }
}

 //button click and active functionality

 rgbButton.addEventListener('click', () =>{
     rgbColor = true;
     eraser = false;
     grey = false;
      pick = false;
 })
 eraserButton.addEventListener('click', () =>{
    rgbColor = false;
     eraser = true;
     grey = false;
     pick = false;
})
greyButton.addEventListener('click', () =>{
    rgbColor = false;
     eraser = false;
     grey = true;
     pick = false;}
)

pickButton.addEventListener('click',  getColor(), colorBox())

let userColor='';

function colorBox(){
    let colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    pickButton.appendChild(colorInput);
    colorInput.addEventListener('input', () => {
        userColor = colorInput.value;
        console.log(userColor)
        pick = true;
        grey = false;
        rgbColor=false;
        eraser = false;
     })
}

function getColor(){
    pick = true;
    grey = false;
    rgbColor = false;
    eraser = false;
}

 clearButton.addEventListener('click', () => {

    let eraseDivs = appContainer.querySelectorAll('div');

    eraseDivs.forEach(element => {
        element.style.backgroundColor='white';
    })

 });

 gridSizeButton.addEventListener('click', () =>{
        let userGridNum = prompt('Number of squares per side? \n -- Maximum is 100 --');
        userGridNum = Number(userGridNum);
        if(userGridNum >100){
            return userGridNum = 100;
        }
        if(userGridNum === 0 || userGridNum === NaN){
            return;
        }else{
            clearGridDivs();
            makeDivs(userGridNum);
        }
 }
 )
 function clearGridDivs(){
     let appContainerDivs = appContainer.querySelectorAll('div');
         //make the array like object into proper array
     appContainerDivs = Array.from(appContainerDivs);
     //itterate through the divs and delete each one
     appContainerDivs.forEach(div =>{
         appContainer.removeChild(div);
     })
 }