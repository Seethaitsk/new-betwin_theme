'use client';

import React from 'react';

const marqueeItems = [
  { icon: 'fas fa-star', text: 'FAST & SECURE BETTING', highlight: '★ BETWIN' },
  { icon: 'fas fa-bolt', text: 'QUICK PAYOUTS', highlight: '★ INSTANT' },
  { icon: 'fas fa-mobile-alt', text: 'SMOOTH MOBILE PLAY', highlight: '★ MOBILE' },
  { icon: 'fas fa-dice', text: 'TOP CASINO GAMES', highlight: '★ CASINO' },
];

export default function MarqueeStrip() {
  return (
    <div
      className="marquee-strip-area py-3"
      style={{
        background: 'linear-gradient(90deg, #121212 0%, #181818 50%, #121212 100%)',
        borderTop: '1px solid rgba(227, 7, 60, 0.25)',
        borderBottom: '1px solid rgba(227, 7, 60, 0.25)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <div className="container-fluid px-0">
        <div
          className="marquee-content d-flex align-items-center"
          style={{
            display: 'inline-flex',
            animation: 'marqueeScroll 28s linear infinite',
          }}
        >
          {/* Double list for smooth endless loop */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="marquee-item d-inline-flex align-items-center mx-4"
              style={{ fontSize: '14px', letterSpacing: '0.5px' }}
            >
              <span
                className="badge me-2 px-2 py-1"
                style={{
                  background: 'rgba(227, 7, 60, 0.15)',
                  color: '#FF2D5F',
                  border: '1px solid rgba(227, 7, 60, 0.35)',
                  fontWeight: 600,
                  fontSize: '11px',
                }}
              >
                {item.highlight}
              </span>
              <i className={`${item.icon} me-2`} style={{ color: '#E3073C' }}></i>
              <span className="text-light fw-medium">{item.text}</span>
              <span className="ms-4 text-muted" style={{ opacity: 0.4 }}>
                •
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-strip-area:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
