"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full  flex items-center">
      {/* Gradient Background */}
      <div className="w-full lg:min-h-[90vh] bg-blur-3xl bg-linear-to-r from-[#95e2e6] via-[#ede99d] to-[#efc488]">
        <div className="max-w-7xl mx-auto px-6 py-36 flex  items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
              Bring Your Events
              <br />
              to Life with{" "}
              <span className="text-teal-600">uni</span>firo
            </h1>

            <p className="mt-6 text-lg md:text-xl text-black/80">
              From cultural celebrations to sports leagues, reach thousands of
              attendees with easy registration, secure payments, and powerful
              management tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/discover"
                className="rounded-xl bg-gradient-to-r from-teal-500 to-lime-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:scale-105 transition"
              >
                Explore Events
              </Link>

              <Link
                href="/organiser-login"
                className="rounded-xl border-2 border-black bg-white px-8 py-4 text-lg font-semibold text-black hover:bg-black hover:text-white transition"
              >
                Host an Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
