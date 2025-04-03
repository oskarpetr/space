import { memo } from "react";
import { getZoomPercentage } from "../utils/zoom";
import InfoLabel from "./InfoLabel";

interface Props {
  zoom: number;
  minDistance: number;
  maxDistance: number;
}

function Zoom({ zoom, minDistance, maxDistance }: Props) {
  const zoomPercentage = getZoomPercentage(zoom, minDistance, maxDistance);

  return (
    <InfoLabel
      direction="bottom-left"
      text={`Zoom ${zoomPercentage.toFixed(0)}%`}
    />
  );
}

export default memo(Zoom);
