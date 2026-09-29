"use client";

import { useState } from "react";
import Image from "next/image";
import { useEvents } from "@/src/hooks/useEvents";
import { getSpeakerImageUrl } from "@/src/utils/image";
import { agendaContent, agendaDecorations } from "@/src/data/agenda.data";

export default function Agenda() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const { events } = useEvents();

  const event = events?.[0];
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
      className="relative overflow-hidden bg-white py-[50px] sm:py-[70px] lg:py-[50px]"
      id="agenda"
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
        {/* Static Heading */}
        <div className="mb-[35px] text-center sm:mb-[45px]">
          <p className="mb-3 font-archivo text-[21px] font-bold leading-tight text-[#EF7F1B] sm:text-[30px]">
            {agendaContent.subtitle}
          </p>

          <h2 className="mx-auto max-w-[850px] font-poppins text-[27px] font-extrabold leading-[1.2] text-[#566A8F] sm:text-[42px] lg:text-[42px]">
            {agendaContent.title}
            <br className="hidden sm:block" />
            {agendaContent.titleSecondLine}
          </h2>

          <div className="mx-auto mt-[18px] h-[3px] w-[100px] bg-[#EF7F1B] sm:mt-[22px] sm:w-[120px]" />
        </div>

        <div className="relative w-full">
          {/* Dynamic Event Title */}
          <div className="relative z-10 mx-auto flex min-h-[70px] w-full max-w-[610px] items-center justify-center bg-[#566e99] px-4 py-4 text-center shadow-sm sm:min-h-[80px] sm:px-5">
            <p className="font-archivo text-[14px] font-semibold leading-[1.4] text-white sm:text-[17px]">
              {event?.title || agendaContent.fallbackEventTitle}
            </p>
          </div>

          {/* Dynamic Agenda */}
          <div className="w-full border border-[#e1e7f0] bg-white">
            {agendaItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.id}
                  className="border-b border-[#e1e7f0] last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(index)}
                    className="group flex w-full items-start gap-3 px-4 py-[17px] cursor-pointer hover:bg-gray-100 text-left transition-colors duration-200 sm:gap-6 sm:px-8 sm:py-[19px] lg:gap-13 lg:px-12"
                  >
                    <span className="w-[92px] shrink-0 font-poppins text-[15px] font-bold leading-[1.4] text-[#f58216] sm:w-[125px] sm:text-[20px] lg:w-[165px] lg:text-[24px]">
                      {item.agenda_time}
                    </span>

                    <span className="min-w-0 flex-1 pr-1 font-poppins text-[14px] font-bold leading-[1.4] text-[#526b97] sm:pr-3 sm:text-[18px] lg:text-[20px]">
                      {item.agenda_title}
                    </span>

                    <span
                      className={`mt-0.5 flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full font-poppins text-[22px] font-light leading-none text-white transition-colors duration-200 sm:h-[31px] sm:w-[31px] sm:text-[25px] ${
                        isOpen ? "bg-[#f58216]" : "bg-[#566e99]"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="w-full px-4 pb-8 pt-1 sm:px-8 sm:pb-10 lg:ml-[265px] lg:w-[750px] lg:px-0">
                        {/* Speakers */}
                        {item.agenda_speakers?.length > 0 && (
                          <div className="mb-8 grid w-full grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:flex lg:flex-wrap lg:gap-x-0 lg:gap-y-7">
                            {item.agenda_speakers.map((agendaSpeaker) => {
                              const speaker = agendaSpeaker.speaker;

                              if (!speaker) return null;

                              return (
                                <div
                                  key={agendaSpeaker.id}
                                  className="w-full text-center sm:w-auto lg:mr-0 lg:w-[150px]"
                                >
                                  <div className="relative mx-auto mb-2 h-[85px] w-[85px] overflow-hidden rounded-full sm:h-[105px] sm:w-[105px] lg:h-[115px] lg:w-[115px]">
                                    <Image
                                      src={getSpeakerImageUrl(speaker.image)}
                                      alt={speaker.name}
                                      fill
                                      className="object-cover"
                                    />
                                  </div>

                                  <h4 className="font-poppins text-[12px] font-bold uppercase leading-[1.3] text-[#526b97] sm:text-[14px] lg:text-[15px]">
                                    {speaker.name}
                                  </h4>

                                  <p className="mt-2 font-archivo text-[11px] font-medium leading-[1.45] text-[#333] sm:text-[12px] lg:text-[14px] lg:leading-[1.6]">
                                    {speaker.designation}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Description */}
                        {item.agenda_description && (
                          <div
                            className="w-full font-archivo text-[13px] font-medium leading-[1.6] text-[#333]
                              sm:text-[15px] lg:text-[16px] lg:leading-[1.65]
                              [&_ul]:list-disc [&_ul]:pl-5
                              [&_ol]:list-decimal [&_ol]:pl-5
                              [&_li]:mb-1"
                            dangerouslySetInnerHTML={{
                              __html: item.agenda_description,
                            }}
                          />
                        )}
                      </div>
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
