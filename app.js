let click = true;
let color = "black";
const colorPicker = document.getElementById("colorPicker");
const rangeInput = document.getElementById("rangeInput");
const outputElement = document.getElementById("output");

function populateBoard(size) {
  let board = document.querySelector(".sketch-board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

// Add an event listener to the range input
rangeInput.addEventListener("input", function () {
  const value = rangeInput.value;
  outputElement.textContent = value;
});

function changeSize(input) {
  // if (input >= 2 && input <= 100) {
  //   document.querySelector(".error").style.display = "none";
  populateBoard(input);
  // } else {
  //   document.querySelector(".error").style.display = "flex";
  // }
}

function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (color === "selected") {
      const selectedColor = colorPicker.value;
      this.style.backgroundColor = selectedColor;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

function resetBoard() {
  let board = document.querySelector(".sketch-board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
