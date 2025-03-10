let color = "black";

document.addEventListener("DOMContentLoaded", () => {
    createBoard(16);

    let btnPopup = document.querySelector("#pop-up");
    btnPopup.addEventListener("click", () => {
        let size = getSize();
        createBoard(size);
    });
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("Enter sketchpad size between 0 and 100:");
    if (input == "") {
        alert("Please enter a number.");
    } else if (input < 0 || input > 100) {
        alert("Please enter a number between 0 and 100.");
    } else {
        alert("Now you play!");
        return input;
    }
}

function colorDiv() {
    if (color == "rainbow") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}