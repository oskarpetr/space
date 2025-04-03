"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { EARTH_MAX_DISTANCE, EARTH_MIN_DISTANCE } from "../constants/bodies";
import Zoom from "../components/Zoom";
import Time from "../components/Time";
import EarthCanvas from "../canvases/EarthCanvas";

export default function EarthScene() {
  const [day, setDay] = useState(1);
  const [zoom, setZoom] = useState(EARTH_MAX_DISTANCE);
  const [loading, setLoading] = useState(true);

  return (
    <div className="w-screen h-screen">
      <Canvas className="bg-black w-screen h-screen">
        <EarthCanvas
          day={day}
          setDay={setDay}
          setZoom={setZoom}
          setLoading={setLoading}
        />
      </Canvas>

      {!loading && (
        <>
          <Time day={day} />
          <Zoom
            zoom={zoom}
            minDistance={EARTH_MIN_DISTANCE}
            maxDistance={EARTH_MAX_DISTANCE}
          />
        </>
      )}
    </div>
  );
}
