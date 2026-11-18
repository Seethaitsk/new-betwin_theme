'use client';

import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';
import { BtnBgTwo } from '../svg';

const HeroBanner = () => {
  return (
    <MouseParallaxContainer>
      <section className="slider__area slider__bg" style={{ backgroundImage: `url(/assets/img/slider/slider_bg.jpg)` }}>
        <div className="single-slider">
          <div className="container custom-container">
            <div className="row justify-content-between align-items-center gy-4">
              <div className="col-xl-6 col-lg-6">
                <div className="slider__content">
                  <div className="hero-sub-badge d-inline-flex align-items-center mb-3">
                    <span className="badge-bullet me-2"></span>
                    <span className="badge-text">ONLINE NAMIBIA</span>
                  </div>
                  <h2 className="title wow fadeInUp" data-wow-delay=".3s">
                    AVIATOR <span className="title-accent">GAME</span>
                  </h2>
                  <p className="slider__desc wow fadeInUp" data-wow-delay=".5s">
                    Play Aviator Game Online in Namibia with Betwin and experience fast-paced rounds, rising multipliers, and real-time cash-out. Place your bet, watch the multiplier climb, and cash out before the round ends.
                  </p>
                  <p className="slider__subtext wow fadeInUp" data-wow-delay=".7s">
                    Enjoy a simple gaming experience on mobile or desktop, subject to platform availability and applicable terms.
                  </p>
                  <div className="slider__btn wow fadeInUp d-flex flex-wrap align-items-center gap-3" data-wow-delay=".9s">
                    <a href="https://play.betwin.co.na/" target="_blank" rel="noopener noreferrer" className="tg-btn-1">
                      <span>Play Now</span>
                      <BtnBgTwo />
                    </a>
                    <a href="https://betwin.co.na/contact" className="tg-border-btn hero-contact-btn">
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-flex align-items-center justify-content-center">
                <div className="hero-img-wrap text-center position-relative w-100">
                  <MouseParallaxChild factorX={0.03} factorY={0.03} className="slider__img text-center position-relative" style={{ zIndex: 1 }}>
                    <img
                      src="/assets/img/slider/hero_casino_nobg.webp"
                      alt="Aviator Game Online Namibia"
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
