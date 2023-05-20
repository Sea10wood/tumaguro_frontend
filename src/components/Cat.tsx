import { Task } from "@/types/schema";
import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
const randomAnimation = ["stay", "sit"];
const CloneCat = ({
    scene,
    animations,
    position,
    animationName,
    comment,
    rotation,
}: {
    scene?: any;
    rotation?: any;
    animations?: any;
    position?: any;
    animationName?: string;
    comment?: string;
}) => {
    const ref = useRef();
    const { actions } = useAnimations(animations, ref);
    useFrame(() => {
        actions[animationName ?? 0]?.play();
    });
    // const hoge = [
    //     Math.random() * 30 - 15,
    //     Math.random() * 30 - 15,
    //     Math.random() * 30 - 15,
    // ];
    return (
        <group>
            {/* <Html>{comment}</Html> */}
            <Clone
                object={scene}
                scale={0.2}
                rotation={rotation}
                position-x={-8}
                ref={ref}
                position={position}
            />
        </group>
    );
};

const Cat = ({ cats }: { cats: Task[] }) => {
    const { scene, animations } = useGLTF("/cat1.glb");
    return (
        <>
            {cats.map(({ comment }, index) => {
                const position = [
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15,
                    Math.random() * 30 - 15,
                ];
                const rotation = [0, 0, 0];
                console.log(position);
                const animationName =
                    randomAnimation[Math.floor(Math.random() * 2)];
                return (
                    <CloneCat
                        key={index}
                        scene={scene}
                        animations={animations}
                        position={position}
                        rotation={rotation}
                        animationName={animationName}
                        comment={comment}
                    />
                );
            })}
            <CloneCat
                scene={scene}
                animations={animations}
                position={[0, 1, 1]}
            />
            <CloneCat
                scene={scene}
                animations={animations}
                position={[0, 2, 1]}
            />
            <CloneCat
                scene={scene}
                animations={animations}
                position={[0, 2, 3]}
            />
        </>
    );
};
export default Cat;

useGLTF.preload("/cat1.glb");
