

const container = document.getElementById('main');

function makeGrid (rows, cols) {

    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for(i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

let rows = getComputedStyle(document.documentElement).getPropertyValue('--rows');
let cols = getComputedStyle(document.documentElement).getPropertyValue('--cols');
makeGrid(rows,cols);

//first idea 
/* 
    Make the main grid container a column flexbox. Then append divs to the main container and make them each flexboxs
    A loop will run based on amount of rows. Inside that loop, will run another loop that appends child divs accordingly to the column amount.
    Column display should make the first divs go up to down? then the child divs appended should be in the usual left to right.
*/

//second idea
/*  
    try css layouts and variables.
    lets go with second idea first
*/

const divEffect = document.querySelector('.grid');
divEffect.addEventListener('mouseover', (e) => {
    if(e.target.className === 'grid-item') {
        e.target.style.backgroundColor = 'black';
    };
    });

const clearEffect = document.querySelector('.clear');
clearEffect.addEventListener('click', (e) => {
    clearGrid();
});

function clearGrid () {
    const divsToClear = document.getElementById('main');
    divsToClear.replaceChildren();
    /* while(divsToClear.firstChild) {
        divsToClear.removeChild(divsToClear.firstChild);
    } */
    makeGrid(rows,cols); 
}


const changeGrid = document.querySelector('.Change-Size');
changeGrid.addEventListener('click', (e) => {
    let size = prompt('Please enter the new grid size:');
    size = parseInt(size);
    rows = size;
    cols = size;
    clearGrid();
});
