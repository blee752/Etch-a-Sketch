

const container = document.getElementById('main');

function makeGrid (rows, cols) {

    console.log(container);
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);

 /*    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`; */
    for(i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'grid-item';
    }
}

makeGrid(16,16);

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

let divEffect = document.querySelector('div');

divEffect.addEventListener('mouseover', (e) => {
    if(e.target.className === 'grid-item') {
        e.target.style.backgroundColor = 'black';
    };
    })

divEffect.addEventListener('mouseout', (e) => {
    if(e.target.className === 'grid-item') {
        e.target.style.backgroundColor = 'white';
    };
})