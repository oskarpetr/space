import { Scene } from "@/types/Scene.types";

const scene: Scene = {
  id: "earths-orbit",
  name: "Earth's orbit",
  description:
    "Explore Earth's orbit around the sun from Earth's perspective with daylight and rotation simulation.",
  imageUrl: "/images/scenes/earth-orbit.jpg",
  info: [
    {
      text: "For the sake of simplicity, Earth will not be orbiting the sun, but the sun will be orbiting Earth, since we are looking at it from Earth's perspective. Earth is at the center of the scene at (0,0,0), while the Sun is orbiting at a distance of $r$ units. The sun will be moving in a circular path around the Earth, and we will be using the following equations to calculate its position:",
    },
    {
      latex:
        "x_{\\text{sun}} = -r \\cdot \\cos \\left( \\tfrac{t}{2} \\right), \\quad z_{\\text{sun}} = -r \\cdot \\sin \\left( \\tfrac{t}{2} \\right),",
    },
    {
      text: "where $r$ is the distance from the center of the Earth to the Sun, and $t$ is the time in seconds. We are taking on the negative $r$ since we want the sun to start to left of the Earth, then move in front of it, then to the right, and finally behind. Also we are using $\\frac{t}{2}$ since we want to double the period of the sun's orbit.",
    },
    { heading: "Counting rotations (days)" },
    {
      text: "To get the number of rotations (days), we need to find how long it takes for the sun to complete one full rotation around the Earth, meaning, finding the period of the Sun's orbit. The period of $\\sin \\left( \\frac{x}{2} \\right)$ is $4\\pi$, so we can use that to find the number of rotations:",
    },
    { latex: "\\text{days} = \\left\\lceil \\tfrac{t}{4\\pi} \\right\\rceil." },
    {
      heading: "Getting GeoCoordinates",
    },
    {
      image: {
        src: "/images/info/geo-coordinates.webp",
        alt: "GeoCoordinates",
      },
    },
    {
      latex: "\\lambda = \\cos \\left( \\tfrac{x}{\\sqrt{x^2+z^2}} \\right)",
    },
    {
      latex: "\\phi = \\sin \\left( \\tfrac{y}{\\sqrt{x^2+y^2+z^2}} \\right)",
    },
    {
      heading: "Getting GeoCoordinates",
    },
    { text: "First we need to get the coordinates of the object in space." },
    {
      latex: "\\lambda = \\cos(\\frac{x}{\\sqrt{x^2+z^2}})",
    },
    {
      latex: "\\phi = \\sin(\\frac{y}{\\sqrt{x^2+y^2+z^2}})",
    },
  ],
};

export const scenes: Scene[] = [scene];
