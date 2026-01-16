import React from "react";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            How It Works
          </h2>
          <p className="mt-3 text-black/70">
            Get your event live in minutes with our simple 4-step process
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col justify-center items-start space-y-16">
          {/* Step 1 */}
          <div className="flex justify-center items-center gap-10">
            <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-teal-400 via-lime-300 to-orange-400 bg-clip-text text-transparent">
              01
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Create Your Account
              </h3>
              <p className="mt-2 text-black/70 max-w-xl">
                Sign up as an organizer with your business details and
                verification documents.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex justify-center items-center  gap-10">
            <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-teal-400 via-lime-300 to-orange-400 bg-clip-text text-transparent">
              02
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Set Up Your Event
              </h3>
              <p className="mt-2 text-black/70 max-w-xl">
                Add event details, ticket types, pricing, and customize your
                event page.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex justify-center items-center  gap-10">
            <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-teal-400 via-lime-300 to-orange-400 bg-clip-text text-transparent">
              03
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Go Live & Sell
              </h3>
              <p className="mt-2 text-black/70 max-w-xl">
                Publish your event and start accepting registrations and
                payments instantly.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex justify-center items-center gap-10">
            <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-teal-400 via-lime-300 to-orange-400 bg-clip-text text-transparent">
              04
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black">
                Manage & Grow
              </h3>
              <p className="mt-2 text-black/70 max-w-xl">
                Track sales, manage attendees, and receive payouts directly to
                your bank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
