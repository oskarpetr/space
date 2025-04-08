import { useEffect, useState } from "react";

export default function useWebGLEnabled() {
  const [webGLAvailable, setWebGLAvailable] = useState(false);

  useEffect(() => {
    const isWebGLAvailable = (() => {
      try {
        const canvas = document.createElement("canvas");
        const context =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        return !!context;
      } catch {
        return false;
      }
    })();

    setWebGLAvailable(isWebGLAvailable);
  }, []);

  return webGLAvailable;
}
