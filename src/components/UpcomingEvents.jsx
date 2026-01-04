"use client";
import React from "react";
import Image from "next/image";
import { upcomingEvents } from "@/utils/data";
import { Calendar, UsersRound, MapPin } from "lucide-react";

const UpcomingEvents = () => {
  return (
    <section className="w-full py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#20B3BC] mb-4">
          Upcoming Events
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16">
          Don't miss out on these hand-picked events happening near you
        </p>

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {/* Render events twice for seamless loop */}
            {[...upcomingEvents, ...upcomingEvents].map((event, index) => (
              <div
                key={index}
                className="flex flex-col shrink-0 w-[320px] h-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Event Image */}
                <div className="relative h-50 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Event Details */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-xs mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Meta Info */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-base">
                        <Calendar />
                      </span>
                      <span>
                        {event.date} {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-base">
                        <MapPin />
                      </span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-base">
                        <UsersRound />
                      </span>
                      <span>{event.attendees}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <span className="text-base">₹</span>
                      <span>{event.price}</span>
                    </div>
                  </div>

                  {/* CTA Button - pushes to bottom with mt-auto */}
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto w-full py-2.5 rounded-xl text-white font-bold text-sm text-center bg-linear-to-r from-[#20B3BC] to-[#CFC31E] hover:opacity-90 transition-opacity block"
                  >
                    More Information
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
