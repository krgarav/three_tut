import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js"
const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1)
const cubeMaterial =  new THREE.MeshBasicMaterial({color:"green"});
const cubeMesh = new THREE.Mesh(cubeGeometry,cubeMaterial);
scene.add(cubeMesh)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/innerHeight,0.9,200
);

camera.position.z=3
scene.add(camera)

const canvas =  document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight)
const controls = new OrbitControls(camera,canvas);
controls.enableDamping=true;
controls.autoRotate= true;
const renderLoop = ()=>{
 controls.update()
  renderer.render(scene,camera)
  window.requestAnimationFrame(renderLoop)
}
renderLoop();
console.log(canvas);

