import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';
import { Environment } from '@react-three/drei';

<Environment files="/hdr/environment.hdr" background={false} />

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/Model825c5.glb');

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
      <mesh geometry={nodes['C-KECFTTLM_(Top)001'].geometry} material={materials['Material.001']} position={[-1.695, 0.011, 0.011]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)001'].geometry} material={materials['Material.001']} position={[-1.696, 0.011, 0.006]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.141, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.141, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.141, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.141, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.141, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 0.1, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150002'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150002_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150002_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 0.207, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150003'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150003_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150003_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.355, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.355, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.355, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.355, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.355, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 0.314, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150004'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150004_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150004_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 0.421, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150005'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150005_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150005_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.248, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.248, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.248, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.248, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.248, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.463, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.463, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.463, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.463, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.463, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.571, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.571, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.571, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.571, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.571, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 0.53, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150006'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150006_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150006_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 0.637, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150007'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150007_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150007_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.785, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.785, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.785, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.785, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.785, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 0.744, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150008'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150008_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150008_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 0.851, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150009'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150009_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150009_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.678, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.678, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.678, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.678, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.678, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips.002']} position={[-0.639, 0.892, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips.002']} position={[-0.135, 0.892, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips.002']} position={[-1.141, 0.892, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips.002']} position={[0.844, 0.892, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips.002']} position={[0.341, 0.892, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 0.959, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150011'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150011_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150011_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.107, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.107, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.107, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.107, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.107, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 1.066, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150012'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150012_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150012_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 1.173, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150013'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150013_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150013_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips.002']} position={[0.844, 1, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips.002']} position={[0.341, 1, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.214, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.214, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.214, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.214, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.214, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.322, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.322, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.322, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.322, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.322, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 1.281, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150014'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150014_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150014_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 1.388, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150015'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150015_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150015_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.537, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.537, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.537, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.537, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.537, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 1.496, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150016'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150016_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150016_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 1.603, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150017'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150017_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150017_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.43, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.43, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.43, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.43, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.43, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.644, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.644, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.644, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.644, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.644, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.752, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.752, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.752, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.752, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.752, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 1.711, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150018'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150018_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150018_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 1.818, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150019'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150019_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150019_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.966, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.966, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.966, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.966, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.966, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 1.926, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150020'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150020_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150020_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 2.033, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150021'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150021_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150021_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)091'].geometry} material={materials['Material.clips.002']} position={[-0.639, 1.859, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)092'].geometry} material={materials['Material.clips.002']} position={[-0.135, 1.859, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)093'].geometry} material={materials['Material.clips.002']} position={[-1.141, 1.859, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)094'].geometry} material={materials['Material.clips.002']} position={[0.844, 1.859, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)095'].geometry} material={materials['Material.clips.002']} position={[0.341, 1.859, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)096'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.074, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)097'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.074, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)098'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.074, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)099'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.074, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)100'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.074, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)101'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.182, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)102'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.182, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)103'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.182, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)104'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.182, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)105'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.182, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 2.141, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150022'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150022_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150022_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 2.248, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150023'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150023_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150023_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)106'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.396, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)107'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.396, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)108'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.396, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)109'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.396, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)111'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.396, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 2.355, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150024'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150024_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150024_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 2.462, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150025'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150025_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150025_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)112'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.289, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)113'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.289, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)114'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.289, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)228'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.289, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)229'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.289, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)265'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.503, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)266'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.503, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)267'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.503, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)268'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.503, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)269'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.503, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 2.57, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150027'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150027_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150027_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)270'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.718, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)271'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.718, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)272'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.718, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)273'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.718, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)274'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.718, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 2.677, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150028'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150028_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150028_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 2.784, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150029'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150029_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150029_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)275'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.611, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)276'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.611, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)277'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.611, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)278'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.611, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)279'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.611, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)280'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.825, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)281'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.825, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)282'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.825, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)283'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.825, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)284'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.825, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)285'].geometry} material={materials['Material.clips.002']} position={[-0.639, 2.933, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)286'].geometry} material={materials['Material.clips.002']} position={[-0.135, 2.933, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)287'].geometry} material={materials['Material.clips.002']} position={[-1.141, 2.933, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)288'].geometry} material={materials['Material.clips.002']} position={[0.844, 2.933, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)313'].geometry} material={materials['Material.clips.002']} position={[0.341, 2.933, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.129, 2.893, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150030'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150030_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150030_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 3, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150031'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150031_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150031_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[-0.129, 3.107, 0.019]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150032'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150032_1'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150032_2'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)319'].geometry} material={materials['Material.clips.002']} position={[-0.639, 3.041, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)320'].geometry} material={materials['Material.clips.002']} position={[-0.135, 3.041, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)321'].geometry} material={materials['Material.clips.002']} position={[-1.141, 3.041, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)322'].geometry} material={materials['Material.clips.002']} position={[0.844, 3.041, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)323'].geometry} material={materials['Material.clips.002']} position={[0.341, 3.041, 0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.001']} position={[1.436, 3.176, 0.008]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
   </group>
 </group>
   );
 }
        
     useGLTF.preload('/alumarchcladding/Model825c5.glb');