import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useSearchStore } from "../../stores/ZustandStores";

export const ProductGSAPUtil = ({ setAnimating, playerRef }) => {
  const { camera } = useThree();
  const { searchResult, initiateSearchGSAP, resetSearchGSAP } = useSearchStore();

  useEffect(() => {
    if (!initiateSearchGSAP || !searchResult || !playerRef.current) return;

    setAnimating(true);
    const targetPosition = {
      x: searchResult.x,
      y: searchResult.y,
      z: searchResult.z,
    };

    const timeline = gsap.timeline({
      onComplete: () => {
        if (playerRef.current) {
          playerRef.current.setTranslation(targetPosition);
          console.log(targetPosition);
          playerRef.current.setLinvel({ x: 0, y: 0, z: 0 });
          playerRef.current.setAngvel({ x: 0, y: 0, z: 0 });
          setAnimating(false);
        }
        resetSearchGSAP();
      },
    });

    
    timeline.to(camera.rotation, {
      x: searchResult.rotationX,
      y: searchResult.rotationY,
      z: searchResult.rotationZ,
      order: "YZX",
      duration: 1,
      ease: "power2.inOut",
    });

  
    timeline.to(camera.position, {
      x: targetPosition.x,
      y: targetPosition.y ,
      z: targetPosition.z ,
      duration: 2,
      ease: "power2.inOut",
    });

    return () => {
      timeline.kill();
      setAnimating(false);
    };
  }, [initiateSearchGSAP, searchResult, playerRef, camera, resetSearchGSAP, setAnimating]);

  return null;
};