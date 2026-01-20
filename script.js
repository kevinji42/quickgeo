// lines

document.addEventListener("mousemove", function lineStart(event) {
let posX = event.clientX;
let posY = event.clientY
document.getElementById("hi").innerHTML = "X: " + posX + " Y:" + posY;
})
