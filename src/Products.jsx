import React, { Suspense } from "react";
import { useGLTFWithKTX2 } from "./useGTLFwithKTX";
import mannequinData from "./data/MannequinData";
const LazyMannequin = React.lazy(() => import("./Mannequin"));

const Products = () => {
  return (
    <Suspense fallback={null}>
      {mannequinData.map((data, index) => (
        <ModelWrapper
          key={index}
          productId={data.id}
          modelPath={data.modelPath}
          position={data.position}
          scale={data.scale}
          rotation={data.rotation}
          sale={data.sale || false }
          allowCopy={data.allowCopy || false }
        />
      ))}
    </Suspense>
  );
};


const ModelWrapper = ({ productId, modelPath, position, rotation, scale ,sale, allowCopy}) => {
  const { scene } = useGLTFWithKTX2(modelPath); 

  return scene ? ( 
    <LazyMannequin
      productId={productId}
      position={position}
      modelPath={modelPath}
      sale = {sale}
      scale={scale}
      model={{ scene }}
      rotation={rotation}
      allowCopy={allowCopy}
    />
  ) : null; 
};

export default Products;
