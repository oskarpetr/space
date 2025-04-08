import FadeIn from "../animation/FadeIn";

interface Props {
  text: string;
  heading?: "h1" | "h3";
  delay?: number;
}

export default function Title({ text, heading = "h1", delay = 0 }: Props) {
  return (
    <FadeIn delay={delay}>
      {heading === "h1" ? (
        <h1 className="text-5xl font-bold">{text}</h1>
      ) : (
        <h3 className="text-xl font-semibold">{text}</h3>
      )}
    </FadeIn>
  );
}
