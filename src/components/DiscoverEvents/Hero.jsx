import Link from "next/link";

export default function Emerge2026Hero() {
  return (
    <div className="relative min-h-screen bg-linear-to-br bg-blue-900 overflow-hidden">
      {/* Animated background pattern */}
      <div className="text-center my-8">
        <h1 className="text-6xl text-white lg:text-7xl font-bold tracking-tight">
          EMERGE 2026
        </h1>
        <p className="text-2xl lg:text-3xl font-semibold text-white">
          THE BEACHSIDE STARTUP FESTIVAL
        </p>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Curved lines decoration */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 Q400,100 800,300 T1600,300"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,500 Q600,350 1200,500 T2400,500"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="">
            <img
              src="/emerge.webp"
              alt="EMERGE 2026 - Collaborative discussion"
            />
          </div>

          {/* Right side - Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  Build. Pitch. Connect.
                </h2>
                <p className="text-xl lg:text-2xl font-light italic text-blue-100">
                  Where startups meet opportunity.
                </p>
              </div>

              <p className="text-lg lg:text-xl text-blue-50 leading-relaxed max-w-2xl">
                A three-day startup and innovation festival bringing together
                founders, investors, students, creators and industry leaders.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-2xl font-semibold">9–11 JANUARY 2026</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-2xl font-semibold">
                  TANNIRBHAVI BEACH, MANGALURU
                </p>
              </div>
            </div>

            <Link href={"/emerge"}>
              <div className="pt-4">
                <button className="bg-white cursor-pointer text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  Register Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-24 fill-white/5">
          <path d="M0,64 C240,96 480,96 720,64 C960,32 1200,32 1440,64 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
}
