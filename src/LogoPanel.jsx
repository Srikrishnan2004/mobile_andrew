import React, { Suspense } from 'react';
import {Image } from '@react-three/drei';
import { useGLTFWithKTX2 } from './useGTLFwithKTX';

const LogoPanel = ({ 
  modelPath, 
  logoPath, 
  modelPosition = [0, 0, 0],
  modelRotation = [0, 0, 0],
  modelScale = [1, 1, 1],
  logoPosition = [0, 0, 0], 
  logoRotation = [0, 0, 0],
  logoWidth = 1,
  logoHeight = 1,
  logoScale = 1 
}) => {
  return ( 
    <>
        <Model 
          path={modelPath} 
          position={modelPosition}
          rotation={modelRotation}
          scale={modelScale}
        />
        
        {/* Load Logo with Advanced Controls */}
        <Image 
          url={logoPath}
          position={logoPosition}
          rotation={logoRotation}
          transparent
          scale={[logoWidth * logoScale, logoHeight * logoScale, 1]}
        />
        </>
  );
};

const Model = ({ path, position, rotation, scale }) => {
  const { scene } = useGLTFWithKTX2(path);
  
  return (
    <primitive 
      object={scene} 
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

export default LogoPanel;