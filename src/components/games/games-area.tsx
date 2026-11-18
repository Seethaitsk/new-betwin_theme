'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const games_data = [
  {
    id: 1,
    title: 'Online Slots',
    category: 'Slots & Jackpots',
    tag: 'SLOTS',
    img: '/assets/img/games/game7.jpg',
    link: 'https://betwin.co.na/slot-games-namibia',
  },
  {
    id: 2,
    title: 'Lucky 6',
    category: 'Numbers Betting',
    tag: 'NUMBERS',
    img: '/assets/img/games/game6.jpg',
    link: 'https://betwin.co.na/lucky6-game-namibia',
  },
  {
    id: 3,
    title: 'Bingo Games',
    category: 'Instant Draw',
    tag: 'ROOMS',
    img: '/assets/img/games/game5.jpg',
    link: 'https://betwin.co.na/bingo-games-namibia',
  },
  {
    id: 4,
    title: 'Live Roulette',
    category: 'Live Casino',
    tag: 'CASINO',
    img: '/assets/img/games/game4.jpg',
    link: 'https://betwin.co.na/games',
  },
  {
    id: 5,
    title: 'Blackjack',
    category: 'Table Cards',
    tag: 'CLASSIC',
    img: '/assets/img/games/game3.jpg',
    link: 'https://betwin.co.na/games',
  },
  {
    id: 6,
    title: 'Aviator',
    category: 'Crash Game',
    tag: 'HOT',
    img: '/assets/img/games/game1.jpg',
    link: 'https://play.betwin.co.na/',
  },
  {
    id: 7,
    title: 'Sports Betting',
    category: 'Live Odds',
    tag: 'SPORTS',
    img: '/assets/img/games/game2.jpg',
    link: 'https://betwin.co.na/games',
  },
];

const slider_setting = {
  observer: true,
  observeParents: true,
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1400: {
      slidesPerView: 4,
      spaceBetween: 22,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 14,
    },
    0: {
      slidesPerView: 1.25,
      spaceBetween: 12,
    },
  },
  pagination: {
    el: '.games-pagination-dots',
    clickable: true,
  },
  navigation: {
    nextEl: '.games-button-next',
    prevEl: '.games-button-prev',
  },
};

export default function GamesArea() {
  return (
    <section id="top-rated-games" className="streamers__area section-pt-95 section-pb-120" style={{ background: '#121212', scrollMarginTop: '100px' }}>
      <div className="container">
        {/* Title Block with Red Theme and SINGLE clean red line */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-10">
            <div className="section__title text-center mb-50 title-shape-none">
              <span
                className="sub-title tg__animate-text text-uppercase d-inline-block"
                style={{
                  color: '#E3073C',
                  letterSpacing: '2px',
                  fontWeight: 700,
                  fontSize: '14px',
                  marginBottom: '8px',
                }}
              >
                OUR TOP GAMES
              </span>
              <h3
                className="title text-uppercase"
                style={{
                  color: '#ffffff',
                  fontSize: '34px',
                  letterSpacing: '1px',
                  margin: 0,
                  fontWeight: 800,
                }}
              >
                TOP RATED GAMES
              </h3>
              {/* Exactly ONE red accent line */}
              <div
                className="single-red-line mx-auto"
                style={{
                  width: '56px',
                  height: '4px',
                  background: '#E3073C',
                  borderRadius: '2px',
                  marginTop: '14px',
                  boxShadow: '0 0 10px rgba(227, 7, 60, 0.6)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Swiper Slider with 4 Cards side-by-side */}
        <Swiper
          {...slider_setting}
          modules={[Navigation, Pagination]}
          className="swiper-container streamers-active"
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = '.games-button-prev';
            // @ts-ignore
            swiper.params.navigation.nextEl = '.games-button-next';
            // @ts-ignore
            swiper.params.pagination.el = '.games-pagination-dots';
          }}
        >
          {games_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="streamers__item game-slider-card">
                {/* Card Artwork */}
                <div className="streamers__thumb position-relative overflow-hidden">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="d-block">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="game-card-img"
                    />
                  </a>
                  {/* Hover "Play Now" CTA */}
                  <div className="game-card-hover-cta">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-play-game"
                    >
                      <i className="fas fa-play me-2" style={{ fontSize: '11px' }}></i> PLAY NOW
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Red Navigation Controls */}
        <div className="streamers__pagination d-flex align-items-center justify-content-center mt-4 position-relative">
          <div className="games-button-prev streamers__pagination-arrow" title="Previous">
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="games-pagination-dots mx-3"></div>
          <div className="games-button-next streamers__pagination-arrow" title="Next">
            <i className="fas fa-angle-right"></i>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .game-slider-card {
          border: 2px solid #252834 !important;
          background: #151821 !important;
          border-radius: 12px !important;
          padding: 8px !important;
          margin-bottom: 20px !important;
          transition: all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
          position: relative !important;
          overflow: hidden !important;
          width: 100% !important;
          max-width: 320px !important;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .game-card-img {
          width: 100% !important;
          height: 390px !important;
          object-fit: cover !important;
          border-radius: 8px !important;
          display: block !important;
          transition: transform 0.4s ease !important;
          border: 1px solid #232733 !important;
        }

        @media (max-width: 1199.98px) {
          .game-card-img {
            height: 360px !important;
          }
        }

        @media (max-width: 767.98px) {
          .game-card-img {
            height: 340px !important;
          }
        }

        .game-slider-card:hover {
          border-color: #E3073C !important;
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(227, 7, 60, 0.4) !important;
        }

        .game-slider-card:hover .game-card-img {
          transform: scale(1.05);
        }

        .game-card-hover-cta {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(227, 7, 60, 0.88) 0%, rgba(18, 18, 18, 0.35) 60%, transparent 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          border-radius: 8px;
          z-index: 2;
        }

        .game-slider-card:hover .game-card-hover-cta {
          opacity: 1;
          pointer-events: auto;
        }

        .btn-play-game {
          background: #ffffff;
          color: #E3073C;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 1px;
          padding: 11px 24px;
          border-radius: 30px;
          text-transform: uppercase;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
          transition: all 0.25s ease;
          display: inline-flex;
          align-items: center;
        }

        .btn-play-game:hover {
          background: #101010;
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 8px 25px rgba(227, 7, 60, 0.6);
        }

        .games-button-prev,
        .games-button-next {
          width: 42px;
          height: 42px;
          background: #1E1E1E;
          border: 1px solid #333333;
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .games-button-prev:hover,
        .games-button-next:hover {
          background: #E3073C;
          border-color: #E3073C;
          color: #ffffff;
          box-shadow: 0 0 15px rgba(227, 7, 60, 0.6);
        }

        .games-pagination-dots {
          position: relative !important;
          width: auto !important;
          bottom: auto !important;
          left: auto !important;
          right: auto !important;
          top: auto !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          transform: none !important;
        }

        .games-pagination-dots .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #383C4E;
          opacity: 0.8;
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .games-pagination-dots .swiper-pagination-bullet-active {
          background: #E3073C !important;
          width: 24px !important;
          border-radius: 6px !important;
          box-shadow: 0 0 10px rgba(227, 7, 60, 0.8) !important;
        }
      `}</style>
    </section>
  );
}
