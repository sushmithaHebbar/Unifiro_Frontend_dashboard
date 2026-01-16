"use client";

import ContactSection from "@/components/contact/Contact";
import FAQSection from "@/components/contact/FAQ";
import GetInTouchHero from "@/components/contact/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <main>
        <GetInTouchHero />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default page;
