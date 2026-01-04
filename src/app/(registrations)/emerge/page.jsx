"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { studentDetailsSchema } from "@/utils/validateForm";
import { api } from "@/utils/api";

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(studentDetailsSchema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/register", data);
      console.log("Form Data:", data);
      alert("Registration Successful!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* Outer Gradient Border Container */}
      <div className="w-full max-w-2xl p-0.5 rounded-2xl bg-linear-to-tr from-orange-400 via-teal-400 to-teal-500">
        <div className="bg-white rounded-[14px] p-8 md:p-12 shadow-xl">
          <h1 className="text-3xl font-semibold text-center text-teal-500 mb-10">
            Registration Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Section: Personal Details */}
            <div className="space-y-6">
              <div className="relative">
                <input
                  {...register("fullName")}
                  placeholder="Full Name *"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors placeholder-gray-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="relative">
                <input
                  {...register("mobileNumber")}
                  placeholder="Mobile Number *"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors placeholder-gray-500"
                />
                {errors.mobileNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.mobileNumber.message}
                  </p>
                )}
              </div>
            </div>

             <div className="relative">
                <input
                  {...register("subject")}
                  placeholder="Subject *"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors placeholder-gray-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

               <div className="relative">
                <input
                  {...register("message")}
                  placeholder="Message *"
                  className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors placeholder-gray-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 hover:opacity-90 transition-opacity shadow-lg"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
