import React from "react";
import { Users } from "lucide-react";

export default function WhatWeStandFor() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-brand-teal via-emerald-400 to-lime-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">What We Stand For</h2>
          <p className="mt-3 text-white/80">
            Our core values guide everything we do at Unforgettable
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={<Users size={22} />}
            title="Community First"
            desc="We believe in the power of bringing people together through shared experiences"
          />

          <Card
            icon={<Users size={22} />}
            title="Inclusive Events"
            desc="From cultural festivals to sports leagues, we celebrate diversity in all forms."
          />

          <Card
            icon={<Users size={22} />}
            title="Seamless Experience"
            desc="Easy discovery, secure payments and hassle-free registrations for everyone."
          />
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl flex flex-col justify-center items-center border border-white/80 bg-[#FFFFFF24] backdrop-blur-xl p-6 text-white shadow-lg">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/80">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-center text-white/80">{desc}</p>
    </div>
  );
}
