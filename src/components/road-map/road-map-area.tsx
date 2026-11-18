'use client';

import React, { useState } from "react";
import { InView } from "react-intersection-observer";
import { BtnBgTwo } from "../svg";

// road map steps data from user copy
type IRoadMap = {
  id: number;
  stepNum: string;
  title: string;
  lists: {
    active: boolean;
    text: string;
  }[];
};

const road_map_lists: IRoadMap[] = [
  {
    id: 1,
    stepNum: "STEP 1",
    title: "Choose a Trusted Aviator Betting Site Namibia",
    lists: [
      { active: true, text: "Check the license: Valid gambling license from a recognized authority" },
      { active: true, text: "Check website security: Look for HTTPS & data protection" },
      { active: true, text: "Read the terms: Review deposit, withdrawal, and bonus terms" },
      { active: true, text: "Check the reputation: Independent feedback and fast payouts" },
    ],
  },
  {
    id: 2,
    stepNum: "STEP 2",
    title: "Create and Verify Your Account",
    lists: [
      { active: true, text: "Provide accurate details: Enter legal name, email & phone correctly" },
      { active: true, text: "Complete KYC verification: Identification or proof of address" },
      { active: true, text: "Protect your account: Strong password, never share login credentials" },
    ],
  },
  {
    id: 3,
    stepNum: "STEP 3",
    title: "Deposit Funds",
    lists: [
      { active: true, text: "Bank cards: Visa or Mastercard for instant deposits" },
      { active: true, text: "E-wallets: Fast regional mobile wallets and digital payment rails" },
      { active: true, text: "Bank transfers: Direct bank transfers supported across Namibia" },
      { active: true, text: "Check limits and fees: Review minimum deposits and processing times" },
    ],
  },
  {
    id: 4,
    stepNum: "STEP 4",
    title: "Open Aviator and Set Your Bet",
    lists: [
      { active: true, text: "Choose your stake: Risk amount within your personal limits" },
      { active: true, text: "Set auto-cashout: Auto target such as 1.50x or 2.00x multiplier" },
      { active: true, text: "Use auto-bet carefully: Monitor balance and active round settings" },
    ],
  },
  {
    id: 5,
    stepNum: "STEP 5",
    title: "Watch the Plane and Cash Out",
    lists: [
      { active: true, text: "Cash out early: Lower multiplier offers smaller steady returns" },
      { active: true, text: "Wait longer: Higher multipliers carry greater risk of plane crashing" },
      { active: true, text: "Avoid chasing losses: Every round has a completely separate outcome" },
    ],
  },
];

const RoadMapArea = () => {
  const [activeSeason, setActiveSeason] = useState<number>(1);

  return (
    <InView
      as="section"
      triggerOnce={false}
      className="roadMap__area roadMap-bg section-pt-120 section-pb-120"
      style={{ backgroundImage: `url(/assets/img/bg/roadmap_bg.jpg)`, backgroundAttachment: 'fixed' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-11 col-lg-12">
            <div className="roadMap__inner">
              <div className="row">
                {/* Left Side Content & 3D Phone */}
                <div className="col-xl-5 col-lg-6">
                  <div className="roadMap__content">
                    <span className="sub-title text-uppercase" style={{ color: '#E3073C', letterSpacing: '2px', fontWeight: 700, display: 'block', marginBottom: '8px' }}>
                      STEP-BY-STEP GUIDE
                    </span>
                    <h2 className="title" style={{ fontSize: '38px', lineHeight: '1.2', marginBottom: '20px', textShadow: 'none' }}>
                      HOW TO PLAY AVIATOR GAME ONLINE NAMIBIA
                    </h2>
                    <p style={{ color: '#adb0bc', fontSize: '15px', lineHeight: '1.7', marginBottom: '30px', textShadow: 'none' }}>
                      Playing Aviator Game Online Namibia involves a few straightforward steps. Before starting, make sure you understand the game controls, available betting limits, payment options, and applicable platform terms.
                    </p>
                    <a
                      href="https://play.betwin.co.na/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tg-btn-1"
                    >
                      <span>START PLAYING NOW</span>
                      <BtnBgTwo />
                    </a>
                  </div>
                  <div className="roadMap__img text-center mt-5">
                    <img
                      src="/assets/img/others/roadmap.png"
                      className="tg-floating-phone"
                      alt="Aviator Mobile Experience"
                      style={{ maxWidth: '85%', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Right Side 5 Steps */}
                <div className="col-xl-7 col-lg-6">
                  <div className="roadMap__steps-wrap">
                    {road_map_lists.map((item) => {
                      const isActive = activeSeason === item.id;
                      return (
                        <div
                          key={item.id}
                          onClick={() => setActiveSeason(item.id)}
                          onMouseEnter={() => setActiveSeason(item.id)}
                          className={`roadMap__steps-item ${isActive ? "active" : ""}`}
                          style={{
                            cursor: "pointer",
                            transition: "all 0.35s ease",
                            padding: '30px 35px',
                            marginBottom: '20px',
                          }}
                        >
                          <div className="d-flex align-items-center justify-content-between mb-2">
                            <span
                              className="badge px-2 py-1 text-uppercase"
                              style={{
                                background: isActive ? 'rgba(227, 7, 60, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                                color: isActive ? '#E3073C' : '#adb0bc',
                                border: `1px solid ${isActive ? '#E3073C' : '#333'}`,
                                fontSize: '11px',
                                fontWeight: 700,
                              }}
                            >
                              {item.stepNum}
                            </span>
                          </div>
                          <h4 className="title mb-3" style={{ fontSize: '20px', lineHeight: '1.3' }}>
                            <span style={{ color: isActive ? "#ffffff" : "#d0d4e0", textShadow: 'none' }}>
                              {item.title}
                            </span>
                          </h4>
                          <ul className="roadMap__list list-wrap">
                            {item.lists.map((l, i) => (
                              <li
                                key={i}
                                className={`${l.active ? "active" : "pending"} tg__item-row`}
                                style={{ fontSize: '14px', lineHeight: '1.6', textShadow: 'none' }}
                              >
                                {l.text}
                              </li>
                            ))}
                          </ul>
                          <img
                            src="/assets/img/others/roadmap_img.png"
                            alt="Watermark"
                            className="roadMap__steps-img"
                            style={{
                              opacity: isActive ? 0.18 : 0,
                              transform: isActive ? "scale(1.05)" : "scale(1)",
                              transition: "all 0.4s ease",
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
};

export default RoadMapArea;
