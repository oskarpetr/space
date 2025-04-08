"use client";

import { Scene } from "@/types/Scene.types";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "../animation/FadeIn";

interface Props {
  scene: Scene;
  index: number;
}

export default function SceneThumbnail({ scene, index }: Props) {
  return (
    <FadeIn delay={index * 0.1 + 0.2}>
      <Link href={`/scenes/${scene.id}`} className="group flex flex-col gap-6">
        <Image
          src={`/images/scenes/${scene.id}.webp`}
          alt={scene.name}
          width={800}
          height={800}
          className="rounded-sm border border-white/20"
        />

        <div className="flex flex-col gap-1">
          <div className="text-lg font-semibold opacity-80">{scene.name}</div>
          <div className="font-medium opacity-50">{scene.description}</div>
        </div>

        <button className="mt-2 w-fit cursor-pointer rounded-sm border border-white/20 bg-white/10 px-8 py-2 font-medium transition-colors duration-500 group-hover:bg-white group-hover:!text-black">
          Explore
        </button>
      </Link>
    </FadeIn>
  );
}
