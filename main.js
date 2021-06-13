const body = document.querySelector('body');
const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');

// Default Grid //
addBlocks(10);

// Generate Blocks (Divs) //
function addBlock() {
  const block = document.createElement('div');
  block.classList.add('block');
  container.appendChild(block);
}

function addBlocks(dimension) {
  document.documentElement.style.setProperty("--column", dimension);
  const numBlocks = Math.pow(dimension, 2);
  for (let i = 1; i < numBlocks + 1; i++) {
    addBlock();
  }
  addMouseOver();
}

// add mouseover eventlistner //
function addMouseOver() {
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => block.addEventListener('mouseover', function(e) {
  e.target.classList.add("toggle-white");
}));
}

// clear button + prompt for grid dimension //
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearGrid);

function clearGridContainer() {
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}

function clearGrid() {
  blocks.forEach(block => block.classList.remove("toggle-white"));
  const squarePer = parseInt(prompt("How many squares per side?", 10));
  clearGridContainer();
  addBlocks(squarePer);
}