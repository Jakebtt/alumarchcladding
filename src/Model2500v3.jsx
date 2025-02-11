import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/model2500v3.glb');

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
          "Material.005",
          "Material.006",
          "Material.008",
          "Material.009",
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
        <mesh name="Slat_1042" geometry={nodes.Slat_1042.geometry} material={materials['Material.004']} position={[-0.022, 0.227, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1043" geometry={nodes.Slat_1043.geometry} material={materials['Material.004']} position={[-0.022, 0.289, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1044" geometry={nodes.Slat_1044.geometry} material={materials['Material.004']} position={[-0.022, 0.35, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1045" geometry={nodes.Slat_1045.geometry} material={materials['Material.004']} position={[-0.022, 0.411, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1046" geometry={nodes.Slat_1046.geometry} material={materials['Material.004']} position={[-0.022, 0.472, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1047" geometry={nodes.Slat_1047.geometry} material={materials['Material.004']} position={[-0.022, 0.533, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1048" geometry={nodes.Slat_1048.geometry} material={materials['Material.004']} position={[-0.022, 0.594, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1049" geometry={nodes.Slat_1049.geometry} material={materials['Material.004']} position={[-0.022, 0.655, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1050" geometry={nodes.Slat_1050.geometry} material={materials['Material.004']} position={[-0.022, 0.717, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1051" geometry={nodes.Slat_1051.geometry} material={materials['Material.004']} position={[-0.022, 0.778, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1052" geometry={nodes.Slat_1052.geometry} material={materials['Material.004']} position={[-0.022, 0.839, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1053" geometry={nodes.Slat_1053.geometry} material={materials['Material.004']} position={[-0.022, 0.9, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1054" geometry={nodes.Slat_1054.geometry} material={materials['Material.004']} position={[-0.022, 0.961, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1055" geometry={nodes.Slat_1055.geometry} material={materials['Material.004']} position={[-0.022, 1.022, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1056" geometry={nodes.Slat_1056.geometry} material={materials['Material.004']} position={[-0.022, 1.084, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1057" geometry={nodes.Slat_1057.geometry} material={materials['Material.004']} position={[-0.022, 1.145, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1058" geometry={nodes.Slat_1058.geometry} material={materials['Material.004']} position={[-0.022, 1.206, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1059" geometry={nodes.Slat_1059.geometry} material={materials['Material.004']} position={[-0.022, 1.267, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1060" geometry={nodes.Slat_1060.geometry} material={materials['Material.004']} position={[-0.022, 1.328, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1061" geometry={nodes.Slat_1061.geometry} material={materials['Material.004']} position={[-0.022, 1.389, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1062" geometry={nodes.Slat_1062.geometry} material={materials['Material.004']} position={[-0.022, 1.45, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1063" geometry={nodes.Slat_1063.geometry} material={materials['Material.004']} position={[-0.022, 1.512, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1064" geometry={nodes.Slat_1064.geometry} material={materials['Material.004']} position={[-0.022, 1.573, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1065" geometry={nodes.Slat_1065.geometry} material={materials['Material.004']} position={[-0.022, 1.634, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1066" geometry={nodes.Slat_1066.geometry} material={materials['Material.004']} position={[-0.022, 1.695, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1067" geometry={nodes.Slat_1067.geometry} material={materials['Material.004']} position={[-0.022, 1.756, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1030" geometry={nodes.Slat_1030.geometry} material={materials['Material.005']} position={[-0.022, 0.166, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1031" geometry={nodes.Slat_1031.geometry} material={materials['Material.005']} position={[-0.022, 0.105, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1032" geometry={nodes.Slat_1032.geometry} material={materials['Material.005']} position={[-0.022, 0.044, -0.899]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Infill009" geometry={nodes.Infill009.geometry} material={materials['Material.006']} position={[-0.022, 0.886, 1.931]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="Infill010" geometry={nodes.Infill010.geometry} material={materials['Material.006']} position={[0.008, 0.886, 1.914]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="Infill011" geometry={nodes.Infill011.geometry} material={materials['Material.006']} position={[0.008, 0.885, 1.889]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <mesh name="C-KESP2W6565003" geometry={nodes['C-KESP2W6565003'].geometry} material={materials['Material.006']} position={[-0.016, 0.883, 1.901]} rotation={[-1.585, 0, -3.138]} scale={[-1, -1, -0.638]} />
        <group name="aEnd_Cap003" position={[-0.024, 1.794, 1.891]} rotation={[-1.585, 0, -3.138]} scale={-1}>
          <mesh name="End_Cap003" geometry={nodes.End_Cap003.geometry} material={materials['Material.006']} />
          <mesh name="End_Cap003_1" geometry={nodes.End_Cap003_1.geometry} material={materials['Material.007']} />
        </group>
        <mesh name="Slat_1001" geometry={nodes.Slat_1001.geometry} material={materials['Material.008']} position={[-0.022, 1.756, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1002" geometry={nodes.Slat_1002.geometry} material={materials['Material.008']} position={[-0.022, 1.695, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1003" geometry={nodes.Slat_1003.geometry} material={materials['Material.008']} position={[-0.022, 1.634, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1004" geometry={nodes.Slat_1004.geometry} material={materials['Material.008']} position={[-0.022, 1.573, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1005" geometry={nodes.Slat_1005.geometry} material={materials['Material.008']} position={[-0.022, 1.512, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1006" geometry={nodes.Slat_1006.geometry} material={materials['Material.008']} position={[-0.022, 1.45, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1007" geometry={nodes.Slat_1007.geometry} material={materials['Material.008']} position={[-0.022, 1.389, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1008" geometry={nodes.Slat_1008.geometry} material={materials['Material.008']} position={[-0.022, 1.328, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1009" geometry={nodes.Slat_1009.geometry} material={materials['Material.008']} position={[-0.022, 1.267, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1010" geometry={nodes.Slat_1010.geometry} material={materials['Material.008']} position={[-0.022, 1.206, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1011" geometry={nodes.Slat_1011.geometry} material={materials['Material.008']} position={[-0.022, 1.145, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1012" geometry={nodes.Slat_1012.geometry} material={materials['Material.008']} position={[-0.022, 1.084, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1013" geometry={nodes.Slat_1013.geometry} material={materials['Material.008']} position={[-0.022, 1.022, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1014" geometry={nodes.Slat_1014.geometry} material={materials['Material.008']} position={[-0.022, 0.961, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1015" geometry={nodes.Slat_1015.geometry} material={materials['Material.008']} position={[-0.022, 0.9, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1016" geometry={nodes.Slat_1016.geometry} material={materials['Material.008']} position={[-0.022, 0.839, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1017" geometry={nodes.Slat_1017.geometry} material={materials['Material.008']} position={[-0.022, 0.778, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1018" geometry={nodes.Slat_1018.geometry} material={materials['Material.008']} position={[-0.022, 0.717, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1019" geometry={nodes.Slat_1019.geometry} material={materials['Material.008']} position={[-0.022, 0.655, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1020" geometry={nodes.Slat_1020.geometry} material={materials['Material.008']} position={[-0.022, 0.594, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1021" geometry={nodes.Slat_1021.geometry} material={materials['Material.008']} position={[-0.022, 0.533, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1022" geometry={nodes.Slat_1022.geometry} material={materials['Material.008']} position={[-0.022, 0.472, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1023" geometry={nodes.Slat_1023.geometry} material={materials['Material.008']} position={[-0.022, 0.411, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1024" geometry={nodes.Slat_1024.geometry} material={materials['Material.008']} position={[-0.022, 0.35, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1025" geometry={nodes.Slat_1025.geometry} material={materials['Material.008']} position={[-0.022, 0.289, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1026" geometry={nodes.Slat_1026.geometry} material={materials['Material.008']} position={[-0.022, 0.227, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1027" geometry={nodes.Slat_1027.geometry} material={materials['Material.009']} position={[-0.022, 0.044, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1028" geometry={nodes.Slat_1028.geometry} material={materials['Material.009']} position={[-0.022, 0.105, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
        <mesh name="Slat_1029" geometry={nodes.Slat_1029.geometry} material={materials['Material.009']} position={[-0.022, 0.166, 0.971]} rotation={[Math.PI / 2, 0, 0]} scale={[1, 1, 0.416]} />
      </group>
    </group>
  )
}

useGLTF.preload('/alumarchcladding/model2500v3.glb')
