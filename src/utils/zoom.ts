export function getZoomPercentage(
  zoom: number,
  minDistance: number,
  maxDistance: number,
) {
  const zoomPercentage =
    (1 - (zoom - minDistance) / (maxDistance - minDistance)) * 100;
  const zoomInBounds = Math.max(0, Math.min(100, zoomPercentage));

  return zoomInBounds;
}
