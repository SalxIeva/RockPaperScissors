console.log("Hello");


console.log("Hello");

// PSEUDO CODE

// Create a div container to store grid div's 
// Create a function to create grid
// Inside the function loop size * size to create a grid
// Add a hover event listener to the grid div.
// Append each grid div to the container
// Add hover effect to each grid div to change color when hoovered over it

const gridContainer = document.createElement("div");
gridContainer.id = "grid-container";


const createGrid = (size) => {
    // Clear previous grid
    gridContainer.innerHTML = '';
    // Add flexbox to make divs appear as grid
    gridContainer.style.display = "flex";
    gridContainer.style.wrap = "wrap";
    gridContainer.style.width = "600px";
    gridContainer.style.height = "600px";
    
    // Calculate the size of each grid
    const gridItemSize = (600 / size);
    
    for(var i = 0; i < size * size; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-item");
        gridDiv.style.width = `${gridItemSize}px`;
        gridDiv.style.height = `${gridItemSize}px`;

        // Add hover event listener
        gridDiv.addEventListener("mouseover", () => {
            gridDiv.style.backgroundColor = "black";
        })

        gridContainer.appendChild(gridDiv);
    };
    document.body.appendChild(gridContainer);

};

createGrid(16);

// Create a button container
// Create a button , that will later be appended to its container
// Create a reset grid function
// Prompt the user for new grid size
// Call createGrid function to create a grid 
// Add event listener to the reset button using ("click", resetGame)

const resetBtnDiv = document.createElement("div");
const resetBtn = document.createElement("button");
resetBtn.textContent = "Reset Grid";

const resetGame = () => {
    const userInput = prompt("Please enter a number for your grid size between 1 and 16");
    const size = parseInt(userInput);
    return size;
};

resetBtn.addEventListener("click", resetGame);

resetBtnDiv.appendChild(resetBtn);
document.body.appendChild(resetBtnDiv);
// ADDITIONAL FEATURES
// For random color change: Modify the hover effect function to set a random background color. (use Math.random())
// For progressive darkening: Modify the hover effect function to increase the opacity of the grid cell on each hover.


