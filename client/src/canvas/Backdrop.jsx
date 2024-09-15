import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={5}
        radius={20}
        intensity={0.8}
        ambient={0.3}
        position={[5, 10, -15]}
      />
      <RandomizedLight
        amount={3}
        radius={10}
        intensity={0.6}
        ambient={0.4}
        position={[-10, 10, -15]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
