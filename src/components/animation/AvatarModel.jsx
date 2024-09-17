import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function AvatarModel(props) {
    const groupRef = useRef()
    const { nodes, materials } = useGLTF('/avatar.glb')

    useFrame((state, delta) => {
        // Optional: Add animations here
        // For example, to rotate the model:
        // groupRef.current.rotation.y += delta
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <primitive object={nodes.Scene} 
                    scale={2}
                    position-y={-2}
                    rotation-y={-0.5}
                    position-x={[-1]}
            />
        </group>
    )
}

useGLTF.preload('/avatar.glb')