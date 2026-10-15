/**
 * The doorway. "Ilé" means home, so the hero is an arched door painted in
 * hibiscus, turmeric and leaf green, with an adire-style band, opening onto
 * a rising sun and banana leaves.
 */
const arch = (inset: number) =>
  `M${20 + inset} 560V220A${200 - inset} ${200 - inset} 0 0 1 ${420 - inset} 220V560Z`;

export function HeroArch({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 440 560"
      role="img"
      aria-label="An arched doorway in bands of hibiscus red, turmeric yellow and leaf green, opening onto a rising sun and banana leaves"
      className={className}
    >
      <defs>
        <pattern
          id="hero-adire"
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
        <clipPath id="hero-door">
          <path d={arch(100)} />
        </clipPath>
      </defs>

      <path d={arch(0)} fill="#b0245a" />
      <path d={arch(20)} fill="#f0b429" />
      <path d={arch(40)} fill="#2b7a4b" />
      <path d={arch(60)} fill="url(#hero-adire)" />

      <path d={arch(100)} fill="#fdf1cf" />
      <g clipPath="url(#hero-door)">
        <circle className="breathe" cx="220" cy="300" r="62" fill="#f0b429" />
        <path
          d="M130 560C130 470 160 405 232 372C226 440 200 505 130 560Z"
          fill="#2b7a4b"
        />
        <path
          d="M132 556C160 490 190 440 232 372"
          fill="none"
          stroke="#f8fbf4"
          strokeOpacity=".5"
          strokeWidth="2"
        />
        <path
          d="M310 560C310 478 276 425 214 398C222 462 250 512 310 560Z"
          fill="#1d5a38"
        />
        <path
          d="M308 556C282 500 250 452 214 398"
          fill="none"
          stroke="#f8fbf4"
          strokeOpacity=".5"
          strokeWidth="2"
        />
        <rect x="100" y="528" width="240" height="40" fill="#2b7a4b" />
      </g>
    </svg>
  );
}
