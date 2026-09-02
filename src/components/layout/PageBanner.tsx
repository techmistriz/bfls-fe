import Image from "next/image";
import type { Breadcrumb } from "@/src/types";

interface PageBannerProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
}

export function PageBanner({
  backgroundImage,
  title,
  subtitle,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <section className="relative mt-[88px] h-[398px] w-full overflow-hidden">
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className="object-cover object-center"
      />

      <div className="relative z-10 mx-auto flex h-full max-w-[1130px] items-center px-6 lg:px-0">
        <div>
          <h1 className="font-poppins text-[38px] font-bold leading-tight text-white md:text-[52px]">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-1 font-archivo text-[16px] font-medium text-white md:text-[17px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 right-[7%] z-20 md:right-[20%]">
        <div className="flex h-[56px] w-[235px] items-center justify-center gap-3 bg-white font-archivo shadow-sm">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-3">
              {index > 0 && <span className="text-[13px] text-[#999]">/</span>}
              {crumb.href ? (
                <a
                  href={crumb.href}
                  className="text-[13px] text-[#555] hover:text-[#EF7F1B]"
                >
                  {crumb.label}
                </a>
              ) : (
                <span className="text-[13px] font-medium text-[#EF7F1B]">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
