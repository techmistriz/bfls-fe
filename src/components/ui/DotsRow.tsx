"use client";

import { useEffect, useState } from "react";

interface DotsRowProps {
  count?: number;
  color?: string;
  size?: "sm" | "md";
  className?: string;
  scrollSpeed?: number;
  maxMovement?: number;
  smoothness?: number;
}

export function DotsRow({
  count = 7,
  color = "bg-white/80",
  size = "md",
  className = "",
  scrollSpeed = 0.15,
  maxMovement = 120,
  smoothness = 0.08,
}: DotsRowProps) {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    let currentX = 0;
    let targetX = 0;

    const updateTarget = () => {
      targetX = Math.min(window.scrollY * scrollSpeed, maxMovement);
    };

    const animate = () => {
      currentX += (targetX - currentX) * smoothness;

      // Prevent tiny floating-point movement
      if (Math.abs(targetX - currentX) < 0.01) {
        currentX = targetX;
      }

      setTranslateX(currentX);

      animationFrame = requestAnimationFrame(animate);
    };

    updateTarget();
    animationFrame = requestAnimationFrame(animate);

    window.addEventListener("scroll", updateTarget, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateTarget);
      cancelAnimationFrame(animationFrame);
    };
  }, [scrollSpeed, maxMovement, smoothness]);

  const dotSize = size === "sm" ? "h-[6px] w-[6px]" : "h-[7px] w-[7px]";

  return (
    <div
      className={`flex items-center gap-[9px] ${className}`}
      style={{
        transform: `translate3d(${translateX}px, 0, 0)`,
        willChange: "transform",
      }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`${dotSize} shrink-0 rounded-full ${color} max-sm:h-[6px] max-sm:w-[6px]`}
        />
      ))}
    </div>
  );
}
