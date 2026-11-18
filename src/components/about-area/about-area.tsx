'use client';

import React from "react";
import { BtnBgFour, BtnBgThree } from "../svg";

// Nav button for casino games
type INavProps = { id: string; img: string; name: string; isActive?: boolean }
function NavBtn({ id, img, name, isActive }: INavProps) {
  const handleClickSound = (audioPath: string) => {
    try {
      const audio = new Audio(audioPath);
      audio.play().catch(() => { /* ignore */ });
    } catch (_e) {
      /* ignore */
    }
  };
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`about${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#about${id}`}
        type="button"
        role="tab"
        aria-controls={`about${id}`}
        aria-selected={isActive ? 'true' : 'false'}
        tabIndex={-1}
        onClick={() => handleClickSound('/assets/audio/tab.mp3')}
      >
        <span className="img-shape"></span>
        <img src={img} alt={name} />
      </button>
    </li>
  );
}

// Tab content item for casino games
type ITabProps = {
  id: string;
  img: string;
  title: string;
  category: string;
  desc: string;
  playLink: string;
  features: string[];
  isActive?: boolean;
}
function TabItem({ id, img, title, category, desc, playLink, features, isActive }: ITabProps) {
  return (
    <div
      className={`tab-pane ${isActive ? "show active" : ""}`}
      id={`about${id}`}
      role="tabpanel"
      aria-labelledby={`about${id}-tab`}
    >
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-5 col-lg-6">
          <div className="about__img text-center">
            <img
              src={img}
              alt={title}
              style={{
                borderRadius: '16px',
                maxHeight: '440px',
                width: 'auto',
                maxWidth: '100%',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.6), 0 0 30px rgba(227, 7, 60, 0.25)',
              }}
            />
          </div>
        </div>
        <div className="col-xl-7 col-lg-6">
          <div className="about__flex-wrap">
            <div className="about__content-wrap">
              <div className="about__content">
                <span className="rate text-uppercase" style={{ color: '#E3073C', fontWeight: 700, letterSpacing: '2px', fontSize: '13px', display: 'block', marginBottom: '8px' }}>
                  {category}
                </span>
                <h4 className="title text-white" style={{ fontSize: '32px', marginBottom: '14px' }}>
                  {title}
                </h4>
                <p style={{ color: '#adb0bc', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                  {desc}
                </p>
              </div>
              <div className="about__content-list mb-4">
                <ul className="list-wrap d-flex flex-wrap gap-2">
                  {features.map((feat, idx) => (
                    <li
                      key={idx}
                      style={{
                        background: '#1E1E1E',
                        border: '1px solid #2C2C2C',
                        color: '#ffffff',
                        padding: '8px 16px',
                        borderRadius: '6px',
                        fontSize: '13px',
                      }}
                    >
                      <i className="fas fa-check-circle me-2" style={{ color: '#E3073C' }}></i>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="about__btn-wrap">
              <ul className="list-wrap d-flex flex-wrap gap-3">
                <li>
                  <a
                    href={playLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tg-btn-1"
                    style={{ padding: '14px 28px' }}
                  >
                    <span>Play Now</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://betwin.co.na/games"
                    className="tg-border-btn"
                    style={{ padding: '14px 24px', borderRadius: '4px', border: '1px solid #333', color: '#adb0bc' }}
                  >
                    <span>Explore All Games</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutArea = () => {
  return (
    <section className="about__area section-pt-120 section-pb-120" style={{ background: '#141414' }}>
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-11">
            <div className="section__title text-center mb-50">
              <span className="sub-title text-uppercase" style={{ color: '#E3073C', letterSpacing: '2px', fontWeight: 700 }}>
                CASINO SELECTION
              </span>
              <h3 className="title text-white mt-1 mb-3">
                EXPLORE MORE ONLINE CASINO GAMES
              </h3>
              <p style={{ color: '#adb0bc', maxWidth: '720px', margin: '0 auto', fontSize: '15px', lineHeight: '1.7' }}>
                Aviator is only one part of the online entertainment available through Betwin. Players in Namibia can also explore slots, Lucky 6, and bingo, with different game formats suited to different preferences.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="about__tab-wrap">
              <div className="about__buttons">
                <a href="https://play.betwin.co.na/" target="_blank" rel="noopener noreferrer" className="tg-btn-2">
                  Play Aviator
                  <BtnBgThree />
                </a>
                <a href="https://betwin.co.na/games" className="tg-btn-2 -secondary">
                  Casino Games
                  <BtnBgFour />
                </a>
              </div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <NavBtn id="01" img={"/assets/img/others/about_tab01.png"} name="Slots" isActive={true} />
                <NavBtn id="02" img={"/assets/img/others/about_tab02.png"} name="Lucky 6" />
                <NavBtn id="03" img={"/assets/img/others/about_tab03.png"} name="Bingo" />
                <NavBtn id="04" img={"/assets/img/others/about_tab04.png"} name="Aviator" />
              </ul>
            </div>
          </div>
        </div>

        {/* Tab Panes */}
        <div className="tab-content mt-4" id="myTabContent">
          <TabItem
            id="01"
            img={"/assets/img/others/about_img01.png"}
            isActive={true}
            category="ONLINE SLOTS"
            title="Online Slot Games Namibia"
            desc="Online Slot Games Namibia offer a simple way to explore different themes, reels, features, and bonus mechanics. Players looking for Online Slots Real Money in Namibia can explore available titles and check the applicable betting limits before playing."
            playLink="https://betwin.co.na/slot-games-namibia"
            features={["Multiple Themes & Reels", "Transparent RTP Rates", "Bonus Features & Free Spins"]}
          />
          <TabItem
            id="02"
            img={"/assets/img/others/about_img02.jpg"}
            category="NUMBER BETTING"
            title="Lucky 6 Betting Online Namibia"
            desc="Lucky 6 Betting Online in Namibia provides another casino-style option for players who enjoy number-based games. Before playing, it is useful to understand the rules, available betting options, and how each round works."
            playLink="https://betwin.co.na/lucky6-game-namibia"
            features={["Live Number Draws", "Fast Round Cycles", "Dynamic Odds & Payouts"]}
          />
          <TabItem
            id="03"
            img={"/assets/img/others/about_img03.jpg"}
            category="CLASSIC CASINO"
            title="Best Bingo Games Online Namibia"
            desc="Bingo remains a popular choice for players who enjoy straightforward number-based entertainment. With Best Bingo Games Online in Namibia, players can explore different formats and game styles from compatible devices."
            playLink="https://betwin.co.na/bingo-games-namibia"
            features={["Easy-to-Follow Rules", "Multi-Card Gameplay", "Exciting Jackpot Rounds"]}
          />
          <TabItem
            id="04"
            img={"/assets/img/others/about_img04.jpg"}
            category="CRASH ENTERTAINMENT"
            title="Aviator Game Online Namibia"
            desc="Experience rising multipliers and real-time cashouts with Betwin. Watch the flight path climb from 1.00x and decide when to cash out before the plane flies away."
            playLink="https://play.betwin.co.na/"
            features={["1.00x Rising Multiplier", "Instant Dual Bets", "Provably Fair RNG"]}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutArea;
