import dynamic from "next/dynamic";

const EarthScene = dynamic(() => import("./scenes/EarthScene"));

export default function Home() {
  return <EarthScene />;
}
