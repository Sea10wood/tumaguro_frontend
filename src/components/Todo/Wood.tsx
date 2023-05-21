import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Wood = () => {
    const { scene, animations } = useGLTF("wood.glb");
    const ref = useRef();
    console.log(scene);
    return (
        <primitive
            object={scene}
            ref={ref}
            scale={0.3}
            position={[30, 0, -70]}
        />
    );
};
export default Wood;
