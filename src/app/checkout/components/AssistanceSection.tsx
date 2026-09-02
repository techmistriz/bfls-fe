export function AssistanceSection() {
  return (
    <div className="mt-[25px] rounded-[4px] border border-[#dce0e5] bg-[#fafbfc] px-[15px] py-[18px] sm:px-[19px] sm:py-[21px]">
      <h3 className="mb-[14px] text-[15px] font-bold uppercase leading-[20px] text-[#d9232e] sm:text-[16px]">
        IN CASE OF ANY ASSISTANCE WRT YOUR PURCHASE
      </h3>

      <div className="space-y-[10px]">
        <p className="break-words text-[13px] leading-[17px] text-[#333] sm:text-[14px]">
          Bhupinder Kaur | +91-9654155065 |{" "}
          <a
            href="mailto:bhupinder@witnesslive.in"
            className="text-[#111] hover:underline"
          >
            bhupinder@witnesslive.in
          </a>
        </p>

        <p className="break-words text-[13px] leading-[17px] text-[#333] sm:text-[14px]">
          Neelima Maheshwari | +91-8000841600 |{" "}
          <a
            href="mailto:neelima.maheshwari@witnesslive.in"
            className="hover:underline"
          >
            neelima.maheshwari@witnesslive.in
          </a>
        </p>
      </div>
    </div>
  );
}
