import React from "react";

const GetInTouchHero = () => {
  return (
    <section className="relative flex md:h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 text-center">
      {/* Background Gradient Layer */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 20% 30%, #d1fae5 0%, transparent 40%), 
                       radial-gradient(circle at 80% 70%, #fef3c7 0%, transparent 40%)`,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">
          Get in Touch
        </h2>

        <div className="text-5xl md:text-6xl font-bold mb-6 flex items-center">
          <span className="bg-gradient-to-r from-teal-500 via-lime-500 to-yellow-400 bg-clip-text text-transparent">
            uni
          </span>
          firo
        </div>

        <p className="text-lg md:text-xl text-gray-800 font-medium max-w-2xl">
          Have questions? We're here to help. Reach out to our team.
        </p>
      </div>
    </section>
  );
};

export default GetInTouchHero;
