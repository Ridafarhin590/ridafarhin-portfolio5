"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Globe() {
  return (
    <mesh>
      {/* ⬆️ BIGGER SPHERE */}
      <sphereGeometry args={[3, 40, 40]} />

      <meshStandardMaterial
        color="#2563eb"
        wireframe
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default function Earth() {
  return (
    <Canvas
      camera={{ position: [1, 0, 5] }}  // ⬅️ zoomed out for big globe
      dpr={1}
      style={{ width: "100%", height: "100%" }}
    >
      {/* LIGHTS */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* ROTATION */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.9}
      />

      <Globe />
    </Canvas>
  );
}
