import React from "react";
import {
  Users,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Briefcase,
  Megaphone,
} from "lucide-react";

export default function WhyHost() {
  return (
    <section className="w-full py-24 bg-gradient-to-r from-brand-teal via-emerald-400 to-lime-400">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Host on Unforgettable ?
          </h2>
          <p className="mt-3 text-white/80">
            Everything you need to make your events successful
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon={<Users size={22} />}
            title="Reach More People"
            desc="Get your event in front of thousands of potential attendees across India."
          />

          <Card
            icon={<ShieldCheck size={22} />}
            title="Secure Payments"
            desc="Accept payments via UPI, cards, and net banking with instant confirmation."
          />

          <Card
            icon={<BarChart3 size={22} />}
            title="Real-Time Analytics"
            desc="Track registrations, revenue, and attendee data with our powerful dashboard."
          />

          <Card
            icon={<BadgeCheck size={22} />}
            title="Trusted Platform"
            desc="Verified organizer badge builds trust with your attendees."
          />

          <Card
            icon={<Briefcase size={22} />}
            title="Professional Tools"
            desc="Attendee management, QR check-ins, and automated communications."
          />

          <Card
            icon={<Megaphone size={22} />}
            title="Easy Promotion"
            desc="Get featured on our homepage and category pages for more visibility."
          />
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-[#FFFFFF24] backdrop-blur-xl p-6 text-white shadow-lg">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/80">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/80">{desc}</p>
    </div>
  );
}
