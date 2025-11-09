import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">MENITY</a>
        <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#gallery" className="hover:text-white">Gallery</a>
          <a href="#booking" className="hover:text-white">Booking</a>
          <a href="tel:+923001234567" className="rounded-full bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-500">Call Now</a>
        </nav>
        <a href="#booking" className="sm:hidden rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">Book</a>
      </div>
    </header>
  );
}

export default App;
