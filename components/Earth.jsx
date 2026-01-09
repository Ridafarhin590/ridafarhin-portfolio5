"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function Globe() {
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) return;

    // Scroll-based scaling
    const scrollY = window.scrollY;
    const scale = Math.min(1 + scrollY / 700, 1.7); // 🔥 grow limit

    meshRef.current.scale.set(scale, scale, scale);
    meshRef.current.rotation.y += 0.002; // smooth rotation
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 40, 40]} />
      <meshBasicMaterial
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
      camera={{ position: [0, 0, 2.2] }}
      style={{ width: "100%", height: "100%" }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
      <Globe />
    </Canvas>
  );
}
