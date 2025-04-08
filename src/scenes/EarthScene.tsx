"use client";

import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { EARTH_MAX_DISTANCE, EARTH_MIN_DISTANCE } from "../constants/bodies";
import Time from "../components/scenes/Time";
import EarthCanvas from "../canvases/EarthCanvas";
import Scene from "@/components/scenes/Scene";
import SceneInfo from "@/components/scenes/SceneInfo";
import { Scene as SceneType } from "@/types/Scene.types";
import Menu from "@/components/shared/Menu";
import Zoom from "@/components/scenes/Zoom";
import SceneName from "@/components/scenes/SceneName";
// import InfoModal from "@/components/scenes/InfoModal";

interface Props {
  scene: SceneType;
}

export default function EarthScene({ scene }: Props) {
  const [day, setDay] = useState(1);
  const [zoom, setZoom] = useState(EARTH_MAX_DISTANCE);
  const [loading, setLoading] = useState(false);

  return (
    <Scene>
      <Canvas>
        <EarthCanvas
          day={day}
          setDay={setDay}
          setZoom={setZoom}
          setLoading={setLoading}
        />
      </Canvas>

      {!loading && (
        <div>
          <Menu />

          <SceneInfo
            components={[
              <SceneName key="scene-name" sceneName={scene.name} />,
              <Zoom
                key="scene-zoom"
                zoom={zoom}
                minDistance={EARTH_MIN_DISTANCE}
                maxDistance={EARTH_MAX_DISTANCE}
              />,
              <Time key="scene-time" day={day} />,
            ]}
          />

          {/* <InfoModal sceneName={scene.name} sceneInfo={scene.info} /> */}
        </div>
      )}
    </Scene>
  );
}
