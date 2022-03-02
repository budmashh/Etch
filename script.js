const appContainer = document.querySelector('.app-container');
const clearButton = document.querySelector('.clear');
 const eraserButton = document.querySelector('.eraser');
 const rgbButton = document.querySelector('.rgb-color');
 const greyButton = document.querySelector('.grey');
 const userColorButton = document.querySelector('.user-color');

 let rgb = false;
 let eraser = false;
 let grey = false;
 let userColor = false;

 function makeDivs(gridNum = 16){
     let totalDivs = gridNum * gridNum;
     appContainer.style.gridTemplateColumns =`repeat(${gridNum}, auto)`;
     appContainer.style.gridTemplateRows =`repeat(${gridNum}, auto)`;

     for (let i=1; i<totalDivs; i++){
         let div = document.createElement('div');
         //div.style.backgroundColor='pink'
         //div.style.borderStyle = 'dashed';
         div.addEventListener('mouseover', changeBackground)
         appContainer.appendChild(div);
     }
 }

 makeDivs();

 function changeBackground(e){
     e.target.style.backgroundColor = 'green';
    return
 }