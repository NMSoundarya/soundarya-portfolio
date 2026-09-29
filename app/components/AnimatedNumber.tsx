"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
  decimals?: number;
};

export default function AnimatedNumber({ value, suffix = "", decimals = 0 }: AnimatedNumberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplay(latest);
        },
      });
      return () => controls.stop();
    }
    setDisplay(0);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}