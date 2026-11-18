'use client';

import React from 'react';
import Link from 'next/link';

interface IFeatureItem {
  id: number;
  icon: string;
  badge: string;
  title: string;
  desc: string;
  highlightColor: string;
}

const featuresData: IFeatureItem[] = [
  {
    id: 1,
    icon: 'flaticon-diamond',
    badge: 'INSTANT',
    title: 'Lightning Payouts',
    desc: 'Withdraw your winnings in under 60 seconds directly to your bank account via UPI, IMPS, or Wallets.',
    highlightColor: '#E3073C',
  },
  {
    id: 2,
    icon: 'flaticon-settings-1',
    badge: 'CERTIFIED',
    title: '100% Fair Play & RNG',
    desc: 'Certified Random Number Generator ensures unbiased, transparent, and provably fair outcomes on every hand.',
    highlightColor: '#9AA0A8',
  },
  {
    id: 3,
    icon: 'flaticon-user-profile',
    badge: 'COMMUNITY',
    title: 'Multiplayer Tournaments',
    desc: 'Battle against thousands of active real players across India in daily mega cash tournaments and freerolls.',
    highlightColor: '#E3073C',
  },
  {
    id: 4,
    icon: 'flaticon-ethereum',
    badge: 'SECURITY',
    title: 'Bank-Grade Security',
    desc: 'End-to-end 256-bit SSL encryption, anti-fraud AI monitoring, and zero-tolerance policy against bots.',
    highlightColor: '#9AA0A8',
  },
  {
    id: 5,
    icon: 'flaticon-gift',
    badge: 'BONUS',
    title: 'Daily Rewards & VIP Club',
    desc: 'Enjoy daily login bonuses, loss back protection, rakeback rewards, and VIP level progression perks.',
    highlightColor: '#E3073C',
  },
  {
    id: 6,
    icon: 'flaticon-headset',
    badge: 'SUPPORT',
    title: '24/7 Dedicated Support',
    desc: 'Our responsive customer service specialists are ready around the clock via live chat and priority email.',
    highlightColor: '#9AA0A8',
  },
];

export default function BetwinFeatures() {
  return (
    <section className="betwin-features-area section-pt-120 section-pb-100" style={{ background: '#121212' }}>
      <div className="container custom-container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center mb-60">
              <span className="sub-title tg__animate-text" style={{ color: '#E3073C' }}>BETWIN CORE ADVANTAGES</span>
              <h3 className="title text-white">Why Millions Play On Betwin</h3>
              <p className="mt-3 text-secondary" style={{ maxWidth: '640px', margin: '0 auto' }}>
                Experience India's next-generation gaming hub engineered for ultra-low latency,
                secure payouts, and unmatched rewards.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="row justify-content-center gy-4">
          {featuresData.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div
                className="feature-card p-4 rounded-3 h-100 position-relative"
                style={{
                  background: '#1E1E1E',
                  border: '1px solid #2C2C2C',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div
                    className="feature-icon-box d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: '60px',
                      height: '60px',
                      background: `rgba(227, 7, 60, 0.08)`,
                      border: `1px solid ${item.highlightColor}40`,
                      color: item.highlightColor,
                      fontSize: '28px',
                    }}
                  >
                    <i className={item.icon}></i>
                  </div>
                  <span
                    className="badge px-3 py-1 text-uppercase"
                    style={{
                      backgroundColor: `${item.highlightColor}20`,
                      color: item.highlightColor,
                      border: `1px solid ${item.highlightColor}40`,
                      fontSize: '11px',
                      letterSpacing: '1px',
                      fontWeight: 700,
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h4 className="title text-white mb-3" style={{ fontSize: '20px' }}>
                  {item.title}
                </h4>
                <p className="text-secondary mb-0" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner below features */}
        <div className="row mt-5">
          <div className="col-12">
            <div
              className="features-cta-box p-4 p-md-5 rounded-4 d-flex flex-column flex-md-row align-items-center justify-content-between text-center text-md-start"
              style={{
                background: 'linear-gradient(135deg, rgba(227, 7, 60, 0.15) 0%, #181818 100%)',
                border: '1px solid rgba(227, 7, 60, 0.3)',
              }}
            >
              <div>
                <h4 className="text-white mb-2">Ready to level up your gaming skills?</h4>
                <p className="text-secondary mb-0">Join over 1,500,000+ verified players and claim your signup welcome reward.</p>
              </div>
              <div className="mt-3 mt-md-0">
                <Link href="/register" className="tg-btn-1">
                  <span>JOIN BETWIN NOW</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-card:hover {
          transform: translateY(-6px);
          border-color: rgba(227, 7, 60, 0.5) !important;
          box-shadow: 0 12px 30px rgba(227, 7, 60, 0.2);
        }
      `}</style>
    </section>
  );
}
