const grid = document.querySelector("#grid");
const root = document.querySelector(":root");
const drawn = document.querySelector(".drawn");
const resetBtn = document.querySelector("#reset");
let resolution = 16;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function generateSquares(side) {
    let num = Math.pow(side, 2);
    for (i = 1; i <= num; i++) {
        const square = document.createElement("div");
        square.className = "square";
        grid.appendChild(square);
        console.log(i);
    }
    root.style.setProperty("--num", side);
}

function reset() {
    removeAllChildNodes(grid);
    generateSquares(resolution);
}

generateSquares(resolution);


resetBtn.addEventListener("click", function (e) {
    console.log(e);
    reset();
    const squares = document.querySelectorAll(".square");
    squares.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.className = "drawn";
        });

    });
});

const squares = document.querySelectorAll(".square");
squares.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.className = "drawn";
    });

});  
