import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-style-one" style={{ background: '#101010' }}>
      <div className="footer__top-wrap" style={{ background: '#101010', borderTop: '1px solid #2C2C2C' }}>
        <div className="container">
          <div className="row">
            {/* 1. Brand Description */}
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <div className="footer-logo logo mb-3">
                  <a href="https://betwin.co.na/">
                    <img
                      src="/assets/logo/betwin-games-logo.webp"
                      alt="Betwin Games"
                      style={{ height: '38px', width: 'auto', display: 'block' }}
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p className="desc" style={{ color: '#adb0bc', lineHeight: '1.7', fontSize: '14px' }}>
                    Betwin is your trusted online betting platform offering secure gaming, fast payments &amp; entertainment, including Aviator Game Online Play in Namibia. Enjoy a safe, mobile-optimized &amp; fair gaming experience with Betwin.
                  </p>
                  <p className="social-title mt-4">Active <span>With Us <i className="fas fa-angle-double-right"></i></span></p>
                  <div className="footer-social">
                    <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/icons/social_icon01.png" alt="Discord" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/icons/social_icon02.png" alt="Twitter" /></a>
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/icons/social_icon03.png" alt="Instagram" /></a>
                    <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer"><img src="/assets/img/icons/social_icon04.png" alt="Telegram" /></a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Links */}
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title" style={{ color: '#ffffff' }}>Links</h4>
                <ul className="list-wrap menu">
                  <li><a href="https://betwin.co.na/">Home</a></li>
                  <li><a href="https://betwin.co.na/games">Games</a></li>
                  <li><a href="https://betwin.co.na/slot-games-namibia">Slots</a></li>
                  <li><a href="https://betwin.co.na/lucky6-game-namibia">Lucky 6</a></li>
                  <li><a href="https://betwin.co.na/bingo-games-namibia">Bingo</a></li>
                  <li><a href="https://betwin.co.na/about-us">About</a></li>
                  <li><a href="https://betwin.co.na/blog">Blog</a></li>
                </ul>
              </div>
            </div>

            {/* 3. Support */}
            <div className="col-xl-2 col-lg-3 col-md-5 col-sm-6">
              <div className="footer-widget widget_nav_menu">
                <h4 className="fw-title" style={{ color: '#ffffff' }}>Support</h4>
                <ul className="list-wrap menu">
                  <li><a href="https://betwin.co.na/contact">Contact</a></li>
                  <li><a href="https://betwin.co.na/terms-conditions">Terms &amp; Conditions</a></li>
                  <li><a href="https://betwin.co.na/privacy">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

            {/* 4. Stay Updated */}
            <div className="col-xl-4 col-lg-5 col-md-7">
              <div className="footer-widget">
                <h4 className="fw-title" style={{ color: '#ffffff' }}>Stay Updated</h4>
                <div className="footer-newsletter">
                  <p style={{ color: '#adb0bc', fontSize: '14px', marginBottom: '20px' }}>
                    Subscribe to get the latest gaming news and exclusive offers.
                  </p>
                  <form action="#" className="footer-newsletter-form">
                    <input type="email" placeholder="Your email address" style={{ background: '#1E1E1E', color: '#ffffff', border: '1px solid #2C2C2C' }} />
                    <button type="submit" style={{ background: '#E3073C' }}><i className="flaticon-paper-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrap" style={{ background: '#0c0c0c', borderTop: '1px solid #1f1f1f' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <div className="copyright__text">
                <p style={{ color: '#888888', margin: 0 }}>Copyright © {new Date().getFullYear()} - All Rights Reserved By <span style={{ color: '#E3073C' }}>Betwin Games</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
