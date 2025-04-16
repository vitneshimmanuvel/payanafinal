import React, { useState } from 'react';
import './StudyOptions.css';

const StudyOptions = () => {
  const [step, setStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedPath, setSelectedPath] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: ''
  });

  const handleNext = () => {
    if (step === 1 && selectedCountry) setStep(2);
    else if (step === 2 && selectedPath) setStep(3);
  };

  const handleSubmit = () => {
    // Here you can send formData to the server if needed

    // Reset to initial state
    setStep(1);
    setSelectedCountry('');
    setSelectedPath('');
    setFormData({ name: '', email: '', dob: '' });
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
              <h1>Study</h1>
              <p>Discover your career opportunities</p>
              <div className="button-grid">
                {['USA', 'UK', 'Canada', 'Australia'].map((country) => (
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
              <h1>Choose Path</h1>
              <div className="button-grid">
                {['IT', 'Non-IT', 'Technical', 'Management'].map((path) => (
                  <button
                    key={path}
                    className={`square-btn ${selectedPath === path ? 'active' : ''}`}
                    onClick={() => setSelectedPath(path)}
                  >
                    {path}
                  </button>
                ))}
              </div>
              <button className="full-btn" onClick={handleNext}>Next</button>
            </>
          )}

          {step === 3 && (
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
                type="date"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              />
              <button className="full-btn" onClick={handleSubmit}>Submit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyOptions;
