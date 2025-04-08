import { forwardRef } from "react";
import { SUN_SCALE } from "../constants/bodies";

const Sun = forwardRef((_, ref) => (
  <mesh ref={ref}>
    <sphereGeometry args={[SUN_SCALE]} />
    <meshBasicMaterial color="lightyellow" />
  </mesh>
));

Sun.displayName = "Sun";

export default Sun;

// <meshStandardMaterial emissive="white" emissiveIntensity={2} />
