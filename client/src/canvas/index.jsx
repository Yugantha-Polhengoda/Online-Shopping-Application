import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      {/* Set the background color of the canvas */}
      <color attach="background" args={["#352d52"]} />{" "}
      {/* Adjust this color to your preference */}
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      {/* Use Environment for lighting only */}
      <Environment
        background={false}
        files="/soil1k.hdr" // Your HDRI file
        preset={null} // Disable any default presets
      />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
