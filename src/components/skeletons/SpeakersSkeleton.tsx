export default function SpeakersSkeleton() {
  return (
    <div className="col-span-full grid grid-cols-1 gap-y-[55px] sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-[45px] lg:gap-y-[62px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          {/* Speaker Image */}
          <div className="h-[158px] w-[158px] animate-pulse rounded-full bg-[#e9edf3] sm:h-[160px] sm:w-[160px] lg:h-[200px] lg:w-[200px]" />

          {/* Name */}
          <div className="mt-[20px] h-[26px] w-[150px] animate-pulse rounded bg-[#e9edf3]" />

          {/* Designation */}
          <div className="mt-[10px] h-[20px] w-[190px] animate-pulse rounded bg-[#e9edf3]" />
        </div>
      ))}
    </div>
  );
}
