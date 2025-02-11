import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model605.glb');

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
      <mesh geometry={nodes.Rusty_Screw_Cylinder058.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder057.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder055.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder054.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder053.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder052.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder051.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder050.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder049.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder042.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder041.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder040.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder039.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder038.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder037.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder036.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder035.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder034.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder033.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder026.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder025.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder024.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder023.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder022.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder021.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder020.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder019.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder018.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder017.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder010.geometry} material={materials['Material.019']} position={[-0.025, 1.703, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder009.geometry} material={materials['Material.019']} position={[-0.025, 1.528, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder008.geometry} material={materials['Material.019']} position={[-0.025, 1.346, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder007.geometry} material={materials['Material.019']} position={[-0.025, 1.172, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder006.geometry} material={materials['Material.019']} position={[-0.025, 0.993, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder005.geometry} material={materials['Material.019']} position={[-0.025, 0.637, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder004.geometry} material={materials['Material.019']} position={[-0.025, 0.819, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder003.geometry} material={materials['Material.019']} position={[-0.025, 0.463, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder002.geometry} material={materials['Material.019']} position={[-0.025, 0.284, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Rusty_Screw_Cylinder001.geometry} material={materials['Material.019']} position={[-0.025, 0.11, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
      <mesh geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <group position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.8, -1.05, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.8, 0, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.631]} />
      <mesh geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.8, -0.016, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.8, 0.146, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.8, 0.308, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.8, 0.47, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.8, 0.632, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.8, 0.794, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.8, 0.956, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.8, 1.118, 0.065]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.8, 1.281, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.8, 1.443, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1010.geometry} material={materials['Material.001']} position={[-0.8, 1.605, 0.067]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, -0.079, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 0.083, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 0.245, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 0.407, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 0.569, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 0.731, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 0.893, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.065]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.066]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.218, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 1.38, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer057.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer058.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer059.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer060.geometry} material={materials['Material.001']} position={[-0.8, 1.704, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1017.geometry} material={materials['Material.001']} position={[-0.8, -0.016, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer073.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer074.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1018.geometry} material={materials['Material.001']} position={[-0.8, 0.146, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer075.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer076.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1019.geometry} material={materials['Material.001']} position={[-0.8, 0.308, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer077.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer078.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1020.geometry} material={materials['Material.001']} position={[-0.8, 0.47, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer079.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer080.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1021.geometry} material={materials['Material.001']} position={[-0.8, 0.632, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer081.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer082.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1022.geometry} material={materials['Material.001']} position={[-0.8, 0.794, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer083.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer084.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1023.geometry} material={materials['Material.001']} position={[-0.8, 0.956, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer085.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer086.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1024.geometry} material={materials['Material.001']} position={[-0.8, 1.118, -1.802]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer087.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer088.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1025.geometry} material={materials['Material.001']} position={[-0.8, 1.281, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer089.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer090.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1026.geometry} material={materials['Material.001']} position={[-0.8, 1.443, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer091.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer092.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Slat_1027.geometry} material={materials['Material.001']} position={[-0.8, 1.605, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer093.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer094.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer095.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer096.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer109.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer110.geometry} material={materials['Material.001']} position={[-0.8, -0.079, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer111.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer112.geometry} material={materials['Material.001']} position={[-0.8, 0.083, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer113.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer114.geometry} material={materials['Material.001']} position={[-0.8, 0.245, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer115.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer116.geometry} material={materials['Material.001']} position={[-0.8, 0.407, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer117.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer118.geometry} material={materials['Material.001']} position={[-0.8, 0.569, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer119.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer120.geometry} material={materials['Material.001']} position={[-0.8, 0.731, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer121.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer122.geometry} material={materials['Material.001']} position={[-0.8, 0.893, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer123.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer124.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.802]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer125.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer126.geometry} material={materials['Material.001']} position={[-0.8, 1.218, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer127.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer128.geometry} material={materials['Material.001']} position={[-0.8, 1.38, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer129.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer130.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer131.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <mesh geometry={nodes.Spacer132.geometry} material={materials['Material.001']} position={[-0.8, 1.704, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.443]} />
      <spotLight
  position={[10, 10, 10]} // Set the position of the spotlight
  angle={0.3} // Set the spotlight angle
  penumbra={0.1} // Set the spotlight penumbra
  intensity={5} // Set the intensity of the spotlight
  castShadow // Enable casting shadows
  color={0xff0000} // Set the color of the spotlight (red in this case)
/>
      </group>
    </group>
    
  );
}

useGLTF.preload('/alumarchcladding/model605.glb');
