createGrid();

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click',refresh);

//Random color button pressed, change the mouseover event handler to call changeColorRandom instead of the default changeColor()
const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', addMouseOver);

function addMouseOver(e){

    const pixels = document.querySelectorAll('.hoverState');
    pixels.forEach(cell => cell.addEventListener('mouseover',changeColorRandom));
}

function changeColorRandom(e){
    let color = getRandomColor();
    this.style.backgroundColor = `${color}`;
}

function changeColor(e){
    
    this.style.backgroundColor = 'grey';
}
 //Delete each item in grid and create another grid by calling createGrid;
function refresh(e){
    const pixels = document.querySelectorAll('.hoverState');
    pixels.forEach(item => item.remove());
    createGrid();
}

//Create new div and attach to grid container
function createNewDiv(){
    const newDiv = document.createElement('div');
   newDiv.classList.add('square', 'hoverState');
   const gridContainer = document.querySelector('#gridContainer');
   gridContainer.appendChild(newDiv);
    
}
// createGrid by prompting number of rows.
function createGrid(){

    let rows = (prompt('Please enter grid size (number of squares per side):'));
    if(rows > 100){
        createGrid();
    }
    let columns = rows;    
    const total = rows * columns;
    for (let i = 0; i < total; i++){
        createNewDiv();
    }

    const gridContainer = document.querySelector('#gridContainer');
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${rows}, 1fr);  grid-template-columns: repeat(${columns}, 1fr);`);
    
    const pixels = document.querySelectorAll('.hoverState');
    pixels.forEach(cell => cell.addEventListener('mouseover',changeColor));
}

function getRandomColor(){
    //value for red, green and blue
    let red = Math.floor(Math.random()*256);
    let green= Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    //return string rgb(000,000,000)

   
    return `rgb(${red},${green},${blue})`
}