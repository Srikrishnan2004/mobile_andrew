import React, { useMemo } from "react";
import { PivotControls, Billboard, Image } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useComponentStore } from "../../stores/ZustandStores";
import * as THREE from 'three';
import Swal from "sweetalert2";
import styles from "@/UI/UI.module.scss";
import { ProductService } from "../../services/shopifyAPIService";

const cloneModel = (originalScene) => {
  const clonedScene = originalScene.clone();
  
  clonedScene.traverse((node) => {
    if (node.isMesh) {
      node.material = new THREE.MeshStandardMaterial().copy(node.material);
      if (node.geometry.attributes.uv2) {
        node.geometry = node.geometry.clone();
      }
    }
  });
  
  return clonedScene;
};

const DraggableMannequin = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  productId,
  modelPath,
  onClick,
  model,
  sale = false,
  allowCopy = false
}) => {
  const { openModal, setSelectedProduct, products, setProducts } = useComponentStore();

  const modelScene = useMemo(() => 
    allowCopy ? cloneModel(model.scene) : model.scene
  , [model.scene, allowCopy]);

  const computedScale = useMemo(() => 
    typeof scale === "number" ? [scale, scale, scale] : scale
  , [scale]);

  const computedRotation = useMemo(() => 
    rotation.map((deg) => (deg * Math.PI) / 180)
  , [rotation]);

  const saleTextPosition = useMemo(() => {
    const [x, y, z] = position;
    return [x, y + 2.5, z];
  }, [position]);

  const handleEvent = (event) => {
    event.stopPropagation();
    
    if(products && products.length > 0){
      setSelectedProduct(productId);
      openModal();
    }
    else{
      const fetchProducts = async () => {
        try {
          const response = await ProductService.getAllProducts();
          setProducts(response);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProducts();
      
      Swal.fire({
        title: "Could Not Load Product",
        text: "The products couldn't be loaded. Please try again.",
        icon: "error",
        customClass: {
          title: styles.swalTitle,
          popup: styles.swalPopup
        }
      });
    }
  };

  return (
    <RigidBody type="fixed">
      <PivotControls
        anchor={[0, 0, 0]}
        scale={1}
        activeAxes={[false, false, false]}
      >
        <primitive
          object={modelScene}
          position={position}
          rotation={computedRotation}
          scale={computedScale}
          onTouchStart={handleEvent}
          onClick={handleEvent}
          castShadow
          receiveShadow
        />

        
        {sale && (
          <Billboard
            follow={true}
            position={saleTextPosition}
            lockX={false}
            lockY={false}
            lockZ={false} 
          >
            <Image url="/icons/Sale.png" transparent scale={[0.75, 0.25]} />
          </Billboard>
        )}
      </PivotControls>
    </RigidBody>
  );
};

export default DraggableMannequin;
