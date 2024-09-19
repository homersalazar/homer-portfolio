import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Avatar from "./Avatar";

export default function AvatarCanvas({ animationName }) {

    return (
        <div className="h-[30rem] w-full hidden lg:block">
            <Canvas className="p-0">
                <ambientLight intensity={4} />
                <pointLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enabled={false} enableZoom={false} maxPolarAngle={Math.PI / 2} />
                <Avatar animationName={animationName} position-y={-3} scale={2.9} />
            </Canvas>
        </div>
    );
}