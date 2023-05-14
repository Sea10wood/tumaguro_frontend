import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Mackbook = () => {
    const { scene } = useGLTF("/macbookbake.glb");
    const ref = useRef();
    console.log(scene);
    useFrame(() => {
        ref.current.rotation.x += 0.01;
        ref.current.rotation.y += 0.01;
        ref.current.position.z += 0.005;
    });
    return (
        <primitive
            object={scene}
            position={[0, 2, 2]}
            rotation={[Math.PI / 2, 0, 0]}
            ref={ref}
        />
    );
};
export default Mackbook;
