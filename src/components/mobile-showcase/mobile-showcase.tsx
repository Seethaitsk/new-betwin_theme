'use client';

import React from 'react';

export default function MobileShowcase() {
  return (
    <section className="mobile-showcase-area section-pt-120 section-pb-120 position-relative overflow-hidden" style={{ background: '#121212' }}>
      {/* Background glow effects */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(227, 7, 60, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(120, 0, 24, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container custom-container position-relative">
        <div className="row align-items-center gy-5">
          {/* Left Text & Mobile Guide */}
          <div className="col-lg-6">
            <div className="mobile-showcase-content">
              <span className="sub-title text-uppercase" style={{ color: '#E3073C', letterSpacing: '2px', fontWeight: 700 }}>
                MOBILE EXPERIENCE
              </span>
              <h2 className="title text-white mt-2 mb-3" style={{ fontSize: '38px', lineHeight: '1.2' }}>
                AVIATOR DOWNLOAD NAMIBIA
              </h2>
              <p className="text-secondary mb-4" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                If you are searching for an Aviator Download Namibia option, check whether your chosen operator provides an official application. Follow these simple steps for a smooth gameplay experience on touchscreens.
              </p>

              {/* 3 Safety Rules */}
              <div className="row g-3 mb-4">
                <div className="col-12">
                  <div className="d-flex align-items-start p-2 rounded-3" style={{ background: '#1A1A1A', border: '1px solid #282828' }}>
                    <i className="fas fa-shield-alt me-3 mt-1" style={{ color: '#E3073C', fontSize: '18px' }}></i>
                    <div>
                      <strong className="text-white d-block" style={{ fontSize: '14px' }}>Use Official Sources</strong>
                      <small className="text-secondary" style={{ fontSize: '13px' }}>Download apps only from the operator’s official website or an authorized app store.</small>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start p-2 rounded-3" style={{ background: '#1A1A1A', border: '1px solid #282828' }}>
                    <i className="fas fa-mobile-alt me-3 mt-1" style={{ color: '#E3073C', fontSize: '18px' }}></i>
                    <div>
                      <strong className="text-white d-block" style={{ fontSize: '14px' }}>Check Compatibility</strong>
                      <small className="text-secondary" style={{ fontSize: '13px' }}>Make sure your smartphone supports the required Android or iOS version.</small>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex align-items-start p-2 rounded-3" style={{ background: '#1A1A1A', border: '1px solid #282828' }}>
                    <i className="fas fa-lock me-3 mt-1" style={{ color: '#E3073C', fontSize: '18px' }}></i>
                    <div>
                      <strong className="text-white d-block" style={{ fontSize: '14px' }}>Avoid Unknown Downloads</strong>
                      <small className="text-secondary" style={{ fontSize: '13px' }}>Do not install Aviator-related applications from unfamiliar third-party websites.</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3 align-items-center pt-2">
                <a
                  href="https://play.betwin.co.na/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn d-inline-flex align-items-center px-4 py-3 rounded-3"
                  style={{
                    background: 'linear-gradient(135deg, #E3073C 0%, #780018 100%)',
                    color: '#ffffff',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  <i className="fas fa-play me-2"></i>
                  <span>Launch Mobile Aviator</span>
                </a>

                <a
                  href="https://betwin.co.na/contact"
                  className="btn d-inline-flex align-items-center px-4 py-3 rounded-3"
                  style={{
                    background: '#1E1E1E',
                    color: '#ffffff',
                    border: '1px solid #2C2C2C',
                    fontWeight: 700,
                    letterSpacing: '0.5px',
                  }}
                >
                  <i className="fas fa-headset me-2" style={{ color: '#E3073C' }}></i>
                  <span>24/7 Mobile Support</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Mobile Mockup with Real Aviator UI */}
          <div className="col-lg-6 text-center">
            <div
              className="mobile-mockup-wrapper position-relative d-inline-block p-4 rounded-5"
              style={{
                background: 'linear-gradient(180deg, #1E1E1E 0%, #121212 100%)',
                border: '2px solid rgba(227, 7, 60, 0.35)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(227, 7, 60, 0.2)',
                maxWidth: '380px',
                width: '100%',
              }}
            >
              {/* Phone Speaker & Notch */}
              <div
                className="notch mx-auto mb-3 rounded-pill"
                style={{ width: '90px', height: '6px', background: 'rgba(255, 255, 255, 0.2)' }}
              />

              {/* Mock Aviator Game Screen */}
              <div
                className="screen-content p-3 rounded-4 text-start"
                style={{ background: '#0e0e0e', border: '1px solid #252525' }}
              >
                {/* Header Bar */}
                <div className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom border-secondary border-opacity-25">
                  <span className="badge text-white fw-bold px-2 py-1" style={{ background: '#E3073C', letterSpacing: '1px' }}>
                    AVIATOR
                  </span>
                  <span className="fw-bold text-white small">
                    <span style={{ color: '#28a745' }}>N$</span> 13,235.00
                  </span>
                </div>

                {/* Multiplier History Strip */}
                <div className="d-flex gap-1 mb-3 overflow-hidden pb-1">
                  {['1.25x', '1.00x', '2.71x', '1.18x', '3.25x'].map((mult, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0 rounded-pill small"
                      style={{
                        background: '#1A1A1A',
                        color: parseFloat(mult) > 2 ? '#E3073C' : '#9094a0',
                        fontSize: '11px',
                        border: '1px solid #282828',
                      }}
                    >
                      {mult}
                    </span>
                  ))}
                </div>

                {/* Simulated Flight Canvas */}
                <div
                  className="flight-canvas p-4 rounded-3 text-center mb-3 position-relative overflow-hidden"
                  style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(227, 7, 60, 0.25) 0%, #151515 80%)',
                    border: '1px solid #2a2a2a',
                    minHeight: '160px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <i className="fas fa-plane text-danger mb-2" style={{ fontSize: '28px', transform: 'rotate(-25deg)' }}></i>
                  <div className="text-danger fw-bold small text-uppercase" style={{ letterSpacing: '2px' }}>
                    FLEW AWAY!
                  </div>
                  <div className="text-white fw-bolder mt-1" style={{ fontSize: '38px', lineHeight: 1 }}>
                    2.48x
                  </div>
                </div>

                {/* Stake Control & Cashout */}
                <div className="p-3 rounded-3 mb-2" style={{ background: '#181818', border: '1px solid #252525' }}>
                  <div className="d-flex justify-content-between text-secondary small mb-1">
                    <span>Bet Stake</span>
                    <span className="text-white fw-bold">100.00</span>
                  </div>
                  <button
                    className="btn w-100 py-2 rounded-3 text-white fw-bold text-uppercase"
                    style={{
                      background: 'linear-gradient(135deg, #E3073C 0%, #A50529 100%)',
                      fontSize: '14px',
                      boxShadow: '0 4px 15px rgba(227, 7, 60, 0.4)',
                    }}
                  >
                    CASH OUT
                  </button>
                </div>

                <div className="text-center">
                  <small style={{ color: '#777a86', fontSize: '11px' }}>
                    Controls & round history clearly visible on mobile touchscreens.
                  </small>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div
                className="home-bar mx-auto mt-3 rounded-pill"
                style={{ width: '110px', height: '4px', background: 'rgba(255, 255, 255, 0.25)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
