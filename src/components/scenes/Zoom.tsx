import { getZoomPercentage } from "../../utils/zoom";

interface Props {
  zoom: number;
  minDistance: number;
  maxDistance: number;
}

export default function Zoom({ zoom, minDistance, maxDistance }: Props) {
  const zoomPercentage = getZoomPercentage(zoom, minDistance, maxDistance);

  return (
    <div>
      <div className="font-semibold">Zoom</div>
      <div className="opacity-80">{zoomPercentage.toFixed(0)}%</div>
    </div>
  );
}
