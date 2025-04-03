import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AmbientLight, Mesh, Vector3 } from "three";

interface Props {
  day: number;
  setDay: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sun({ day, setDay }: Props) {
  const pointLightRef = useRef<AmbientLight>(null);
  const sunRef = useRef<Mesh>(null);
  const targetPosition = useRef(new Vector3());

  useFrame(({ clock }, delta) => {
    if (pointLightRef.current && sunRef.current) {
      const x = -20 * Math.cos(clock.elapsedTime / 2);
      const z = -20 * Math.sin(clock.elapsedTime / 2);

      const currentDay = clock.elapsedTime / (4 * Math.PI);
      const newDay = Math.ceil(currentDay);

      if (newDay !== day) setDay(newDay);

      targetPosition.current.set(x, 0, z);

      pointLightRef.current.position.lerp(targetPosition.current, delta);
      sunRef.current.position.lerp(targetPosition.current, delta);
    }
  });

  return (
    <>
      <pointLight ref={pointLightRef} color="lightyellow" intensity={500} />

      {/* <mesh ref={sunRef}>
        <sphereGeometry args={[0.5]} />
        <meshStandardMaterial emissive="white" emissiveIntensity={2} />
      </mesh> */}

      <mesh ref={sunRef}>
        <sphereGeometry args={[0.3]} />
        <meshBasicMaterial color="lightyellow" />
      </mesh>
    </>
  );
}
