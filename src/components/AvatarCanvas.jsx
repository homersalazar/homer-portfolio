import Avatar from '../components/mockup/Avatar'
import { Canvas } from "@react-three/fiber";
import {
	OrbitControls,
	Preload,
} from "@react-three/drei";
export default function AvatarCanvas() {
	return (
		<div className='h-[50rem] w-2/4'>
			<Canvas dpr={[0, 2]}>
				<ambientLight intensity={2} />
				<pointLight position={[1, 1, 1]} />
				<OrbitControls enabled={false} />
					<Avatar />
				<Preload all />
			</Canvas>
		</div>
	);
};
