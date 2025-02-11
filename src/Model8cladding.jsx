import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model8cladding.glb')

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.01',
          'Material.019',
          'Material.020',
          'Material.122',
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
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.122']} position={[-0.009, 3.134, 0.004]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFTTLM_(Top)002'].geometry} material={materials['Material.020']} position={[1.555, 0.114, 0.014]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)002'].geometry} material={materials['Material.019']} position={[-1.575, 0.115, -0.006]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips.048']} position={[-0.754, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips.048']} position={[-0.251, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips.048']} position={[-1.257, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips.048']} position={[0.728, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips.048']} position={[1.232, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips.048']} position={[0.226, 3.11, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips.048']} position={[-0.754, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips.048']} position={[-0.251, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips.048']} position={[-1.257, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips.048']} position={[0.728, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips.048']} position={[1.232, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips.048']} position={[0.226, 2.911, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips.048']} position={[-0.754, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips.048']} position={[-0.251, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips.048']} position={[-1.257, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips.048']} position={[0.728, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips.048']} position={[1.232, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips.048']} position={[0.226, 2.712, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips.048']} position={[-0.754, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips.048']} position={[-0.251, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips.048']} position={[-1.257, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips.048']} position={[0.728, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips.048']} position={[1.232, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips.048']} position={[0.226, 2.513, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips.048']} position={[-0.754, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips.048']} position={[-0.251, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips.048']} position={[-1.257, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips.048']} position={[0.728, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips.048']} position={[1.232, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips.048']} position={[0.226, 2.315, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips.048']} position={[-0.754, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips.048']} position={[-0.251, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips.048']} position={[-1.257, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips.048']} position={[0.728, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips.048']} position={[1.232, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips.048']} position={[0.226, 2.116, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips.048']} position={[-0.754, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips.048']} position={[-0.251, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips.048']} position={[-1.257, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips.048']} position={[0.728, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips.048']} position={[1.232, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips.048']} position={[0.226, 1.917, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips.048']} position={[-0.754, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips.048']} position={[-0.251, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips.048']} position={[-1.257, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips.048']} position={[0.729, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips.048']} position={[1.232, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips.048']} position={[0.226, 1.718, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips.048']} position={[-0.754, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips.048']} position={[-0.251, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)040'].geometry} material={materials['Material.clips.048']} position={[-1.257, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)039'].geometry} material={materials['Material.clips.048']} position={[0.729, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)038'].geometry} material={materials['Material.clips.048']} position={[1.232, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)037'].geometry} material={materials['Material.clips.048']} position={[0.226, 1.52, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)036'].geometry} material={materials['Material.clips.048']} position={[-0.754, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips.048']} position={[-0.251, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips.048']} position={[-1.257, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips.048']} position={[0.729, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips.048']} position={[1.232, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips.048']} position={[0.226, 1.321, -0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips.048']} position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips.048']} position={[-0.73, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips.048']} position={[-0.227, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips.048']} position={[-1.232, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips.048']} position={[0.753, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips.048']} position={[1.256, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips.048']} position={[0.25, 0.932, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips.048']} position={[-0.73, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips.048']} position={[-0.227, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips.048']} position={[-1.232, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips.048']} position={[0.753, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips.048']} position={[1.256, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips.048']} position={[0.25, 0.734, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips.048']} position={[-0.73, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips.048']} position={[-0.227, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips.048']} position={[-1.232, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips.048']} position={[0.753, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips.048']} position={[1.256, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips.048']} position={[0.25, 0.535, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips.048']} position={[-0.73, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips.048']} position={[-0.227, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips.048']} position={[-1.232, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips.048']} position={[0.753, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips.048']} position={[1.256, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips.048']} position={[0.25, 0.336, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.009, 3.015, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150016'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150016_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 2.816, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150015'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150015_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 2.617, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150014'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150014_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 2.419, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150013'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150013_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 2.22, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150012'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150012_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 2.021, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150011'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150011_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 1.822, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150010'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150010_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 1.624, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150009'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150009_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.009, 1.425, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150008'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150008_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-1.281, 1.108, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150007'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150007_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-1.573, 0.925, 0.001]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150006'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150006_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.013, 0.846, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150005'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150005_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.013, 0.647, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150004'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150004_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.013, 0.448, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150003'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150003_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <group position={[-0.013, 0.249, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150002'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150002_1'].geometry} material={materials['Material.m.01']} />
      </group>
      </group>
      </group>
  )
}

useGLTF.preload('/alumarchcladding/model8cladding.glb')
