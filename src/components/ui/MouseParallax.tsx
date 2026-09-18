"use client";

import { useEffect, useState } from "react";

interface MouseParallaxProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function MouseParallax({
  children,
  strength = 24,
  className = "",
}: MouseParallaxProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * strength;

      const y = (event.clientY / window.innerHeight - 0.5) * strength;

      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [strength]);

  return (
    <span
      className={`inline-block transition-transform duration-500 ease-out ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {children}
    </span>
  );
}
