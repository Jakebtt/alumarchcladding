import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/Model425c.glb');

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.001',
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
      <mesh geometry={nodes['C-KECFTTLM_(Top)001'].geometry} material={materials['Material.001']} position={[-1.57, 0.008, -0.055]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)001'].geometry} material={materials['Material.001']} position={[-1.571, 0.008, -0.06]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)001'].geometry} material={materials['Material.121']} position={[1.56, 3.278, -0.058]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <group position={[-0.006, 3.194, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150033'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150033_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150033_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150033_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)175'].geometry} material={materials['Material.clips.031']} position={[-0.752, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)176'].geometry} material={materials['Material.clips.031']} position={[-0.248, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)177'].geometry} material={materials['Material.clips.031']} position={[-1.254, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)178'].geometry} material={materials['Material.clips.031']} position={[0.731, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)179'].geometry} material={materials['Material.clips.031']} position={[1.234, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)180'].geometry} material={materials['Material.clips.031']} position={[0.229, 3.234, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 3.087, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150035'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150035_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150035_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150035_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)181'].geometry} material={materials['Material.clips.031']} position={[-0.752, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)182'].geometry} material={materials['Material.clips.031']} position={[-0.248, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)183'].geometry} material={materials['Material.clips.031']} position={[-1.254, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)184'].geometry} material={materials['Material.clips.031']} position={[0.731, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)185'].geometry} material={materials['Material.clips.031']} position={[1.234, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)186'].geometry} material={materials['Material.clips.031']} position={[0.229, 3.127, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.98, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150036'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150036_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150036_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150036_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)187'].geometry} material={materials['Material.clips.031']} position={[-0.752, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)188'].geometry} material={materials['Material.clips.031']} position={[-0.248, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)189'].geometry} material={materials['Material.clips.031']} position={[-1.254, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)190'].geometry} material={materials['Material.clips.031']} position={[0.731, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)191'].geometry} material={materials['Material.clips.031']} position={[1.234, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)192'].geometry} material={materials['Material.clips.031']} position={[0.229, 3.02, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.872, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150037'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150037_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150037_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150037_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)193'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)194'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)195'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)196'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)197'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)198'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.913, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.765, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150038'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150038_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150038_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150038_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)199'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)200'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)201'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)202'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)203'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)204'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.806, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.658, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150039'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150039_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150039_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150039_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)205'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)206'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)207'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)208'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)209'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)210'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.699, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.551, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150040'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150040_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150040_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150040_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)211'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)212'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)213'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)214'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)215'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)216'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.592, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.444, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150041'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150041_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150041_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150041_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)217'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)218'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)219'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)220'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)221'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)222'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.484, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.337, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150042'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150042_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150042_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150042_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)223'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)224'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)225'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)226'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)227'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)228'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.378, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.23, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150043'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150043_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150043_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150043_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)229'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)230'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)231'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)232'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)233'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)234'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.271, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.123, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150044'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150044_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150044_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150044_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)235'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)236'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)237'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)238'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)239'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)240'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.164, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 2.016, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150045'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150045_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150045_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150045_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)241'].geometry} material={materials['Material.clips.031']} position={[-0.752, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)242'].geometry} material={materials['Material.clips.031']} position={[-0.248, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)243'].geometry} material={materials['Material.clips.031']} position={[-1.254, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)244'].geometry} material={materials['Material.clips.031']} position={[0.731, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)245'].geometry} material={materials['Material.clips.031']} position={[1.234, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)246'].geometry} material={materials['Material.clips.031']} position={[0.229, 2.057, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.909, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150046'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150046_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150046_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150046_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)247'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)248'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)249'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)250'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)251'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)252'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.949, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.802, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150047'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150047_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150047_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150047_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)253'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)254'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)255'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)256'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)257'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)258'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.842, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.695, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150048'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150048_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150048_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150048_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)259'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)260'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)261'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)262'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)263'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)264'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.735, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.588, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150049'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150049_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150049_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150049_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)265'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)266'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)267'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)268'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)269'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)270'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.628, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.48, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150050'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150050_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150050_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150050_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)271'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)272'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)273'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)274'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)275'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)276'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.521, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.373, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150051'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150051_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150051_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150051_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)277'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)278'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)279'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)280'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)281'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)282'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.413, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.266, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150052'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150052_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150052_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150052_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)283'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)284'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)285'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)286'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)287'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)288'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.307, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.159, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150053'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150053_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150053_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150053_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)289'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)290'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)291'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)292'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)293'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)294'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.199, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 1.052, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150054'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150054_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150054_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150054_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)295'].geometry} material={materials['Material.clips.031']} position={[-0.752, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)296'].geometry} material={materials['Material.clips.031']} position={[-0.248, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)297'].geometry} material={materials['Material.clips.031']} position={[-1.254, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)298'].geometry} material={materials['Material.clips.031']} position={[0.731, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)299'].geometry} material={materials['Material.clips.031']} position={[1.234, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)300'].geometry} material={materials['Material.clips.031']} position={[0.229, 1.092, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.945, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150055'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150055_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150055_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150055_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)301'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)302'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)303'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)304'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)305'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)306'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.985, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.838, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150056'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150056_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150056_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150056_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)307'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)308'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)309'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)310'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)311'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)312'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.878, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.731, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150057'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150057_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150057_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150057_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)313'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)314'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)315'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)316'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)317'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)318'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.771, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.624, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150058'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150058_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150058_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150058_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)319'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)320'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)321'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)322'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)323'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)324'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.664, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.517, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150059'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150059_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150059_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150059_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)325'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)326'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)327'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)328'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)329'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)330'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.557, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.41, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150060'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150060_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150060_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150060_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)331'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)332'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)333'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)334'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)335'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)336'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.45, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.303, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150061'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150061_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150061_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150061_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)337'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)338'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)339'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)340'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)341'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)342'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.343, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.195, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150062'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150062_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150062_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150062_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)343'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)344'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)345'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)346'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)347'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)348'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.236, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[-0.006, 0.088, -0.05]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150063'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150063_1'].geometry} material={materials['Material.001']} />
        <mesh geometry={nodes['C-KED150063_2'].geometry} material={materials['Material.metal.001']} />
        <mesh geometry={nodes['C-KED150063_3'].geometry} material={materials['Material.metal.048']} />
      </group>
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)349'].geometry} material={materials['Material.clips.031']} position={[-0.752, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)350'].geometry} material={materials['Material.clips.031']} position={[-0.248, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)351'].geometry} material={materials['Material.clips.031']} position={[-1.254, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)352'].geometry} material={materials['Material.clips.031']} position={[0.731, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)353'].geometry} material={materials['Material.clips.031']} position={[1.234, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)354'].geometry} material={materials['Material.clips.031']} position={[0.229, 0.129, -0.056]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
    </group>
    </group>
      );
    }
           
        useGLTF.preload('/alumarchcladding/Model425c.glb');
   