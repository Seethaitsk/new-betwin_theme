'use client';

import React, { useState } from 'react';

// 4 Service images that transition on hover (matching template ServicesArea)
const service_images = [
  '/assets/img/others/img1.jpg',
  '/assets/img/others/img2.jpg',
  '/assets/img/others/img3.jpg',
  '/assets/img/others/img4.jpg',
];

const service_items = [
  {
    id: 1,
    icon: 'flaticon-diamond',
    title: 'All-in-One Platform',
    desc: 'Aviator crash gaming, jackpot slots, live roulette, Lucky 6, and sports betting together from one unified account.',
  },
  {
    id: 2,
    icon: 'flaticon-user-profile',
    title: 'Best Aviator Site',
    desc: 'Fast-paced crash rounds, rising multipliers, and real-time cashout optimized for smooth play on mobile and desktop.',
  },
  {
    id: 3,
    icon: 'flaticon-ethereum',
    title: 'Transparent & Secure',
    desc: 'Licensed operations, HTTPS data encryption, provably fair outcomes, and clear terms before placing any stake.',
  },
  {
    id: 4,
    icon: 'flaticon-settings-1',
    title: 'Worldwide Support',
    desc: 'Quick local payment methods, swift withdrawal payouts, and dedicated 24/7 Namibian player assistance anytime.',
  },
];

export default function WhyChooseBetwin() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="services-area services__bg-color section-pt-120 section-pb-120" style={{ background: '#121212' }}>
      <div className="container">
        {/* Main 2-Column Layout (Matching ServicesArea layout with Red Theme) */}
        <div className="row align-items-end align-items-xl-start">
          {/* Left Column: Title + 2x2 Feature Grid */}
          <div className="col-lg-6">
            <div className="section__title text-start mb-50 title-shape-none">
              <span
                className="sub-title tg__animate-text text-uppercase"
                style={{
                  color: '#E3073C',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  fontSize: '14px',
                  marginBottom: '8px',
                  display: 'inline-block',
                }}
              >
                PLATFORM CHOICE
              </span>
              <h3
                className="title text-uppercase text-white"
                style={{
                  fontSize: '38px',
                  fontWeight: 800,
                  letterSpacing: '1px',
                  margin: 0,
                  lineHeight: '1.2',
                }}
              >
                WHY CHOOSE BETWIN?
              </h3>
              {/* Single clean red line */}
              <div
                className="single-red-line"
                style={{
                  width: '56px',
                  height: '4px',
                  background: '#E3073C',
                  borderRadius: '2px',
                  margin: '14px 0 20px 0',
                  boxShadow: '0 0 10px rgba(227, 7, 60, 0.6)',
                }}
              />
              <p
                style={{
                  color: '#adb0bc',
                  fontSize: '15px',
                  lineHeight: '1.8',
                  maxWidth: '540px',
                  margin: '0 0 40px 0',
                }}
              >
                Choosing an online betting platform is about more than the number of games available. Betwin brings Aviator,
                crash gaming, online slots, Lucky 6, bingo, and sports betting together into one unified, secure platform for players in Namibia.
              </p>
            </div>

            {/* 2x2 Features Grid */}
            <div className="services__wrapper">
              {service_items.map((item, i) => (
                <div
                  key={item.id}
                  className="services__item cursor-pointer"
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(i)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="services__icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <a href="https://play.betwin.co.na/" target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Character Graphic with Red Action Button */}
          <div className="col-lg-6">
            <div className="services__images">
              {service_images.map((s, i) => (
                <div
                  key={i}
                  className={`services__images-item ${activeIndex === i ? 'active' : ''}`}
                >
                  <img src={s} alt="Why Choose Betwin" />

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Trust Stats Bar */}
        <div className="row mt-5 pt-4">
          <div className="col-12">
            <div
              className="stats-strip p-4 rounded-4"
              style={{
                background: '#161922',
                border: '1px solid #232733',
              }}
            >
              <div className="row text-center gy-3">
                <div className="col-6 col-md-3">
                  <h4 className="fw-bold mb-1" style={{ color: '#E3073C', fontSize: '18px' }}>24/7 Support</h4>
                  <small className="text-secondary" style={{ fontSize: '13px' }}>We&apos;re here anytime you need us</small>
                </div>
                <div className="col-6 col-md-3">
                  <h4 className="fw-bold mb-1" style={{ color: '#E3073C', fontSize: '18px' }}>Secure &amp; Safe</h4>
                  <small className="text-secondary" style={{ fontSize: '13px' }}>Your information is always protected</small>
                </div>
                <div className="col-6 col-md-3">
                  <h4 className="fw-bold mb-1" style={{ color: '#E3073C', fontSize: '18px' }}>Quick Response</h4>
                  <small className="text-secondary" style={{ fontSize: '13px' }}>Fast and reliable support</small>
                </div>
                <div className="col-6 col-md-3">
                  <h4 className="fw-bold mb-1" style={{ color: '#E3073C', fontSize: '18px' }}>Multiple Channels</h4>
                  <small className="text-secondary" style={{ fontSize: '13px' }}>Support via chat, email and more</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .services__bg-color {
          background-color: #121212 !important;
        }

        .services__icon {
          color: #E3073C !important;
          font-size: 38px !important;
          line-height: 1 !important;
          margin-bottom: 24px !important;
          display: inline-block !important;
          transition: transform 0.3s ease, color 0.3s ease !important;
          text-shadow: 0 0 16px rgba(227, 7, 60, 0.45) !important;
        }

        .services__item:hover .services__icon {
          transform: translateY(-4px) scale(1.1) !important;
          color: #ff2d5f !important;
        }

        .services__content .title {
          font-size: 19px !important;
          font-weight: 700 !important;
          letter-spacing: 0.8px !important;
          text-transform: uppercase !important;
          margin-bottom: 12px !important;
        }

        .services__content .title a {
          color: #ffffff !important;
          transition: color 0.25s ease !important;
        }

        .services__content .title a:hover,
        .services__item:hover .services__content .title a {
          color: #E3073C !important;
        }

        .services__content p {
          color: #9ea4b4 !important;
          font-size: 14px !important;
          line-height: 1.75 !important;
          margin: 0 !important;
        }

        /* Red Theme Circular CTA Button */
        .services__link {
          background: #E3073C !important;
          color: #ffffff !important;
          box-shadow: 0 10px 30px rgba(227, 7, 60, 0.6) !important;
          transition: all 0.35s ease !important;
        }

        .services__link i {
          color: #ffffff !important;
        }

        .services__link:hover {
          background: #ffffff !important;
          color: #E3073C !important;
          transform: rotate(0deg) scale(1.06) !important;
          box-shadow: 0 15px 40px rgba(227, 7, 60, 0.85) !important;
        }

        .services__link:hover i {
          color: #E3073C !important;
        }

        .services__images-item img {
          border-radius: 12px !important;
          border: 1px solid #232733 !important;
        }
      `}</style>
    </section>
  );
}
