interface DotsRowProps {
  count?: number;
  color?: string;
  size?: "sm" | "md";
  animation?: "float" | "slide";
  className?: string;
}

export function DotsRow({
  count = 7,
  color = "bg-white",
  size = "md",
  animation = "slide",
  className = "",
}: DotsRowProps) {
  const dotSize = size === "sm" ? "h-[6px] w-[6px]" : "h-[7px] w-[7px]";
  const animationClass =
    animation === "float" ? "animate-dots-float" : "animate-dots-slide";

  return (
    <div
      className={`flex items-center gap-[9px] ${animationClass} ${className}`}
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
