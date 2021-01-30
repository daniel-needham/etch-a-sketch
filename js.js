const grid = document.querySelector("#grid");
const root = document.querySelector(":root");
const drawn = document.querySelector(".drawn");
const resetBtn = document.querySelector("#reset");
const toggle = document.querySelector("#toggle");
let index = 0;
let resolution = 8;

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
    }
    root.style.setProperty("--num", side);
}

function generateHover() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.className = "drawn";
        });
    });
}

function reset() {
    removeAllChildNodes(grid);
    generateSquares(resolution);
}

function toggleRes() {
    let toggleRes = [8, 16, 24, 32];
    if (index === toggleRes.length) {
        index = 0;
    };
    resolution = toggleRes[index];
    index++;
}

generateSquares(resolution);


resetBtn.addEventListener("click", () => {
    reset();
    generateHover();
});

toggle.addEventListener("click", () => {
    toggleRes();
    reset();
    generateHover();
});



generateHover();