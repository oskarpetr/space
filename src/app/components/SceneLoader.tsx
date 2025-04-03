import { Html, useProgress } from "@react-three/drei";

export default function SceneLoader() {
  const { progress } = useProgress();

  return (
    <Html center className="bg-blue-300 px-8 py-2 w-52 flex justify-center">
      <div>Loading {progress}%</div>
    </Html>
  );
}
