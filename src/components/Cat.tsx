import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cat = () => {
    const { scene, animations } = useGLTF("/cat.glb");
    const ref = useRef();
    const { actions } = useAnimations(animations, ref);
    console.log(scene);
    useFrame(() => {
        actions.walk?.play();
    });
    return <primitive object={scene} ref={ref} />;
};
export default Cat;
