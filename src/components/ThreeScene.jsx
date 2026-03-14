"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import LaptopModel from "./LaptopModel";

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [3, 4, 7], fov: 50 }}
      style={{ height: "400px" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} />

      <LaptopModel />

      <OrbitControls enableZoom={false} />

      <Environment preset="city" />
    </Canvas>
  );
}
