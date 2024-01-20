const dvd = document.getElementById("dvd");
const vectors = document.querySelectorAll("#elColor")

let posWidth = window.innerWidth / 2.25;
let posHeight = window.innerHeight / 2.25;

let x = 1;
let y = 1;
setInterval(move, 1);

function move() {
    posHeight = posHeight + x;
    posWidth = posWidth + y;

    dvd.style.left = posWidth + "px";
    dvd.style.top = posHeight + "px";

    if (posWidth <= 0) {
        y = 1;
    }
    if (posWidth >= window.innerWidth - 252) {
        y = -1;
    }
    if (posHeight <= 0) {
        x = 1;
    }
    if (posHeight >= window.innerHeight - 114) {
        x = -1;
    }
    if (posWidth >= window.innerWidth - 252 ||
        posHeight >= window.innerHeight - 114 ||
        posWidth <= 0 ||
        posHeight <= 0) {
        randomColor();
    }
}

function randomColor() {
    let color = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
    vectors.forEach((el) => {
        el.setAttribute("fill", color)
    })
}