
import React from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    name: "Lindsay Scola",
    title: "Director of Public Relations",
    quote: "When I found Payna Overseas, everything became easier.",
    video: "/videos/lindsay.mp4",
  },
  {
    name: "Caroline Cameron",
    title: "Director of Operations",
    quote: "Their services are truly comprehensive and reliable.",
    video: "/videos/caroline.mp4",
  },
  {
    name: "Lori Coyle",
    title: "Fitness Program Manager",
    quote: "The support we received was exceptional throughout the process.",
    video: "/videos/lori.mp4",
  },
  {
    name: "James Thornton",
    title: "Foreign Study Consultant",
    quote: "Trustworthy solutions with a truly global perspective.",
    video: "/videos/james.mp4",
  },
];

const TestimonialCard = ({ name, title, quote, video }) => {
  return (
    <div className="testimonial-card">
      <video 
        className="testimonial-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="testimonial-overlay">
        <p className="quote">"{quote}"</p>
        <p className="name">{name}</p>
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="text-content">
        <h2>
          <span>Client Experiences</span>
          Success Stories
        </h2>
        <p>Hear from our global partners about their journeys with us.</p>
      </div>
      
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            title={testimonial.title}
            quote={testimonial.quote}
            video={testimonial.video}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;