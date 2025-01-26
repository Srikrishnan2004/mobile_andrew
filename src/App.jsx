import * as TWEEN from "@tweenjs/tween.js";
import { PointerLockControls } from "@react-three/drei";
import { Ground } from "@/Ground.jsx";
import { Physics } from "@react-three/rapier";
import { Player } from "@/Player.jsx";
import { useFrame } from "@react-three/fiber";
import Television from "./Television";
import BrandPoster from "./BrandPoster";
import Products from "./Products";
import ChestBox from "./Chestbox";
import LogoPanel from "./LogoPanel";
import { Suspense, useState, useEffect } from "react";
import Skybox from "./Skybox";
import {
  useComponentStore,
  usePointerLockStore,
  useDriverStore,
} from "./stores/ZustandStores";
import { useTouchStore } from "./stores/ZustandStores";

const shadowOffset = 50;

export const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const {
    crosshairVisible,
    isModalOpen,
    isWishlistOpen,
    isCartOpen,
    isInfoModalOpen,
    isDiscountModalOpen,
    isSettingsModalOpen,
    isTermsModalOpen,
    isContactModalOpen,
    isProductSearcherOpen,
  } = useComponentStore();
  const { lockPointer, unlockPointer } = usePointerLockStore();
  const { driverActive } = useDriverStore();
  const { isTouchEnabled } = useTouchStore();

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  useFrame(() => {
    TWEEN.update();
  });

  const pointerLockControlsLockHandler = () => {
    if (
      isTouchEnabled &&
      crosshairVisible &&
      !driverActive &&
      !isModalOpen &&
      !isCartOpen &&
      !isWishlistOpen &&
      !isInfoModalOpen &&
      !isDiscountModalOpen &&
      !isSettingsModalOpen &&
      !isTermsModalOpen &&
      !isContactModalOpen &&
      !isProductSearcherOpen
    ) {
      lockPointer();
    } else {
      document.exitPointerLock?.();
    }
  };

  const pointerLockControlsUnlockHandler = () => {
    unlockPointer();
  };

  return (
    <>
      {!isMobile && (
        <PointerLockControls
          onLock={pointerLockControlsLockHandler}
          onUnlock={pointerLockControlsUnlockHandler}
        />
      )}
      <Skybox />
      <ambientLight intensity={4.5} color="#ffe9d6" />
      <directionalLight
        castShadow
        intensity={3.5}
        shadow-mapSize={4096}
        shadow-camera-top={shadowOffset}
        shadow-camera-bottom={-shadowOffset}
        shadow-camera-left={shadowOffset}
        shadow-camera-right={-shadowOffset}
        position={[0, 0, 0]}
      />

      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Suspense fallback={null}>
          <Player />
        </Suspense>
        <Suspense fallback={null}>
          <Products />
        </Suspense>
        <Television
          videoPath="/media/Deyga1.mp4"
          scale={0.05}
          position={[1.061, 0.55, 1.97]}
          rotation={[0, 180, 0]}
        />
        <Television
          videoPath="/media/Deyga2.mp4"
          scale={0.05}
          position={[1.061, 0.55, -2.01]}
          rotation={[0, 180, 0]}
        />
        <Television
          videoPath="/media/Deyga3.mp4"
          scale={0.05}
          position={[-0.985, 0.55, -1.968]}
          rotation={[0, 0, 0]}
        />
        <Television
          videoPath="/media/Deyga4.mp4"
          scale={0.05}
          position={[-0.985, 0.55, 2.01]}
          rotation={[0, 0, 0]}
        />
        <BrandPoster
          imageUrl="/banners/1.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[-0.95, 0.64, -1.03]}
          rotation={[0, 90, 0]}
        />
        <BrandPoster
          imageUrl="/banners/1.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[1.021, 0.64, -1.03]}
          rotation={[0, -90, 0]}
        />
        <BrandPoster
          imageUrl="/banners/7.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[-0.95, 0.64, 1.03]}
          rotation={[0, 90, 0]}
        />
        <BrandPoster
          imageUrl="/banners/6.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[1.021, 0.64, 1.03]}
          rotation={[0, -90, 0]}
        />
        <BrandPoster
          imageUrl="/banners/2.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[0.535, 0.64, -3.78]}
          rotation={[0, 0, 0]}
        />
        <BrandPoster
          imageUrl="/banners/2.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[-0.45, 0.64, -3.78]}
          rotation={[0, 0, 0]}
        />
        <BrandPoster
          imageUrl="/banners/3.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[0.535, 0.64, 3.78]}
          rotation={[0, 180, 0]}
        />
        <BrandPoster
          imageUrl="/banners/3.png"
          width={50 * 0.5}
          height={10 * 0.5}
          position={[-0.45, 0.64, 3.78]}
          rotation={[0, 180, 0]}
        />
        <ChestBox />
        <LogoPanel
          modelPath="/panel/panel.glb"
          logoPath="/panel/panel.png"
          modelPosition={[0.95, 0.6,0.005]}
          modelRotation={[0, -Math.PI/2, 0]}
          modelScale={10}
          logoPosition={[0.93, 0.6,0.005]}
          logoRotation={[0, -Math.PI / 2, 0]}
          logoWidth={0.3}
          logoHeight={0.3}
          logoScale={1.2}
        />
      </Physics>
    </>
  );
};

export default App;
