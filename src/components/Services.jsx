import { Scissors, Sparkles, Beard, Bath, SprayCan, Crown } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Signature Fade",
    desc: "Skin, mid, ya low fade — ultra clean finish with detailing.",
    price: "PKR 1,800"
  },
  {
    icon: Beard,
    title: "Beard Sculpt & Lineup",
    desc: "Hot towel, straight razor lines, aur beard shape perfection.",
    price: "PKR 1,200"
  },
  {
    icon: Bath,
    title: "Royal Shave",
    desc: "Pre-shave ritual + hot towel + cooling aftercare for ultra comfort.",
    price: "PKR 1,500"
  },
  {
    icon: SprayCan,
    title: "Color & Cover",
    desc: "Gray coverage ya creative color with premium products.",
    price: "From PKR 3,500"
  },
  {
    icon: Sparkles,
    title: "Keratin / Treatment",
    desc: "Frizz control, shine boost aur long-lasting smoothness.",
    price: "On consult"
  },
  {
    icon: Crown,
    title: "Groom’s Package",
    desc: "Hair + beard + facial — wedding-ready premium bundle.",
    price: "PKR 6,500"
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Our Services</h2>
            <p className="mt-2 max-w-2xl text-white/70">Har cut aur shave artistically crafted hota hai — detail, precision aur style ke sath.</p>
          </div>
          <a href="#booking" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10">Quick Book</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-5 backdrop-blur transition hover:border-indigo-500/40">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-white/80">{s.price}</span>
                <button className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/20">Book</button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{background:"radial-gradient(600px 200px at 100% 0%, rgba(99,102,241,.15), transparent)"}} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
