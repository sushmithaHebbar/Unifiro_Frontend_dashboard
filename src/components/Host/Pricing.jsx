import React from "react";

export default function Pricing() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-black/70">
            No upfront costs. Pay only when you earn.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
          <PricingCard
            title="Free Events"
            price="₹ 2,000"
            description="Host free events at no cost. No platform fees for free registrations."
            features={[
              "Unlimited registrations",
              "QR-based check-in",
              "Attendee management",
            ]}
          />

          <PricingCard
            title="Paid Events"
            price="5% per ticket"
            description="Small commission only on paid tickets. Payouts within 3–5 business days."
            features={[
              "All free features",
              "Secure payment processing",
              "Revenue dashboard",
            ]}
          />

          <PricingCard
            title="Paid Events"
            price="5% per ticket"
            description="Small commission only on paid tickets. Payouts within 3–5 business days."
            features={[
              "All free features",
              "Secure payment processing",
              "Revenue dashboard",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* Pricing Card */
function PricingCard({ title, price, description, features }) {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-gradient-to-br from-teal-400 via-emerald-400 to-lime-400 p-6 text-white shadow-xl">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="mt-3 text-2xl font-bold">{price}</div>

      <p className="mt-3 text-sm text-white/90">{description}</p>

      <ul className="mt-6 space-y-2 text-sm">
        {features.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
