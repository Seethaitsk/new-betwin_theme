'use client';

import React, { useState, useEffect } from 'react';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { BtnBgTwo } from '../svg';

interface HeroSlideItem {
  id: number;
  titlePrimary: string;
  titleAccent: string;
  image: string;
  alt: string;
}

const heroSlides: HeroSlideItem[] = [
  {
    id: 1,
    titlePrimary: 'AVIATOR',
    titleAccent: 'GAME',
    image: '/assets/img/slider/hero_aviator_centerpiece.webp',
    alt: 'Aviator Game Online Namibia',
  },
  {
    id: 2,
    titlePrimary: 'CASINO &',
    titleAccent: 'SLOTS',
    image: '/assets/img/slider/hero_casino_nobg.webp',
    alt: 'Online Casino and Slots Namibia',
  },
  {
    id: 3,
    titlePrimary: 'LUCKY 6',
    titleAccent: 'NUMBERS',
    image: '/assets/img/slider/hero_lucky6_centerpiece.webp',
    alt: 'Lucky 6 Numbers Betting Namibia',
  },
];

const HeroBanner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <MouseParallaxContainer>
      <section className="slider__area slider__bg" style={{ backgroundImage: `url(/assets/img/slider/slider_bg.jpg)` }}>
        <div className="single-slider">
          <div className="container custom-container">
            <div className="row justify-content-between align-items-center gy-4">
              {/* Left Column: Title changes, other text & buttons stay static */}
              <div className="col-xl-6 col-lg-6">
                <div className="slider__content">
                  {/* Static Badge */}
                  <div className="hero-sub-badge d-inline-flex align-items-center mb-3">
                    <span className="badge-bullet me-2"></span>
                    <span className="badge-text">ONLINE NAMIBIA</span>
                  </div>

                  {/* Dynamic Title (Changes one by one in place) */}
                  <div className="hero-title-container">
                    {heroSlides.map((slide, idx) => (
                      <h2
                        key={slide.id}
                        className={`title hero-dynamic-title ${idx === activeIndex ? 'active' : ''}`}
                      >
                        {slide.titlePrimary} <span className="title-accent">{slide.titleAccent}</span>
                      </h2>
                    ))}
                  </div>

                  {/* Static Description */}
                  <p className="slider__desc">
                    Play Aviator Game Online in Namibia with Betwin and experience fast-paced rounds, rising multipliers, and real-time cash-out. Place your bet, watch the multiplier climb, and cash out before the round ends.
                  </p>

                  {/* Static Subtext */}
                  <p className="slider__subtext">
                    Enjoy a simple gaming experience on mobile or desktop, subject to platform availability and applicable terms.
                  </p>

                  {/* Static CTA Buttons */}
                  <div className="slider__btn d-flex flex-wrap align-items-center gap-3">
                    <a
                      href="https://play.betwin.co.na/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tg-btn-1"
                    >
                      <span>Play Now</span>
                      <BtnBgTwo />
                    </a>
                    <a
                      href="https://betwin.co.na/contact"
                      className="tg-border-btn hero-contact-btn"
                    >
                      <span>Contact</span>
                    </a>
                  </div>

                  {/* Pagination Dots indicating active Title/Image */}
                  <div className="hero-slider-pagination">
                    {heroSlides.map((slide, idx) => (
                      <button
                        key={slide.id}
                        type="button"
                        className={`hero-pagination-bullet ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                        aria-label={`Show ${slide.titlePrimary} ${slide.titleAccent}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Image changes in sync with the Title */}
              <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                <div className="hero-img-wrap text-center position-relative w-100">
                  <MouseParallaxChild
                    factorX={0.03}
                    factorY={0.03}
                    className="slider__img text-center position-relative w-100"
                    style={{ zIndex: 1 }}
                  >
                    {heroSlides.map((slide, idx) => (
                      <img
                        key={slide.id}
                        src={slide.image}
                        alt={slide.alt}
                        className={`hero-dynamic-img ${idx === activeIndex ? 'active' : ''}`}
                      />
                    ))}
                  </MouseParallaxChild>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background shapes */}
        <div className="slider__shapes">
          <img src="/assets/img/slider/slider_shape01.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape02.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape03.png" alt="shape" />
          <img src="/assets/img/slider/slider_shape04.png" alt="shape" />
        </div>
      </section>
    </MouseParallaxContainer>
  );
};

export default HeroBanner;
