import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model825cladding.glb')

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
          'Material.022',
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
      <group position={[0.003, 0.249, 0.016]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150001'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150001_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150001_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150001_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips.048']} position={[0.254, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips.048']} position={[1.26, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips.048']} position={[0.756, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips.048']} position={[-1.229, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips.048']} position={[-0.223, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips.048']} position={[-0.727, 0.343, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[0.003, 0.455, 0.016]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150002'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150002_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150002_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150002_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips.048']} position={[0.254, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips.048']} position={[1.26, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips.048']} position={[0.756, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips.048']} position={[-1.229, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips.048']} position={[-0.223, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips.048']} position={[-0.727, 0.548, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[0.003, 0.661, 0.016]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150003'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150003_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150003_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150003_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips.048']} position={[0.254, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips.048']} position={[1.26, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips.048']} position={[0.756, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips.048']} position={[-1.229, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips.048']} position={[-0.223, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips.048']} position={[-0.727, 0.754, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[0.003, 0.867, 0.016]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150004'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150004_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150004_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150004_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips.048']} position={[0.254, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips.048']} position={[1.26, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips.048']} position={[0.756, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips.048']} position={[-1.229, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips.048']} position={[-0.223, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips.048']} position={[-0.727, 0.96, 0.002]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150005'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150005_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150005_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150005_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150006'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150006_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150006_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150006_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)036'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150007'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150007_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150007_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150007_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)037'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)038'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)039'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)040'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150008'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150008_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150008_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150008_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips.048']} position={[1.573, 0.958, 0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150009'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150009_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150009_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150009_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150010'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150010_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150010_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150010_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150011'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150011_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150011_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150011_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150012'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150012_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150012_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150012_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150013'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150013_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150013_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150013_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150014'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150014_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150014_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150014_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150015'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150015_1'].geometry} material={materials['Material.m.01']} />
        <mesh geometry={nodes['C-KED150015_2'].geometry} material={materials['Material.018']} />
        <mesh geometry={nodes['C-KED150015_3'].geometry} material={materials['Material.metal.016']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips.048']} position={[1.573, 1.792, 0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.122']} position={[1.573, 3.257, 0.005]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFTTLM_(Top)002'].geometry} material={materials['Material.020']} position={[-1.558, 0.115, 0.008]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)002'].geometry} material={materials['Material.019']} position={[-1.558, 0.115, 0.003]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
    </group>
    </group>
  )
}

useGLTF.preload('/public/model825cladding.glb')
