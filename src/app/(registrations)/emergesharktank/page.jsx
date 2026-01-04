"use client";

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { startUpSchema } from "@/utils/validateForm";
import { api } from "@/utils/api";

const InputField = ({
  label,
  register,
  name,
  error,
  type = "text",
  placeholder,
}) => (
  <div className="relative w-full mb-6">
    <label className="block text-sm font-bold text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      {...register(name)}
      placeholder={placeholder}
      className="w-full border-b-2 border-gray-300 py-2 focus:outline-none focus:border-teal-500 transition-colors bg-transparent"
    />
    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

export default function StartupRegistrationForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(startUpSchema),
    defaultValues: { hasTeam: "No", hasRevenue: "No", isRaising: "No" },
  });

  // Watch fields for conditional logic
  const hasTeam = useWatch({ control, name: "hasTeam" });
  const hasRevenue = useWatch({ control, name: "hasRevenue" });
  const isRaising = useWatch({ control, name: "isRaising" });
  const selectedFile = watch("pitchDeck");

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key !== "pitchDeck") {
          formData.append(key, data[key]);
        }
      });

      if (data.pitchDeck && data.pitchDeck.length > 0) {
        formData.append("pitchDeck", data.pitchDeck[0]);
      }

      const response = await api.post("/emergeRegistration", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Success:", response.data);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Upload Error:", error.response?.data || error.message);
      alert("Failed to upload. Check console for errors.");
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto p-0.5 rounded-2xl bg-linear-to-tr from-orange-400 via-teal-400 to-teal-500 shadow-2xl">
        <div className="bg-white rounded-[14px] p-8 md:p-12">
          <h1 className="text-3xl font-bold text-center text-teal-600 mb-12">
            Startup Registration Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
            {/* 1. Personal Details */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
                Founder Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  label="Full Name of Founder *"
                  name="fullNameFounder"
                  register={register}
                  error={errors.fullNameFounder}
                />
                <InputField
                  label="Age of Founder *"
                  name="age"
                  type="number"
                  register={register}
                  error={errors.age}
                />
                <InputField
                  label="Mobile Number *"
                  name="mobile"
                  register={register}
                  error={errors.mobile}
                />
                <InputField
                  label="Email ID *"
                  name="email"
                  type="email"
                  register={register}
                  error={errors.email}
                />
                <InputField
                  label="Education *"
                  name="education"
                  type="education"
                  register={register}
                  error={errors.education}
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Gender *
                </label>
                <div className="flex gap-4">
                  {["Male", "Female", "Other"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input type="radio" {...register("gender")} value={opt} />{" "}
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Startup Basics */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
                Startup Overview
              </h2>
              <InputField
                label="Startup Name (LLP/Partnership/Pvt Ltd) *"
                name="startupName"
                register={register}
                error={errors.startupName}
              />
              <InputField
                label="Location (City/Town) *"
                name="location"
                register={register}
                error={errors.location}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Current Stage *
                  </label>
                  <select
                    {...register("stage")}
                    className="w-full border-b-2 border-gray-300 py-2 bg-white outline-none focus:border-teal-500"
                  >
                    <option value="">Select Stage</option>
                    <option value="Idea">Idea Stage</option>
                    <option value="Late Ideation">Late Ideation</option>
                    <option value="MVP Building">MVP (Building)</option>
                    <option value="MVP Market">MVP (Product in market)</option>
                    <option value="PMF">PMF Stage / Early Traction</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Industry Sector *
                  </label>
                  <select
                    {...register("sector")}
                    className="w-full border-b-2 border-gray-300 py-2 bg-white outline-none focus:border-teal-500"
                  >
                    <option value="">Select Sector</option>
                    {[
                      "Fintech",
                      "Agritech",
                      "Healthcare",
                      "Defence Tech",
                      "AI & ML",
                      "Ed-Tech",
                      "SaaS",
                      "Deep Tech",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* 3. Deep Dive */}
            <section className="space-y-6">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
                Product & Market
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Brief Description (3-5 sentences) *
                  </label>
                  <textarea
                    {...register("description")}
                    className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-teal-500 outline-none h-24"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    What according to you is your Biggest Challenge right now ?
                    *
                  </label>
                  <textarea
                    {...register("challenge")}
                    className="w-full border-2 border-gray-100 p-3 rounded-lg focus:border-teal-500 outline-none h-24"
                  />
                </div>
                <InputField
                  label="What Problem does your startup solve? *"
                  name="problem"
                  register={register}
                  error={errors.problem}
                />
                <InputField
                  label="Who is your Target Market? *"
                  name="targetMarket"
                  register={register}
                  error={errors.targetMarket}
                />
                <InputField
                  label="Unique Value Proposition? *"
                  name="uvp"
                  register={register}
                  error={errors.uvp}
                />
              </div>
            </section>

            {/* 4. Team & Funding */}
            <section className="space-y-8">
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
                Execution & Finance
              </h2>
              {/* Conditional Team Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Do you have a Co-Founder? *
                </label>
                <div className="flex gap-4 mb-4">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input type="radio" {...register("hasTeam")} value={v} />{" "}
                      {v}
                    </label>
                  ))}
                </div>
                {hasTeam === "Yes" && (
                  <InputField
                    label="Team Names & Designations *"
                    name="teamDetails"
                    register={register}
                    error={errors.teamDetails}
                  />
                )}
              </div>
              {/* Conditional Revenue Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Generated Revenue? *
                </label>
                <div className="flex gap-4 mb-4">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...register("hasRevenue")}
                        value={v}
                      />{" "}
                      {v}
                    </label>
                  ))}
                </div>
                {hasRevenue === "Yes" && (
                  <InputField
                    label="Average MRR till date *"
                    name="mrr"
                    register={register}
                    error={errors.mrr}
                  />
                )}
              </div>
              {/* Conditional Funding Field */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Actively seeking Funds? *
                </label>
                <div className="flex gap-4 mb-4">
                  {["Yes", "No"].map((v) => (
                    <label key={v} className="flex items-center gap-2">
                      <input
                        type="radio"
                        {...register("isRaising")}
                        value={v}
                      />{" "}
                      {v}
                    </label>
                  ))}
                </div>
                {isRaising === "Yes" && (
                  <InputField
                    label="Funding Amount looking to raise *"
                    name="raiseAmount"
                    register={register}
                    error={errors.raiseAmount}
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Do you have any IP (Intellectual Property) / Patents /
                  Copyrights / Trademarks existing OR Filed? *
                </label>
                <div className="flex gap-4 mb-4">
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...register("hasIP")}
                      />
                      <span className="text-sm text-gray-600">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.hasIP && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.hasIP.message}
                  </p>
                )}
              </div>

              <InputField
                label="Have you raised any funds previously ? If Yes how much was raised and the source ( Angel/ VC etc) *"
                name="previousFunding"
                type="previousFunding"
                register={register}
                error={errors.previousFunding}
              />

              <InputField
                label="What is your Long Term Disruptive Vision for your startup ? *"
                name="longTermVision"
                type="longTermVision"
                register={register}
                error={errors.longTermVision}
              />
            </section>

            {/* 5. Pitch Deck Upload */}
            <section>
              <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-6">
                Documentation
              </h2>
              <div className="border-2 border-dashed border-teal-200 p-8 rounded-xl text-center">
                <label className="block text-teal-600 font-bold mb-2 cursor-pointer">
                  {/* Change text if file is selected */}
                  {selectedFile && selectedFile.length > 0
                    ? "CHANGE FILE"
                    : "UPLOAD PITCH DECK / ONE PAGER"}

                  <input
                    type="file"
                    {...register("pitchDeck")}
                    className="hidden"
                    accept=".pdf,.pptx" // Helpful browser-level filter
                  />
                </label>

                {/* Display File Name and Size if it exists */}
                {selectedFile && selectedFile[0] && (
                  <div className="mb-2 text-sm text-teal-700 font-medium">
                    📄 {selectedFile[0].name}
                    <span className="text-gray-400 ml-2">
                      ({(selectedFile[0].size / 1024).toFixed(0)} KB)
                    </span>
                  </div>
                )}

                <p className="text-gray-400 text-xs text-balance">
                  PDF, PPTX supported. Max 1 MB.
                </p>

                {errors.pitchDeck && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.pitchDeck.message}
                  </p>
                )}
              </div>
            </section>

            {/* 6. Consent */}
            <section className="bg-gray-50 p-6 rounded-xl space-y-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("confirmAccurate")}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I confirm that all information provided is accurate and
                  complete *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("confirmDisqualification")}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I understand false information may result in disqualification
                  *
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  {...register("confirmContact")}
                  className="mt-1"
                />
                <span className="text-sm text-gray-600">
                  I consent to being contacted for further evaluation and
                  interviews *
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-4 mt-6 rounded-xl text-white font-bold text-lg bg-linear-to-r from-teal-500 via-emerald-400 to-lime-400 hover:opacity-90 transition-all shadow-lg"
              >
                Submit Registration
              </button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
