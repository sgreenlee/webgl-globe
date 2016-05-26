window.THREE = require("three");

var container = document.getElementById('globe');

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000)
camera.position.z = 9;
scene.add(camera);

scene.add(new THREE.AmbientLight(0x888888));

var light	= new THREE.DirectionalLight( 0xcccccc, .5 )
light.position.set(5,3,8)
scene.add( light )

var renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

var geometry = new THREE.SphereGeometry(4.5, 32, 32);
var loader = new THREE.TextureLoader();
var material ;

// loader.load('img/earthmap1k.jpg',
// 	// Function when resource is loaded
// 	function ( texture ) {
// 		// do something with the texture
// 		material = new THREE.MeshBasicMaterial( {
// 			map: texture });
// 	}
// );
var material = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('img/risk11.png')
});
// material.bumpMap = THREE.ImageUtils.loadTexture('img/earthbump1k.jpg');
// material.bumpScale = 0.05;
// // material.map = THREE.ImageUtils.loadTexture('img/earthmap1k.jpg')
// material.specularMap = THREE.ImageUtils.loadTexture('img/earthspec1k.jpg');
// material.specular = new THREE.Color('grey');
var earthMesh = new THREE.Mesh(geometry, material);
earthMesh.rotation.x += .6;
scene.add(earthMesh);

var geometry  = new THREE.SphereGeometry(90, 32, 32)
var material  = new THREE.MeshBasicMaterial()
material.map   = THREE.ImageUtils.loadTexture('img/galaxy_starfield.png')
material.side  = THREE.BackSide
var mesh  = new THREE.Mesh(geometry, material)
scene.add(mesh)



function render () {
  requestAnimationFrame(render);
  earthMesh.rotation.y += 1/164;
  renderer.render(scene, camera);
}

render();
