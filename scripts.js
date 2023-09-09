//crete grid 16x16

//make a loop that creates 256 squares
//within space which is 960px wide

//create first div that will serve as a space
//create other divs within this first div

//determine size of each side to be 16
//using flexbox

const baseSquare = document.createElement('div');
baseSquare.classList.add('base-square');
baseSquare.style.width = '960px';
baseSquare.style.height = '960px';
baseSquare.style.backgroundColor = '#f6f6f6';

document.body.appendChild(baseSquare);

console.log('test');
const size = 16;
const gridSize = 960 / size;
console.log(gridSize);
console.log(`${gridSize}`);

const grid = function() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.border = '.5px solid black';
    square.style.height = `${gridSize}px`;
    square.style.width = `${gridSize}px`;
    baseSquare.appendChild(square);
}


for(i = 0; i < (16 * 16); i++) {
    grid();
}