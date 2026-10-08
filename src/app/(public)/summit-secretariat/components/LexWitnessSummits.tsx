"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { summitEditions } from "@/src/data/summitEditions.data";

export default function LexWitnessSummits() {
  const [openEdition, setOpenEdition] = useState<number | null>(0);

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const toggleEdition = (index: number) => {
    const button = buttonRefs.current[index];

    if (!button) return;

    // Position of clicked button before accordion changes
    const beforeTop = button.getBoundingClientRect().top;

    setOpenEdition((current) => (current === index ? null : index));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const afterTop = button.getBoundingClientRect().top;

        // Move page so clicked button stays exactly where it was
        window.scrollBy({
          top: afterTop - beforeTop,
          behavior: "instant",
        });
      });
    });
  };

  return (
    <div className="w-full">
      <h2 className="mb-[18px] font-archivo text-[24px] font-bold leading-[1.3] text-[#f58220] max-sm:text-[20px] max-sm:leading-[1.4]">
        Meanwhile here’s a gist of The Lex Witness Summits so far;
      </h2>

      <div className="w-full">
        {summitEditions.map((edition, index) => {
          const isOpen = openEdition === index;

          return (
            <div key={edition.year} className="mb-[18px] w-full last:mb-0">
              {/* ---------- ACCORDION HEADER ---------- */}

              <motion.button
                ref={(element) => {
                  buttonRefs.current[index] = element;
                }}
                type="button"
                onClick={() => toggleEdition(index)}
                animate={{
                  backgroundColor: isOpen ? "#1195D0" : "#f3f5f7",
                  color: isOpen ? "#ffffff" : "#111111",
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                className="flex min-h-[54px] w-full cursor-pointer items-center justify-between px-[30px] text-left font-archivo text-[16px] font-bold max-sm:min-h-[52px] max-sm:px-[18px] max-sm:text-[14px]"
              >
                <span>Lex Witness Summits {edition.year}</span>

                <motion.span
                  className="ml-4 shrink-0"
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </motion.span>
              </motion.button>

              {/* ---------- ACCORDION CONTENT ---------- */}

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      height: {
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      },
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="overflow-hidden bg-[#f5f5f5]"
                  >
                    <div className="px-[10px] py-[20px] max-sm:px-[10px] max-sm:py-[15px]">
                      <div className="space-y-[20px]">
                        {edition.items.map((item, itemIndex) => (
                          <motion.div
                            key={`${edition.year}-${itemIndex}`}
                            initial={{
                              opacity: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              delay: itemIndex * 0.05,
                              ease: "easeOut",
                            }}
                            className="grid grid-cols-[240px_1fr] gap-[30px] max-sm:grid-cols-1 max-sm:gap-[18px]"
                          >
                            {/* ---------- IMAGE ---------- */}

                            <div className="flex min-h-[215px] items-start justify-center bg-[#f5f5f5] p-[4px] max-sm:min-h-0">
                              <div className="relative w-full max-w-[230px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={230}
                                  height={215}
                                  className="h-auto w-full object-contain"
                                />
                              </div>
                            </div>

                            {/* ---------- CONTENT ---------- */}

                            <div className="font-archivo text-[16px] leading-[1.5] text-[#222] max-sm:text-[14px] max-sm:leading-[1.65]">
                              <p>
                                <strong>{item.title}</strong> {item.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
