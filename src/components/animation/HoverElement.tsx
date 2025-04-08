"use client";

import {
  AnimatePresence,
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { memo, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

interface Props {
  isHovered: boolean;
  hoverChildren: ReactNode;
  zIndex?: number;
}

function HoverElement({ isHovered, hoverChildren, zIndex = 0 }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: MouseEvent) => {
    mouseX.set(event.clientX + 20);
    mouseY.set(event.clientY + 20);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseMoveWithLogging = (event: MouseEvent) => {
      console.log(`Mouse position: X=${event.clientX}, Y=${event.clientY}`);
      handleMouseMove(event);
    };

    window.addEventListener("mousemove", handleMouseMoveWithLogging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveWithLogging);
    };
  }, []);

  const animationConfig: SpringOptions = {
    damping: 30,
    stiffness: 300,
  };

  const hoverElement = (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        scale: isHovered ? 1 : 0,
      }}
      exit={{ opacity: 0, scale: 0 }}
      className="pointer-events-none fixed hidden sm:block"
      style={{
        translateX: useSpring(mouseX, animationConfig),
        translateY: useSpring(mouseY, animationConfig),
        zIndex,
      }}
    >
      {hoverChildren}
    </motion.div>
  );

  return createPortal(
    <AnimatePresence>{isHovered && hoverElement}</AnimatePresence>,
    document.body,
  );
}

export default memo(HoverElement);
