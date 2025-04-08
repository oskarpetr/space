import HoverElement from "../animation/HoverElement";

interface Props {
  latitude: number;
  longitude: number;
  isHovered: boolean;
}

export default function GeoCoordinates({
  latitude,
  longitude,
  isHovered,
}: Props) {
  const geoLabel = (
    <div className="px-8 py-2 text-sm font-semibold text-black tabular-nums backdrop-blur-md">
      <div>{latitude.toFixed(2)}° N latitude</div>
      <div>{longitude.toFixed(2)}° W</div>
    </div>
  );

  return <HoverElement isHovered={isHovered} hoverChildren={geoLabel} />;
}
