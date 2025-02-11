import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model600.glb'); // Updated model path

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          'Material.002',
          'Material.003',
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
      <mesh geometry={nodes.Infill007.geometry} material={materials['Material.001']} position={[-0.022, 0.887, 1.932]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.626]} />
      <mesh geometry={nodes.Infill005.geometry} material={materials['Material.001']} position={[0.007, 0.887, 1.89]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.626]} />
      <mesh geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[0.007, 0.888, 0.022]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.627]} />
      <mesh geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[0.007, 0.888, 0.047]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.627]} />
      <mesh geometry={nodes.Infill002.geometry} material={materials['Material.001']} position={[0.007, 0.887, 1.915]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.626]} />
      <group position={[-0.024, 1.778, 1.9]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap002.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap002_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.024, 1.78, 0.033]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={nodes['C-KESP2W6565002'].geometry} material={materials['Material.001']} position={[-0.016, 0.885, 1.903]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.626]} />
      <mesh geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.016, 0.886, 0.035]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.627]} />
      <mesh geometry={nodes.Slat_1.geometry} material={materials['Material.001']} position={[-0.021, 0.076, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.04, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.04, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1001.geometry} material={materials['Material.001']} position={[-0.021, 0.224, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.117, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.117, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1002.geometry} material={materials['Material.001']} position={[-0.021, 0.371, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.273, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.273, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1003.geometry} material={materials['Material.001']} position={[-0.021, 0.518, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.43, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.43, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1004.geometry} material={materials['Material.001']} position={[-0.021, 0.665, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.585, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.585, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1005.geometry} material={materials['Material.001']} position={[-0.021, 0.812, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.742, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.742, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1006.geometry} material={materials['Material.001']} position={[-0.021, 0.959, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.898, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.898, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1007.geometry} material={materials['Material.001']} position={[-0.021, 1.106, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 1.055, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1008.geometry} material={materials['Material.001']} position={[-0.021, 1.253, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 1.211, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 1.211, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1009.geometry} material={materials['Material.001']} position={[-0.021, 1.4, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 1.367, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 1.367, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1010.geometry} material={materials['Material.001']} position={[-0.021, 1.547, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 1.524, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 1.524, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1011.geometry} material={materials['Material.001']} position={[-0.021, 1.694, 0.969]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 1.68, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 1.68, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1018.geometry} material={materials['Material.001']} position={[-0.8, -0.028, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, -0.04, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, -0.04, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1019.geometry} material={materials['Material.001']} position={[-0.8, 0.119, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 0.117, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 0.117, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1020.geometry} material={materials['Material.001']} position={[-0.8, 0.266, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 0.273, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 0.273, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1021.geometry} material={materials['Material.001']} position={[-0.8, 0.413, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 0.43, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 0.43, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1022.geometry} material={materials['Material.001']} position={[-0.8, 0.56, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 0.585, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 0.585, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1023.geometry} material={materials['Material.001']} position={[-0.8, 0.707, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 0.742, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 0.742, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1024.geometry} material={materials['Material.001']} position={[-0.8, 0.854, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 0.898, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 0.898, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1025.geometry} material={materials['Material.001']} position={[-0.8, 1.001, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.055, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1026.geometry} material={materials['Material.001']} position={[-0.8, 1.148, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer055.geometry} material={materials['Material.001']} position={[-0.8, 1.211, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer056.geometry} material={materials['Material.001']} position={[-0.8, 1.211, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1027.geometry} material={materials['Material.001']} position={[-0.8, 1.295, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer057.geometry} material={materials['Material.001']} position={[-0.8, 1.367, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer058.geometry} material={materials['Material.001']} position={[-0.8, 1.367, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1028.geometry} material={materials['Material.001']} position={[-0.8, 1.442, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer059.geometry} material={materials['Material.001']} position={[-0.8, 1.524, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer060.geometry} material={materials['Material.001']} position={[-0.8, 1.524, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Slat_1029.geometry} material={materials['Material.001']} position={[-0.8, 1.589, -1.8]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Spacer061.geometry} material={materials['Material.001']} position={[-0.8, 1.68, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Spacer062.geometry} material={materials['Material.001']} position={[-0.8, 1.68, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
      <mesh geometry={nodes.Infill001.geometry} material={materials['Material.003']} position={[-0.022, 0.888, -1.862]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, -1, -0.626]} />
      <mesh geometry={nodes.Infill006.geometry} material={materials['Material.003']} position={[0.007, 0.888, -1.819]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, -1, -0.626]} />
      <mesh geometry={nodes.Infill008.geometry} material={materials['Material.003']} position={[0.007, 0.888, -1.845]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, -1, -0.626]} />
      <mesh geometry={nodes['C-KESP2W6565003'].geometry} material={materials['Material.003']} position={[-0.016, 0.886, -1.832]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, -1, -0.626]} />
      <group position={[-0.024, 1.78, -1.83]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={-1}>
        <mesh geometry={nodes.End_Cap003.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.End_Cap003_1.geometry} material={materials['Material.004']} />
        </group>
      </group>
    </group>
  );
}
useGLTF.preload('/alumarchcladding/model600.glb');
