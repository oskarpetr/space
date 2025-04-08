import React, { Dispatch, SetStateAction, Suspense, useRef } from "react";
import SceneLoader from "../components/scenes/SceneLoader";
import ZoomTracker from "../components/scenes/ZoomTracker";
import Earth from "../bodies/Earth";
import Sun from "../bodies/Sun";
import {
  AMBIENT_LIGHT_INTENSITY,
  EARTH_MAX_DISTANCE,
  EARTH_MIN_DISTANCE,
  EARTH_SUN_DISTANCE,
  POINT_LIGHT_INTENSITY,
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
        EARTH_SUN_DISTANCE,
      );

      // update the day and positions of the sun and point light
      if (currentDay !== day) setDay(currentDay);
      pointLightRef.current.position.set(position.x, position.y, position.z);
      sunRef.current.position.set(position.x, position.y, position.z);
    }
  });

  return (
    <Suspense fallback={<SceneLoader setLoading={setLoading} />}>
      <ambientLight intensity={AMBIENT_LIGHT_INTENSITY} />
      <pointLight
        ref={pointLightRef}
        color="lightyellow"
        intensity={POINT_LIGHT_INTENSITY}
      />

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
