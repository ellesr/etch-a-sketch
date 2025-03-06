document.addEventListener("DOMContentLoaded", () => {
    createBoard(32);
    getSize();
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
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
    }
}