const dvd = document.getElementById("dvd");

const t = setInterval(move, 0.0001);

let posWidth = window.innerWidth / 2 - (252 / 2);
let posHeight = window.innerHeight / 2;

let colors = document.querySelectorAll("#elColor")

let x = 1;
let y = 1;
let count = 0;
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
        count++;
        console.log(count);
        randomColor();
    }

    if (posWidth === window.innerWidth - 252 && posHeight === window.innerHeight - 114) {
        console.log(`rigth bot ${count}`);
        clearInterval(t);
    }
    if (posWidth === 0 && posHeight === 0) {
        console.log(`left top ${count}`);
        clearInterval(t);

    }
    if (posWidth === window.innerWidth - 252 && posHeight === 0) {
        console.log(`right top ${count}`);
        clearInterval(t);

    }
    if (posWidth === 0 && posHeight === window.innerHeight - 114) {
        console.log(`left bot ${count}`);
        clearInterval(t);
    }

}

function randomColor() {
    let color = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
    colors.forEach((el) => {
        el.setAttribute("fill", color)
    })
}