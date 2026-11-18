'use client';

import React from 'react';
import Link from 'next/link';

interface IStep {
  step: string;
  number: string;
  title: string;
  desc: string;
  icon: string;
  highlight: string;
}

const stepsData: IStep[] = [
  {
    step: 'STEP 01',
    number: '1',
    title: 'Download App & Register',
    desc: 'Install the official Betwin app or register directly via phone number. Complete OTP verification in seconds.',
    icon: 'fas fa-mobile-alt',
    highlight: 'Quick & Free Signup',
  },
  {
    step: 'STEP 02',
    number: '2',
    title: 'Pick Your Favorite Game',
    desc: 'Select from Poker, Rummy, Fantasy Sports, Ludo, and 50+ real-money tournaments with varying entry stakes.',
    icon: 'fas fa-dice',
    highlight: '50+ Skill Games',
  },
  {
    step: 'STEP 03',
    number: '3',
    title: 'Deposit With Welcome Bonus',
    desc: 'Deposit instantly via UPI, PhonePe, Google Pay, or Cards. Unlock up to 200% match bonus on your first reload.',
    icon: 'fas fa-wallet',
    highlight: 'Instant UPI Deposits',
  },
  {
    step: 'STEP 04',
    number: '4',
    title: 'Compete & Win Cash',
    desc: 'Play live against verified human players. Utilize your strategic skills, rank on the leaderboards, and rack up chips.',
    icon: 'fas fa-trophy',
    highlight: '100% Real Players',
  },
  {
    step: 'STEP 05',
    number: '5',
    title: 'Instant 60-Second Withdrawal',
    desc: 'Cash out your winnings seamlessly anytime 24/7. Zero hassle, zero hidden fees straight to your verified bank account.',
    icon: 'fas fa-money-bill-wave',
    highlight: 'Zero Fee Payouts',
  },
];

export default function HowToPlay() {
  return (
    <section className="how-to-play-area section-pt-120 section-pb-120" style={{ background: '#121212' }}>
      <div className="container custom-container">
        {/* Section Header */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center mb-70">
              <span className="sub-title tg__animate-text" style={{ color: '#E3073C' }}>SIMPLE 5-STEP ROADMAP</span>
              <h3 className="title text-white">How To Start Winning On Betwin</h3>
              <p className="mt-3 text-secondary" style={{ maxWidth: '640px', margin: '0 auto' }}>
                Getting started takes under two minutes. Follow these 5 straightforward steps
                and begin your winning journey today.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Stacked Steps */}
        <div className="row gy-4 justify-content-center">
          {stepsData.map((item, idx) => (
            <div key={item.number} className="col-lg-10">
              <div
                className="step-card p-4 p-md-5 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between position-relative"
                style={{
                  background: idx % 2 === 0 ? '#1E1E1E' : '#181818',
                  border: '1px solid #2C2C2C',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Left Number Badge */}
                <div className="d-flex align-items-center mb-3 mb-md-0 me-md-4">
                  <div
                    className="step-number-circle d-flex align-items-center justify-content-center rounded-circle fw-bold"
                    style={{
                      width: '64px',
                      height: '64px',
                      background: 'linear-gradient(135deg, #E3073C 0%, #780018 100%)',
                      color: '#ffffff',
                      fontSize: '26px',
                      boxShadow: '0 0 20px rgba(227, 7, 60, 0.35)',
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </div>
                  <div className="ms-3 d-none d-sm-block">
                    <span className="text-uppercase fw-bold" style={{ color: '#E3073C', fontSize: '12px', letterSpacing: '1.5px' }}>
                      {item.step}
                    </span>
                    <div style={{ color: '#9AA0A8', fontSize: '13px' }}>
                      <i className={`${item.icon} me-1`} style={{ color: '#E3073C' }}></i> {item.highlight}
                    </div>
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex-grow-1 px-md-4 text-center text-md-start mb-3 mb-md-0">
                  <h4 className="title text-white mb-2" style={{ fontSize: '20px' }}>
                    {item.title}
                  </h4>
                  <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Right Arrow / Action Indicator */}
                <div className="step-arrow-box d-none d-md-flex align-items-center justify-content-center">
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#E3073C',
                      fontSize: '16px',
                    }}
                  >
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">
          <Link href="/register" className="tg-btn-1">
            <span>GET STARTED IN 2 MINUTES</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        .step-card:hover {
          border-color: rgba(227, 7, 60, 0.45) !important;
          transform: translateX(8px);
          box-shadow: 0 10px 25px rgba(227, 7, 60, 0.2);
        }
      `}</style>
    </section>
  );
}
