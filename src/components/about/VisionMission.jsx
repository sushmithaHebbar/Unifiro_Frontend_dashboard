import React from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Vision */}
          <Card
            icon={<Eye size={22} />}
            title="Our Vision"
            text="To become India’s most trusted platform for discovering and experiencing local events, celebrations, and community sports leagues."
          />

          {/* Mission */}
          <Card
            icon={<Target size={22} />}
            title="Our Mission"
            text="To empower organizers with powerful tools and connect attendees with unforgettable experiences, making every event a success story."
          />
        </div>
      </div>
    </section>
  );
}

/* Card Component */
function Card({ icon, title, text }) {
  return (
    <div className="relative rounded-2xl border border-teal-300/70 bg-white p-6 shadow-sm">
      
      {/* Icon */}
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-teal-300 text-teal-500">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-teal-500 mb-2">
        {title}
      </h3>

      <p className="text-black/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
