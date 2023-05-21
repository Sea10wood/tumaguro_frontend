import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const LowpolyWood = () => {
    const { scene, animations } = useGLTF("lowpolywood.glb");
    const ref = useRef();
    console.log(scene);
    return (
        <primitive
            object={scene}
            ref={ref}
            scale={0.02}
            position={[40, 0, -70]}
        />
    );
};
export default LowpolyWood;
