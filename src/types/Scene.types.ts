export interface Scene {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  info: SceneInfo[];
}

export interface SceneInfo {
  heading?: string;
  text?: string;
  latex?: string;
  image?: SceneInfoImage;
}

interface SceneInfoImage {
  src: string;
  alt: string;
}
