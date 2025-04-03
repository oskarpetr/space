import { memo } from "react";
import InfoLabel from "./InfoLabel";

function Time({ day }: { day: number }) {
  return <InfoLabel direction="bottom-right" text={`Day ${day}`} />;
}

export default memo(Time);
