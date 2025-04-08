import { useDrag } from "@use-gesture/react";
import { RefObject } from "react";
import * as Three from "three";

export default function useDragAround(ref: RefObject<Three.Mesh | null>) {
  return useDrag(
    ({
      // offset: [x, y],
      active,
    }) => {
      if (ref.current) {
        // ref.current.rotation.y = x * 0.005;
        // ref.current.rotation.x = y * 0.005;
        document.body.style.cursor = active ? "grabbing" : "default";
      }
    },
  );
}
