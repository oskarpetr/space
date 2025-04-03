import { Html, useProgress } from "@react-three/drei";
import { Dispatch, SetStateAction, useEffect } from "react";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SceneLoader({ setLoading }: Props) {
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [progress]);

  return (
    <Html
      center
      className="border border-white px-8 py-2 w-52 flex justify-center text-white"
    >
      <div>Loading {progress}%</div>
    </Html>
  );
}
