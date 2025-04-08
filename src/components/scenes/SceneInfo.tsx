import InfoLabel from "../shared/InfoLabel";
import type { SceneInfo } from "@/types/Scene.types";
import { ReactNode } from "react";

interface Props {
  components: ReactNode[];
}

export default function SceneInfo({ components }: Props) {
  return (
    <InfoLabel direction="bottom-left">
      <div className="flex items-center gap-12">
        {components.map((component, index) => (
          <div key={`scene-info-${index}`}>{component}</div>
        ))}
      </div>
    </InfoLabel>
  );
}
