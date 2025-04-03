"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import SceneLoader from "../components/SceneLoader";
import Earth from "../bodies/Earth";
import Sun from "../bodies/Sun";

export default function EarthScene() {
  const [day, setDay] = useState(1);

  return (
    <div className="w-screen h-screen">
      <Canvas className="bg-black w-screen h-screen">
        <Suspense fallback={<SceneLoader />}>
          <ambientLight intensity={0.5} />

          <Earth />
          <Sun day={day} setDay={setDay} />

          {/* <axesHelper args={[50]} /> */}
          <OrbitControls
            maxDistance={10}
            minDistance={3.5}
            minAzimuthAngle={0}
            maxAzimuthAngle={2 * Math.PI}
            // minPolarAngle={0}
            // maxPolarAngle={Math.PI}
            // enableRotate={false}
          />
        </Suspense>
      </Canvas>

      <Time day={day} />
    </div>
  );
}

function Time({ day }: { day: number }) {
  return (
    <div className="absolute bottom-12 right-12 text-white">Day {day}</div>
  );
}
