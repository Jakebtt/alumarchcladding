import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model6cladding2.glb')

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          'Material.120'
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
    <group ref={group} position={[0, -4, 0]} scale={[2, 2, 2]} 
    rotation={[0, Math.PI / 2, 0]} // 🔹 Rotate 90 degrees to the right (Y-axis)
     dispose={null}>
      <directionalLight position={[0, 10, -10]} intensity={1.2} color="white" />
      <group name="Scene">
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.001']} position={[-0.029, 3.058, -0.016]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <group position={[-0.029, 2.967, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150040'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150040_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.817, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150039'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150039_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.666, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150038'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150038_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.516, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150037'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150037_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.366, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150036'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150036_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.216, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150035'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150035_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 2.066, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150034'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150034_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.915, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150033'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150033_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.765, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150032'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150032_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.615, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150031'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150031_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.465, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150030'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150030_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.314, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150029'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150029_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.164, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150028'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150028_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 1.014, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150027'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150027_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[-0.029, 0.864, -0.017]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150026'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150026_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[5.055, 0.67, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150025'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150025_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[1.537, 0.671, -0.025]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150024'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150024_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[1.537, 0.521, -0.025]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150023'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150023_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[1.537, 0.371, -0.025]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150022'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150022_1'].geometry} material={materials['Material.m001']} />
      </group>
      <group position={[1.537, 0.221, -0.025]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150021'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150021_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KECFTTLM_(Top)002'].geometry} material={materials['Material.120']} position={[-1.593, 0.015, -0.021]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)002'].geometry} material={materials['Material.120']} position={[-1.594, 0.015, -0.026]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)234'].geometry} material={materials['Material.clips']} position={[0.203, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)233'].geometry} material={materials['Material.clips']} position={[0.705, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)232'].geometry} material={materials['Material.clips']} position={[-1.28, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)231'].geometry} material={materials['Material.clips']} position={[-0.274, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)230'].geometry} material={materials['Material.clips.001']} position={[1.209, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)229'].geometry} material={materials['Material.clips']} position={[-0.778, 3.033, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)228'].geometry} material={materials['Material.clips']} position={[0.203, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)114'].geometry} material={materials['Material.clips']} position={[0.705, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)113'].geometry} material={materials['Material.clips']} position={[-1.28, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)112'].geometry} material={materials['Material.clips']} position={[-0.274, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)111'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)109'].geometry} material={materials['Material.clips']} position={[-0.778, 2.884, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)108'].geometry} material={materials['Material.clips']} position={[0.203, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)107'].geometry} material={materials['Material.clips']} position={[0.705, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)106'].geometry} material={materials['Material.clips']} position={[-1.28, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)105'].geometry} material={materials['Material.clips']} position={[-0.274, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)104'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)103'].geometry} material={materials['Material.clips']} position={[-0.778, 2.733, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)102'].geometry} material={materials['Material.clips']} position={[0.203, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)101'].geometry} material={materials['Material.clips']} position={[0.705, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)100'].geometry} material={materials['Material.clips']} position={[-1.28, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)099'].geometry} material={materials['Material.clips']} position={[-0.274, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)098'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)097'].geometry} material={materials['Material.clips']} position={[-0.778, 2.583, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)096'].geometry} material={materials['Material.clips']} position={[0.203, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)095'].geometry} material={materials['Material.clips']} position={[0.705, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)094'].geometry} material={materials['Material.clips']} position={[-1.28, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)093'].geometry} material={materials['Material.clips']} position={[-0.274, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)092'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)091'].geometry} material={materials['Material.clips']} position={[-0.778, 2.433, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips']} position={[0.203, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips']} position={[0.705, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips']} position={[-1.28, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips']} position={[-0.274, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips']} position={[-0.778, 2.283, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips']} position={[0.203, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips']} position={[0.705, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips']} position={[-1.28, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips']} position={[-0.274, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips.001']} position={[1.209, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips']} position={[-0.778, 2.132, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips']} position={[0.203, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips']} position={[0.705, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips']} position={[-1.28, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips']} position={[-0.274, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips']} position={[-0.778, 1.982, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips']} position={[0.203, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips']} position={[0.705, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips']} position={[-1.28, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips']} position={[-0.274, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips']} position={[-0.778, 1.832, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips']} position={[0.203, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips']} position={[0.705, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips']} position={[-1.28, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips']} position={[-0.274, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips']} position={[-0.778, 1.682, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips']} position={[0.203, 1.532, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips']} position={[0.705, 1.532, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips']} position={[-1.28, 1.532, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips']} position={[-0.274, 1.531, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.531, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips']} position={[-0.778, 1.531, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips']} position={[0.203, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips']} position={[0.705, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips']} position={[-1.28, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips']} position={[-0.274, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips']} position={[-0.778, 1.381, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips']} position={[0.203, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips']} position={[0.705, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips']} position={[-1.28, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips']} position={[-0.274, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips']} position={[-0.778, 1.231, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips']} position={[0.203, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips']} position={[0.705, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)040'].geometry} material={materials['Material.clips']} position={[-1.28, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)039'].geometry} material={materials['Material.clips']} position={[-0.274, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)038'].geometry} material={materials['Material.clips.001']} position={[1.209, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)037'].geometry} material={materials['Material.clips']} position={[-0.778, 1.081, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)036'].geometry} material={materials['Material.clips']} position={[0.203, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips']} position={[0.705, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips']} position={[-1.28, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips']} position={[-0.274, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips.001']} position={[1.209, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips']} position={[-0.778, 0.931, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips']} position={[0.203, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips']} position={[0.705, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips']} position={[-1.28, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips']} position={[-0.274, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips.001']} position={[1.209, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips']} position={[-0.778, 0.78, -0.022]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips']} position={[0.227, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips']} position={[0.729, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips']} position={[-1.256, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips']} position={[-0.25, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips.001']} position={[1.233, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips']} position={[-0.754, 0.639, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips']} position={[0.227, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips']} position={[0.729, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips']} position={[-1.256, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips']} position={[-0.25, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips.001']} position={[1.233, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips']} position={[-0.754, 0.489, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips']} position={[0.227, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips']} position={[0.729, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips']} position={[-1.256, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips']} position={[-0.25, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips.001']} position={[1.233, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips']} position={[-0.754, 0.339, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips']} position={[0.227, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips']} position={[0.729, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips']} position={[-1.256, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips']} position={[-0.25, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips.001']} position={[1.233, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips']} position={[-0.754, 0.189, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
    </group>
    </group>
    
  )
}

useGLTF.preload('/alumarchcladding/model6cladding2.glb')
