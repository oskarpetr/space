import { EARTH_LONGITUDE_SHIFT } from "@/constants/bodies";
import { ThreeEvent } from "@react-three/fiber";

export function getGeoCoordinates(event: ThreeEvent<PointerEvent>) {
  const earthCoordinates = event.intersections[0].point;
  const toRadians = 180 / Math.PI;

  // longitude
  let longitude =
    Math.acos(
      earthCoordinates.x /
        Math.sqrt(earthCoordinates.x ** 2 + earthCoordinates.z ** 2),
    ) * toRadians;

  // apply longitude shift due to the model
  const isWestHemisphere = earthCoordinates.z < 0;
  if (isWestHemisphere) longitude = -longitude;

  let correctedLongitude = longitude + 180 + EARTH_LONGITUDE_SHIFT;
  if (correctedLongitude > 180) correctedLongitude -= 360;
  if (correctedLongitude < -180) correctedLongitude += 360;
  correctedLongitude *= -1;

  // latitude
  const radius = Math.sqrt(
    earthCoordinates.x ** 2 + earthCoordinates.y ** 2 + earthCoordinates.z ** 2,
  );
  const latitude = Math.asin(earthCoordinates.y / radius) * toRadians;

  return {
    latitude: latitude,
    longitude: correctedLongitude,
  };
}
