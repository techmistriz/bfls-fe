import { useEffect, useState } from "react";

export function useLightbox(itemCount: number) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const open = (index: number) => setSelectedIndex(index);
  const close = () => setSelectedIndex(null);

  const next = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % itemCount,
    );
  };

  const previous = () => {
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + itemCount) % itemCount,
    );
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return { selectedIndex, open, close, next, previous };
}
