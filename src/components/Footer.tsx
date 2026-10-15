import { PatternStrip } from "./PatternStrip";

export function Footer() {
  return (
    <footer>
      <PatternStrip className="block" />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div>
          <p className="font-display text-3xl text-leaf-deep">Ilé</p>
          <p className="text-ink/75">Spa &amp; Wellness</p>
        </div>
        <div className="text-ink/80 sm:text-right">
          <p>Lekki, Lagos</p>
          <p>Open every day, 9am to 7pm</p>
          <p className="mt-3 text-sm text-ink/60">
            &copy; Ilé Spa &amp; Wellness
          </p>
        </div>
      </div>
    </footer>
  );
}
