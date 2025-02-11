import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model825cladding2.glb')

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
      <group position={[-0.001, 0.249, -0.014]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150001'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150001_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KECFTTLM_(Top)001'].geometry} material={materials['Material.020']} position={[1.567, 0.114, -0.006]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)001'].geometry} material={materials['Material.019']} position={[-1.563, 0.115, -0.026]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)002'].geometry} material={materials['Material.122']} position={[1.569, 3.251, -0.025]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)181'].geometry} material={materials['Material.clips.048']} position={[0.262, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)182'].geometry} material={materials['Material.clips.048']} position={[1.268, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)183'].geometry} material={materials['Material.clips.048']} position={[0.764, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)184'].geometry} material={materials['Material.clips.048']} position={[-1.221, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)185'].geometry} material={materials['Material.clips.048']} position={[-0.215, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)186'].geometry} material={materials['Material.clips.048']} position={[-0.718, 0.343, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.001, 0.455, -0.014]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150032'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150032_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)187'].geometry} material={materials['Material.clips.048']} position={[0.262, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)188'].geometry} material={materials['Material.clips.048']} position={[1.268, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)189'].geometry} material={materials['Material.clips.048']} position={[0.764, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)190'].geometry} material={materials['Material.clips.048']} position={[-1.221, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)191'].geometry} material={materials['Material.clips.048']} position={[-0.215, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)192'].geometry} material={materials['Material.clips.048']} position={[-0.718, 0.548, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.001, 0.66, -0.014]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150033'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150033_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)193'].geometry} material={materials['Material.clips.048']} position={[0.262, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)194'].geometry} material={materials['Material.clips.048']} position={[1.268, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)195'].geometry} material={materials['Material.clips.048']} position={[0.764, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)196'].geometry} material={materials['Material.clips.048']} position={[-1.221, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)197'].geometry} material={materials['Material.clips.048']} position={[-0.215, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)198'].geometry} material={materials['Material.clips.048']} position={[-0.718, 0.753, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.001, 0.865, -0.014]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150034'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150034_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)199'].geometry} material={materials['Material.clips.048']} position={[0.262, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)200'].geometry} material={materials['Material.clips.048']} position={[1.268, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)201'].geometry} material={materials['Material.clips.048']} position={[0.764, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)202'].geometry} material={materials['Material.clips.048']} position={[-1.221, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)203'].geometry} material={materials['Material.clips.048']} position={[-0.215, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)204'].geometry} material={materials['Material.clips.048']} position={[-0.718, 0.958, -0.028]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150035'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150035_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)205'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)206'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)207'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)208'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)209'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)210'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150036'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150036_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)211'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)212'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)213'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)214'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)215'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)216'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150037'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150037_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)217'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)218'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)219'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)220'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)221'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)222'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150038'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150038_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)223'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)224'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)225'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)226'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)227'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)228'].geometry} material={materials['Material.clips.048']} position={[-1.561, 0.951, -0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150039'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150039_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)229'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)230'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)231'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)232'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)233'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)234'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150040'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150040_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)235'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)236'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)237'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)238'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)239'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)240'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150041'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150041_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)241'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)242'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)243'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)244'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)245'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)246'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150042'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150042_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)247'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)248'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)249'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)250'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)251'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)252'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150043'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150043_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)253'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)254'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)255'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)256'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)257'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)258'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150044'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150044_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)259'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)260'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)261'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)262'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)263'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)264'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1.334, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150045'].geometry} material={materials['Material.01']} />
        <mesh geometry={nodes['C-KED150045_1'].geometry} material={materials['Material.m.01']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)265'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)266'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)267'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)268'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)269'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)270'].geometry} material={materials['Material.clips.048']} position={[-1.562, 1.82, -0.011]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
    </group>
    </group>
  )
}

useGLTF.preload('/alumarchcladding/model825cladding2.glb')
