import {
  // ThreeEvent,
  useLoader,
} from "@react-three/fiber";
import {
  useRef,
  // useState
} from "react";
import { Mesh } from "three";
import useDragAround from "../hooks/useDragAround";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { EARTH_SCALE } from "../constants/bodies";
// import { getGeoCoordinates } from "@/utils/geo-coordinates";
// import { Html } from "@react-three/drei";
// import GeoCoordinates from "@/components/earth/GeoCoordinates";

export default function Earth() {
  const { scene } = useLoader(GLTFLoader, "/models/earth-compressed.glb");
  const earthRef = useRef<Mesh>(null);
  const dragEarth = useDragAround(earthRef);
  // const [coordinates, setCoordinates] = useState({
  //   latitude: 0,
  //   longitude: 0,
  // });
  // const [isHovered, setIsHovered] = useState(false);

  // const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
  //   const { latitude, longitude } = getGeoCoordinates(event);
  //   setCoordinates({ latitude, longitude });
  // };

  // const handlePointerEnter = () => {
  //   setIsHovered(true);
  // };

  // const handlePointerLeave = () => {
  //   setIsHovered(false);
  // };

  // useEffect(() => {
  //   const boundingBox = new Box3().setFromObject(scene);
  //   const size = new Vector3();
  //   console.log(boundingBox.getSize(size));
  // }, [scene]);

  return (
    <group>
      <mesh
        ref={earthRef}
        {...dragEarth()}
        // onPointerMove={handlePointerMove}
        // onPointerEnter={handlePointerEnter}
        // onPointerLeave={handlePointerLeave}
      >
        <primitive object={scene} scale={EARTH_SCALE} />
      </mesh>

      {/* <Html className="pointer-events-none fixed z-50">
        <GeoCoordinates
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}
          isHovered={isHovered}
        />
      </Html> */}
    </group>
  );
}
