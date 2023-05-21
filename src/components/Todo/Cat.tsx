import { Task } from "@/types/schema";
import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { RefObject, useRef } from "react";
import { Group } from "three";
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
    const ref = useRef<Group>() as RefObject<Group>;
    const { actions } = useAnimations(animations, ref);
    useFrame(() => {
        actions[animationName ?? 1]?.play();
    });

    return (
        <Clone
            object={scene}
            scale={0.2}
            rotation={rotation}
            ref={ref}
            position={position}
        />
    );
};

const Cat = ({ cats }: { cats: Task[] }) => {
    const { scene, animations } = useGLTF("/catbeta.glb");
    return (
        <>
            {cats.map(({ comment }, index) => {
                const position = [
                    Math.random() * 30 - 15,
                    -1,
                    Math.random() * 30 - 15,
                ];
                const rotation = [0, Math.random() * Math.PI, 0];
                const animationName =
                    randomAnimation[Math.floor(Math.random() * 2 * 1.3)];
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
        </>
    );
};
export default Cat;

useGLTF.preload("/catbeta.glb");
