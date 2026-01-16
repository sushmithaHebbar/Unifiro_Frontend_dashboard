"use client";

import React from "react";
import Hero from "@/components/Host/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/Host/HowItWorks";
import WhyHost from "@/components/Host/WhyHost";
import Pricing from "@/components/Host/Pricing";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <WhyHost />
        <Pricing />
      </main>
      <Footer />
    </>
  );
};

export default page;
