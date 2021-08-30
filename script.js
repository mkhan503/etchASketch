

const restartButton = document.querySelector('#restart');
restartButton.addEventListener('click',refresh);

function refresh(e){
    const pixels = document.querySelectorAll('.refreshState');
    pixels.forEach(pixel => pixel.style.backgroundColor='white');
    getGridSize();
}

function getGridSize(){
    let rows = prompt('Please enter grid size (number of squares per side):');
    let columns = rows;
    createGrid(rows,columns);
    
}

const pixels = document.querySelectorAll('.hoverState');
pixels.forEach(cell => cell.addEventListener('mouseover',changeColor));

function changeColor(e){
    this.style.backgroundColor = 'grey';
}

function createNewDiv(){
    const newDiv = document.createElement('div');
   newDiv.classList.add('square', 'hoverState', 'refreshState');
   const gridContainer = document.querySelector('#gridContainer');
   gridContainer.appendChild(newDiv);
    
    
}

function createGrid(rows,columns){
    const total = rows * columns;
    console.log(total);
    for (let i = 0; i < total; i++){
        createNewDiv();
    }

    //creating a dynamic grid
    const gridContainer = document.querySelector('#gridContainer');
    gridContainer.setAttribute('style', `grid-template-rows: repeat(${rows}, 1fr);  grid-template-columns: repeat(${columns}, 1fr);`);


}