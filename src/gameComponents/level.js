import * as THREE from 'three';

export const track= new URL('./gameModels/test_track.glb', import.meta.url);

const boxGeo=new THREE.BoxGeometry();
const boxMeh=new THREE.MeshBasicMaterial();
export const box=new THREE.Mesh(boxGeo,boxMeh);


