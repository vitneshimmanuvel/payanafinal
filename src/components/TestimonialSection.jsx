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
        {[
          {
            ref: iframeRef1,
            id: "video1",
            name: "Mrs. Manju",
            src: "https://player.vimeo.com/video/1081228912?h=477900a8cb&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
          },
          {
            ref: iframeRef4,
            id: "video4",
            name: "Mr. Saravanan",
            src: "https://player.vimeo.com/video/1081743140?h=afb802782b&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
          },
          {
            ref: iframeRef2,
            id: "video2",
            name: "Ms Varshini",
            src: "https://player.vimeo.com/video/1079721907?h=5d005137ff&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
          },
          {
            ref: iframeRef3,
            id: "video3",
            name: "Ms Mohana Sangari",
            src: "https://player.vimeo.com/video/1078787624?h=8817470ba2&title=0&byline=0&portrait=0&badge=0&controls=0&sharing=0&autoplay=0&loop=0"
          },
          
        ].map(({ ref, id, name, src }) => (
          <div
            key={id}
            className="video-card"
            data-name={name}
            onMouseEnter={() => handleMouseEnter(ref, id)}
            onMouseLeave={() => handleMouseLeave(ref, id)}
            onClick={() => handlePlayButtonClick(ref, id)}
          >
            <div className="video-overlay"></div>
            <div className="video-text"></div>
            <iframe
              ref={ref}
              src={src}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title={`Vimeo ${id}`}
            ></iframe>
            {!playingState[id] && (
              <div
                className="play-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayButtonClick(ref, id);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
