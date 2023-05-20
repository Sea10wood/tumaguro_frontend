import { Clone, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const CloneCat = ({
    scene,
    animations,
    position,
    animationName,
}: {
    scene: any;
    animations: any;
    position: any;
    animationName: str;
}) => {
    const ref = useRef();
    const { actions } = useAnimations(animations, ref);
    useFrame(() => {
        actions[animationName]?.play();
    });
    return (
        <Clone
            object={scene}
            scale={0.35}
            position-x={-8}
            ref={ref}
            position={position}
        />
    );
};

const Cat = () => {
    const { scene, animations } = useGLTF("/catbeta2.glb");
    // const ref = useRef();
    // const { actions } = useAnimations(animations, ref);
    // console.log(scene);
    // useFrame(() => {
    //     actions.stay?.play();
    // });
    return (
        <>
            {/* <primitive object={scene} ref={ref} scale={0.35} />
            <Clone object={scene} scale={0.35} position-x={-4} ref={ref} />
            <Clone object={scene} scale={0.35} position-x={-8} ref={ref} /> */}
            <CloneCat
                scene={scene}
                animations={animations}
                position={[0, 0, 0]}
                animationName="stay"
            />
            <CloneCat
                scene={scene}
                animations={animations}
                position={[5, 0, 50]}
                animationName="sit"
            />
        </>
    );
};
export default Cat;
