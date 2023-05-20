var eprve = document.querySelector(".prew");
var enext = document.querySelector(".next");
var esico = document.getElementById("luobotu3").getElementsByTagName("li");
var left = 0;
var timer;
var isPause = false;
run();

function run() {
if (left <= -3200) {
left = 0;
}
var m = Math.floor(-left / 800);
lunbotu2.style.marginLeft = left + "px";
var n = left % 800 == 0 ? (n = 2000) : (n = 10);
left -= 10;
if (!isPause) {
timer = setTimeout(run, n);
}
icochage(m);
}

function imgchange(n) {
let lt = -(n * 800);
lunbotu2.style.marginLeft = lt + "px";
left = lt;
}

eprve.onclick = function () {
let prewgo = Math.floor(-left / 800) - 1;
if (prewgo == -1) {
prewgo = 3;
}
imgchange(prewgo);
};

enext.onclick = function () {
let nextgo = Math.floor(-left / 800) + 1;
if (nextgo == 4) {
nextgo = 3;
}
imgchange(nextgo);
};

function icochage(m) {
for (let index = 0; index < esico.length; index++) {
esico[index].style.backgroundColor = "";
}
if (m < esico.length) {
esico[m].style.backgroundColor = "#ff8850";
esico[m].style.color = "#424242";
esico[m].style.opacity = "0.7";
}
}

for (let index = 0; index < esico.length; index++) {
esico[index].onclick = function () {
imgchange(index);
icochage(index);
};
}

var lunbotu = document.querySelector(".lunbotu");
lunbotu.addEventListener("mouseover", function () {
isPause = true;
clearTimeout(timer);
});

lunbotu.addEventListener("mouseout", function () {
isPause = false;
run();
});