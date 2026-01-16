import React from "react";

export default function AboutUnifiro() {
  return (
    <section className="w-full lg:h-[80vh] flex flex-col justify-center items-center py-28 bg-gradient-to-b from-teal-50 via-lime-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          About{" "}
          <span className="bg-gradient-to-r from-teal-500 via-lime-500 to-yellow-400 bg-clip-text text-transparent">
            uni
          </span>
          firo
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-3xl mx-auto text-lg text-black/70">
          We're on a mission to make event discovery and organization seamless
          for everyone across India.
        </p>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard value="1000+" label="Events Hosted" />
          <StatCard value="500+" label="Verified Organizers" />
          <StatCard value="50+" label="Cities Covered" />
          <StatCard value="1M+" label="Happy Attendees" />
        </div>
      </div>
    </section>
  );
}

/* Stat Card */
function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-teal-300/50 bg-white/70 backdrop-blur-md p-6 shadow-sm">
      <div className="text-2xl font-bold text-teal-500">{value}</div>
      <p className="mt-2 text-sm text-black">{label}</p>
    </div>
  );
}
