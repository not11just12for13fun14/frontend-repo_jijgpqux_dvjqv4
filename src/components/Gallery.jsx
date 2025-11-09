export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1622288432441-6aef17a12f46?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1633681926022-84c69f26b382?q=80&w=1200&auto=format&fit=crop",
  ];
  return (
    <section id="gallery" className="bg-zinc-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Studio Vibes</h2>
          <p className="text-sm text-white/70">Real work • Real clients</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={src} alt="Menity salon gallery" className="h-40 w-full object-cover sm:h-56 md:h-64" loading={i<3?"eager":"lazy"} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
