import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/Claddingparttest.glb'); // Updated model path

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          'Material.002',
          'Material.004',
          'Material.019',
        ];

        materialNames.forEach(name => {
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
      <group name="Scene">
        <mesh geometry={nodes['C-KED150032'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150032_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150032_2'].geometry} material={materials['Material.001']} />
      </group>
      <group position={[-5.539, 3.303, 1.572]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150035'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150035_1'].geometry} material={materials['Material.metal.001']} />
      </group>
      <group position={[-1.135, 3.303, 1.389]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150001'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150001_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150001_2'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150001_3'].geometry} material={materials['Material.metal.002']} />
        </group>
    </group>
  )
}

useGLTF.preload('/alumarchcladding/Claddingparttest.glb')
