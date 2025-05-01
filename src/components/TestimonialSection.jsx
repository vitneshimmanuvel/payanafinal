import "./TestimonialSection.css";
import Player from "@vimeo/player";
import React, { useRef, useEffect } from "react";

const TestimonialSection = () => {
  const iframeRef1 = useRef(null);
  const iframeRef2 = useRef(null);
  const iframeRef3 = useRef(null);
  const iframeRef4 = useRef(null);

  const [playingState, setPlayingState] = React.useState({
    video1: false,
    video2: false,
    video3: false,
    video4: false,
  });

  const handleMouseEnter = (ref, videoId) => {
    if (ref.current && !playingState[videoId]) {
      const player = new Player(ref.current);
      player.play();
      setPlayingState((prev) => ({ ...prev, [videoId]: true }));
    }
  };

  const handleMouseLeave = (ref, videoId) => {
    if (ref.current) {
      const player = new Player(ref.current);
      player.pause();
      player.setCurrentTime(0);
      setPlayingState((prev) => ({ ...prev, [videoId]: false }));
    }
  };

  const handlePlayButtonClick = (ref, videoId) => {
    if (ref.current) {
      const player = new Player(ref.current);
      if (!playingState[videoId]) {
        player.play();
        setPlayingState((prev) => ({ ...prev, [videoId]: true }));
      } else {
        player.pause();
        setPlayingState((prev) => ({ ...prev, [videoId]: false }));
      }
    }
  };

  useEffect(() => {
    [iframeRef1, iframeRef2, iframeRef3, iframeRef4].forEach((ref) => {
      if (ref.current) {
        new Player(ref.current);
      }
    });
  }, []);

  return (
    <section className="testimonial-section">
      <div className="text-content">
        <h2><span>Client</span> Testimonials</h2>
        <p>Our Success Stories</p>
      </div>
      <div className="testimonial-row">

        {/* Video 1 */}
        <div
          className="video-card"
          data-name="Manju"
          onMouseEnter={() => handleMouseEnter(iframeRef1, "video1")}
          onMouseLeave={() => handleMouseLeave(iframeRef1, "video1")}
        >
          <div className="video-overlay"></div>
          <div className="video-text"></div>
          <iframe
            ref={iframeRef1}
            src="https://player.vimeo.com/video/1078764435?h=f0c55c6364&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo Video 1"
          ></iframe>
          {!playingState.video1 && (
            <div className="play-button" onClick={() => handlePlayButtonClick(iframeRef1, "video1")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
        </div>

        <div
          className="video-card"
          data-name="Varshini"
          onMouseEnter={() => handleMouseEnter(iframeRef2, "video2")}
          onMouseLeave={() => handleMouseLeave(iframeRef2, "video2")}
        >
          <div className="video-overlay"></div>
          <div className="video-text"></div>
          <iframe
            ref={iframeRef2}
            src="https://player.vimeo.com/video/1079721907?h=5d005137ff&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo Video 2"
          ></iframe>
          {!playingState.video2 && (
            <div className="play-button" onClick={() => handlePlayButtonClick(iframeRef2, "video2")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
        </div>

        {/* Video 3 */}
        <div
          className="video-card"
          data-name="Mohana Sangari"
          onMouseEnter={() => handleMouseEnter(iframeRef3, "video3")}
          onMouseLeave={() => handleMouseLeave(iframeRef3, "video3")}
        >
          <div className="video-overlay"></div>
          <div className="video-text"></div>
          <iframe
            ref={iframeRef3}
            src="https://player.vimeo.com/video/1078787624?h=8817470ba2&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo Video 3"
          ></iframe>
          {!playingState.video3 && (
            <div className="play-button" onClick={() => handlePlayButtonClick(iframeRef3, "video3")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
        </div>

        <div
          className="video-card"
          data-name="Arun"
          onMouseEnter={() => handleMouseEnter(iframeRef4, "video4")}
          onMouseLeave={() => handleMouseLeave(iframeRef4, "video4")}
        >
          <div className="video-overlay"></div>
          <div className="video-text"></div>
          <iframe
            ref={iframeRef4}
            src="https://player.vimeo.com/video/1079721751?h=29d4679163&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vimeo Video 4"
          ></iframe>
          {!playingState.video4 && (
            <div className="play-button" onClick={() => handlePlayButtonClick(iframeRef4, "video4")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          )}
        </div>
        
      </div>
    </section>
  );
};

export default TestimonialSection;
