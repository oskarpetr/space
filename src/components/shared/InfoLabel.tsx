import { ReactNode } from "react";

type Direction = "top-left" | "top-right" | "bottom-left" | "bottom-right";

interface Props {
  direction: Direction;
  children: ReactNode;
}

export default function InfoLabel({ direction, children }: Props) {
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

  return (
    <div className={"absolute font-medium text-white " + position}>
      {children}
    </div>
  );
}
