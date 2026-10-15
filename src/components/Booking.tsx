"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { naira, services, slots } from "@/data/site";

type Errors = Partial<
  Record<"service" | "date" | "time" | "name" | "phone", string>
>;

// Today's date as YYYY-MM-DD in the visitor's own time zone.
function todayISO() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

const field =
  "w-full rounded-xl border border-ink/25 bg-paper px-4 py-3 text-ink placeholder:text-ink/45";

export function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const dateInput = useRef<HTMLInputElement>(null);

  // Block past dates in the picker. Set on the DOM node after load so the
  // server-rendered page never depends on the current date.
  useEffect(() => {
    if (dateInput.current) dateInput.current.min = todayISO();
  }, []);

  // "Book this" links in the services list pre-select a treatment here.
  useEffect(() => {
    const onSelect = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      setService(id);
      setSubmitted(false);
      setErrors((prev) => ({ ...prev, service: undefined }));
    };
    window.addEventListener("ile:select-service", onSelect);
    return () => window.removeEventListener("ile:select-service", onSelect);
  }, []);

  const chosen = services.find((s) => s.id === service);

  function validate(): Errors {
    const next: Errors = {};
    if (!service) next.service = "Choose a treatment.";
    if (!date) next.date = "Pick a date.";
    else if (date < todayISO()) next.date = "Pick today or a later date.";
    if (!time) next.time = "Choose a time.";
    if (name.trim().length < 2) next.name = "Enter your name.";
    if (!/^\+?[0-9\s-]{10,16}$/.test(phone.trim()))
      next.phone = "Enter a phone number with 10 to 14 digits, like 0803 000 0000.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    // PHASE 2: send this request to the booking API and save it to the database.
    setSubmitted(true);
  }

  const prettyDate = date
    ? new Date(`${date}T00:00`).toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";

  return (
    <section id="book" className="bg-leaf text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
        <div>
          <h2 className="font-display text-[clamp(2.1rem,4.5vw,3.4rem)] leading-[1.08]">
            Book your visit
          </h2>
          <p className="mt-5 max-w-[28rem] text-paper/90">
            Choose a treatment and a time. We will confirm your booking by
            phone call or text on the same day.
          </p>
          <p className="mt-8 text-paper/90">
            Open every day, 9am to 7pm.
            <br />
            Lekki, Lagos.
          </p>
        </div>

        <div className="rounded-[1.75rem] bg-paper p-6 text-ink sm:p-9">
          {submitted && chosen ? (
            <div role="status" aria-live="polite">
              <h3 className="font-display text-3xl text-leaf-deep">
                Request received
              </h3>
              <p className="mt-4">
                {chosen.name} on {prettyDate} at {time}.
              </p>
              <p className="mt-1 text-ink/75">
                {chosen.minutes} minutes, {naira(chosen.price)}. We will contact{" "}
                {name.trim()} on {phone.trim()} to confirm.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 rounded-full border-2 border-leaf-deep px-6 py-3 font-semibold text-leaf-deep hover:bg-mist"
              >
                Change details
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-6">
              <div>
                <label htmlFor="service" className="mb-2 block font-semibold">
                  Treatment
                </label>
                <select
                  id="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  aria-invalid={!!errors.service}
                  aria-describedby={errors.service ? "service-error" : undefined}
                  className={field}
                >
                  <option value="">Choose a treatment</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}, {s.minutes} minutes, {naira(s.price)}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p id="service-error" className="mt-1.5 text-sm font-medium text-zobo">
                    {errors.service}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="date" className="mb-2 block font-semibold">
                  Date
                </label>
                <input
                  id="date"
                  ref={dateInput}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  aria-invalid={!!errors.date}
                  aria-describedby={errors.date ? "date-error" : undefined}
                  className={field}
                />
                {errors.date && (
                  <p id="date-error" className="mt-1.5 text-sm font-medium text-zobo">
                    {errors.date}
                  </p>
                )}
              </div>

              <fieldset>
                <legend className="mb-2 font-semibold">Time</legend>
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {slots.map((slot) => (
                    <div key={slot}>
                      <input
                        id={`slot-${slot}`}
                        type="radio"
                        name="time"
                        value={slot}
                        checked={time === slot}
                        onChange={() => setTime(slot)}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`slot-${slot}`}
                        className="block cursor-pointer rounded-xl border border-ink/25 py-2.5 text-center font-medium hover:bg-mist peer-checked:border-leaf-deep peer-checked:bg-leaf-deep peer-checked:text-paper peer-focus-visible:outline peer-focus-visible:outline-[3px] peer-focus-visible:outline-offset-2 peer-focus-visible:outline-zobo"
                      >
                        {slot}
                      </label>
                    </div>
                  ))}
                </div>
                {errors.time && (
                  <p className="mt-1.5 text-sm font-medium text-zobo">
                    {errors.time}
                  </p>
                )}
              </fieldset>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={field}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-sm font-medium text-zobo">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="0803 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={field}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-sm font-medium text-zobo">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-zobo px-8 py-4 text-lg font-semibold text-paper hover:bg-zobo/90 sm:w-auto"
              >
                Request this booking
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
