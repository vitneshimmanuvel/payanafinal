import React, { useState } from 'react';
import './StudyOptions.css';

const StudyOptions = () => {
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedQualification, setSelectedQualification] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedProgramLevel, setSelectedProgramLevel] = useState('');
  const [selectedStudyArea, setSelectedStudyArea] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [selectedIntake, setSelectedIntake] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: false,
    termsAccepted: false
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    if (step === 1 && selectedCountry) setStep(2);
    else if (step === 2 && selectedQualification) setStep(3);
    else if (step === 3 && selectedAge) setStep(4);
    else if (step === 4 && selectedProgramLevel) setStep(5);
    else if (step === 5 && selectedStudyArea) setStep(6);
    else if (step === 6 && selectedDuration) setStep(7);
    else if (step === 7 && selectedIntake) setStep(8);
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.phone && formData.termsAccepted) {
      setStep(9);
    }
  };

  const handleWhatsAppToggle = (e) => {
    setFormData({ ...formData, whatsapp: e.target.checked });
  };

  const handleTermsChange = (e) => {
    setFormData({ ...formData, termsAccepted: e.target.checked });
  };

  return (
    <div className="study-options-container">
      <div className="study-options">
        <div className="study-image">
          <img src="1.png" alt="Student" />
        </div>

        <div className="study-content">
          {step === 1 && (
            <>
              <h1>Select Country</h1>
              <div className="button-grid">
                {['UK', 'US', 'Australia', 'Canada', 'New Zealand', 'Germany'].map((country) => (
                  <button
                    key={country}
                    className={`square-btn ${selectedCountry === country ? 'active' : ''}`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    {country}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Country"
                className="input-field"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <h1>Select Qualification</h1>
              <div className="button-grid">
                {['12 Pass', 'Graduate', 'Master', 'PhD'].map((qualification) => (
                  <button
                    key={qualification}
                    className={`square-btn ${selectedQualification === qualification ? 'active' : ''}`}
                    onClick={() => setSelectedQualification(qualification)}
                  >
                    {qualification}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 3 && (
            <>
              <h1>Select Age Group</h1>
              <div className="button-grid">
                {['18-21', '21-25', '25+'].map((age) => (
                  <button
                    key={age}
                    className={`square-btn ${selectedAge === age ? 'active' : ''}`}
                    onClick={() => setSelectedAge(age)}
                  >
                    {age}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 4 && (
            <>
              <h1>Select Program Level</h1>
              <div className="button-grid">
                {['UG Diploma', 'PG Diploma', 'UG', 'PG', 'UG+PG (Accelerated)', 'PhD'].map((level) => (
                  <button
                    key={level}
                    className={`square-btn ${selectedProgramLevel === level ? 'active' : ''}`}
                    onClick={() => setSelectedProgramLevel(level)}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Program Level"
                className="input-field"
                value={selectedProgramLevel}
                onChange={(e) => setSelectedProgramLevel(e.target.value)}
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 5 && (
            <>
              <h1>Select Study Area</h1>
              <div className="button-grid">
                {['Arts', 'Commerce', 'Computer Science & IT', 'Health', 'Engineering & Trades', 'Life Science'].map((area) => (
                  <button
                    key={area}
                    className={`square-btn ${selectedStudyArea === area ? 'active' : ''}`}
                    onClick={() => setSelectedStudyArea(area)}
                  >
                    {area}
                  </button>
                ))}
              </div>
              <input
                type="text"
                placeholder="Other Study Area"
                className="input-field"
                value={selectedStudyArea}
                onChange={(e) => setSelectedStudyArea(e.target.value)}
              />
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 6 && (
            <>
              <h1>Select Duration</h1>
              <div className="button-grid">
                {['0-1 year', '1-2 years', '2-4 years', '4+ years'].map((duration) => (
                  <button
                    key={duration}
                    className={`square-btn ${selectedDuration === duration ? 'active' : ''}`}
                    onClick={() => setSelectedDuration(duration)}
                  >
                    {duration}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 7 && (
            <>
              <h1>Select Intake</h1>
              <div className="button-grid">
                {['Spring', 'Summer', 'Fall', 'Winter'].map((intake) => (
                  <button
                    key={intake}
                    className={`square-btn ${selectedIntake === intake ? 'active' : ''}`}
                    onClick={() => setSelectedIntake(intake)}
                  >
                    {intake}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 8 && (
            <>
              <h1>Enter Your Details</h1>
              <input
                className="input-field"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                className="input-field"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                className="input-field"
                type="number"
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <input
                  type="checkbox"
                  id="whatsapp"
                  checked={formData.whatsapp}
                  onChange={handleWhatsAppToggle}
                />
                <label htmlFor="whatsapp" style={{ marginLeft: '10px' }}>Use this number for WhatsApp</label>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.termsAccepted}
                  onChange={handleTermsChange}
                />
                <label htmlFor="terms" style={{ marginLeft: '10px' }}>I accept the terms and conditions</label>
              </div>
              <button className="full-btn" onClick={handleSubmit}>Submit</button>
            </>
          )}

          {step === 9 && (
            <>
              <h1>Congratulations!</h1>
              <p>You are eligible for our program</p>
              <button className="full-btn" onClick={() => setShowPopup(true)}>Learn More</button>
            </>
          )}
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button 
              className="close-btn" 
              onClick={() => setShowPopup(false)}
              style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
            >
              ×
            </button>
            <h2>Your Details</h2>
            <p><strong>Country:</strong> {selectedCountry}</p>
            <p><strong>Qualification:</strong> {selectedQualification}</p>
            <p><strong>Age:</strong> {selectedAge}</p>
            <p><strong>Program Level:</strong> {selectedProgramLevel}</p>
            <p><strong>Study Area:</strong> {selectedStudyArea}</p>
            <p><strong>Duration:</strong> {selectedDuration}</p>
            <p><strong>Intake:</strong> {selectedIntake}</p>
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

export default StudyOptions;