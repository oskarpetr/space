interface Props {
  sceneName: string;
}

export default function SceneName({ sceneName }: Props) {
  return (
    <div>
      <div className="font-semibold">Scene</div>
      <div className="opacity-80">{sceneName}</div>
    </div>
  );
}
