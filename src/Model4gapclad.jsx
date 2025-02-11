import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader, RepeatWrapping } from 'three';

export function Model({ textureUrl }) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/alumarchcladding/Model4gapclad.glb');

  useEffect(() => {
    if (materials && textureUrl) {
      const loader = new TextureLoader();
      loader.load(textureUrl, (texture) => {
        texture.wrapS = RepeatWrapping;
        texture.wrapT = RepeatWrapping;

        const materialNames = [
          'Material.121',
'Material.001',
'Material.118',
'Material.119',
'Material.116',
'Material.117',
'Material.114',
'Material.115',
'Material.112',
'Material.113',
'Material.110',
'Material.111',
'Material.108',
'Material.109',
'Material.106',
'Material.107',
'Material.104',
'Material.105',
'Material.102',
'Material.103',
'Material.094',
'Material.095',
'Material.092',
'Material.093',
'Material.090',
'Material.091',
'Material.088',
'Material.089',
'Material.086',
'Material.087',
'Material.084',
'Material.085',
'Material.082',
'Material.083',
'Material.080',
'Material.081',
'Material.078',
'Material.079',
'Material.076',
'Material.077',
'Material.074',
'Material.075',
'Material.072',
'Material.073',
'Material.070',
'Material.071',
'Material.068',
'Material.069',
'Material.066',
'Material.067',
'Material.064',
'Material.065',
'Material.062',
'Material.063',
'Material.060',
'Material.061',
'Material.054',
'Material.055',
'Material.051',
'Material.052',
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
      <mesh geometry={nodes['C-KEDSTRADJ_(Starter)003'].geometry} material={materials['Material.121']} position={[1.754, 3.279, 0.215]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFTTLM_(Top)'].geometry} material={materials['Material.001']} position={[-1.376, 0.115, 0.218]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KECFBF_(Bottom_Base)'].geometry} material={materials['Material.001']} position={[-1.377, 0.114, 0.213]} rotation={[-Math.PI, 0, -1.571]} scale={[1, 0.555, 1]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)312'].geometry} material={materials['Material.clips.033']} position={[-0.541, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)311'].geometry} material={materials['Material.clips.033']} position={[-0.037, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)310'].geometry} material={materials['Material.clips.033']} position={[-1.043, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)309'].geometry} material={materials['Material.clips.033']} position={[0.942, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)308'].geometry} material={materials['Material.clips.033']} position={[1.446, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)307'].geometry} material={materials['Material.clips.033']} position={[0.44, 0.566, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)306'].geometry} material={materials['Material.clips.032']} position={[0.44, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)305'].geometry} material={materials['Material.clips.032']} position={[1.446, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)304'].geometry} material={materials['Material.clips.032']} position={[0.942, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)303'].geometry} material={materials['Material.clips.032']} position={[-1.043, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)302'].geometry} material={materials['Material.clips.032']} position={[-0.037, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)301'].geometry} material={materials['Material.clips.032']} position={[-0.541, 0.459, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)300'].geometry} material={materials['Material.clips.031']} position={[-0.541, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)299'].geometry} material={materials['Material.clips.031']} position={[-0.037, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)298'].geometry} material={materials['Material.clips.031']} position={[-1.043, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)297'].geometry} material={materials['Material.clips.031']} position={[0.942, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)296'].geometry} material={materials['Material.clips.031']} position={[1.446, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)295'].geometry} material={materials['Material.clips.031']} position={[0.44, 0.244, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)294'].geometry} material={materials['Material.clips.030']} position={[0.44, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)293'].geometry} material={materials['Material.clips.030']} position={[1.446, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)292'].geometry} material={materials['Material.clips.030']} position={[0.942, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)291'].geometry} material={materials['Material.clips.030']} position={[-1.043, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)290'].geometry} material={materials['Material.clips.030']} position={[-0.037, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)289'].geometry} material={materials['Material.clips.030']} position={[-0.541, 0.351, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)264'].geometry} material={materials['Material.clips.025']} position={[-0.541, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)263'].geometry} material={materials['Material.clips.025']} position={[-0.037, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)262'].geometry} material={materials['Material.clips.025']} position={[-1.043, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)261'].geometry} material={materials['Material.clips.025']} position={[0.942, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)260'].geometry} material={materials['Material.clips.025']} position={[1.446, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)259'].geometry} material={materials['Material.clips.025']} position={[0.44, 0.995, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)258'].geometry} material={materials['Material.clips.024']} position={[0.44, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)257'].geometry} material={materials['Material.clips.024']} position={[1.446, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)256'].geometry} material={materials['Material.clips.024']} position={[0.942, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)255'].geometry} material={materials['Material.clips.024']} position={[-1.043, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)254'].geometry} material={materials['Material.clips.024']} position={[-0.037, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)253'].geometry} material={materials['Material.clips.024']} position={[-0.541, 0.888, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)252'].geometry} material={materials['Material.clips.023']} position={[-0.541, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)251'].geometry} material={materials['Material.clips.023']} position={[-0.037, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)250'].geometry} material={materials['Material.clips.023']} position={[-1.043, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)249'].geometry} material={materials['Material.clips.023']} position={[0.942, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)248'].geometry} material={materials['Material.clips.023']} position={[1.446, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)247'].geometry} material={materials['Material.clips.023']} position={[0.44, 0.673, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)246'].geometry} material={materials['Material.clips.022']} position={[0.44, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)245'].geometry} material={materials['Material.clips.022']} position={[1.446, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)244'].geometry} material={materials['Material.clips.022']} position={[0.942, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)243'].geometry} material={materials['Material.clips.022']} position={[-1.043, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)242'].geometry} material={materials['Material.clips.022']} position={[-0.037, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)241'].geometry} material={materials['Material.clips.022']} position={[-0.541, 0.78, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)240'].geometry} material={materials['Material.clips.021']} position={[-0.541, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)239'].geometry} material={materials['Material.clips.021']} position={[-0.037, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)238'].geometry} material={materials['Material.clips.021']} position={[-1.043, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)237'].geometry} material={materials['Material.clips.021']} position={[0.942, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)236'].geometry} material={materials['Material.clips.021']} position={[1.446, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)235'].geometry} material={materials['Material.clips.021']} position={[0.44, 1.209, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)227'].geometry} material={materials['Material.clips.020']} position={[0.44, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)226'].geometry} material={materials['Material.clips.020']} position={[1.446, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)225'].geometry} material={materials['Material.clips.020']} position={[0.942, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)224'].geometry} material={materials['Material.clips.020']} position={[-1.043, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)223'].geometry} material={materials['Material.clips.020']} position={[-0.037, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)222'].geometry} material={materials['Material.clips.020']} position={[-0.541, 1.101, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)221'].geometry} material={materials['Material.clips.019']} position={[-0.541, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)220'].geometry} material={materials['Material.clips.019']} position={[-0.037, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)219'].geometry} material={materials['Material.clips.019']} position={[-1.043, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)218'].geometry} material={materials['Material.clips.019']} position={[0.942, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)217'].geometry} material={materials['Material.clips.019']} position={[1.446, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)216'].geometry} material={materials['Material.clips.019']} position={[0.44, 1.316, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)215'].geometry} material={materials['Material.clips.018']} position={[0.44, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)214'].geometry} material={materials['Material.clips.018']} position={[1.446, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)213'].geometry} material={materials['Material.clips.018']} position={[0.942, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)212'].geometry} material={materials['Material.clips.018']} position={[-1.043, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)211'].geometry} material={materials['Material.clips.018']} position={[-0.037, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)210'].geometry} material={materials['Material.clips.018']} position={[-0.541, 1.423, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)209'].geometry} material={materials['Material.clips.017']} position={[-0.541, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)208'].geometry} material={materials['Material.clips.017']} position={[-0.037, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)207'].geometry} material={materials['Material.clips.017']} position={[-1.043, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)206'].geometry} material={materials['Material.clips.017']} position={[0.942, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)205'].geometry} material={materials['Material.clips.017']} position={[1.446, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)204'].geometry} material={materials['Material.clips.017']} position={[0.44, 2.28, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)203'].geometry} material={materials['Material.clips.016']} position={[0.44, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)202'].geometry} material={materials['Material.clips.016']} position={[1.446, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)201'].geometry} material={materials['Material.clips.016']} position={[0.942, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)200'].geometry} material={materials['Material.clips.016']} position={[-1.043, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)199'].geometry} material={materials['Material.clips.016']} position={[-0.037, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)198'].geometry} material={materials['Material.clips.016']} position={[-0.541, 2.173, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)197'].geometry} material={materials['Material.clips.015']} position={[-0.541, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)196'].geometry} material={materials['Material.clips.015']} position={[-0.037, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)195'].geometry} material={materials['Material.clips.015']} position={[-1.043, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)194'].geometry} material={materials['Material.clips.015']} position={[0.942, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)193'].geometry} material={materials['Material.clips.015']} position={[1.446, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)192'].geometry} material={materials['Material.clips.015']} position={[0.44, 1.958, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)191'].geometry} material={materials['Material.clips.014']} position={[0.44, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)190'].geometry} material={materials['Material.clips.014']} position={[1.446, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)189'].geometry} material={materials['Material.clips.014']} position={[0.942, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)188'].geometry} material={materials['Material.clips.014']} position={[-1.043, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)187'].geometry} material={materials['Material.clips.014']} position={[-0.037, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)186'].geometry} material={materials['Material.clips.014']} position={[-0.541, 2.066, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)185'].geometry} material={materials['Material.clips.013']} position={[-0.541, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)184'].geometry} material={materials['Material.clips.013']} position={[-0.037, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)183'].geometry} material={materials['Material.clips.013']} position={[-1.043, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)182'].geometry} material={materials['Material.clips.013']} position={[0.942, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)181'].geometry} material={materials['Material.clips.013']} position={[1.446, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)180'].geometry} material={materials['Material.clips.013']} position={[0.44, 1.638, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)179'].geometry} material={materials['Material.clips.012']} position={[0.44, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)178'].geometry} material={materials['Material.clips.012']} position={[1.446, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)177'].geometry} material={materials['Material.clips.012']} position={[0.942, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)176'].geometry} material={materials['Material.clips.012']} position={[-1.043, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)175'].geometry} material={materials['Material.clips.012']} position={[-0.037, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)174'].geometry} material={materials['Material.clips.012']} position={[-0.541, 1.53, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)173'].geometry} material={materials['Material.clips.011']} position={[-0.541, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)172'].geometry} material={materials['Material.clips.011']} position={[-0.037, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)171'].geometry} material={materials['Material.clips.011']} position={[-1.043, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)170'].geometry} material={materials['Material.clips.011']} position={[0.942, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)169'].geometry} material={materials['Material.clips.011']} position={[1.446, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)168'].geometry} material={materials['Material.clips.011']} position={[0.44, 1.745, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)167'].geometry} material={materials['Material.clips.010']} position={[0.44, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)166'].geometry} material={materials['Material.clips.010']} position={[1.446, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)165'].geometry} material={materials['Material.clips.010']} position={[0.942, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)164'].geometry} material={materials['Material.clips.010']} position={[-1.043, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)163'].geometry} material={materials['Material.clips.010']} position={[-0.037, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)162'].geometry} material={materials['Material.clips.010']} position={[-0.541, 1.852, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)161'].geometry} material={materials['Material.clips.009']} position={[-0.541, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)160'].geometry} material={materials['Material.clips.009']} position={[-0.037, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)159'].geometry} material={materials['Material.clips.009']} position={[-1.043, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)158'].geometry} material={materials['Material.clips.009']} position={[0.942, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)157'].geometry} material={materials['Material.clips.009']} position={[1.446, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)156'].geometry} material={materials['Material.clips.009']} position={[0.44, 2.709, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)155'].geometry} material={materials['Material.clips.008']} position={[0.44, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)154'].geometry} material={materials['Material.clips.008']} position={[1.446, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)153'].geometry} material={materials['Material.clips.008']} position={[0.942, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)152'].geometry} material={materials['Material.clips.008']} position={[-1.043, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)151'].geometry} material={materials['Material.clips.008']} position={[-0.037, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)150'].geometry} material={materials['Material.clips.008']} position={[-0.541, 2.602, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)149'].geometry} material={materials['Material.clips.007']} position={[-0.541, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)148'].geometry} material={materials['Material.clips.007']} position={[-0.037, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)147'].geometry} material={materials['Material.clips.007']} position={[-1.043, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)146'].geometry} material={materials['Material.clips.007']} position={[0.942, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)145'].geometry} material={materials['Material.clips.007']} position={[1.446, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)144'].geometry} material={materials['Material.clips.007']} position={[0.44, 2.387, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)143'].geometry} material={materials['Material.clips.006']} position={[0.44, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)142'].geometry} material={materials['Material.clips.006']} position={[1.446, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)141'].geometry} material={materials['Material.clips.006']} position={[0.942, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)140'].geometry} material={materials['Material.clips.006']} position={[-1.043, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)139'].geometry} material={materials['Material.clips.006']} position={[-0.037, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)138'].geometry} material={materials['Material.clips.006']} position={[-0.541, 2.494, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)137'].geometry} material={materials['Material.clips.005']} position={[-0.541, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)136'].geometry} material={materials['Material.clips.005']} position={[-0.037, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)135'].geometry} material={materials['Material.clips.005']} position={[-1.043, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)134'].geometry} material={materials['Material.clips.005']} position={[0.942, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)133'].geometry} material={materials['Material.clips.005']} position={[1.446, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)132'].geometry} material={materials['Material.clips.005']} position={[0.44, 2.923, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)131'].geometry} material={materials['Material.clips.004']} position={[0.44, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)130'].geometry} material={materials['Material.clips.004']} position={[1.446, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)129'].geometry} material={materials['Material.clips.004']} position={[0.942, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)128'].geometry} material={materials['Material.clips.004']} position={[-1.043, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)127'].geometry} material={materials['Material.clips.004']} position={[-0.037, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)126'].geometry} material={materials['Material.clips.004']} position={[-0.541, 2.815, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)125'].geometry} material={materials['Material.clips.003']} position={[-0.541, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)124'].geometry} material={materials['Material.clips.003']} position={[-0.037, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)123'].geometry} material={materials['Material.clips.003']} position={[-1.043, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)122'].geometry} material={materials['Material.clips.003']} position={[0.942, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)121'].geometry} material={materials['Material.clips.003']} position={[1.446, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)120'].geometry} material={materials['Material.clips.003']} position={[0.44, 3.03, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)119'].geometry} material={materials['Material.clips.002']} position={[0.44, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)118'].geometry} material={materials['Material.clips.002']} position={[1.446, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)117'].geometry} material={materials['Material.clips.002']} position={[0.942, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)116'].geometry} material={materials['Material.clips.002']} position={[-1.043, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)115'].geometry} material={materials['Material.clips.002']} position={[-0.037, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <mesh geometry={nodes['C-KAOCC45_(Cladding_Clip)110'].geometry} material={materials['Material.clips.002']} position={[-0.541, 3.137, 0.211]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[1, 1, 1.34]} />
      <group position={[0.189, 1.918, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150114'].geometry} material={materials['Material.118']} />
        <mesh geometry={nodes['C-KED150114_1'].geometry} material={materials['Material.metal.113']} />
        <mesh geometry={nodes['C-KED150114_2'].geometry} material={materials['Material.119']} />
        <mesh geometry={nodes['C-KED150114_3'].geometry} material={materials['Material.metal.114']} />
      </group>
      <group position={[0.189, 2.025, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150113'].geometry} material={materials['Material.116']} />
        <mesh geometry={nodes['C-KED150113_1'].geometry} material={materials['Material.metal.111']} />
        <mesh geometry={nodes['C-KED150113_2'].geometry} material={materials['Material.117']} />
        <mesh geometry={nodes['C-KED150113_3'].geometry} material={materials['Material.metal.112']} />
      </group>
      <group position={[0.189, 2.239, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150112'].geometry} material={materials['Material.114']} />
        <mesh geometry={nodes['C-KED150112_1'].geometry} material={materials['Material.metal.109']} />
        <mesh geometry={nodes['C-KED150112_2'].geometry} material={materials['Material.115']} />
        <mesh geometry={nodes['C-KED150112_3'].geometry} material={materials['Material.metal.110']} />
      </group>
      <group position={[0.189, 2.132, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150111'].geometry} material={materials['Material.112']} />
        <mesh geometry={nodes['C-KED150111_1'].geometry} material={materials['Material.metal.107']} />
        <mesh geometry={nodes['C-KED150111_2'].geometry} material={materials['Material.113']} />
        <mesh geometry={nodes['C-KED150111_3'].geometry} material={materials['Material.metal.108']} />
      </group>
      <group position={[0.189, 2.561, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150110'].geometry} material={materials['Material.110']} />
        <mesh geometry={nodes['C-KED150110_1'].geometry} material={materials['Material.metal.105']} />
        <mesh geometry={nodes['C-KED150110_2'].geometry} material={materials['Material.111']} />
        <mesh geometry={nodes['C-KED150110_3'].geometry} material={materials['Material.metal.106']} />
      </group>
      <group position={[0.189, 2.668, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150109'].geometry} material={materials['Material.108']} />
        <mesh geometry={nodes['C-KED150109_1'].geometry} material={materials['Material.metal.103']} />
        <mesh geometry={nodes['C-KED150109_2'].geometry} material={materials['Material.109']} />
        <mesh geometry={nodes['C-KED150109_3'].geometry} material={materials['Material.metal.104']} />
      </group>
      <group position={[0.189, 2.454, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150108'].geometry} material={materials['Material.106']} />
        <mesh geometry={nodes['C-KED150108_1'].geometry} material={materials['Material.metal.101']} />
        <mesh geometry={nodes['C-KED150108_2'].geometry} material={materials['Material.107']} />
        <mesh geometry={nodes['C-KED150108_3'].geometry} material={materials['Material.metal.102']} />
      </group>
      <group position={[0.189, 2.346, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150107'].geometry} material={materials['Material.104']} />
        <mesh geometry={nodes['C-KED150107_1'].geometry} material={materials['Material.metal.099']} />
        <mesh geometry={nodes['C-KED150107_2'].geometry} material={materials['Material.105']} />
        <mesh geometry={nodes['C-KED150107_3'].geometry} material={materials['Material.metal.100']} />
      </group>
      <group position={[0.189, 3.203, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150106'].geometry} material={materials['Material.102']} />
        <mesh geometry={nodes['C-KED150106_1'].geometry} material={materials['Material.metal.097']} />
        <mesh geometry={nodes['C-KED150106_2'].geometry} material={materials['Material.103']} />
        <mesh geometry={nodes['C-KED150106_3'].geometry} material={materials['Material.metal.098']} />
      </group>
      <group position={[0.189, 2.989, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150102'].geometry} material={materials['Material.094']} />
        <mesh geometry={nodes['C-KED150102_1'].geometry} material={materials['Material.metal.089']} />
        <mesh geometry={nodes['C-KED150102_2'].geometry} material={materials['Material.095']} />
        <mesh geometry={nodes['C-KED150102_3'].geometry} material={materials['Material.metal.090']} />
      </group>
      <group position={[0.189, 3.096, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150101'].geometry} material={materials['Material.092']} />
        <mesh geometry={nodes['C-KED150101_1'].geometry} material={materials['Material.metal.087']} />
        <mesh geometry={nodes['C-KED150101_2'].geometry} material={materials['Material.093']} />
        <mesh geometry={nodes['C-KED150101_3'].geometry} material={materials['Material.metal.088']} />
      </group>
      <group position={[0.189, 2.882, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150100'].geometry} material={materials['Material.090']} />
        <mesh geometry={nodes['C-KED150100_1'].geometry} material={materials['Material.metal.085']} />
        <mesh geometry={nodes['C-KED150100_2'].geometry} material={materials['Material.091']} />
        <mesh geometry={nodes['C-KED150100_3'].geometry} material={materials['Material.metal.086']} />
      </group>
      <group position={[0.189, 2.775, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150099'].geometry} material={materials['Material.088']} />
        <mesh geometry={nodes['C-KED150099_1'].geometry} material={materials['Material.metal.083']} />
        <mesh geometry={nodes['C-KED150099_2'].geometry} material={materials['Material.089']} />
        <mesh geometry={nodes['C-KED150099_3'].geometry} material={materials['Material.metal.084']} />
      </group>
      <group position={[0.189, 1.06, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150098'].geometry} material={materials['Material.086']} />
        <mesh geometry={nodes['C-KED150098_1'].geometry} material={materials['Material.metal.081']} />
        <mesh geometry={nodes['C-KED150098_2'].geometry} material={materials['Material.087']} />
        <mesh geometry={nodes['C-KED150098_3'].geometry} material={materials['Material.metal.082']} />
      </group>
      <group position={[0.189, 1.167, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150097'].geometry} material={materials['Material.084']} />
        <mesh geometry={nodes['C-KED150097_1'].geometry} material={materials['Material.metal.079']} />
        <mesh geometry={nodes['C-KED150097_2'].geometry} material={materials['Material.085']} />
        <mesh geometry={nodes['C-KED150097_3'].geometry} material={materials['Material.metal.080']} />
      </group>
      <group position={[0.189, 1.382, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150096'].geometry} material={materials['Material.082']} />
        <mesh geometry={nodes['C-KED150096_1'].geometry} material={materials['Material.metal.077']} />
        <mesh geometry={nodes['C-KED150096_2'].geometry} material={materials['Material.083']} />
        <mesh geometry={nodes['C-KED150096_3'].geometry} material={materials['Material.metal.078']} />
      </group>
      <group position={[0.189, 1.275, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150095'].geometry} material={materials['Material.080']} />
        <mesh geometry={nodes['C-KED150095_1'].geometry} material={materials['Material.metal.075']} />
        <mesh geometry={nodes['C-KED150095_2'].geometry} material={materials['Material.081']} />
        <mesh geometry={nodes['C-KED150095_3'].geometry} material={materials['Material.metal.076']} />
      </group>
      <group position={[0.189, 1.703, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150094'].geometry} material={materials['Material.078']} />
        <mesh geometry={nodes['C-KED150094_1'].geometry} material={materials['Material.metal.073']} />
        <mesh geometry={nodes['C-KED150094_2'].geometry} material={materials['Material.079']} />
        <mesh geometry={nodes['C-KED150094_3'].geometry} material={materials['Material.metal.074']} />
      </group>
      <group position={[0.189, 1.811, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150093'].geometry} material={materials['Material.076']} />
        <mesh geometry={nodes['C-KED150093_1'].geometry} material={materials['Material.metal.071']} />
        <mesh geometry={nodes['C-KED150093_2'].geometry} material={materials['Material.077']} />
        <mesh geometry={nodes['C-KED150093_3'].geometry} material={materials['Material.metal.072']} />
      </group>
      <group position={[0.189, 1.596, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150092'].geometry} material={materials['Material.074']} />
        <mesh geometry={nodes['C-KED150092_1'].geometry} material={materials['Material.metal.069']} />
        <mesh geometry={nodes['C-KED150092_2'].geometry} material={materials['Material.075']} />
        <mesh geometry={nodes['C-KED150092_3'].geometry} material={materials['Material.metal.070']} />
      </group>
      <group position={[0.189, 1.489, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150091'].geometry} material={materials['Material.072']} />
        <mesh geometry={nodes['C-KED150091_1'].geometry} material={materials['Material.metal.067']} />
        <mesh geometry={nodes['C-KED150091_2'].geometry} material={materials['Material.073']} />
        <mesh geometry={nodes['C-KED150091_3'].geometry} material={materials['Material.metal.068']} />
      </group>
      <group position={[0.189, 0.632, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150090'].geometry} material={materials['Material.070']} />
        <mesh geometry={nodes['C-KED150090_1'].geometry} material={materials['Material.metal.065']} />
        <mesh geometry={nodes['C-KED150090_2'].geometry} material={materials['Material.071']} />
        <mesh geometry={nodes['C-KED150090_3'].geometry} material={materials['Material.metal.066']} />
      </group>
      <group position={[0.189, 0.739, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150089'].geometry} material={materials['Material.068']} />
        <mesh geometry={nodes['C-KED150089_1'].geometry} material={materials['Material.metal.063']} />
        <mesh geometry={nodes['C-KED150089_2'].geometry} material={materials['Material.069']} />
        <mesh geometry={nodes['C-KED150089_3'].geometry} material={materials['Material.metal.064']} />
      </group>
      <group position={[0.189, 0.954, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150088'].geometry} material={materials['Material.066']} />
        <mesh geometry={nodes['C-KED150088_1'].geometry} material={materials['Material.metal.061']} />
        <mesh geometry={nodes['C-KED150088_2'].geometry} material={materials['Material.067']} />
        <mesh geometry={nodes['C-KED150088_3'].geometry} material={materials['Material.metal.062']} />
      </group>
      <group position={[0.189, 0.847, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150087'].geometry} material={materials['Material.064']} />
        <mesh geometry={nodes['C-KED150087_1'].geometry} material={materials['Material.metal.059']} />
        <mesh geometry={nodes['C-KED150087_2'].geometry} material={materials['Material.065']} />
        <mesh geometry={nodes['C-KED150087_3'].geometry} material={materials['Material.metal.060']} />
      </group>
      <group position={[0.189, 0.418, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150086'].geometry} material={materials['Material.062']} />
        <mesh geometry={nodes['C-KED150086_1'].geometry} material={materials['Material.metal.057']} />
        <mesh geometry={nodes['C-KED150086_2'].geometry} material={materials['Material.063']} />
        <mesh geometry={nodes['C-KED150086_3'].geometry} material={materials['Material.metal.058']} />
      </group>
      <group position={[0.189, 0.525, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150085'].geometry} material={materials['Material.060']} />
        <mesh geometry={nodes['C-KED150085_1'].geometry} material={materials['Material.metal.055']} />
        <mesh geometry={nodes['C-KED150085_2'].geometry} material={materials['Material.061']} />
        <mesh geometry={nodes['C-KED150085_3'].geometry} material={materials['Material.metal.056']} />
      </group>
      <group position={[0.189, 0.31, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150082'].geometry} material={materials['Material.054']} />
        <mesh geometry={nodes['C-KED150082_1'].geometry} material={materials['Material.metal.049']} />
        <mesh geometry={nodes['C-KED150082_2'].geometry} material={materials['Material.055']} />
        <mesh geometry={nodes['C-KED150082_3'].geometry} material={materials['Material.metal.050']} />
      </group>
      <group position={[0.189, 0.203, 0.226]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.667, 0.555, 1]}>
        <mesh geometry={nodes['C-KED150081'].geometry} material={materials['Material.051']} />
        <mesh geometry={nodes['C-KED150081_1'].geometry} material={materials['Material.metal.047']} />
        <mesh geometry={nodes['C-KED150081_2'].geometry} material={materials['Material.052']} />
        <mesh geometry={nodes['C-KED150081_3'].geometry} material={materials['Material.metal.048']} />
          </group>
             </group>
         </group>
       );
     }
           
           useGLTF.preload('/alumarchcladding/Model4gapclad.glb');