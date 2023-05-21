import { Clone, useGLTF } from "@react-three/drei";

const Field = () => {
    const { scene, animations } = useGLTF("block.glb");
    console.log(scene);
    return (
        <group position={[-200, -4, -200]} scale={2}>
            <group position={[0, 0, 0]}>
                <group position={[40, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[40, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
            </group>
            <group position={[80, 0, 80]}>
                <group position={[40, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[40, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
            </group>
            <group position={[0, 0, 80]}>
                <group position={[40, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[40, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
            </group>
            <group position={[80, 0, 0]}>
                <group position={[40, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[0, 0, 40]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
                <group position={[40, 0, 0]}>
                    <Clone object={scene} position={[20, 1, 20]} />
                    <Clone object={scene} position={[20, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 0]} />
                    <Clone object={scene} position={[0, 1, 20]} />
                </group>
            </group>
        </group>
    );
};
export default Field;
