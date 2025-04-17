import React, { useState, useEffect } from 'react';
import './HelpCommunity.css';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';

// Banner Images
const bannerImages = [
  "ChatGPT Image Apr 17, 2025, 02_59_38 PM.png",
  "ChatGPT Image Apr 17, 2025, 03_00_15 PM.png",
  "ChatGPT Image Apr 17, 2025, 03_04_54 PM.png",
  "ChatGPT Image Apr 17, 2025, 02_58_47 PM.png",
];

const HelpCommunity = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    country: '',
    qualification: '',
    experience: '',
    jobTitle: '',
    name: '',
    email: '',
    phone: '',
    whatsapp: false,
    termsAccepted: false
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    if (step === 1 && formData.country) setStep(2);
    else if (step === 2 && formData.qualification) setStep(3);
    else if (step === 3 && formData.experience) setStep(4);
    else if (step === 4 && formData.jobTitle) setStep(5);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.termsAccepted) {
      setStep(6);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="help-community-container">
      {/* Banner Slideshow */}
      <div className="banner-slideshow">
        {bannerImages.map((image, index) => (
          <div 
            key={index}
            className={`banner-slide ${index === currentBanner ? 'active' : ''}`}
          >
            <img src={image} alt={`Banner ${index + 1}`} />
          </div>
        ))}
        
        <div className="banner-dots">
          {bannerImages.map((_, index) => (
            <span 
              key={index}
              className={`dot ${index === currentBanner ? 'active' : ''}`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      </div>

      <div className="content-container">
        {/* Left Panel - Multi-step Form */}
        <div className="left-panel">
          {step === 1 && (
            <div>
              <h1 className="left-heading">Select Country</h1>
              <div className="button-grid">
                {['UK', 'US', 'Australia', 'Canada', 'New Zealand', 'Germany'].map((country) => (
                  <button
                    key={country}
                    className={`square-btn ${formData.country === country ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, country })}
                  >
                    {country}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Country"
                className="input-field"
                value={formData.country}
                onChange={handleChange}
                name="country"
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="left-heading">Select Qualification</h1>
              <div className="button-grid">
                {['12 Pass', 'Graduate', 'Master', 'PhD'].map((qualification) => (
                  <button
                    key={qualification}
                    className={`square-btn ${formData.qualification === qualification ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, qualification })}
                  >
                    {qualification}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Qualification"
                className="input-field"
                value={formData.qualification}
                onChange={handleChange}
                name="qualification"
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h1 className="left-heading">Select Experience</h1>
              <div className="button-grid">
                {['Fresher', '1-2 years', '2-4 years', '4+ years'].map((experience) => (
                  <button
                    key={experience}
                    className={`square-btn ${formData.experience === experience ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, experience })}
                  >
                    {experience}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 4 && (
            <div>
              <h1 className="left-heading">Select Job Title</h1>
              <div className="button-grid">
                {['Business Development Manager', 'Software Engineer', 'Senior Software Engineer', 
                  'Administrative Assistant', 'Business Analyst', 'Operations'].map((title) => (
                  <button
                    key={title}
                    className={`square-btn ${formData.jobTitle === title ? 'active' : ''}`}
                    onClick={() => setFormData({ ...formData, jobTitle: title })}
                  >
                    {title}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Job Title"
                className="input-field"
                value={formData.jobTitle}
                onChange={handleChange}
                name="jobTitle"
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </div>
          )}

          {step === 5 && (
            <div>
              <h1 className="left-heading">Personal Details</h1>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your name" 
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input 
                  type="number" 
                  id="phone" 
                  placeholder="Enter your phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  name="phone"
                  className="input-field"
                />
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="whatsapp"
                  checked={formData.whatsapp}
                  onChange={handleCheckboxChange}
                  name="whatsapp"
                />
                <label htmlFor="whatsapp">Use this number for WhatsApp</label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={handleCheckboxChange}
                  name="termsAccepted"
                />
                <label htmlFor="terms">I accept the terms and conditions</label>
              </div>

              <button type="button" className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}

          {step === 6 && (
            <div>
              <h1 className="left-heading">Congratulations!</h1>
              <p>You are eligible for our program</p>
              <button className="submit-btn" onClick={() => setShowPopup(true)}>
                Learn More
              </button>
            </div>
          )}
        </div>

        {/* Right Panel - Community Info */}
        <div className="right-panel">
          <h2 className="right-heading">Join Our Community</h2>
          <p className="subtext">
            Connect with students, alumni, and experts via WhatsApp.
          </p>

          <button className="whatsapp-button">
            <FaWhatsapp size={20} />
            <span>Join WhatsApp App</span>
          </button>

          <div className="social-iconss">
            <a href="#" className="social-icon instagram">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="social-icon facebook">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="social-icon twitter">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button 
              className="close-btn" 
              onClick={() => setShowPopup(false)}
            >
              ×
            </button>
            <h2>Your Details</h2>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>Qualification:</strong> {formData.qualification}</p>
            <p><strong>Experience:</strong> {formData.experience}</p>
            <p><strong>Job Title:</strong> {formData.jobTitle}</p>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            {formData.whatsapp && <p><strong>WhatsApp:</strong> {formData.phone}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpCommunity;