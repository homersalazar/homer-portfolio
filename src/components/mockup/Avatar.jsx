import {
	useAnimations,
	useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";

const Avatar = () => {
	const [index, setIndex] = useState(1);
	const avatar = useGLTF("/avatar.glb");
	const { actions, names } = useAnimations(avatar.animations, avatar.scene);
	useEffect(() => {
		actions[names[index]]?.reset().play();

		return () => {
			actions[names[index]]?.fadeOut(0.5);
		};
	}, [index, actions, names]);

    return (
        <group>
            <primitive 
                object={avatar.scene}
                scale={2}
                position-y={-1.6}
                rotation-y={6}
                position-x={[0]}
            />
        </group>
    )
}

export default Avatar
