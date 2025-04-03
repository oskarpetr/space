import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Dispatch, SetStateAction, useRef } from "react";

interface Props {
  setZoom?: Dispatch<SetStateAction<number>>;
  minDistance?: number;
  maxDistance?: number;
}

export default function ZoomTracker({
  setZoom,
  minDistance,
  maxDistance,
}: Props) {
  const controlsRef = useRef<any>(null);

  useFrame(() => {
    if (controlsRef.current) {
      setZoom?.(controlsRef.current.object.position.length());
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      minDistance={minDistance}
      maxDistance={maxDistance}
      rotateSpeed={0.5}
      // minAzimuthAngle={0}
      // maxAzimuthAngle={2 * Math.PI}
      // zoomSpeed={0.5}
      // minPolarAngle={0}
      // maxPolarAngle={Math.PI}
      // enableRotate={false}
    />
  );
}
