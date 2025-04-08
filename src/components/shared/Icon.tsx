import { CaretRight, IconWeight, Question, X } from "@phosphor-icons/react";

export type IconType = "Question" | "CaretRight" | "X";

interface Props {
  name: IconType;
  size?: number;
  weight?: IconWeight;
  color?: string;
  className?: string;
}

export default function Icon({
  name,
  size = 24,
  weight = "regular",
  color = "currentColor",
  className,
}: Props) {
  const icons = {
    Question,
    CaretRight,
    X,
  };
  const PhosphorIcon = icons[name as keyof typeof icons];

  if (!PhosphorIcon) return null;

  return (
    <PhosphorIcon
      size={size}
      weight={weight}
      color={color}
      className={className}
    />
  );
}
