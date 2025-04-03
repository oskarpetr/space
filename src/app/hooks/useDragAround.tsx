import { useDrag } from "@use-gesture/react";
import { RefObject } from "react";
import * as Three from "three";

export default function useDragAround(ref: RefObject<Three.Mesh | null>) {
  return useDrag(({ offset: [x, y] }) => {
    if (ref.current) {
      ref.current.rotation.y = x * 0.005;
      ref.current.rotation.x = y * 0.005;
    }
  });
}
