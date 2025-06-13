import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect } from 'react';

const ComputerModel = () => {
  // For now, we'll use a simple mesh as a placeholder
  // Later, a GLB file can be imported here
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4cc9f0" />
    </mesh>
  );
};

const ContactLights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight 
        position={[0, 5, 5]}
        angle={0.3}
        intensity={50}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <pointLight
        position={[0, 0, 2]}
        intensity={5}
        color="#7209b7"
      />
    </>
  );
};

const ContactExperience = () => {
  return (
    <div className="h-full w-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          maxDistance={10}
          minDistance={2}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
        />
        
        <ContactLights />
        <Environment preset='city' />
        
        <group position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
          <ComputerModel />
        </group>
      </Canvas>
    </div>
  );
};

export default ContactExperience;