var renderer = new THREE.WebGLRenderer();
var pivotPoint;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var imagePrefix = "/assets/";
var urls = [
  "space.jpg",
  "space.jpg",
  "space.jpg",
  "space.jpg",
  "space.jpg",
  "space.jpg"
];
var skyBox = new THREE.CubeTextureLoader().setPath(imagePrefix).load(urls);
scene.background = skyBox;
///////////////////////////////////////////////////////////////////////////////
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);
camera.position.z = 35;
///////////////////////////////////////////////////////////////////////////////
var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

/////////////////////////////////////////////////////////////
var geometry = new THREE.SphereGeometry(7, 32, 32);
var material = new THREE.MeshPhongMaterial();
material.map = new THREE.TextureLoader().load("/assets/david.png");
var earthMesh = new THREE.Mesh(geometry, material);
earthMesh.position.set(0, 1, 0);
scene.add(earthMesh);
pivotPoint = new THREE.Object3D();
earthMesh.add(pivotPoint);
var moongeometry = new THREE.SphereGeometry(5, 32, 32);
var moonmaterial = new THREE.MeshPhongMaterial();
moonmaterial.map = new THREE.TextureLoader().load("/assets/shilpa.png");
var moonMesh = new THREE.Mesh(moongeometry, moonmaterial);
moonMesh.position.set(15, 0, 0);
pivotPoint.add(moonMesh);
var marsgeometry = new THREE.SphereGeometry(4, 32, 32);
var marsmaterial = new THREE.MeshPhongMaterial();
marsmaterial.map = new THREE.TextureLoader().load("/assets/ivana.png");
var marsMesh = new THREE.Mesh(marsgeometry, marsmaterial);
marsMesh.position.set(30, 0, 0);
pivotPoint.add(marsMesh);
var loader = new THREE.FontLoader();

loader.load("assets/fonts/helvetiker_regular.typeface.json", function(font) {
  var fontgeometry = new THREE.TextGeometry("GOOD NIGHT SUPERSTARS", {
    font: font,
    size: 5,
    height: 1
  });
  var fontmaterial = new THREE.MeshPhongMaterial();
  var fontMesh = new THREE.Mesh(fontgeometry, fontmaterial);
  fontMesh.position.set(-30, 10, 0);
  scene.add(fontMesh);
});
///////////////////////////////////////////////////////////////////////////////
var orbit = new THREE.OrbitControls(camera, renderer.domElement);
orbit.enableZoom = false;

///////////////////////////////////////////////////////////////////////////////
var render = function() {
  requestAnimationFrame(render);
  earthMesh.rotation.x += 0.0;
  earthMesh.rotation.y += 0.01;
  moonMesh.rotation.x += 0.0;
  moonMesh.rotation.y += 0.05;
  marsMesh.rotation.y += 0.07;
  renderer.render(scene, camera);
};
render();
///////////////////////////////////////////////////////////////////////////////
