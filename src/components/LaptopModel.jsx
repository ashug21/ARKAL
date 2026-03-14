"use client"

import { useGLTF } from "@react-three/drei"

export default function LaptopModel() {

  const model = useGLTF("/models/laptop.glb")

  return (
    <primitive
      object={model.scene}
      scale={2}
      position={[0,-1,0]}
    />
  )
}