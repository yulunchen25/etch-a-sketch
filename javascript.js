// Creates the container that holds the squares
let container = document.querySelector('.container')
container.style.gridTemplateColumns = 'repeat(4, 1fr)';
container.style.gridTemplateRows = 'repeat(4, 1fr)';
// Creates the arrays that store the reference to each div, its random color and its starting black level
let colors = [];
let div = [];
let black = [];

// Creates the squares and assigns its random color to it
for (let i = 0; i <= 15; i++){
	div[i] = document.createElement('div');
	black[i] = 100;
	colors[i] = `${Math.floor(Math.random()*360)}, 100`;
	div[i].addEventListener('mouseover', () => {
		div[i].style.backgroundColor = `hsl(${colors[i]}%, ${black[i] -= 20}%)`;
	});
	div[i].style.height = '100%';
	div[i].style.border = '1px solid lightgrey';
	container.appendChild(div[i]);
}

// Runs the newGrid function when the New Grid button is clicked
const button = document.querySelector('#new-grid');
button.addEventListener('click', newGrid);
const body = document.querySelector('body');

// Asks for the size of the new grid and creates it, works the same as the default grid but with user specified input
function newGrid (){
	let newGridSize = +prompt('Please enter how many squares per side for the new grid (e.g. 10 for 10x10 grid, max 100)');
	while(!(Number.isInteger(newGridSize)) || isNaN(newGridSize) || newGridSize > 100) {
		newGridSize = +prompt('Please enter how many squares per side for the new grid (e.g. 10 for 10x10 grid, max 100)');
	}
	// Resets the container grid
	container.remove();
	container = document.createElement('div');
	container.classList.add('container');
	container.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
	body.appendChild(container)
	// Resets the div, color and black level arrays
	colors = [];
	div = [];
	black = [];
	for (let i = 0; i <= (newGridSize**2)-1; i++){
		div[i] = document.createElement('div');
		black[i] = 100;
		colors[i] = `${Math.floor(Math.random()*360)}, 100`;
		div[i].addEventListener('mouseover', () => {
			div[i].style.backgroundColor = `hsl(${colors[i]}%, ${black[i] -= 20}%)`;
		});
		div[i].style.height = '100%';
		div[i].style.border = '1px solid lightgrey';
		container.appendChild(div[i]);
	}
}