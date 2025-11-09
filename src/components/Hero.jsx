import { Sparkles, Scissors, Star, Phone, MapPin, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-zinc-900 via-zinc-900 to-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:items-end">
          <div className="w-full md:w-2/3">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              Premium Men’s Grooming
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
              MENITY Hair Salon
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              Sharp fades, clean shaves, aur luxury grooming ek relaxing lounge vibe ke sath. Apni style ko next level par le jayein — premium service without compromise.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="tel:+923001234567"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:translate-y-0.5 hover:bg-indigo-500"
              >
                <Phone className="h-5 w-5" /> Phone Booking
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <Scissors className="h-5 w-5" /> View Services
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                4.9/5 rating
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-emerald-400" />
                Daily 11am – 9pm
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-400" />
                Main Boulevard, Lahore
              </div>
            </div>
          </div>

          <div className="relative w-full md:w-1/3">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1593702287920-9e65d29f2d5f?q=80&w=1200&auto=format&fit=crop"
                alt="Barber crafting a precise fade haircut"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />
              <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
                Signature Fade • Hot Towel Shave
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
