import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import useDragAround from "../hooks/useDragAround";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { EARTH_SCALE } from "../constants/bodies";

export default function Earth() {
  const { scene } = useLoader(GLTFLoader, "/earth.glb");
  const earthRef = useRef<Mesh>(null);
  const dragEarth = useDragAround(earthRef);

  return (
    <mesh ref={earthRef} {...dragEarth()}>
      <primitive object={scene} scale={EARTH_SCALE} />
    </mesh>
  );
}
