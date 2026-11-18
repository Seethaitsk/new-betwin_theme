'use client';

import React from 'react';

export default function ResponsiblePlayCard() {
  return (
    <section className="responsible-play-area py-5" style={{ background: '#121212' }}>
      <div className="container custom-container">
        <div
          className="responsible-card p-4 p-md-5 rounded-4 position-relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 190, 24, 0.08) 0%, #181818 100%)',
            border: '1.5px solid rgba(255, 190, 24, 0.35)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="row align-items-center gy-4">
            {/* Left Amber Badge */}
            <div className="col-lg-2 col-md-3 text-center text-md-start">
              <div
                className="d-inline-flex flex-column align-items-center justify-content-center p-3 rounded-4"
                style={{
                  width: '90px',
                  height: '90px',
                  background: 'rgba(255, 190, 24, 0.15)',
                  border: '2px solid #ffbe18',
                  color: '#ffbe18',
                }}
              >
                <span className="fw-bolder" style={{ fontSize: '28px', lineHeight: 1 }}>18+</span>
                <small className="text-uppercase fw-bold mt-1" style={{ fontSize: '10px', letterSpacing: '0.5px' }}>ONLY</small>
              </div>
            </div>

            {/* Center Content */}
            <div className="col-lg-7 col-md-6">
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-exclamation-triangle text-warning me-2 fs-5"></i>
                <h5 className="text-white mb-0 fw-bold" style={{ letterSpacing: '0.5px' }}>
                  REAL MONEY GAMING: AVIATOR GAME REAL MONEY NAMIBIA
                </h5>
              </div>
              <p className="text-secondary mb-2" style={{ fontSize: '14px', lineHeight: '1.7' }}>
                Players searching for Aviator Game Real Money Namibia can explore real-money gameplay through eligible platforms where Aviator is available.
                Real money gameplay involves financial risk. Each round has an unpredictable outcome with no guaranteed strategy.
              </p>
              <div className="mt-2 text-warning small">
                <span>• <strong>Betting Limits:</strong> Check min/max limits &amp; KYC conditions</span>
                <span className="mx-2">•</span>
                <span>• <strong>Budgeting:</strong> Choose a stake fitting your personal budget</span>
                <span className="mx-2">•</span>
                <span>• <strong>Play Responsibly:</strong> Set limits, stay in control</span>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="col-lg-3 col-md-3 text-center text-md-end">
              <a
                href="https://betwin.co.na/terms-conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="btn px-4 py-2 rounded-3 text-uppercase fw-bold d-inline-block"
                style={{
                  background: 'transparent',
                  color: '#ffbe18',
                  border: '1px solid #ffbe18',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  transition: 'all 0.3s ease',
                }}
              >
                Platform Terms
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .responsible-card:hover {
          border-color: rgba(255, 190, 24, 0.6) !important;
        }
      `}</style>
    </section>
  );
}
