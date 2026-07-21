"use client";

import { useState } from "react";

export default function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-light"
      >
        Request Viewing
      </button>

      {open && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-navy-light p-6">
            {!sent ? (
              <>
                <h3 className="text-lg font-bold text-white">Make an Inquiry</h3>
                <form onSubmit={submitForm} className="mt-4 space-y-3">
                  <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white placeholder-slate-400" />
                  <input required placeholder="Email or phone" className="w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white placeholder-slate-400" />
                  <input type="date" className="w-full rounded-lg border border-white/10 bg-navy px-3 py-2 text-sm text-white" />
                  <button className="w-full rounded-lg bg-gold py-2 text-sm font-semibold text-navy hover:bg-gold-light">
                    Send Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-bold text-white">Request sent ✅</h3>
                <p className="mt-2 text-sm text-slate-400">Our team will contact you shortly.</p>
              </div>
            )}
            <button onClick={() => setOpen(false)} className="mt-4 text-sm text-slate-400 underline hover:text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}