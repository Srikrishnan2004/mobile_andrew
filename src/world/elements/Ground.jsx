import React, { useMemo } from "react";
import { RigidBody } from "@react-three/rapier";
import { useGLTFWithKTX2 } from "../../services/useGTLFwithKTX";
import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground(props) {
  const { nodes, materials } = useGLTFWithKTX2("/luxoo.glb");

  const memoizedNodes = useMemo(() => nodes, [nodes]);
  const memoizedMaterials = useMemo(() => materials, [materials]);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group
        {...props}
        position={[0, 0, 0]}
        scale={10}
        dispose={null}
        rotation={[0, Math.PI / 2, 0]}
      >
        <group
          position={[0.252, 0.059, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091.geometry}
            material={memoizedNodes.PaletteMaterial001}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091_1.geometry}
            material={memoizedMaterials.lx_room1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091_2.geometry}
            material={memoizedNodes.PaletteMaterial002}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091_3.geometry}
            material={memoizedMaterials.PaletteMaterial003}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091_4.geometry}
            material={memoizedMaterials.PaletteMaterial004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={memoizedNodes.Mesh091_5.geometry}
            material={memoizedMaterials.PaletteMaterial005}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={memoizedNodes.polySurface235003.geometry}
          material={memoizedMaterials.PaletteMaterial006}
          position={[0.252, 0.059, 0.004]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
      </group>
      {/* Reflection Planes */}
      <mesh
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, 1.115, -2.5]}
        scale={1}
      >
        <planeGeometry args={[2.4, 2]} />
        <MeshReflectorMaterial
          resolution={2048}
          mirror={1}
          metalness={0}
          color="#808080"
          roughness={0}
          opacity={1}
        />
      </mesh>
      <mesh
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, 1.115, 2.5]}
        scale={1}
      >
        <planeGeometry args={[2.4, 2]} />
        <MeshReflectorMaterial
          resolution={2048}
          mirror={1}
          color="#808080"
          metalness={0}
          roughness={0}
          opacity={1}
        />
      </mesh>
    </RigidBody>
  );
}
