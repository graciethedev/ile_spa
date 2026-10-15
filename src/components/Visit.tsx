import { visitSteps } from "@/data/site";
import { Reveal } from "./Reveal";

export function Visit() {
  return (
    <section id="visit" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-[36rem] font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-leaf-deep">
            What a visit looks like
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {visitSteps.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 90}>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-leaf font-display text-lg text-paper"
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink/75">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
