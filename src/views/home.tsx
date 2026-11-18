'use client';

import React from 'react';
import Wrapper from '../layout/wrapper';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import HeroBanner from '../components/hero-banner/hero-banner';
import AboutAreaTwo from '../components/about-area/about-area-2';
import AboutArea from '../components/about-area/about-area';
import RoadMapArea from '../components/road-map/road-map-area';
import MarqueeStrip from '../components/marquee/marquee-strip';
import GamesArea from '../components/games/games-area';
import WhyChooseBetwin from '../components/why-choose/why-choose-betwin';

export default function Home() {
  return (
    <Wrapper>
      {/* Sticky White Header Bar */}
      <Header />

      <main className="main--area" id="main-content">
        {/* 1. Hero Section */}
        <HeroBanner />

        {/* 2. Marquee Ticker */}
        <MarqueeStrip />

        {/* 3. The Journey Section (1st ref image) */}
        <AboutAreaTwo />

        {/* 4. About Betwin Games */}
        <AboutArea />

        {/* 5. Roadmap Seasons */}
        <RoadMapArea />

        {/* 6. Top Rated Games Slider */}
        <GamesArea />

        {/* 7. Why Players Choose Betwin */}
        <WhyChooseBetwin />


      </main>

      {/* Footer with light plate logo & compliance */}
      <Footer />
    </Wrapper>
  );
}
