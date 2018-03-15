import * as THREE from 'three';


let w = 120, 
	h = 120, 
	t = 0, a = 0, r, 
	dx = .02, dy = .04;

var RENDERERDOM;

const SCENE = new THREE.Scene(), 
		CAM = new THREE.PerspectiveCamera(...[50, w/h, 1, 1000]), 
		RENDERER = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true
		}), 
		K = 0.75, 
		S3D = new THREE.Mesh(...[
			new THREE.IcosahedronGeometry(K*Math.min(w, h), 1), 
			new THREE.MeshBasicMaterial({
				color: 0xEFEFEF, 
				wireframe: true
			})
		]), 
		N = S3D.geometry.vertices.length, 
		DIR = ['x', 'y', 'z'], 
		SDATA = {
			ini: S3D.geometry.vertices.map(c => {
				let o = {};
				
				for(let p in DIR) { o[DIR[p]] = c[DIR[p]] }
				
				return o;
			}), 
			amp: []
		}, 
		T = 90;

function roundTo(n, d = 2) {
	return +n.toFixed(d)
};

function randsgn() {
	return Math.pow(-1, Math.round(Math.random()))
};

function rand(max = 1, min = 0, d = 2) {
	return roundTo(min + (max - min)*Math.random(), d)
};

function size() {
/* recompute dimensions and aspect ratio 
 * on window resize */
	w = window.innerWidth;
	h = window.innerHeight;
	
	CAM.aspectRatio = w/h;
	CAM.updateProjectionMatrix();
	
	RENDERER.setSize(w, h);
	RENDERER.render(SCENE, CAM);
};

function setAmps() {
	SDATA.amp = SDATA.ini.map(c => {
		let o = {};
		
		for(let p in c) {
			o[p] = (Math.sign(c[p]) || randsgn())*rand(.5, .25)*r
		}
		
		return o;
	});
};

function ani() {
	let k = ++t/T;
	
	if(a) {
		let j = 1 - k, f = Math.sin(k*2*Math.PI);
		
		for(let i = 0; i < N; i++) {
			for(let p in SDATA.ini[i]) {
				S3D.geometry.vertices[i][p] = 
					SDATA.ini[i][p] + j*f*SDATA.amp[i][p]
			}
		}
		
		S3D.geometry.verticesNeedUpdate = true;
	}
	else {
		S3D.rotation.x += dx;
		S3D.rotation.y += dy;
	}
	
	if(t === T) {
		t = 0;
		a = 1 - a;
		dx = rand(.04, .01);
		dy = rand(.04, .01);
	}
	
	RENDERER.render(SCENE, CAM);
	
	requestAnimationFrame(ani);
};

(function init() {
/* what happens at the very beginning */
	r = S3D.geometry.parameters.radius;
	
	setAmps();
	
	SCENE.add(S3D);
	
	/* move camera forward 
	 * from the plane of the screen;
	 * new position is where your eyes are */
	CAM.position.z = 400;
	
	/* set pixer ratio, dimensions, background */
	RENDERER.setPixelRatio(window.devicePixelRatio);
	RENDERER.setSize(w, h);
	RENDERER.render(SCENE, CAM);

	RENDERERDOM = RENDERER.domElement;
	
	// document.body.appendChild(RENDERER.domElement);
	
	ani();
	
	addEventListener('resize', size, false);
})();

export default RENDERERDOM;