import React, { useEffect } from 'react';
import './Language.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Language = () => {
  useEffect(() => {
    gsap.to(".lang-btn", {
      scrollTrigger: {
        trigger: ".language-right", // Use the container of the buttons as the trigger
        start: "top bottom", // Start the animation when the top of the trigger element reaches the bottom of the viewport
        end: "bottom top",  // End the animation when the bottom of the trigger element reaches the top of the viewport
        toggleActions: "restart none restart none" // Restart the animation when entering, do nothing when leaving, restart when re-entering, do nothing when re-leaving
      },
    
      transformOrigin: "center",
      duration: 1,
      stagger: {
        each: 0.05, // 50ms delay between each button's animation start
        from: "random",
        grid: "auto",
        amount: 1
      },
      ease: "power1.inOut"
    });
  }, []);

  return (
    <section className="language-section">
      <div className="language-left">
        <h1>Languages Training</h1>
        <p>language is the ultimate tool to move forward</p>
      </div>
      <div className="language-right">
        <button className="lang-btn french" style={{scale: 0.01}}>French</button>
        <button className="lang-btn german" style={{scale: 0.01}}>German</button>
        <button className="lang-btn japanese" style={{scale: 0.01}}>Japanese</button>
        <button className="lang-btn chinese" style={{scale: 0.01}}>Mandarin</button>
        <button className="lang-btn russian" style={{scale: 0.01}}>Russian</button>
        <button className="lang-btn portuguese" style={{scale: 0.01}}>Portuguese</button>
        <button className="lang-btn spanish" style={{scale: 0.01}}>Spanish</button>
        <button className="lang-btn english" style={{scale: 0.01}}>English</button>
        <button className="lang-btn korean" style={{scale: 0.01}}>Korean</button>
        <button className="lang-btn dutch" style={{scale: 0.01}}>Dutch</button>
        <button className="lang-btn italian" style={{scale: 0.01}}>Italian</button>
        <button className="lang-btn indonesian" style={{scale: 0.01}}>Indonesian</button>
        <button className="lang-btn arabic" style={{scale: 0.01}}>Arabic</button>
        <button className="lang-btn hindi" style={{scale: 0.01}}>Hindi</button>
        <button className="lang-btn swahili" style={{scale: 0.01}}>Swahili</button>
        <button className="lang-btn turkish" style={{scale: 0.01}}>Turkish</button>
      </div>
    </section>
  );
};

export default Language;