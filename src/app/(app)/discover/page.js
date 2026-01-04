"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/DiscoverEvents/Hero";
import Events from "@/components/DiscoverEvents/Events";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Events />
      <Footer />
    </main>
  );
};

export default page;
