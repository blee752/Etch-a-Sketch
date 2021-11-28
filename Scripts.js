
const sizeText = document.querySelector('.size');
const container = document.getElementById('main');
const colorMode = document.querySelectorAll('.color');
console.log(colorMode);

let current_mode = document.querySelector('.bw').innerText;
function makeGrid (rows, cols) {

    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', cols);
    for(i=0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        cell.className = 'grid-item';
        container.appendChild(cell);
    }
}


let rows = getComputedStyle(document.documentElement).getPropertyValue('--rows');
let cols = getComputedStyle(document.documentElement).getPropertyValue('--cols');
makeGrid(rows,cols);


const divEffect = document.querySelector('.grid');
divEffect.addEventListener('mouseover', changeColor);

 function changeColor (event) {
    if(event.target.className === 'grid-item') {
        switch(current_mode){
            case 'Black':
                console.log(event.target.style.backgroundColor);
                event.target.style.backgroundColor = 'black';

                break;
            case 'Rainbow':
                let [r, b, g] = [0,0,0];
                r = Math.floor(Math.random() * 255 + 1);
                b = Math.floor(Math.random() * 255 + 1);
                g = Math.floor(Math.random() * 255 + 1);
                
                console.log(`rgb(${r},${g},${b})`);
                event.target.style.backgroundColor = `rgb(${r},${g},${b})`;
                break;
            case 'Gradient':
                const currentColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
                if (currentColor === 'rgb(255, 255, 255)') {
                    console.log('passed if');
                    event.target.style.backgroundColor = 'rgba(0,0,0,0.1)';
                    break;
                }
                else if (currentColor === 'rgb(0, 0, 0)') {
                    break;
                }
            
                const arr = currentColor.split(',');                
                let [r_value,b_value,g_value,a] = [0,0,0,0];
                r_value = Number(arr[0].slice(5));
                g_value = Number(arr[1])
                b_value = Number(arr[2]);
                a_value = Number(arr[3].slice(0,-1));
                console.log(r_value);
                console.log(g_value);
                console.log(b_value);
                console.log(a_value);
                a_value += 0.1;
                event.target.style.backgroundColor = `rgba(${r_value}, ${g_value}, ${b_value}, ${a_value})`;
                break;
        
        case 'Darken':
            let oldColor = window.getComputedStyle(event.target).getPropertyValue('background-color');
            let [new_r, new_b, new_g] = [0,0,0];
            if(oldColor === 'rgb(0, 0, 0)'){
                break;
            }
            if(oldColor === 'rgb(255, 255, 255)') {
                let [r_factor, b_factor, g_factor] = [0,0,0];
                new_r = Math.floor(Math.random() * 255 + 1);
                new_g = Math.floor(Math.random() * 255 + 1);
                new_b = Math.floor(Math.random() * 255 + 1);
                event.target.dataset.r_factor = new_r / 10;
                event.target.dataset.g_factor = new_g / 10;
                event.target.dataset.b_factor = new_b / 10;
                event.target.style.backgroundColor = `rgb(${new_r},${new_g},${new_b})`;
            }

            else {
                const arr = oldColor.split(',');
                new_r = Number(arr[0].slice(4)) - Number(event.target.dataset.r_factor);
                new_g = Number(arr[1]) - Number(event.target.dataset.g_factor);
                new_b = Number(arr[2].slice(0,-1)) - Number(event.target.dataset.b_factor);
                event.target.style.backgroundColor = `rgb(${new_r}, ${new_g}, ${new_b})`;
            }
            console.log(oldColor);
            
            break;
    }
        
        
    };
}

colorMode.forEach(colorMode => {
    colorMode.addEventListener('click', (e) => {
        clearGrid();
        current_mode = e.target.innerText;
        console.log(current_mode);
    });
})



//check what mode then apply a different effect depending on mode
const clearEffect = document.querySelector('.clear');
clearEffect.addEventListener('click', (e) => {
    clearGrid();
});

function clearGrid () {
    const divsToClear = document.getElementById('main');
    divsToClear.replaceChildren();
    makeGrid(rows,cols); 
}


const changeGrid = document.querySelector('.Change-Size');
changeGrid.addEventListener('click', (e) => {
    let size = prompt('Please enter the new grid size (Max 100):');
    size = parseInt(size);
    if (size > 100) {
        size = checkInput(size);
    } 
    rows = size;
    cols = size;
    clearGrid();
    sizeText.innerText = `Grid Size: ${size}x${size}`;
    

});


function checkInput (size) {
    let inRange = false;
    while (!inRange) {
        size = prompt('Please enter a grid size under 100:');
        size = parseInt(size);
        if (size <= 100) {
            inRange = true;
        }
    }
    return size;
}