import React from "react";
import "./TestimonialSection.css";

const testimonialVideos = [
  "/videos/lindsay.mp4",
  "/videos/caroline.mp4",
  "/videos/lori.mp4",
  "/videos/james.mp4",
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="text-content">
        <h2><span>Client</span> Testimonials</h2>
        <p>Hear success stories from our global partners.</p>
      </div>
      <div className="testimonial-row">
        {testimonialVideos.map((video, index) => (
          <div className="testimonial-phone" key={index}>
            <video
              src={video}
              className="testimonial-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
