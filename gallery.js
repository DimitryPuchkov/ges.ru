var mas = ["img/portfolioimg1.jpg", "img/portfolioimg2.jpg", "img/portfolioimg3.jpg", "img/portfolioimg4.jpg", "img/portfolioimg5.jpg", "img/portfolioimg6.jpg"];
var to;

function levaya(number) {
    var obj = document.getElementById("img");
    var id = document.getElementById("gallery");
    var bod = document.getElementById("bd");
    bd.style.overflowY = "hidden";
    id.style.display = "inline";
    obj.src = mas[number];
    to = number;
}

function right_arrow() {
    var obj = document.getElementById("img");
    if (to < mas.length - 1) to++;
    else
        to = 0;
    obj.src = mas[to];
}

function left_arrow() {
    var obj = document.getElementById("img");
    if (to > 0) to--;
    else
        to = mas.length - 1;
    obj.src = mas[to];
}

function pravaya() {
    var id = document.getElementById("gallery");
    var bod = document.getElementById("bd");
    bd.style.overflowY = "scroll";
    id.style.display = "none";
}
