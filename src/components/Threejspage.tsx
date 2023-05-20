import * as THREE from "three";
import Cat from "./Cat";

export default function threejspage() {
    const scene = new THREE.Scene();
    const width = 960;
    const height = 540;
    return <Cat />;
}
