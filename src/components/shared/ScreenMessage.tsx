interface Props {
  text: string;
}

export default function ScreenMessage({ text }: Props) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex justify-center rounded-sm border border-white px-8 py-2 font-medium">
        {text}
      </div>
    </div>
  );
}
