import React from "react";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center items-start gap-y-6">
            <h3 className="text-5xl font-semibold text-teal-500 mb-4">
              Our Story
            </h3>

            <p className="text-lg text-black/80 leading-relaxed mb-4">
              Unforgettable makes discovering and attending local events simple.
            </p>

            <p className="text-lg text-black/80 leading-relaxed mb-4">
              From festivals and DJ nights to community sports leagues and
              professional meetups, we offer one reliable platform to discover
              events, register quickly and participate with confidence.
            </p>

            <p className="text-lg text-black/80 leading-relaxed mb-4">
              We connect organizers and participants through a secure,
              well-structured system that removes confusion and simplifies the
              entire process.
            </p>

            <p className="text-lg text-black font-medium leading-relaxed">
              Our mission is clear: to make events memorable for the
              experience—not the effort.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/ourstory.jpg"
                alt="Unforgettable event crowd"
                className="w-full h-full object-cover"
              />

              {/* Image Overlay Text */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  Unforgettable
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
