import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import App from "@/App.jsx";
import "@/index.scss";
import UI from "@/UI/UI.tsx";
import Load from "@/UI/Components/Loader";
import { ProductService } from "./services/shopifyAPIService";
import { useComponentStore } from "./stores/ZustandStores";
import { ACESFilmicToneMapping } from "three";

function CanvasWrapper() {
  const { setProducts } = useComponentStore();
  const { progress } = useProgress();

  async function fetchProducts() {
    try {
      const response = await ProductService.getAllProducts();
      setProducts(response);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div id="container">
      {progress >= 100 && <UI />}
      <Canvas
        camera={{ fov: 45 }}
        shadows
        gl={{
          toneMapping: ACESFilmicToneMapping,
          toneMappingExposure: 0.81,
        }}
      >
        <React.Suspense
          fallback={
            <Html center>
              <Load progress={progress} />
            </Html>
          }
        >
          <App />
        </React.Suspense>
      </Canvas>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CanvasWrapper />
  </React.StrictMode>
);
