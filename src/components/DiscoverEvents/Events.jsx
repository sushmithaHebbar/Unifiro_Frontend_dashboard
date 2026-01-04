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
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch overflow-hidden rounded-[calc(2rem-2px)]">
              <div className="rounded-2xl h-48 sm:h-56 md:h-64 lg:h-full min-h-50 relative overflow-hidden">
                <Image
                  src={event.img}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="w-full bg-white px-6 py-6 lg:px-12 flex flex-col justify-between text-black">
                <div className="space-y-6">
                  <div>
                    <h1 className="text-2xl lg:text-3xl font-bold">
                      {event.title}
                    </h1>
                    <p className="mt-3 text-black text-sm lg:text-base">
                      {event.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-sm text-black">
                    <div className="flex justify-start items-center gap-x-2">
                      <CalendarClock className="w-5 h-5" />
                      <p>{event.calendar}</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <AlarmClock className="w-5 h-5" />
                      <p>{event.time}</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <MapPin className="w-5 h-5" />
                      <p>{event.location}</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <UsersRound className="w-5 h-5" />
                      <p>{event.attendees}</p>
                    </div>
                    <div className="flex justify-start items-center gap-x-2">
                      <IndianRupee className="w-5 h-5" />
                      <p className="text-xl font-semibold">
                        {event.price}{" "}
                        <span className="text-sm font-normal text-black">
                          onwards
                        </span>
                      </p>
                    </div>
                    {event.uri ? (
                      <Link href={event.uri}>
                        <button className="w-full lg:w-auto px-10 py-3 rounded-xl text-lg font-semibold text-white bg-linear-to-r from-teal-400 to-lime-400 hover:opacity-90 transition cursor-pointer">
                          Register
                        </button>
                      </Link>
                    ) : (
                      <Link
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="w-full lg:w-auto px-10 py-3 rounded-xl text-lg font-semibold text-white bg-linear-to-r from-teal-400 to-lime-400 hover:opacity-90 transition cursor-pointer">
                          Register
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="mt-8"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
