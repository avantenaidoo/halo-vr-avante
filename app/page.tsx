"use client";

import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Object3D } from "three";

extend({ Object3D });

function Model() {
  const { scene } = useGLTF("/models/background1/background1.gltf");
  return <primitive object={scene} scale={10} />;
}

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <Suspense fallback={null}>
          <Model />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} />
      </Canvas>
    </div>
  );
}