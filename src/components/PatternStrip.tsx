/** A band of adire-style diamonds and dots, the same motif as the doorway. */
export function PatternStrip({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="28"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern
          id="strip-adire"
          width="28"
          height="28"
          patternUnits="userSpaceOnUse"
        >
          <rect width="28" height="28" fill="#1d5a38" />
          <path
            d="M14 3 25 14 14 25 3 14Z"
            fill="none"
            stroke="#f8fbf4"
            strokeOpacity=".55"
            strokeWidth="1.5"
          />
          <circle cx="14" cy="14" r="2.2" fill="#f0b429" />
        </pattern>
      </defs>
      <rect width="100%" height="28" fill="url(#strip-adire)" />
    </svg>
  );
}
