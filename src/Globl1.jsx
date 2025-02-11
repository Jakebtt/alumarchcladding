import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/Model6025c.glb');

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          ];

        materialNames.forEach((name) => {
          if (materials[name]) {
            materials[name].map = texture;
            materials[name].map.needsUpdate = true;
            materials[name].needsUpdate = true;
          }
        });
      });
    }
  }, [textureUrl, materials]);

  return (
    <group ref={group} position={[0, -3, 0]} scale={[2, 2, 2]} dispose={null}>
      <directionalLight position={[0, 10, -10]} intensity={1.2} color="white" />
      <group name="Scene">
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.002']} position={[0.34, 0, -0.21]} />
      <mesh geometry={nodes.Sphere_wire.geometry} material={materials.Material} position={[0.34, 0, -0.21]} />
      <mesh geometry={nodes.map.geometry} material={materials['Material.001']} position={[0.34, 0, 1.078]} scale={4.153} />
    </group>
    </group>
  )
}

useGLTF.preload('/globl1.glb')
