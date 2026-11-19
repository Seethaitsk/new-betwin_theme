'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { BtnBgTwo } from '../svg';

interface HeroSlide {
  id: number;
  badge: string;
  titlePrimary: string;
  titleAccent: string;
  desc: string;
  subtext: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
  image: string;
  alt: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    badge: 'ONLINE NAMIBIA',
    titlePrimary: 'AVIATOR',
    titleAccent: 'GAME',
    desc: 'Play Aviator Game Online in Namibia with Betwin and experience fast-paced rounds, rising multipliers, and real-time cash-out. Place your bet, watch the multiplier climb, and cash out before the round ends.',
    subtext: 'Enjoy a simple gaming experience on mobile or desktop, subject to platform availability and applicable terms.',
    primaryBtnText: 'Play Now',
    primaryBtnLink: 'https://play.betwin.co.na/',
    secondaryBtnText: 'Contact',
    secondaryBtnLink: 'https://betwin.co.na/contact',
    image: '/assets/img/slider/hero_aviator_centerpiece.webp',
    alt: 'Aviator Game Online Namibia',
  },
  {
    id: 2,
    badge: 'POPULAR CASINO',
    titlePrimary: 'CASINO &',
    titleAccent: 'SLOTS',
    desc: 'Spin top-rated jackpot slot machines, European roulette, and classic table games with instant deposits and swift local payouts across Namibia.',
    subtext: 'Certified fair play, thrilling jackpot bonus rounds, and 24/7 dedicated Namibian player assistance anytime.',
    primaryBtnText: 'Play Slots',
    primaryBtnLink: 'https://play.betwin.co.na/',
    secondaryBtnText: 'Explore Games',
    secondaryBtnLink: '#games',
    image: '/assets/img/slider/hero_casino_nobg.webp',
    alt: 'Online Casino and Slots Namibia',
  },
  {
    id: 3,
    badge: 'LIVE DRAWS',
    titlePrimary: 'LUCKY 6',
    titleAccent: 'NUMBERS',
    desc: 'Enjoy high-frequency lottery draws, color betting, and fixed odds rounds with real-time results streamed directly to your smartphone.',
    subtext: 'Safe, secure, and licensed gaming with transparent rules, instant payouts, and 24/7 local customer support.',
    primaryBtnText: 'Bet Lucky 6',
    primaryBtnLink: 'https://play.betwin.co.na/',
    secondaryBtnText: 'All Games',
    secondaryBtnLink: '#games',
    image: '/assets/img/slider/hero_lucky6_centerpiece.webp',
    alt: 'Lucky 6 Numbers Betting Namibia',
  },
];

const HeroBanner: React.FC = () => {
  return (
    <MouseParallaxContainer>
      <section className="slider__area slider__bg" style={{ backgroundImage: `url(/assets/img/slider/slider_bg.jpg)` }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.hero-slider-pagination',
          }}
          className="hero-slider-active"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="single-slider">
                <div className="container custom-container">
                  <div className="row justify-content-between align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6">
                      <div className="slider__content">
                        <div className="hero-sub-badge d-inline-flex align-items-center mb-3">
                          <span className="badge-bullet me-2"></span>
                          <span className="badge-text">{slide.badge}</span>
                        </div>
                        <h2 className="title">
                          {slide.titlePrimary} <span className="title-accent">{slide.titleAccent}</span>
                        </h2>
                        <p className="slider__desc">{slide.desc}</p>
                        <p className="slider__subtext">{slide.subtext}</p>
                        <div className="slider__btn d-flex flex-wrap align-items-center gap-3">
                          <a
                            href={slide.primaryBtnLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tg-btn-1"
                          >
                            <span>{slide.primaryBtnText}</span>
                            <BtnBgTwo />
                          </a>
                          <a
                            href={slide.secondaryBtnLink}
                            className="tg-border-btn hero-contact-btn"
                          >
                            <span>{slide.secondaryBtnText}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                      <div className="hero-img-wrap text-center position-relative w-100">
                        <MouseParallaxChild
                          factorX={0.03}
                          factorY={0.03}
                          className="slider__img text-center position-relative"
                          style={{ zIndex: 1 }}
                        >
                          <img
                            src={slide.image}
                            alt={slide.alt}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '480px',
                              height: 'auto',
                              objectFit: 'contain',
                              filter: 'drop-shadow(0 20px 35px rgba(0, 0, 0, 0.75))',
                            }}
                          />
                        </MouseParallaxChild>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Hero Slider Pagination Dots */}
        <div className="container custom-container position-relative">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="hero-slider-pagination"></div>
            </div>
          </div>
        </div>

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
