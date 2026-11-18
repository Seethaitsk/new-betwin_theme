'use client';

import { useState } from 'react';
import SvgIconCom from '../common/svg-icon-anim';
import VideoPopup from '../common/video-popup';
import CounterUp from "../common/counter-up";

const AboutAreaTwo = () => {
   const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
   return (
      <>
         <section className="about__area-two section-pt-120 section-pb-120" style={{ background: '#121212' }}>
            <div className="container">
               <div className="row justify-content-center align-items-center">
                  <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                     <div className="about__funFact-images">
                        <img src="/assets/img/others/fun_fact_shape.png" alt="background" className="bg-shape" />
                        <img src="/assets/img/others/fun_fact.png" className="main-img" alt="image" />
                     </div>
                     <div className="about__funFact-trophy">
                        <div className="icon"><img src="/assets/img/icons/trophy.png" alt="trophy"/></div>
                        <div className="content">
                           <h5>Aviator Game</h5>
                           <span>Online Namibia</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-10">
                     <div className="section__title text-start mb-30">
                        <span className="sub-title tg__animate-text" style={{ color: '#E3073C', display: 'block', marginBottom: '8px', letterSpacing: '2px', fontWeight: 700 }}>
                           WELCOME TO BETWIN
                        </span>
                        <h3 className="title">WHAT IS AVIATOR?</h3>
                     </div>
                     <div className="about__content-two">
                        <p style={{ marginBottom: '12px' }}>
                           Aviator is a crash-style casino game where a virtual plane takes off and a multiplier starts increasing from 1.00x. Players place a bet before the round and cash out before the plane crashes. The longer the plane stays in the air, the higher the multiplier can rise.
                        </p>
                        <p style={{ color: '#8e92a0', fontSize: '14px', lineHeight: '1.6' }}>
                           The Aviator Game Online Namibia experience is built around this simple concept. Players can follow the multiplier in real time, avoid the crash, and decide exactly when they want to cash out before the flight ends.
                        </p>
                     </div>
                     <div className="about__content-bottom">
                        <div className="about__content-circle">
                           <img src="/assets/img/icons/circle.svg" alt="img" />
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" version="1.1">
                              <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                              <text>
                                 <textPath href="#textPath">betwin aviator online play</textPath>
                              </text>
                           </svg>
                        </div>
                        <div className="about__funFact-wrap">
                           <div className="about__funFact-lists">
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={100} text="%" />
                                 </h2>
                                 <p>Real-Time</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={1} text=".00x" />
                                 </h2>
                                 <p>Multiplier</p>
                              </div>
                              <div className="about__funFact-item">
                                 <h2 className="count">
                                    <CounterUp number={24} text="/7" />
                                 </h2>
                                 <p>Available</p>
                              </div>
                           </div>
                           <div className="about__content-btns">
                              <a href="https://play.betwin.co.na/" target="_blank" rel="noopener noreferrer" className="tg-btn-3 tg-svg">
                                 <SvgIconCom icon="/assets/img/icons/shape.svg" id="svg-6" />
                                 <span>Play Now</span>
                              </a>
                              <a className="popup-video pointer"
                                 onClick={() => setIsVideoOpen(true)}><i className="fas fa-play">
                              </i><span className="text">How It Work</span></a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* video modal start */}
         <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"ssrNcwxALS4"}
         />
         {/* video modal end */}
      </>
   );
};

export default AboutAreaTwo;