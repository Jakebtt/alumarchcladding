import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/fencefinal/model2500.glb');

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
          "Material.004",
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
        <mesh name="Rusty_Screw_Cylinder058" geometry={nodes.Rusty_Screw_Cylinder058.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder057" geometry={nodes.Rusty_Screw_Cylinder057.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder055" geometry={nodes.Rusty_Screw_Cylinder055.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder054" geometry={nodes.Rusty_Screw_Cylinder054.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder053" geometry={nodes.Rusty_Screw_Cylinder053.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder052" geometry={nodes.Rusty_Screw_Cylinder052.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder051" geometry={nodes.Rusty_Screw_Cylinder051.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder050" geometry={nodes.Rusty_Screw_Cylinder050.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder049" geometry={nodes.Rusty_Screw_Cylinder049.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 1.892]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder042" geometry={nodes.Rusty_Screw_Cylinder042.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder041" geometry={nodes.Rusty_Screw_Cylinder041.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder040" geometry={nodes.Rusty_Screw_Cylinder040.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder039" geometry={nodes.Rusty_Screw_Cylinder039.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder038" geometry={nodes.Rusty_Screw_Cylinder038.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder037" geometry={nodes.Rusty_Screw_Cylinder037.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder036" geometry={nodes.Rusty_Screw_Cylinder036.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder035" geometry={nodes.Rusty_Screw_Cylinder035.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder034" geometry={nodes.Rusty_Screw_Cylinder034.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder033" geometry={nodes.Rusty_Screw_Cylinder033.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.048]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder026" geometry={nodes.Rusty_Screw_Cylinder026.geometry} material={materials['Material.019']} position={[-0.025, 1.703, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder025" geometry={nodes.Rusty_Screw_Cylinder025.geometry} material={materials['Material.019']} position={[-0.025, 1.528, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder024" geometry={nodes.Rusty_Screw_Cylinder024.geometry} material={materials['Material.019']} position={[-0.025, 1.346, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder023" geometry={nodes.Rusty_Screw_Cylinder023.geometry} material={materials['Material.019']} position={[-0.025, 1.172, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder022" geometry={nodes.Rusty_Screw_Cylinder022.geometry} material={materials['Material.019']} position={[-0.025, 0.993, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder021" geometry={nodes.Rusty_Screw_Cylinder021.geometry} material={materials['Material.019']} position={[-0.025, 0.819, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder020" geometry={nodes.Rusty_Screw_Cylinder020.geometry} material={materials['Material.019']} position={[-0.025, 0.637, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder019" geometry={nodes.Rusty_Screw_Cylinder019.geometry} material={materials['Material.019']} position={[-0.025, 0.463, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder018" geometry={nodes.Rusty_Screw_Cylinder018.geometry} material={materials['Material.019']} position={[-0.025, 0.284, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder017" geometry={nodes.Rusty_Screw_Cylinder017.geometry} material={materials['Material.019']} position={[-0.025, 0.11, 0.022]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder010" geometry={nodes.Rusty_Screw_Cylinder010.geometry} material={materials['Material.019']} position={[-0.025, 1.703, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder009" geometry={nodes.Rusty_Screw_Cylinder009.geometry} material={materials['Material.019']} position={[-0.025, 1.528, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder008" geometry={nodes.Rusty_Screw_Cylinder008.geometry} material={materials['Material.019']} position={[-0.025, 1.346, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder007" geometry={nodes.Rusty_Screw_Cylinder007.geometry} material={materials['Material.019']} position={[-0.025, 1.172, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder006" geometry={nodes.Rusty_Screw_Cylinder006.geometry} material={materials['Material.019']} position={[-0.025, 0.993, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder005" geometry={nodes.Rusty_Screw_Cylinder005.geometry} material={materials['Material.019']} position={[-0.025, 0.637, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder004" geometry={nodes.Rusty_Screw_Cylinder004.geometry} material={materials['Material.019']} position={[-0.025, 0.819, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder003" geometry={nodes.Rusty_Screw_Cylinder003.geometry} material={materials['Material.019']} position={[-0.025, 0.463, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder002" geometry={nodes.Rusty_Screw_Cylinder002.geometry} material={materials['Material.019']} position={[-0.025, 0.284, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Rusty_Screw_Cylinder001" geometry={nodes.Rusty_Screw_Cylinder001.geometry} material={materials['Material.019']} position={[-0.025, 0.11, -1.82]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[0.004, 0.004, 0.008]} />
        <mesh name="Infill008" geometry={nodes.Infill008.geometry} material={materials['Material.001']} position={[-0.022, 0.886, -1.862]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.638]} />
        <mesh name="Infill006" geometry={nodes.Infill006.geometry} material={materials['Material.001']} position={[0.007, 0.886, -1.845]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.638]} />
        <mesh name="Infill004" geometry={nodes.Infill004.geometry} material={materials['Material.001']} position={[0.007, 0.885, 0.022]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.637]} />
        <mesh name="Infill003" geometry={nodes.Infill003.geometry} material={materials['Material.001']} position={[0.007, 0.885, 0.047]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.637]} />
        <mesh name="Infill001" geometry={nodes.Infill001.geometry} material={materials['Material.001']} position={[0.007, 0.886, -1.82]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.638]} />
        <group name="aEnd_Cap001" position={[-0.024, 1.793, 0.033]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap001" geometry={nodes.End_Cap001.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap001_1" geometry={nodes.End_Cap001_1.geometry} material={materials['Material.002']} />
        </group>
        <group name="aEnd_Cap" position={[-0.8, -1.054, -1.8]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh name="End_Cap" geometry={nodes.End_Cap.geometry} material={materials['Material.001']} />
          <mesh name="End_Cap_1" geometry={nodes.End_Cap_1.geometry} material={materials['Material.002']} />
        </group>
        <mesh name="C-KESP2W6565001" geometry={nodes['C-KESP2W6565001'].geometry} material={materials['Material.001']} position={[-0.016, 0.882, 0.035]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.637]} />
        <mesh name="C-KESP2W6565" geometry={nodes['C-KESP2W6565'].geometry} material={materials['Material.001']} position={[-0.016, 0.883, -1.833]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.638]} />
        <mesh name="Spacer1" geometry={nodes.Spacer1.geometry} material={materials['Material.001']} position={[-0.8, -0.04, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer2" geometry={nodes.Spacer2.geometry} material={materials['Material.001']} position={[-0.8, -0.04, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.004']} position={[-0.022, 0.206, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer003" geometry={nodes.Spacer003.geometry} material={materials['Material.001']} position={[-0.8, 0.029, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer004" geometry={nodes.Spacer004.geometry} material={materials['Material.001']} position={[-0.8, 0.029, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.004']} position={[-0.022, 0.269, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer005" geometry={nodes.Spacer005.geometry} material={materials['Material.001']} position={[-0.8, 0.098, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer006" geometry={nodes.Spacer006.geometry} material={materials['Material.001']} position={[-0.8, 0.098, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.004']} position={[-0.022, 0.331, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer007" geometry={nodes.Spacer007.geometry} material={materials['Material.001']} position={[-0.8, 0.167, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer008" geometry={nodes.Spacer008.geometry} material={materials['Material.001']} position={[-0.8, 0.167, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.004']} position={[-0.022, 0.394, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer009" geometry={nodes.Spacer009.geometry} material={materials['Material.001']} position={[-0.8, 0.235, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer010" geometry={nodes.Spacer010.geometry} material={materials['Material.001']} position={[-0.8, 0.235, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.004']} position={[-0.022, 0.456, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer011" geometry={nodes.Spacer011.geometry} material={materials['Material.001']} position={[-0.8, 0.304, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer012" geometry={nodes.Spacer012.geometry} material={materials['Material.001']} position={[-0.8, 0.304, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.004']} position={[-0.022, 0.518, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer013" geometry={nodes.Spacer013.geometry} material={materials['Material.001']} position={[-0.8, 0.373, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer014" geometry={nodes.Spacer014.geometry} material={materials['Material.001']} position={[-0.8, 0.373, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.004']} position={[-0.022, 0.581, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer015" geometry={nodes.Spacer015.geometry} material={materials['Material.001']} position={[-0.8, 0.442, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer016" geometry={nodes.Spacer016.geometry} material={materials['Material.001']} position={[-0.8, 0.442, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.004']} position={[-0.022, 0.643, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer017" geometry={nodes.Spacer017.geometry} material={materials['Material.001']} position={[-0.8, 0.51, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer018" geometry={nodes.Spacer018.geometry} material={materials['Material.001']} position={[-0.8, 0.51, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.004']} position={[-0.022, 0.706, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer019" geometry={nodes.Spacer019.geometry} material={materials['Material.001']} position={[-0.8, 0.579, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer020" geometry={nodes.Spacer020.geometry} material={materials['Material.001']} position={[-0.8, 0.579, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.004']} position={[-0.022, 0.768, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer021" geometry={nodes.Spacer021.geometry} material={materials['Material.001']} position={[-0.8, 0.648, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer022" geometry={nodes.Spacer022.geometry} material={materials['Material.001']} position={[-0.8, 0.648, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1011" geometry={nodes.Slat_1011.geometry} material={materials['Material.004']} position={[-0.022, 0.83, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer023" geometry={nodes.Spacer023.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer024" geometry={nodes.Spacer024.geometry} material={materials['Material.001']} position={[-0.8, 0.717, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1012" geometry={nodes.Slat_1012.geometry} material={materials['Material.004']} position={[-0.022, 0.893, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer025" geometry={nodes.Spacer025.geometry} material={materials['Material.001']} position={[-0.8, 0.785, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer026" geometry={nodes.Spacer026.geometry} material={materials['Material.001']} position={[-0.8, 0.785, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1013" geometry={nodes.Slat_1013.geometry} material={materials['Material.004']} position={[-0.022, 0.955, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer027" geometry={nodes.Spacer027.geometry} material={materials['Material.001']} position={[-0.8, 0.854, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer028" geometry={nodes.Spacer028.geometry} material={materials['Material.001']} position={[-0.8, 0.854, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1014" geometry={nodes.Slat_1014.geometry} material={materials['Material.004']} position={[-0.022, 1.018, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer029" geometry={nodes.Spacer029.geometry} material={materials['Material.001']} position={[-0.8, 0.923, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer030" geometry={nodes.Spacer030.geometry} material={materials['Material.001']} position={[-0.8, 0.923, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1015" geometry={nodes.Slat_1015.geometry} material={materials['Material.004']} position={[-0.022, 1.08, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer031" geometry={nodes.Spacer031.geometry} material={materials['Material.001']} position={[-0.8, 0.992, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer032" geometry={nodes.Spacer032.geometry} material={materials['Material.001']} position={[-0.8, 0.992, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1016" geometry={nodes.Slat_1016.geometry} material={materials['Material.004']} position={[-0.022, 1.142, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer033" geometry={nodes.Spacer033.geometry} material={materials['Material.001']} position={[-0.8, 1.06, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer034" geometry={nodes.Spacer034.geometry} material={materials['Material.001']} position={[-0.8, 1.06, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.004']} position={[-0.022, 1.204, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer035" geometry={nodes.Spacer035.geometry} material={materials['Material.001']} position={[-0.8, 1.129, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer036" geometry={nodes.Spacer036.geometry} material={materials['Material.001']} position={[-0.8, 1.129, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.004']} position={[-0.022, 1.266, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer037" geometry={nodes.Spacer037.geometry} material={materials['Material.001']} position={[-0.8, 1.198, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer038" geometry={nodes.Spacer038.geometry} material={materials['Material.001']} position={[-0.8, 1.198, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.004']} position={[-0.022, 1.328, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer039" geometry={nodes.Spacer039.geometry} material={materials['Material.001']} position={[-0.8, 1.267, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer040" geometry={nodes.Spacer040.geometry} material={materials['Material.001']} position={[-0.8, 1.267, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.004']} position={[-0.022, 1.389, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer041" geometry={nodes.Spacer041.geometry} material={materials['Material.001']} position={[-0.8, 1.335, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer042" geometry={nodes.Spacer042.geometry} material={materials['Material.001']} position={[-0.8, 1.335, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.004']} position={[-0.022, 1.45, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer043" geometry={nodes.Spacer043.geometry} material={materials['Material.001']} position={[-0.8, 1.404, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer044" geometry={nodes.Spacer044.geometry} material={materials['Material.001']} position={[-0.8, 1.404, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.004']} position={[-0.022, 1.512, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer045" geometry={nodes.Spacer045.geometry} material={materials['Material.001']} position={[-0.8, 1.473, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer046" geometry={nodes.Spacer046.geometry} material={materials['Material.001']} position={[-0.8, 1.473, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.004']} position={[-0.022, 1.573, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer047" geometry={nodes.Spacer047.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer048" geometry={nodes.Spacer048.geometry} material={materials['Material.001']} position={[-0.8, 1.542, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.004']} position={[-0.022, 1.634, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer049" geometry={nodes.Spacer049.geometry} material={materials['Material.001']} position={[-0.8, 1.61, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer050" geometry={nodes.Spacer050.geometry} material={materials['Material.001']} position={[-0.8, 1.61, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.004']} position={[-0.022, 1.695, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer051" geometry={nodes.Spacer051.geometry} material={materials['Material.001']} position={[-0.8, 1.679, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer052" geometry={nodes.Spacer052.geometry} material={materials['Material.001']} position={[-0.8, 1.679, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1026" geometry={nodes.Slat_1026.geometry} material={materials['Material.004']} position={[-0.022, 1.756, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer053" geometry={nodes.Spacer053.geometry} material={materials['Material.001']} position={[-0.8, 1.748, 0.067]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer054" geometry={nodes.Spacer054.geometry} material={materials['Material.001']} position={[-0.8, 1.748, 0.068]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer085" geometry={nodes.Spacer085.geometry} material={materials['Material.001']} position={[-0.8, -0.04, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer086" geometry={nodes.Spacer086.geometry} material={materials['Material.001']} position={[-0.8, -0.04, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1042" geometry={nodes.Slat_1042.geometry} material={materials['Material.004']} position={[-0.022, 0.2, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer087" geometry={nodes.Spacer087.geometry} material={materials['Material.001']} position={[-0.8, 0.029, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer088" geometry={nodes.Spacer088.geometry} material={materials['Material.001']} position={[-0.8, 0.029, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1043" geometry={nodes.Slat_1043.geometry} material={materials['Material.004']} position={[-0.022, 0.262, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer089" geometry={nodes.Spacer089.geometry} material={materials['Material.001']} position={[-0.8, 0.098, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer090" geometry={nodes.Spacer090.geometry} material={materials['Material.001']} position={[-0.8, 0.098, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1044" geometry={nodes.Slat_1044.geometry} material={materials['Material.004']} position={[-0.022, 0.325, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer091" geometry={nodes.Spacer091.geometry} material={materials['Material.001']} position={[-0.8, 0.167, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer092" geometry={nodes.Spacer092.geometry} material={materials['Material.001']} position={[-0.8, 0.167, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1045" geometry={nodes.Slat_1045.geometry} material={materials['Material.004']} position={[-0.022, 0.387, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer093" geometry={nodes.Spacer093.geometry} material={materials['Material.001']} position={[-0.8, 0.235, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer094" geometry={nodes.Spacer094.geometry} material={materials['Material.001']} position={[-0.8, 0.235, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1046" geometry={nodes.Slat_1046.geometry} material={materials['Material.004']} position={[-0.022, 0.45, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer095" geometry={nodes.Spacer095.geometry} material={materials['Material.001']} position={[-0.8, 0.304, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer096" geometry={nodes.Spacer096.geometry} material={materials['Material.001']} position={[-0.8, 0.304, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1047" geometry={nodes.Slat_1047.geometry} material={materials['Material.004']} position={[-0.022, 0.512, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer097" geometry={nodes.Spacer097.geometry} material={materials['Material.001']} position={[-0.8, 0.373, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer098" geometry={nodes.Spacer098.geometry} material={materials['Material.001']} position={[-0.8, 0.373, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1048" geometry={nodes.Slat_1048.geometry} material={materials['Material.004']} position={[-0.022, 0.574, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer099" geometry={nodes.Spacer099.geometry} material={materials['Material.001']} position={[-0.8, 0.442, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer100" geometry={nodes.Spacer100.geometry} material={materials['Material.001']} position={[-0.8, 0.442, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1049" geometry={nodes.Slat_1049.geometry} material={materials['Material.004']} position={[-0.022, 0.637, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer101" geometry={nodes.Spacer101.geometry} material={materials['Material.001']} position={[-0.8, 0.51, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer102" geometry={nodes.Spacer102.geometry} material={materials['Material.001']} position={[-0.8, 0.51, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1050" geometry={nodes.Slat_1050.geometry} material={materials['Material.004']} position={[-0.022, 0.699, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer103" geometry={nodes.Spacer103.geometry} material={materials['Material.001']} position={[-0.8, 0.579, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer104" geometry={nodes.Spacer104.geometry} material={materials['Material.001']} position={[-0.8, 0.579, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1051" geometry={nodes.Slat_1051.geometry} material={materials['Material.004']} position={[-0.022, 0.762, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer105" geometry={nodes.Spacer105.geometry} material={materials['Material.001']} position={[-0.8, 0.648, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer106" geometry={nodes.Spacer106.geometry} material={materials['Material.001']} position={[-0.8, 0.648, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1052" geometry={nodes.Slat_1052.geometry} material={materials['Material.004']} position={[-0.022, 0.824, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer107" geometry={nodes.Spacer107.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer108" geometry={nodes.Spacer108.geometry} material={materials['Material.001']} position={[-0.8, 0.717, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1053" geometry={nodes.Slat_1053.geometry} material={materials['Material.004']} position={[-0.022, 0.886, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer109" geometry={nodes.Spacer109.geometry} material={materials['Material.001']} position={[-0.8, 0.785, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer110" geometry={nodes.Spacer110.geometry} material={materials['Material.001']} position={[-0.8, 0.785, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1054" geometry={nodes.Slat_1054.geometry} material={materials['Material.004']} position={[-0.022, 0.949, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer111" geometry={nodes.Spacer111.geometry} material={materials['Material.001']} position={[-0.8, 0.854, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer112" geometry={nodes.Spacer112.geometry} material={materials['Material.001']} position={[-0.8, 0.854, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1055" geometry={nodes.Slat_1055.geometry} material={materials['Material.004']} position={[-0.022, 1.011, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer113" geometry={nodes.Spacer113.geometry} material={materials['Material.001']} position={[-0.8, 0.923, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer114" geometry={nodes.Spacer114.geometry} material={materials['Material.001']} position={[-0.8, 0.923, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1056" geometry={nodes.Slat_1056.geometry} material={materials['Material.004']} position={[-0.022, 1.074, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer115" geometry={nodes.Spacer115.geometry} material={materials['Material.001']} position={[-0.8, 0.992, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer116" geometry={nodes.Spacer116.geometry} material={materials['Material.001']} position={[-0.8, 0.992, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1057" geometry={nodes.Slat_1057.geometry} material={materials['Material.004']} position={[-0.022, 1.136, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer117" geometry={nodes.Spacer117.geometry} material={materials['Material.001']} position={[-0.8, 1.06, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer118" geometry={nodes.Spacer118.geometry} material={materials['Material.001']} position={[-0.8, 1.06, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1058" geometry={nodes.Slat_1058.geometry} material={materials['Material.004']} position={[-0.022, 1.198, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer119" geometry={nodes.Spacer119.geometry} material={materials['Material.001']} position={[-0.8, 1.129, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer120" geometry={nodes.Spacer120.geometry} material={materials['Material.001']} position={[-0.8, 1.129, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1059" geometry={nodes.Slat_1059.geometry} material={materials['Material.004']} position={[-0.022, 1.261, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer121" geometry={nodes.Spacer121.geometry} material={materials['Material.001']} position={[-0.8, 1.198, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer122" geometry={nodes.Spacer122.geometry} material={materials['Material.001']} position={[-0.8, 1.198, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1060" geometry={nodes.Slat_1060.geometry} material={materials['Material.004']} position={[-0.022, 1.323, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer123" geometry={nodes.Spacer123.geometry} material={materials['Material.001']} position={[-0.8, 1.267, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer124" geometry={nodes.Spacer124.geometry} material={materials['Material.001']} position={[-0.8, 1.267, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1061" geometry={nodes.Slat_1061.geometry} material={materials['Material.004']} position={[-0.022, 1.386, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer125" geometry={nodes.Spacer125.geometry} material={materials['Material.001']} position={[-0.8, 1.335, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer126" geometry={nodes.Spacer126.geometry} material={materials['Material.001']} position={[-0.8, 1.335, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1062" geometry={nodes.Slat_1062.geometry} material={materials['Material.004']} position={[-0.022, 1.448, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer127" geometry={nodes.Spacer127.geometry} material={materials['Material.001']} position={[-0.8, 1.404, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer128" geometry={nodes.Spacer128.geometry} material={materials['Material.001']} position={[-0.8, 1.404, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1063" geometry={nodes.Slat_1063.geometry} material={materials['Material.004']} position={[-0.022, 1.51, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer129" geometry={nodes.Spacer129.geometry} material={materials['Material.001']} position={[-0.8, 1.473, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer130" geometry={nodes.Spacer130.geometry} material={materials['Material.001']} position={[-0.8, 1.473, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1064" geometry={nodes.Slat_1064.geometry} material={materials['Material.004']} position={[-0.022, 1.573, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer131" geometry={nodes.Spacer131.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer132" geometry={nodes.Spacer132.geometry} material={materials['Material.001']} position={[-0.8, 1.542, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1065" geometry={nodes.Slat_1065.geometry} material={materials['Material.004']} position={[-0.022, 1.634, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer133" geometry={nodes.Spacer133.geometry} material={materials['Material.001']} position={[-0.8, 1.61, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer134" geometry={nodes.Spacer134.geometry} material={materials['Material.001']} position={[-0.8, 1.61, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1066" geometry={nodes.Slat_1066.geometry} material={materials['Material.004']} position={[-0.022, 1.695, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer135" geometry={nodes.Spacer135.geometry} material={materials['Material.001']} position={[-0.8, 1.679, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer136" geometry={nodes.Spacer136.geometry} material={materials['Material.001']} position={[-0.8, 1.679, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1067" geometry={nodes.Slat_1067.geometry} material={materials['Material.004']} position={[-0.022, 1.756, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Spacer137" geometry={nodes.Spacer137.geometry} material={materials['Material.001']} position={[-0.8, 1.748, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Spacer138" geometry={nodes.Spacer138.geometry} material={materials['Material.001']} position={[-0.8, 1.748, -1.8]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.222]} />
        <mesh name="Slat_1027" geometry={nodes.Slat_1027.geometry} material={materials['Material.003']} position={[-0.022, 0.144, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1028" geometry={nodes.Slat_1028.geometry} material={materials['Material.003']} position={[-0.022, 0.019, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1029" geometry={nodes.Slat_1029.geometry} material={materials['Material.003']} position={[-0.022, 0.082, 0.968]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1030" geometry={nodes.Slat_1030.geometry} material={materials['Material.005']} position={[-0.022, 0.139, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1031" geometry={nodes.Slat_1031.geometry} material={materials['Material.005']} position={[-0.022, 0.076, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1032" geometry={nodes.Slat_1032.geometry} material={materials['Material.005']} position={[-0.022, 0.014, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Infill009" geometry={nodes.Infill009.geometry} material={materials['Material.006']} position={[-0.022, 0.886, 1.931]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="Infill010" geometry={nodes.Infill010.geometry} material={materials['Material.006']} position={[0.008, 0.886, 1.914]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="Infill011" geometry={nodes.Infill011.geometry} material={materials['Material.006']} position={[0.008, 0.885, 1.889]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="C-KESP2W6565003" geometry={nodes['C-KESP2W6565003'].geometry} material={materials['Material.006']} position={[-0.016, 0.883, 1.901]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <group name="aEnd_Cap003" position={[-0.024, 1.794, 1.891]} rotation={[-1.585, 0, -3.138]} scale={-1}>
          <mesh name="End_Cap003" geometry={nodes.End_Cap003.geometry} material={materials['Material.006']} />
          <mesh name="End_Cap003_1" geometry={nodes.End_Cap003_1.geometry} material={materials['Material.007']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/fencefinal/model2500.glb')
