import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model625cladding3.glb')

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
      <group position={[1.532, 0.221, -0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150001'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150001_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KECFTTLM_(Top)001'].geometry} material={materials['Material.120']} position={[-1.597, 0.015, 0]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)001'].geometry} material={materials['Material.120']} position={[-1.599, 0.015, -0.005]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)110'].geometry} material={materials['Material.clips']} position={[-0.758, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)115'].geometry} material={materials['Material.clips.001']} position={[1.228, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)116'].geometry} material={materials['Material.clips']} position={[-0.255, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)117'].geometry} material={materials['Material.clips']} position={[-1.26, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)118'].geometry} material={materials['Material.clips']} position={[0.725, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)119'].geometry} material={materials['Material.clips']} position={[0.222, 0.195, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.532, 0.377, -0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150002'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150002_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)120'].geometry} material={materials['Material.clips']} position={[-0.758, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)121'].geometry} material={materials['Material.clips.001']} position={[1.228, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)122'].geometry} material={materials['Material.clips']} position={[-0.255, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)123'].geometry} material={materials['Material.clips']} position={[-1.26, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)124'].geometry} material={materials['Material.clips']} position={[0.725, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)125'].geometry} material={materials['Material.clips']} position={[0.222, 0.352, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.532, 0.534, -0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150003'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150003_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)126'].geometry} material={materials['Material.clips']} position={[-0.758, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)127'].geometry} material={materials['Material.clips.001']} position={[1.228, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)128'].geometry} material={materials['Material.clips']} position={[-0.255, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)129'].geometry} material={materials['Material.clips']} position={[-1.26, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)130'].geometry} material={materials['Material.clips']} position={[0.725, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)131'].geometry} material={materials['Material.clips']} position={[0.222, 0.508, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[1.532, 0.691, -0.004]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150004'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150004_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)132'].geometry} material={materials['Material.clips']} position={[-0.758, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)133'].geometry} material={materials['Material.clips.001']} position={[1.228, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)134'].geometry} material={materials['Material.clips']} position={[-0.255, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)135'].geometry} material={materials['Material.clips']} position={[-1.26, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)136'].geometry} material={materials['Material.clips']} position={[0.725, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)137'].geometry} material={materials['Material.clips']} position={[0.222, 0.665, -0.007]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150005'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150005_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)138'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)139'].geometry} material={materials['Material.clips.001']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)140'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)141'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)142'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)143'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150006'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150006_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)144'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)145'].geometry} material={materials['Material.clips.001']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)146'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)147'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)148'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)149'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150007'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150007_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)150'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)151'].geometry} material={materials['Material.clips.001']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)152'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)153'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)154'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)155'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150008'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150008_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)156'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)157'].geometry} material={materials['Material.clips.001']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)158'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)159'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)160'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)161'].geometry} material={materials['Material.clips']} position={[5.05, 0.696, 0.024]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150009'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150009_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)162'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)163'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)164'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)165'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)166'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)167'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150010'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150010_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)168'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)169'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)170'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)171'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)172'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)173'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150011'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150011_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)174'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)175'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)176'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)177'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)178'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)179'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150012'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150012_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)180'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)181'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)182'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)183'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)184'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)185'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150013'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150013_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)186'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)187'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)188'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)189'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)190'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)191'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150014'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150014_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)192'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)193'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)194'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)195'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)196'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)197'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150015'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150015_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)198'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)199'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)200'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)201'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)202'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)203'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150016'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150016_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)204'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)205'].geometry} material={materials['Material.clips.001']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)206'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)207'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)208'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)209'].geometry} material={materials['Material.clips']} position={[-1.599, 1.289, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150017'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150017_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)210'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)211'].geometry} material={materials['Material.clips.001']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)212'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)213'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)214'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)215'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150018'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150018_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)216'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)217'].geometry} material={materials['Material.clips.001']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)218'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)219'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)220'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)221'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150019'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150019_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)222'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)223'].geometry} material={materials['Material.clips.001']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)224'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)225'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)226'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)227'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150020'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150020_1'].geometry} material={materials['Material.m001']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)235'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)236'].geometry} material={materials['Material.clips.001']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)237'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)238'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)239'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)240'].geometry} material={materials['Material.clips']} position={[-1.599, 2.543, 0]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)002'].geometry} material={materials['Material.001']} position={[1.532, 3.207, -0.004]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
    </group>
    </group>
  )
}

useGLTF.preload('/alumarchcladding/model625cladding3.glb')
