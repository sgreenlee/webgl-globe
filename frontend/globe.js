var GlobeController = require("./globeController");
window.THREE = require("three");

var container = document.getElementById('globe');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
scene.add(camera);

scene.add(new THREE.AmbientLight(0x888888));

var light	= new THREE.DirectionalLight( 0xcccccc, 0.5 );
light.position.set(5,3,8);
scene.add( light );

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(4.5, 32, 32);
var loader = new THREE.TextureLoader();
var material ;

var material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('img/risk19.png')
});
var earth = new THREE.Mesh(geometry, material);
scene.add(earth);

var geometry  = new THREE.SphereGeometry(90, 32, 32);
var material  = new THREE.MeshBasicMaterial();
material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png');
material.side  = THREE.BackSide;
var mesh  = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);

  var rotation = GlobeController.getRotation();
  earth.rotation.x = rotation.x;
  earth.rotation.y = rotation.y;

  camera.position.z = GlobeController.camera.zoom;

  renderer.render(scene, camera);
}

animate();
