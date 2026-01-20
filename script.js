// lines

document.addEventListener("mousemove", function lineStart(event) {
  let posX = event.clientX;
  let posY = event.clientY
  document.getElementById("Hi").innerHTML = "X: " + event.clientX + " Y:" + event.clientY;
}
