"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#ingredients", label: "Ingredients" },
  { href: "#visit", label: "Your visit" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="flex items-baseline gap-2"
          aria-label="Ilé Spa & Wellness, back to top"
        >
          <span className="font-display text-3xl leading-none text-leaf-deep">
            Ilé
          </span>
          <span className="text-sm font-medium text-ink/70">
            Spa &amp; Wellness
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.95rem] font-medium text-ink/80 hover:text-zobo"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="rounded-full bg-zobo px-5 py-2.5 text-[0.95rem] font-semibold text-paper hover:bg-zobo/90"
          >
            Book a visit
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-ink/10 bg-paper px-5 pb-5 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-3 text-lg font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-zobo px-5 py-3 text-center font-semibold text-paper"
          >
            Book a visit
          </a>
        </nav>
      )}
    </header>
  );
}
