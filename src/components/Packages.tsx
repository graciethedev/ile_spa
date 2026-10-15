import { naira, packages } from "@/data/site";
import { Reveal } from "./Reveal";

export function Packages() {
  const [featured, ...others] = [
    ...packages.filter((p) => p.featured),
    ...packages.filter((p) => !p.featured),
  ];

  return (
    <section id="packages" className="bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="max-w-[36rem] font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-leaf-deep">
            Packages for a whole afternoon
          </h2>
          <p className="mt-5 max-w-[34rem] text-ink/80">
            Treatments combined and priced a little lower than booking each
            one on its own.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <article className="h-full rounded-[2rem] bg-leaf p-8 text-paper sm:p-10">
              <h3 className="font-display text-3xl sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-2 text-paper/85">
                {featured.length}, {featured.forWho}
              </p>
              <ul className="mt-7 space-y-2.5">
                {featured.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7rem] h-2 w-2 shrink-0 rounded-full bg-sun"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-9 font-display text-4xl text-sun">
                {naira(featured.price)}
              </p>
              <a
                href="#book"
                className="mt-6 inline-block rounded-full bg-paper px-7 py-3.5 font-semibold text-leaf-deep hover:bg-sun"
              >
                Book the full day
              </a>
            </article>
          </Reveal>

          <div className="grid gap-6 lg:col-span-2">
            {others.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article className="h-full rounded-[1.25rem] border border-ink/15 bg-paper p-7">
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink/65">
                    {p.length}, {p.forWho}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-ink/80">
                    {p.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-5 font-display text-2xl text-zobo">
                    {naira(p.price)}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
