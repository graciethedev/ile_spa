"use client";

import { naira, services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-leaf-deep">
              Six ways to slow down
            </h2>
            <p className="mt-5 max-w-[30rem] text-ink/80">
              Every treatment begins with a cup of chilled zobo and a short
              chat about what your body needs today. Choose one, or combine
              them in a package.
            </p>
          </div>
        </Reveal>

        <ul>
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={i < 2 ? 0 : 60}>
                <div className="grid gap-x-8 gap-y-3 border-b border-ink/15 py-7 first:pt-0 sm:grid-cols-[1fr_auto]">
                  <div>
                    <h3 className="font-display text-2xl leading-snug text-ink">
                      {s.name}
                    </h3>
                    <p className="mt-2 max-w-[34rem] text-ink/75">{s.blurb}</p>
                    <a
                      href="#book"
                      onClick={() =>
                        window.dispatchEvent(
                          new CustomEvent("ile:select-service", {
                            detail: s.id,
                          }),
                        )
                      }
                      className="mt-4 inline-block font-semibold text-zobo underline decoration-2 underline-offset-4 hover:text-leaf-deep"
                    >
                      Book {s.name.toLowerCase()}
                    </a>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-display text-2xl text-leaf-deep">
                      {naira(s.price)}
                    </p>
                    <p className="text-sm text-ink/65">{s.minutes} minutes</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
