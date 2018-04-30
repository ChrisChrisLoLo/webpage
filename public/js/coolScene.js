//SCENE
var scene = new THREE.Scene();
//CAMERA
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


var ambientLight = new THREE.AmbientLight(0xBBBBBB);
scene.add(ambientLight);

//RENDERER
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//MODELS
// instantiate a loader
var loader = new THREE.JSONLoader();

// load a resource
loader.load(
	// resource URL
	'/horse.json',

	// onLoad callback
	function ( geometry) {
		var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

	    var mesh = new THREE.Mesh( geometry, material );
	    scene.add( mesh );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function( err ) {
		console.log( 'An error happened' );
		console.log(err);
	}
);


var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;
//RENDER LOOP
function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.011;
	renderer.render( scene, camera );
}
animate();