import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "@/validations/contactValidations";
import { toast } from "react-toastify";
import { api } from "@/utils/api";

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      await api.post("/contact", data);
      toast.success("Contact sent successfully!")
      reset();
    } catch (error) {
      toast.error(error.response?.data?.message)
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-teal-500 font-bold text-xl mb-6">Contact Information</h3>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
              We're always here to help and happy to answer your questions.
            </h2>
            <p className="text-gray-600 text-lg">Reach out to us through any of these channels</p>
          </div>

          <div className="space-y-6 pt-4">
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Email</h4>
              <p className="text-gray-800">info@unifiro.com</p>
              <p className="text-gray-500 text-sm">We'll respond within 24 hours</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
              <p className="text-gray-800">+91 93538 57575</p>
              <p className="text-gray-500 text-sm">Mon-Sat, 9am to 6pm IST</p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-teal-400 via-orange-300 to-orange-400">
          <div className="bg-white rounded-[14px] p-8 md:p-10 shadow-sm">
            <h3 className="text-teal-500 text-2xl font-medium mb-8">Send us a message</h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full border-b py-3 focus:outline-none transition-colors placeholder-gray-500 ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'}`}
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full border-b py-3 focus:outline-none transition-colors placeholder-gray-500 ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'}`}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full border-b py-3 focus:outline-none transition-colors placeholder-gray-500 ${errors.subject ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'}`}
                  {...register("subject")}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows="4"
                  className={`w-full border-b py-3 focus:outline-none transition-colors placeholder-gray-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-teal-500'}`}
                  {...register("message")}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full cursor-pointer mt-8 bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 text-white font-semibold py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;