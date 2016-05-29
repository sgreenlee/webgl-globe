var MAXIMUM_ROTATION_X = 90 * Math.PI/180;
var INITIAL_ROTATION_X = 0;
var INITIAL_ROTATION_Y = 0;

MIN_CAMERA_ZOOM = 7;
MAX_CAMERA_ZOOM = 15;

var is_dragging = false;

var rotation = { x: INITIAL_ROTATION_X, y: INITIAL_ROTATION_Y};
var rotationVelocity = {x: 0, y: 0};

var camera = {zoom: 9};


var getRotation = function() {
  rotation.x += rotationVelocity.x;
  rotation.y += rotationVelocity.y;

  if (rotation.x > MAXIMUM_ROTATION_X) {
    rotation.x = MAXIMUM_ROTATION_X;
    rotationVelocity.x *= -0.35;
  } else if (rotation.x < -MAXIMUM_ROTATION_X) {
    rotation.x = -MAXIMUM_ROTATION_X;
    rotationVelocity.x *= -0.35;
  }

  if (is_dragging) {
    rotationVelocity.x *= 0.6;
    rotationVelocity.y *= 0.6;
  }
  rotationVelocity.x *= 0.96;
  rotationVelocity.y *= 0.96;

  return rotation;
};

zoom = function(delta) {
  camera.zoom -= delta;
  if (camera.zoom > MAX_CAMERA_ZOOM) {
    camera.zoom = MAX_CAMERA_ZOOM;
  } else if (camera.zoom < MIN_CAMERA_ZOOM) {
    camera.zoom = MIN_CAMERA_ZOOM;
  }
};

module.exports = {
  getRotation: getRotation,
  rotationVelocity: rotationVelocity,
  zoom: zoom,
  camera: camera
};
