import type { AudienceCard } from "@/src/types";

interface IconProps {
  active: boolean;
}

export function PeopleIcon({ active }: IconProps) {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      <circle
        cx="36"
        cy="20"
        r="10"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M19 47C19 38.7157 25.7157 32 34 32H38C46.2843 32 53 38.7157 53 47"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle
        cx="18"
        cy="26"
        r="7"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M5 47C5 40.3726 10.3726 35 17 35H20"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LegalIcon({ active }: IconProps) {
  return (
    <svg
      width="110"
      height="92"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 13V47"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M20 18H42"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 18L13 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M20 18L27 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M12 34H28"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M42 18L35 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M42 18L49 34"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M34 34H50"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M22 47H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M17 51H45"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GovernmentIcon({ active }: IconProps) {
  return (
    <svg
      width="110"
      height="92"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        y="17"
        width="30"
        height="32"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M22 17V10H40V17"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M22 25H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <rect
        x="27"
        y="25"
        width="8"
        height="8"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
      <path
        d="M22 41H40"
        stroke={active ? "white" : "#f58216"}
        strokeWidth="2.5"
      />
    </svg>
  );
}

export function AudienceIcon({
  type,
  active,
}: {
  type: AudienceCard["icon"];
  active: boolean;
}) {
  if (type === "people") return <PeopleIcon active={active} />;
  if (type === "legal") return <LegalIcon active={active} />;
  return <GovernmentIcon active={active} />;
}
