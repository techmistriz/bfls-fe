const registrationPlans = [
    {
        title: "Corporate Registrations",
        price: "₹7,000",
        badge: "TRENDING",
        badgePosition: "top-center",
        bg: "#b9e3df",
        details: [
            "1 Seat – INR 10000 per Seat",
            "2 Seats – INR 7500 per Seat",
            "3 Seats – INR 7000 per Seat",
        ],
    },
    {
        title: "Law Firms & Solutions Providers",
        price: "₹9,000",
        bg: "#ebc9ec",
        details: [
            "1 Seat – INR 12000 per Seat",
            "2 Seats – INR 10000 per Seat",
            "3 Seats – INR 9000 per Seat",
        ],
    },
    {
        title: "International Delegates",
        price: "₹20,000",
        bg: "#ffc79f",
        details: [
            "1 Seat – INR 30000 per Seat",
            "2 Seats – INR 25000 per Seat",
            "3 Seats – INR 20000 per Seat",
        ],
    },
    {
        title: "The Lex Witness Annual Pass",
        price: "₹40,000",
        badge: "MOST PREFERRED",
        badgePosition: "top-right",
        bg: "#ffe6a8",
        details: [
            "Access to all Summits",
            "Transferable at any Time",
            "1 Pass: INR 60000 per pass",
            "2 Passes: INR 50000 per pass",
            "3 Passes: INR 40000 per pass",
        ],
    },
];

export default function RegistrationSection() {
    return (
        <section className="w-full bg-[#f7f7f7] px-4 py-12 sm:px-6 lg:px-10">
            <div className="mx-auto max-w-[1110px]">

                {/* Section Heading */}
                <div className="mb-8 text-center">
                    {/* Registration Icon */}
                    <div className="mb-3 flex justify-center">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#ed1c24]"
                        >
                            <path
                                d="M14 9L35 6L39 35L18 38L14 9Z"
                                stroke="currentColor"
                                strokeWidth="2"
                            />
                            <path
                                d="M19 17L33 15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M20 22L34 20"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M21 27L35 25"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                d="M33 7V3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <circle
                                cx="33"
                                cy="3"
                                r="2"
                                fill="currentColor"
                            />
                        </svg>
                    </div>

                    <h2 className="text-[36px] font-normal leading-[1.15] tracking-[-1.5px] text-[#333] sm:text-[42px]">
                        Delegate Registrations
                    </h2>

                    <p className="mt-4 text-[14px] text-[#1769aa]">
                        It’s a Race Against Time. Avail Best Possible Discounts Now.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {registrationPlans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative flex min-h-[350px] flex-col rounded-[9px] px-7 pb-5 pt-9 shadow-[0_7px_10px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1"
                            style={{ backgroundColor: plan.bg }}
                        >
                            {/* Badge */}
                            {plan.badge && (
                                <div
                                    className={`absolute top-[-11px] rounded-[5px] bg-[#d71920] px-[11px] py-[4px] text-[14px] font-normal leading-[18px] text-white ${plan.badgePosition === "top-right"
                                            ? "left-1/2 -translate-x-1/2"
                                            : "left-1/2 -translate-x-1/2"
                                        }`}
                                >
                                    {plan.badge}
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="text-center">
                                <h3 className="min-h-[22px] text-[16px] font-bold leading-[22px] text-[#ed1c24]">
                                    {plan.title}
                                </h3>

                                <h4 className="mt-3 whitespace-nowrap text-[29px] font-bold leading-[34px] tracking-[-1.2px] text-[#222]">
                                    {plan.price}{" "}
                                    <span className="text-[25px]">Onwards</span>
                                </h4>

                                <div className="mt-4 space-y-2">
                                    {plan.details.map((detail, detailIndex) => (
                                        <p
                                            key={detailIndex}
                                            className="text-[15px] leading-[21px] text-[#222]"
                                        >
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Button */}
                            <div className="mt-auto flex justify-center pt-6">
                                <button
                                    type="button"
                                    className="min-w-[129px] rounded-[4px] border border-[#ed1c24] bg-transparent px-5 py-[13px] text-[14px] font-bold text-[#ed1c24] transition-all duration-300 hover:bg-[#ed1c24] hover:text-white"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}