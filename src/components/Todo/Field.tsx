import { Clone, useGLTF } from "@react-three/drei";

const Field = () => {
    const { scene, animations } = useGLTF("field.glb");
    console.log(scene);
    return (
        <group position={[-100, 0, -100]}>
            <Clone object={scene} position={[90, 1, 90]} />
            <Clone object={scene} position={[90, 1, 0]} />
            <Clone object={scene} position={[0, 1, 0]} />
            <Clone object={scene} position={[0, 1, 90]} />
        </group>
    );
};
export default Field;
