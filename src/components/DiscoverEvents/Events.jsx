import Link from "next/link";
import {
  CalendarClock,
  AlarmClock,
  MapPin,
  UsersRound,
  IndianRupee,
} from "lucide-react";
import { events } from "@/utils/data";
import Image from "next/image";

export default function Events() {
  return (
    <div className="w-full bg-white px-12 py-4 lg:px-28 lg:py-16">
      <h1 className="text-center text-black text-6xl font-semibold pb-12">
        Events
      </h1>

      <div className="flex flex-col gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-4xl p-0.5 bg-linear-to-r from-orange-400 via-yellow-400 to-green-400"
          >
            <div className="flex lg:flex-row flex-col justify-center items-stretch overflow-hidden rounded-[calc(2rem-2px)] border border-gray-200">
              {/* Image Container */}
              {/* We use aspect-video for mobile and let it stretch (md:h-auto) for desktop */}
              <div className="relative w-full lg:w-2/5 min-h-62.5 aspect-video lg:aspect-auto overflow-hidden bg-gray-900">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/5 bg-white px-6 py-8 lg:px-12 flex flex-col justify-between text-black">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
                      {event.title}
                    </h1>
                    <p className="mt-3 text-gray-600 text-sm lg:text-base line-clamp-3">
                      {event.description}
                    </p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 text-sm text-black">
                    <div className="flex items-center gap-x-2">
                      <CalendarClock className="w-5 h-5 text-gray-500" />
                      <p>{event.calendar}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <AlarmClock className="w-5 h-5 text-gray-500" />
                      <p>{event.time}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <MapPin className="w-5 h-5 text-gray-500" />
                      <p>{event.location}</p>
                    </div>
                    <div className="flex items-center gap-x-2">
                      <UsersRound className="w-5 h-5 text-gray-500" />
                      <p>{event.attendees}</p>
                    </div>

                    <div className="flex items-center gap-x-2 md:col-span-1">
                      <div className="flex items-baseline gap-x-1">
                        <IndianRupee className="w-4 h-4" />
                        <span className="text-xl font-bold">{event.price}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          onwards
                        </span>
                      </div>
                    </div>

                    <div className="md:col-span-1 flex justify-end">
                      <Link
                        href={event.slug ? `/events/${event.slug}` : event.url}
                        target={!event.slug ? "_blank" : undefined}
                        className="w-full lg:w-auto"
                      >
                        <button className="w-full lg:w-auto px-10 py-3 rounded-xl text-lg font-semibold text-white bg-gradient-to-r from-teal-400 to-lime-400 hover:shadow-lg hover:opacity-90 transition-all cursor-pointer">
                          Register
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
