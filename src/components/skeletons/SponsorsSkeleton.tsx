export default function SponsorsSkeleton() {
  return (
    <div className="mx-auto mt-[55px] grid max-w-[1130px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="relative flex h-[145px] flex-col items-center justify-center border border-[#e1e8f1] bg-white px-4"
        >
          {/* Sponsor type */}
          <div className="absolute left-0 right-0 top-[11px] flex justify-center">
            <div className="h-[14px] w-[70px] animate-pulse rounded bg-[#e9edf3]" />
          </div>

          {/* Logo */}
          <div className="mt-[12px] flex h-[70px] w-[170px] items-center justify-center">
            <div className="h-[50px] w-[120px] animate-pulse rounded-md bg-[#e9edf3]" />
          </div>
        </div>
      ))}
    </div>
  );
}
