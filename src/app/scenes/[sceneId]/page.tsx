"use client";

import { scenes } from "@/data/scenes";
import EarthScene from "@/scenes/EarthScene";
import { notFound, useParams } from "next/navigation";

export default function ScenePage() {
  const { sceneId } = useParams();
  const scene = scenes.find((x) => x.id === sceneId);

  if (!scene) {
    return notFound();
  }

  if (scene.id === "earths-orbit") {
    return <EarthScene scene={scene} />;
  }
}
