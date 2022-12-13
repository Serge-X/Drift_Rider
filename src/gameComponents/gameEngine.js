import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {track} from './level.js';
import { box } from './level.js';

const renderer= new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene= new THREE.Scene();

const camera= new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const orbit= new OrbitControls(camera, renderer.domElement);
const trackLoader=new GLTFLoader();

trackLoader.load(track.href, function(gltf){
    const model= gltf.scene;
    scene.add(model);
    model.position.set(0,2,8);
}, undefined, function(error){
    console.log(error);
});

const axesHelper= new THREE.AxesHelper(5);

scene.add(axesHelper);

camera.position.set(-1,2,5);
orbit.update();

scene.add(box);

function animate(){
    renderer.render(scene, camera);

}

renderer.setAnimationLoop(animate);