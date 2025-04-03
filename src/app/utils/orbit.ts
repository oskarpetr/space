// compute the x and z coordinates to simulate circular motion
export function getOrbit(time: number, radius: number) {
  // object moves from -radius to radius and back, forming a full cycle
  // cycle: (-radius, 0) -> (0, -radius) -> (radius, 0) -> (0, radius) -> (-radius, 0)

  // cosine controls the x-coordinate
  const x = -radius * Math.cos(time / 2);
  // sine controls the z-coordinate
  const z = -radius * Math.sin(time / 2);
  // position of the object in 3D space
  const position = { x, y: 0, z };

  // determine the current orbit cycle (day)
  // full cycle is completed every 4π time units - full period of sin(x / 2)
  const currentDay = Math.ceil(time / (4 * Math.PI));

  return { position, currentDay };
}
