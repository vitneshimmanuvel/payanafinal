import "./TestimonialSection.css";
import React, { useRef, useEffect, useState } from "react";

const TestimonialSection = () => {
  const API_URL = import.meta.env.VITE_API_URL ;
  
  const trackRef = useRef(null);
  const videoRefs = useRef([]);
  const [playingState, setPlayingState] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [videoOrientations, setVideoOrientations] = useState([]);

  
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(`${API_URL}/testimonials`);
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          const formattedVideos = data.data.map((testimonial) => ({
            id: testimonial.id,
            name: testimonial.prefix !== 'None' 
              ? `${testimonial.prefix} ${testimonial.name}`
              : testimonial.name,
            src: testimonial.video_url,
            dbId: testimonial.id
          }));
          
          setVideos(formattedVideos);
          setPlayingState(Array(formattedVideos.length).fill(false));
          setVideoOrientations(Array(formattedVideos.length).fill('portrait'));
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [API_URL]);

  // Detect video orientation when metadata loads
  const handleVideoMetadata = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    const aspectRatio = video.videoWidth / video.videoHeight;
    const isLandscape = aspectRatio > 1;
    
    setVideoOrientations((prev) => {
      const next = [...prev];
      next[index] = isLandscape ? 'landscape' : 'portrait';
      return next;
    });
  };

  // Detect desktop viewport
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia("(min-width: 1240px)").matches);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  // Auto-scroll right-to-left animation (only on desktop) - NO DUPLICATION
  useEffect(() => {
    if (!isDesktop || videos.length === 0) return;
    const track = trackRef.current;
    if (!track) return;

    let animationFrame;
    const speed = 50; // pixels per second
    let last = performance.now();

    const animate = (now) => {
      const delta = now - last;
      if (!isPaused) {
        track.scrollLeft += (speed * delta) / 1000; // Scroll left to right
        
        // Loop back to start when reaching the end
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth) {
          track.scrollLeft = 0;
        }
      }
      last = now;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDesktop, isPaused, videos]);

  // Handle video hover on desktop - play on mouse enter
  const handleVideoHoverEnter = async (index, dbId) => {
    if (!isDesktop) return;
    
    const video = videoRefs.current[index];
    if (!video) return;

    try {
      await video.play();
      setPlayingState((prev) => {
        const next = [...prev];
        next[index] = true;
        return next;
      });

      // Track view count (only once per hover)
      try {
        await fetch(`${API_URL}/testimonials/${dbId}/view`, {
          method: 'POST'
        });
      } catch (error) {
        console.error('Error tracking view:', error);
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  // Handle video hover on desktop - pause on mouse leave
  const handleVideoHoverLeave = (index) => {
    if (!isDesktop) return;
    
    const video = videoRefs.current[index];
    if (!video) return;

    video.pause();
    video.currentTime = 0; // Reset to beginning
    setPlayingState((prev) => {
      const next = [...prev];
      next[index] = false;
      return next;
    });
  };

  // Toggle play/pause for mobile (click)
  const handleVideoClick = async (index, dbId) => {
    if (isDesktop) return; // Skip on desktop
    
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingState[index]) {
      video.pause();
    } else {
      await video.play();
      
      // Track view count (only on first play)
      if (!playingState[index]) {
        try {
          await fetch(`${API_URL}/testimonials/${dbId}/view`, {
            method: 'POST'
          });
        } catch (error) {
          console.error('Error tracking view:', error);
        }
      }
    }

    setPlayingState((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  // Skeleton loader component
  const SkeletonCard = ({ index }) => (
    <div className="video-card skeleton-card" key={`skeleton-${index}`}>
      <div className="skeleton-shimmer"></div>
    </div>
  );

  // Loading state
  if (loading) {
    return (
      <section className="testimonial-section">
        <div className="text-content">
          <h2><span>Client</span> Testimonials</h2>
          <p>Our Success Stories</p>
        </div>

        <div className="testimonial-row">
          {[...Array(5)].map((_, idx) => (
            <SkeletonCard key={idx} index={idx} />
          ))}
        </div>
      </section>
    );
  }

  // Empty state
  if (videos.length === 0) {
    return (
      <section className="testimonial-section">
        <div className="text-content">
          <h2><span>Client</span> Testimonials</h2>
          <p>No testimonials available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="testimonial-section">
      <div className="text-content">
        <h2><span>Client</span> Testimonials</h2>
        <p>Our Success Stories</p>
      </div>

      <div
        className="testimonial-row"
        ref={trackRef}
        onMouseEnter={() => isDesktop && setIsPaused(true)}
        onMouseLeave={() => isDesktop && setIsPaused(false)}
      >
        {videos.map((video, idx) => (
          <div
            key={video.id}
            className={`video-card ${videoOrientations[idx]}`}
            data-name={video.name}
            onMouseEnter={() => handleVideoHoverEnter(idx, video.dbId)}
            onMouseLeave={() => handleVideoHoverLeave(idx)}
            onClick={() => handleVideoClick(idx, video.dbId)}
          >
            <div className="video-wrapper">
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={video.src}
                className={`testimonial-video ${videoOrientations[idx]}`}
                playsInline
                preload="metadata"
                muted
                loop
                onLoadedMetadata={() => handleVideoMetadata(idx)}
              />
            </div>
            
            {!playingState[idx] && (
              <div className="play-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="none">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            )}
            
            <div className="video-name-overlay">
              <p>{video.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
