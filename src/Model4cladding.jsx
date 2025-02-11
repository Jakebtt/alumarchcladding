import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';


export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model4cladding.glb')

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
          'Material.019',
          'Material.020',
          'Material.121',
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
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)003'].geometry} material={materials['Material.121']} position={[1.572, 3.178, -0.005]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFTTLM_(Top)002'].geometry} material={materials['Material.001']} position={[-1.558, 0.008, -0.002]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)002'].geometry} material={materials['Material.001']} position={[-1.559, 0.008, -0.007]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)366'].geometry} material={materials['Material.clips.031']} position={[0.241, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)365'].geometry} material={materials['Material.clips.031']} position={[1.246, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)364'].geometry} material={materials['Material.clips.031']} position={[0.743, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)363'].geometry} material={materials['Material.clips.031']} position={[-1.242, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)362'].geometry} material={materials['Material.clips.031']} position={[-0.236, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)361'].geometry} material={materials['Material.clips.031']} position={[-0.74, 3.134, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)360'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)359'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)358'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)357'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)356'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)355'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.122, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)174'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)173'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)172'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)171'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)170'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)169'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.222, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)168'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)167'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)166'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)165'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)164'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)163'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.322, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)162'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)161'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)160'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)159'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)158'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)157'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.422, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)156'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)155'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)154'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)153'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)152'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)151'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.522, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)150'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)149'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)148'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)147'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)146'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)145'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.623, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)144'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)143'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)142'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)141'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)140'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)139'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.722, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)138'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)137'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)136'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)135'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)134'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)133'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.823, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)132'].geometry} material={materials['Material.clips.031']} position={[0.241, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)131'].geometry} material={materials['Material.clips.031']} position={[1.246, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)130'].geometry} material={materials['Material.clips.031']} position={[0.743, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)129'].geometry} material={materials['Material.clips.031']} position={[-1.242, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)128'].geometry} material={materials['Material.clips.031']} position={[-0.236, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)127'].geometry} material={materials['Material.clips.031']} position={[-0.74, 0.923, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)126'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)125'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)124'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)123'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)122'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)121'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.023, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)120'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)119'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)118'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)117'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)116'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)115'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.123, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)114'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)113'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)112'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)111'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)110'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)109'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.223, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)108'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)107'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)106'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)105'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)104'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)103'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.323, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)102'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)101'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)100'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)099'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)098'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)097'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.423, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)096'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)095'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)094'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)093'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)092'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)091'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.524, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)090'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)089'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)088'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)087'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)086'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)085'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.624, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)084'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)083'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)082'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)081'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)080'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)079'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.724, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)078'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)077'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)076'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)075'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)074'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)073'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.824, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)072'].geometry} material={materials['Material.clips.031']} position={[0.241, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)071'].geometry} material={materials['Material.clips.031']} position={[1.246, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)070'].geometry} material={materials['Material.clips.031']} position={[0.743, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)069'].geometry} material={materials['Material.clips.031']} position={[-1.242, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)068'].geometry} material={materials['Material.clips.031']} position={[-0.236, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)067'].geometry} material={materials['Material.clips.031']} position={[-0.74, 1.924, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)066'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)065'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)064'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)063'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)062'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)061'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.025, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)060'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)059'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)058'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)057'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)056'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)055'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.125, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)054'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)053'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)052'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)051'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)050'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)049'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.225, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)048'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)047'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)046'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)045'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)044'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)043'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.325, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)042'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)041'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)040'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)039'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)038'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)037'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.425, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)036'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)035'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)034'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)033'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)032'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)031'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.525, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)030'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)029'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)028'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)027'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)026'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)025'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.626, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)024'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.727, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)023'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.726, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)022'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.727, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)021'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.727, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)020'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.727, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)019'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.727, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)018'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)017'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)016'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)015'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)014'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)013'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.826, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)012'].geometry} material={materials['Material.clips.031']} position={[0.241, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)011'].geometry} material={materials['Material.clips.031']} position={[1.246, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)010'].geometry} material={materials['Material.clips.031']} position={[0.743, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)009'].geometry} material={materials['Material.clips.031']} position={[-1.242, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)008'].geometry} material={materials['Material.clips.031']} position={[-0.236, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)007'].geometry} material={materials['Material.clips.031']} position={[-0.74, 2.926, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)006'].geometry} material={materials['Material.clips.031']} position={[0.241, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)005'].geometry} material={materials['Material.clips.031']} position={[1.246, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)004'].geometry} material={materials['Material.clips.031']} position={[0.743, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)003'].geometry} material={materials['Material.clips.031']} position={[-1.242, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)002'].geometry} material={materials['Material.clips.031']} position={[-0.236, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)001'].geometry} material={materials['Material.clips.031']} position={[-0.74, 3.027, -0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[0.006, 3.094, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150032'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150032_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150032_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150032_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.088, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150031'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150031_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150031_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150031_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.188, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150030'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150030_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150030_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150030_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.289, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150029'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150029_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150029_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150029_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.389, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150028'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150028_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150028_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150028_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.489, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150027'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150027_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150027_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150027_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.589, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150026'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150026_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150026_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150026_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.689, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150025'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150025_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150025_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150025_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.789, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150024'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150024_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150024_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150024_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.889, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150023'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150023_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150023_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150023_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 0.989, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150022'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150022_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150022_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150022_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.09, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150021'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150021_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150021_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150021_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.19, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150020'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150020_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150020_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150020_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.29, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150019'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150019_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150019_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150019_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.39, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150018'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150018_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150018_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150018_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.49, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150017'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150017_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150017_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150017_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.59, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150016'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150016_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150016_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150016_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.69, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150015'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150015_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150015_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150015_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.791, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150014'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150014_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150014_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150014_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.891, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150013'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150013_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150013_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150013_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 1.991, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150012'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150012_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150012_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150012_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.091, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150011'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150011_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150011_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150011_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.191, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150010'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150010_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150010_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150010_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.292, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150009'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150009_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150009_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150009_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.392, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150008'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150008_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150008_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150008_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.492, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150007'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150007_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150007_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150007_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.592, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150006'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150006_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150006_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150006_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.692, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150005'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150005_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150005_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150005_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.792, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150004'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150004_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150004_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150004_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.893, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150003'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150003_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150003_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150003_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <group position={[0.006, 2.993, 0.003]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150002'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150002_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150002_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150002_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      </group>
      </group>
  )
}

useGLTF.preload('/alumarchcladding/model4cladding.glb')
