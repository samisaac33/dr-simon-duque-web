type Props = {
  className?: string;
  variant?: "light" | "dark";
};

/** Marca simple: corazón pediátrico + pulso. */
export function Logo({ className = "h-10 w-10", variant = "dark" }: Props) {
  const stroke = variant === "light" ? "#fef2f2" : "#991b1b";
  const fill = variant === "light" ? "#fca5a5" : "#dc2626";

  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="48" height="48" rx="12" className="fill-red-50" />
      <path
        d="M24 34s-8-5.2-8-11.2c0-3.2 2.4-5.6 5.6-5.6 1.8 0 3.4.9 4.4 2.2 1-1.3 2.6-2.2 4.4-2.2 3.2 0 5.6 2.4 5.6 5.6C32 28.8 24 34 24 34z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M10 26h6l2-4 3 8 2-5h5"
        stroke={stroke}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
