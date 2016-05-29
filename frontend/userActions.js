var GlobeController = require("./globeController");

var mouseX, mouseY, previousMouseX, previousMouseY;
var previousTime;

document.addEventListener("mousedown", function (event) {
  GlobeController.is_dragging = true;
  previousTime = Date.now();

  mouseX = event.clientX - window.innerWidth / 2;
  mouseY = event.clientY - window.innerHeight / 2;
});

document.addEventListener("mouseup", function (event) {

  GlobeController.is_dragging = false;
});

document.addEventListener("mousemove", function (event) {
  if (!GlobeController.is_dragging) return;

  // var now = Date.now();
  // var tDelta = now - previousTime;

  previousMouseX = mouseX;
  previousMouseY = mouseY;

  mouseX = event.clientX - window.innerWidth / 2;
  mouseY = event.clientY - window.innerHeight / 2;

  deltaX = (mouseX - previousMouseX) / 360;
  deltaY = (mouseY - previousMouseY) / 360;

  GlobeController.rotationVelocity.x = deltaY;
  GlobeController.rotationVelocity.y = deltaX;
});

document.addEventListener("mousewheel", function (event) {
  var delta = event.wheelDelta;

  GlobeController.zoom(delta / 1200);
});
