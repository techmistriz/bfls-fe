"use client";

import { useState } from "react";
import Image from "next/image";
import { useEvents } from "@/src/hooks/useEvents";
import { getSpeakerImageUrl } from "@/src/utils/image";
import type { Event } from "@/src/types/event.type";
import { agendaContent, agendaDecorations } from "@/src/data/agenda.data";

export default function Agenda({
  previewEvent,
  defaultOpenIndex = null,
}: {
  previewEvent?: Event;
  defaultOpenIndex?: number | null;
} = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { events } = useEvents();

  const event = previewEvent ?? events?.[0];
  const agendaItems = event?.agendas ?? [];

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setMouse({ x, y });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
    <section
      id="agenda"
      className="relative scroll-mt-20 overflow-hidden bg-[#FBFBFB] py-[40px] sm:py-[70px] lg:py-[50px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-0 top-0 w-full">
        <Image
          src="/images/schedule_top_bg.png"
          alt=""
          width={1920}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>

      {/* Cursor Animated Decorations */}
      {agendaDecorations.map((item, index) => {
        const moveX = mouse.x * item.strength;
        const moveY = mouse.y * item.strength;

        return (
          <div
            key={index}
            className={`pointer-events-none absolute hidden lg:block ${item.position}`}
            style={{
              transform: `translate3d(${moveX}px, ${moveY}px, 0)`,
              transition: "transform 0.25s ease-out",
              willChange: "transform",
            }}
          >
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.height}
            />
          </div>
        );
      })}

      <div className="relative mx-auto w-full max-w-[1190px] px-4 sm:px-6 lg:px-5">
        {/* Heading */}
        <div className="mb-[28px] text-center sm:mb-[45px]">
          <p className="mb-2 font-archivo text-[19px] font-semibold leading-tight text-[#EF7F1B] sm:mb-3 sm:text-[32px]">
            {agendaContent.subtitle}
          </p>

          <h2 className="mx-auto max-w-[850px] font-poppins text-[24px] font-extrabold leading-[1.25] text-[#566A8F] sm:text-[45px] sm:leading-[1.2] lg:text-[42px]">
            {agendaContent.title} <br className="hidden sm:block" />
            {agendaContent.titleSecondLine}
          </h2>

          <div className="mx-auto mt-[15px] h-[3px] w-[90px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />
        </div>

        <div className="relative w-full">
          {/* Dynamic Event Title */}
          <div className="relative z-10 mx-auto flex min-h-[65px] w-full max-w-[610px] items-center justify-center rounded-[12px] bg-[#566e99] px-4 py-3 text-center shadow-sm sm:min-h-[80px] sm:px-5 sm:py-4">
            <p className="font-archivo text-[13px] font-medium leading-[1.4] text-white sm:text-[18px]">
              {event?.title || agendaContent.fallbackEventTitle}
            </p>
          </div>

          {/* Dynamic Agenda */}
          <div className="mt-5 flex w-full flex-col gap-4 sm:mt-7 sm:gap-5">
            {agendaItems.map((item, index) => {
              const isOpen = openIndex === index;
              const speakers = (item.agenda_speakers ?? [])
                .filter((agendaSpeaker) => agendaSpeaker.speaker)
                .sort((a, b) => a.ordering - b.ordering);

              return (
                <div
                  key={item.id}
                  className={`relative overflow-hidden rounded-[14px] border bg-white transition-shadow duration-300 ${
                    isOpen
                      ? "border-[#f5c18f] shadow-[0_14px_40px_-18px_rgba(86,110,153,0.45)]"
                      : "border-[#e1e7f0] shadow-[0_4px_18px_-12px_rgba(86,110,153,0.35)] hover:shadow-[0_10px_30px_-16px_rgba(86,110,153,0.45)]"
                  }`}
                >
                  {/* Accent bar */}
                  <span
                    className={`absolute left-0 top-0 h-full w-[4px] transition-colors duration-300 ${
                      isOpen ? "bg-[#f58216]" : "bg-[#566e99]/25"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer flex-col gap-3 px-4 pb-5 pt-4 text-left sm:px-7 sm:pb-6 sm:pt-6 lg:flex-row lg:gap-8 lg:px-9"
                  >
                    {/* Time */}
                    <div className="flex items-center justify-between lg:block lg:w-[150px] lg:shrink-0">
                      <span className="inline-flex items-center rounded-full bg-[#fff3e8] px-3 py-1 font-poppins text-[12px] font-semibold text-[#f58216] sm:text-[14px] lg:px-0 lg:py-0 lg:bg-transparent lg:text-[20px] lg:leading-[1.4]">
                        {item.agenda_time}
                      </span>

                      <ToggleIcon isOpen={isOpen} className="lg:hidden" />
                    </div>

                    <div className="min-w-0 flex-1">
                      {/* Heading */}
                      <h3
                        className="font-poppins text-[16px] font-semibold leading-[1.35] text-[#526b97] sm:text-[20px] lg:text-[23px] [&_span]:text-[#EF7F1B]"
                        dangerouslySetInnerHTML={{ __html: item.agenda_title }}
                      />

                      {/* Short intro */}
                      {item.agenda_short_description && (
                        <p className="mt-2 font-archivo text-[13px] leading-[1.6] text-[#555] sm:text-[15px] lg:text-[16px]">
                          {item.agenda_short_description}
                        </p>
                      )}

                      {/* Speakers */}
                      {speakers.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-4 sm:mt-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-5">
                          {speakers.map(({ id, speaker }) => (
                            <div
                              key={id}
                              className="flex items-center gap-2 sm:gap-2.5"
                            >
                              <div className="relative h-[40px] w-[40px] shrink-0 overflow-hidden rounded-full ring-2 ring-[#f58216]/30 ring-offset-2 sm:h-[54px] sm:w-[54px]">
                                <Image
                                  src={getSpeakerImageUrl(speaker.image)}
                                  alt={speaker.name}
                                  fill
                                  sizes="54px"
                                  className="object-cover"
                                />
                              </div>

                              <div className="min-w-0">
                                <p className="font-poppins text-[12px] font-semibold leading-[1.3] text-[#526b97] sm:text-[14px]">
                                  {speaker.name}
                                </p>
                                <p className="mt-0.5 line-clamp-2 font-archivo text-[11px] leading-[1.35] text-[#777] sm:text-[12px]">
                                  {speaker.designation}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Read more */}
                      {item.agenda_description && (
                        <span className="mt-4 inline-flex items-center gap-1.5 font-archivo text-[13px] font-semibold text-[#f58216] sm:text-[14px]">
                          {isOpen
                            ? "Hide session details"
                            : "Read full session details"}
                          <span
                            className={`inline-block transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▾
                          </span>
                        </span>
                      )}
                    </div>

                    <ToggleIcon isOpen={isOpen} className="hidden lg:flex" />
                  </button>

                  {/* Full description */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.agenda_description && (
                        <div className="mx-4 mb-6 rounded-[10px] bg-[#f6f8fb] px-4 py-5 sm:mx-7 sm:px-6 lg:mb-8 lg:ml-[221px] lg:mr-9 lg:px-7 lg:py-6">
                          <p className="mb-2.5 font-poppins text-[12px] font-semibold uppercase tracking-[0.12em] text-[#f58216] sm:text-[13px]">
                            About this session
                          </p>
                          <div
                            className="font-archivo text-[13px] leading-[1.7] text-[#333] sm:text-[15px] lg:text-[16px] [&_li]:mb-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-3 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-5"
                            dangerouslySetInnerHTML={{
                              __html: item.agenda_description,
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleIcon({
  isOpen,
  className = "",
}: {
  isOpen: boolean;
  className?: string;
}) {
  return (
    <span
      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full font-poppins text-[22px] font-light leading-none text-white transition-colors duration-200 sm:h-[34px] sm:w-[34px] ${
        isOpen ? "bg-[#f58216]" : "bg-[#566e99]"
      } ${className}`}
    >
      {isOpen ? "−" : "+"}
    </span>
  );
}
