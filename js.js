const grid = document.querySelector("#grid");
const root = document.querySelector(":root");


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

generateSquares(16);

const squares = document.querySelectorAll(".square");
squares.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.className = "drawn";
    });

});