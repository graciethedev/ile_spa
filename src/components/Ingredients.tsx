import { ingredients } from "@/data/site";
import { Reveal } from "./Reveal";

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28"
    >
      <Reveal>
        <h2 className="max-w-[40rem] font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08] text-leaf-deep">
          Made from things you already know
        </h2>
        <p className="mt-5 max-w-[34rem] text-ink/80">
          The shelves at Ilé look a lot like a Nigerian kitchen and market.
          Here is what we use most.
        </p>
      </Reveal>

      <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
        {ingredients.map((item, i) => (
          <Reveal key={item.name} delay={(i % 2) * 80}>
            <div className="flex gap-5">
              <span
                aria-hidden="true"
                className="mt-1.5 h-12 w-12 shrink-0 rounded-full border border-ink/15"
                style={{ backgroundColor: item.colour }}
              />
              <div>
                <dt className="font-display text-2xl text-ink">{item.name}</dt>
                <dd className="mt-1.5 max-w-[28rem] text-ink/75">
                  {item.note}
                </dd>
              </div>
            </div>
          </Reveal>
        ))}
      </dl>
    </section>
  );
}
