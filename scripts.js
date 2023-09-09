//crete grid 16x16

//make a loop that creates 256 squares
//within space which is 960px wide

//create first div that will serve as a space
//create other divs within this first div

//determine size of each side to be 16
//using flexbox



document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'space-around';
document.body.style.alignItems = 'center';
document.body.style.height = '120vh';
//document.body.style.padding = '1.5rem 0'



const buttonCont = document.createElement('div');
buttonCont.classList.add('button-cont');
document.body.appendChild(buttonCont);
buttonCont.style.margin = '2rem'
buttonCont.style.display = 'flex';
buttonCont.style.flexDirection = 'row';
buttonCont.style.justifyContent = 'center';

const newGrid = document.createElement('button');
newGrid.classList.add('new-grid');
newGrid.textContent = 'Start/Reset';
buttonCont.appendChild(newGrid);
newGrid.style.padding = '.5rem 2.2rem';
newGrid.style.fontSize = '1rem';

//base canvas
const baseSquare = document.createElement('div');
baseSquare.classList.add('base-square');
baseSquare.style.width = '960px';
baseSquare.style.height = '960px';
baseSquare.style.backgroundColor = '#f6f6f6';
baseSquare.style.margin = '1.5rem'

document.body.appendChild(baseSquare);

const newGridChoice = function () {
    
}



//grid size
let size = 0;
const borderSize = .5;





const gridValue = newGrid.addEventListener('click', function() {
    //removes previous grid
    for(i = 0; i < (size * size); i++) {
        baseSquare.removeChild(baseSquare.firstChild);
    }
    

    //size of each cell incl border
    size = Number(prompt('Choose canvas size: '));

    if(size > 100) {
        alert('The size too large! Select smaller size please.');
        size = Number(prompt('Choose canvas size: '));
    }

    const gridSize = (960 / size) - (borderSize * 2);

    //cell forming function
    //and changes cell color on hover
    const grid = function() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = `${borderSize}px solid black`;
    square.style.background = 'yellow';
    square.style.height = `${gridSize}px`;
    square.style.width = `${gridSize}px`;
    baseSquare.appendChild(square);
    
    let colorValue = 255;

    square.addEventListener("mouseover", (event) => {
        //gradual cell collor filling
        colorValue -= (colorValue / 10);
        console.log(colorValue);
        event.target.style.backgroundColor = `rgb(${Number(colorValue)}, ${Number(colorValue)}, ${Number(colorValue)})`;
    })
    }
    //grid forming loop
    for(i = 0; i < (size * size); i++) {
        grid();
    }
});







//grid forming loop
