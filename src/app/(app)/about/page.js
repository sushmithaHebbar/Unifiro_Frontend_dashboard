'use client'

import AboutUnifiro from '@/components/about/Hero'
import OurStory from '@/components/about/OurStory'
import VisionMission from '@/components/about/VisionMission'
import WhatWeStandFor from '@/components/about/WhatWeStandFor'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />
        <main className='mb-28'>
            <AboutUnifiro />
            <OurStory />
            <VisionMission />
            <WhatWeStandFor />
        </main>
        <Footer />
    </>
  )
}

export default page