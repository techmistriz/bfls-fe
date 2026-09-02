export function RegistrationIcon({ className }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14 9L35 6L39 35L18 38L14 9Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M19 17L33 15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 22L34 20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 27L35 25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M33 7V3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="33" cy="3" r="2" fill="currentColor" />
    </svg>
  );
}
