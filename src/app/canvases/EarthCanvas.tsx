import React, { Dispatch, SetStateAction, Suspense, useRef } from "react";
import SceneLoader from "../components/SceneLoader";
import ZoomTracker from "../components/ZoomTracker";
import Earth from "../bodies/Earth";
import Sun from "../bodies/Sun";
import {
  DISTANCE_EARTH_SUN,
  EARTH_MAX_DISTANCE,
  EARTH_MIN_DISTANCE,
} from "../constants/bodies";
import { useFrame } from "@react-three/fiber";
import { Mesh, PointLight } from "three";
import { getOrbit } from "../utils/orbit";

interface Props {
  day: number;
  setDay: Dispatch<SetStateAction<number>>;
  setZoom: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function EarthCanvas({
  day,
  setDay,
  setZoom,
  setLoading,
}: Props) {
  const sunRef = useRef<Mesh>(null);
  const pointLightRef = useRef<PointLight>(null);

  useFrame(({ clock }) => {
    if (pointLightRef.current && sunRef.current) {
      const { position, currentDay } = getOrbit(
        clock.elapsedTime,
        DISTANCE_EARTH_SUN
      );

      if (currentDay !== day) setDay(currentDay);

      pointLightRef.current.position.set(position.x, position.y, position.z);
      sunRef.current.position.set(position.x, position.y, position.z);
    }
  });

  return (
    <Suspense fallback={<SceneLoader setLoading={setLoading} />}>
      <ambientLight intensity={0.3} />
      <pointLight ref={pointLightRef} color="lightyellow" intensity={800} />

      <Earth />
      <Sun ref={sunRef} />

      {/* <axesHelper args={[50]} /> */}

      <ZoomTracker
        setZoom={setZoom}
        minDistance={EARTH_MIN_DISTANCE}
        maxDistance={EARTH_MAX_DISTANCE}
      />
    </Suspense>
  );
}
