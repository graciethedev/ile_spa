import { HeroArch } from "./HeroArch";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6 lg:pb-24 lg:pt-16"
    >
      <div>
        <h1 className="font-display text-[clamp(2.9rem,7.2vw,5.6rem)] leading-[1.02] tracking-[-0.01em] text-leaf-deep">
          Rest the way home does it.
        </h1>
        <p className="mt-6 max-w-[34rem] text-xl leading-relaxed text-ink/80">
          Massage, facials and body rituals made with shea, moringa and
          hibiscus. Come in for an hour, stay for the tea.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href="#book"
            className="rounded-full bg-zobo px-8 py-4 text-lg font-semibold text-paper hover:bg-zobo/90"
          >
            Book a visit
          </a>
          <a
            href="#services"
            className="text-lg font-semibold text-leaf-deep underline decoration-sun decoration-[3px] underline-offset-[6px] hover:text-zobo"
          >
            See the treatments
          </a>
        </div>
        <p className="mt-10 text-base text-ink/70">
          Lekki, Lagos. Open every day, 9am to 7pm.
        </p>
      </div>

      <HeroArch className="mx-auto h-auto w-full max-w-[26rem] lg:ml-auto" />
    </section>
  );
}
