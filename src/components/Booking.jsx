import { useState } from "react";
import { CalendarClock, User, Phone, MessageSquare } from "lucide-react";

export default function Booking() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    setStatus(`Shukriya ${name}! Aapki booking request receive ho gayi. Hum jaldi confirm karenge.`);
    e.currentTarget.reset();
  };

  return (
    <section id="booking" className="relative bg-gradient-to-b from-black to-zinc-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_10%,rgba(99,102,241,.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Book an Appointment</h2>
          <p className="mt-2 text-white/70">Simple 3-step form — hum aap se call / WhatsApp par confirm kar lenge.</p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-white/80"><User className="h-4 w-4"/> Full Name</label>
              <input name="name" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-indigo-500/50" placeholder="Aap ka naam" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-white/80"><Phone className="h-4 w-4"/> Phone</label>
              <input name="phone" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-indigo-500/50" placeholder="03xx xxxxxxx" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-white/80"><CalendarClock className="h-4 w-4"/> Preferred Date</label>
              <input type="date" name="date" required className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 focus:border-indigo-500/50" />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-white/80"><CalendarClock className="h-4 w-4"/> Time</label>
              <select name="time" className="w-full appearance-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 focus:border-indigo-500/50">
                {['11:00 AM','12:00 PM','1:00 PM','3:00 PM','5:00 PM','7:00 PM','8:30 PM'].map(t=> <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 flex items-center gap-2 text-sm font-medium text-white/80"><MessageSquare className="h-4 w-4"/> Notes</label>
              <textarea name="notes" rows="3" className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-indigo-500/50" placeholder="Service preference / barber name" />
            </div>

            <div className="sm:col-span-2 flex items-center justify-between">
              <p className="text-sm text-white/60">Walk-ins welcome • Card & cash accepted</p>
              <button className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:bg-indigo-500">Submit Request</button>
            </div>
          </form>

          {status && (
            <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-300">
              {status}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
