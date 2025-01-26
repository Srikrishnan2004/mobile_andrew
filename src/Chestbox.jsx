import React, { Suspense, useMemo, useRef } from "react";
import { PivotControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useGLTFWithKTX2 } from "./useGTLFwithKTX";
import { useFrame } from "@react-three/fiber";
import { useComponentStore } from "./stores/ZustandStores";

const ChestBox = () => {
  const chestBoxData = [
    {
      position: [0.9, 0.045, 1.8],
      scale:0.04,
      rotation: [0, 0, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA10",
      isRotate: true,
    },
    {
      position: [0.9, 0.045, 2.2],
      scale:0.04,
      rotation: [0, 0, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA20",
      isRotate: true,
    },
    {
      position: [-0.85, 0.045, 1.8],
      scale:0.04,
      rotation: [0, 180, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA10",
      isRotate: true,
    },
    {
      position: [-0.85, 0.045, 2.2],
      scale:0.04,
      rotation: [0, 180, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA20",
      isRotate: true,
    },
    {
      position: [0.9, 0.045, -1.8],
      scale:0.04,
      rotation: [0, 0, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA10",
      isRotate: true,
    },
    {
      position: [0.9, 0.045, -2.2],
      scale:0.04,
      rotation: [0, 0, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA20",
      isRotate: true,
    },
    {
      position: [-0.85, 0.045, -1.8],
      scale:0.04,
      rotation: [0, 180, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA10",
      isRotate: true,
    },
    {
      position: [-0.85, 0.045, -2.2],
      scale:0.04,
      rotation: [0, 180, 0],
      path: "/GiftBox.glb",
      discountCode: "DEYGA20",
      isRotate: true,
    },
  ];

  return (
    <Suspense fallback={null}>
      {chestBoxData.map((data, index) => (
        <ChestBoxWrapper
          key={index}
          position={data.position}
          scale={data.scale}
          rotation={data.rotation}
          path={data.path}
          discountCode={data.discountCode}
          isRotate={data.isRotate}
        />
      ))}
    </Suspense>
  );
};

const ChestBoxWrapper = ({
  position,
  scale,
  rotation,
  path,
  discountCode,
  isRotate,
}) => {
  const { scene } = useGLTFWithKTX2(path);

  const clonedScene = useMemo(() => scene.clone(), [scene]);

  return scene ? (
    <ChestBoxLoader
      position={position}
      scale={scale}
      rotation={rotation}
      model={{ scene: clonedScene }}
      discountCode={discountCode}
      isRotate={isRotate}
    />
  ) : null;
};

const ChestBoxLoader = ({
  position,
  rotation,
  scale,
  model,
  discountCode,
  isRotate,
}) => {
  const modelRef = useRef();
  const { openDiscountModal, setDiscountCode } = useComponentStore();

  useFrame((state) => {
    if (!isRotate) return;
    const time = state.clock.getElapsedTime();
    modelRef.current.position.y = position[1] + Math.sin(time * 2) * 0.01 + 0.2;
  });

  const computedScale = useMemo(() => {
    return typeof scale === "number" ? [scale, scale, scale] : scale;
  }, [scale]);

  const computedRotation = useMemo(() => {
    return rotation.map((deg) => (deg * Math.PI) / 180);
  }, [rotation]);

  const memoizedModelScene = useMemo(() => model.scene, [model.scene]);

  return (
    <RigidBody type="fixed">
      <PivotControls
        anchor={[0, 0, 0]}
        scale={1}
        activeAxes={[false, false, false]}
      >
        <primitive
          ref={modelRef}
          object={memoizedModelScene}
          position={position}
          rotation={computedRotation}
          scale={computedScale}
          onPointerDown={(e) => {
            openDiscountModal();
            setDiscountCode(discountCode);
          }}
          castShadow
          receiveShadow
        />
      </PivotControls>
    </RigidBody>
  );
};

export default ChestBox;
