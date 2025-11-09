import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-2xl font-bold text-white">MENITY</h3>
            <p className="mt-1 text-sm text-white/70">Premium Men’s Salon • Lahore</p>
            <div className="mt-3 flex flex-col gap-1 text-white/70">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Main Boulevard, Lahore</p>
              <a href="tel:+923001234567" className="flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4"/> +92 300 123 4567</a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10" aria-label="Instagram">
              <Instagram className="h-5 w-5"/>
            </a>
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10" aria-label="Facebook">
              <Facebook className="h-5 w-5"/>
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} MENITY Hair Salon — All rights reserved.</p>
      </div>
    </footer>
  );
}
