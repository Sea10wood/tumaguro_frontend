import Cat from "@/components/Cat";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Hello from "../components/Hello";
import Macbook from "../components/Macbook";

export default function App() {
    return (
        <Canvas style={{ width: "100vw", height: "100vh" }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} />
            <Hello />
            <Macbook />
            <Cat />
        </Canvas>
    );
}
