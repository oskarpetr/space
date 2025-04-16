import { Html, useProgress } from "@react-three/drei";
import { Dispatch, SetStateAction, useEffect } from "react";
import Icon from "../shared/Icon";

interface Props {
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export default function SceneLoader({ setLoading }: Props) {
  const { progress } = useProgress();

  useEffect(() => {
    setLoading(progress !== 100);
  }, [progress]);

  return (
    <Html
      center
      className="flex w-52 justify-center rounded-sm border border-white px-8 py-2"
    >
      <div className="relative z-10 flex items-center gap-2 font-medium text-white mix-blend-difference">
        <div>Loading {progress}%</div>
        <Icon name="Spinner" size={20} className="animate-spin" />
      </div>
      <div
        className="absolute top-0 left-0 z-0 h-full bg-white transition-all duration-300"
        style={{ width: progress + "%" }}
      ></div>
    </Html>
  );
}
