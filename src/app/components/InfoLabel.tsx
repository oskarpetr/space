type Direction = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface Props {
  direction: Direction;
  text: string;
}

export default function InfoLabel({ direction, text }: Props) {
  const position =
    direction === "top-left"
      ? "top-12 left-12"
      : "" + direction === "top-right"
      ? "top-12 right-12"
      : "" + direction === "bottom-left"
      ? "bottom-12 left-12"
      : "" + direction === "bottom-right"
      ? "bottom-12 right-12"
      : "";

  return <div className={"absolute text-white " + position}>{text}</div>;
}
