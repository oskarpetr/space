import Title from "@/components/shared/Title";
import Layout from "../components/layout/Layout";
import { scenes } from "@/data/scenes";
import SceneThumbnail from "@/components/home/SceneThumbnail";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <Title heading="h3" text="Choose a scene" delay={0.1} />

        <div className="grid grid-cols-4 gap-10">
          {scenes.map((scene, index) => (
            <SceneThumbnail key={scene.id} scene={scene} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
