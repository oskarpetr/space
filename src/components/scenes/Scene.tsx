import useWebGLEnabled from "@/hooks/useWebGLEnabled";
import { PropsWithChildren } from "react";
import ScreenMessage from "../shared/ScreenMessage";

export default function Scene({ children }: PropsWithChildren) {
  const isWebGlEnabled = useWebGLEnabled();

  return (
    <div className="h-screen w-screen">
      {isWebGlEnabled && children}

      {!isWebGlEnabled && <ScreenMessage text="Please enable WebGL" />}
    </div>
  );
}
