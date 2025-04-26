import React, { useState } from 'react';
import './StudyOptions.css';

const StudyOptions = () => {
    const [step, setStep] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedQualification, setSelectedQualification] = useState('');
    const [selectedAge, setSelectedAge] = useState('');
    const [selectedEducationTopic, setSelectedEducationTopic] = useState('');
    const [currentCgpa, setCurrentCgpa] = useState('');
    const [selectedBudget, setSelectedBudget] = useState('');
    const [needsLoan, setNeedsLoan] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleNext = () => {
        if (step === 1 && selectedCountry) setStep(2);
        else if (step === 2 && selectedQualification) setStep(3);
        else if (step === 3 && selectedAge) setStep(4);
        else if (step === 4 && selectedEducationTopic) setStep(5);
        else if (step === 5 && currentCgpa) setStep(6);
        else if (step === 6 && selectedBudget) setStep(7);
        else if (step === 7) setStep(8);
    };

    const validateForm = () => {
        const newErrors = { name: '', email: '', phone: '' };
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Valid email is required';
            isValid = false;
        }

        // Phone validation
        if (!Number(formData.phone) || formData.phone.length < 5) {
            newErrors.phone = 'Valid phone number is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;

        try {
            await fetch('http://localhost:5000/api/study-options', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedCountry,
                    selectedQualification,
                    selectedAge,
                    selectedEducationTopic,
                    currentCgpa,
                    selectedBudget,
                    needsLoan,
                    formData
                }),
            });
            setStep(9); // Move to congratulations step
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="study-options-container">
            <div className="study-options">
                <div className="study-image">
                    <img src="1.png" alt="Student" />
                </div>

                <div className="study-content">
                    <div className="mobile-only-text ">STUDY TECHNOLOGY/ARTS SELECT COUNTRY </div>
                    
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
                            <h1>Select Your Next Education</h1>
                            <div className="button-grid">
                                {['12 ', 'Graduate', 'Master', 'PhD'].map((qualification) => (
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
                            <h1>Select Education Topic</h1>
                            <div className="button-grid">
                                {['Arts', 'Commerce', 'Computer Science & IT', 'Health', 'Engineering & Trades', 'Life Science'].map((topic) => (
                                    <button
                                        key={topic}
                                        className={`square-btn ${selectedEducationTopic === topic ? 'active' : ''}`}
                                        onClick={() => setSelectedEducationTopic(topic)}
                                    >
                                        {topic}
                                    </button>
                                ))}
                            </div>
                            <input
                                type="text"
                                placeholder="Other Education Topic"
                                className="input-field"
                                value={selectedEducationTopic}
                                onChange={(e) => setSelectedEducationTopic(e.target.value)}
                            />
                            <button className="full-btn" onClick={handleNext}>Next</button>
                        </>
                    )}

                    {step === 5 && (
                        <>
                            <h1>Enter Current CGPA/Percentage</h1>
                            <input
                                type="number"
                                className="input-field"
                                placeholder="e.g. 85"
                                value={currentCgpa}
                                onChange={(e) => setCurrentCgpa(e.target.value)}
                            />
                            <button className="full-btn" onClick={handleNext}>Next</button>
                        </>
                    )}

                    {step === 6 && (
                        <>
                            <h1>Select Budget Range</h1>
                            <div className="button-grid">
                                {['<5L/yr', '6-10 L/yr', '11-20 L/yr', '>20 L/yr'].map((budget) => (
                                    <button
                                        key={budget}
                                        className={`square-btn ${selectedBudget === budget ? 'active' : ''}`}
                                        onClick={() => setSelectedBudget(budget)}
                                    >
                                        {budget}
                                    </button>
                                ))}
                            </div>
                            <button className="full-btn" onClick={handleNext}>Next</button>
                        </>
                    )}

                    {step === 7 && (
                        <>
                            <h1>Need Student Loan?</h1>
                            <div className="button-grid">
                                {['YES', 'NO'].map((option) => (
                                    <button
                                        key={option}
                                        className={`square-btn ${needsLoan === (option === 'YES') ? 'active' : ''}`}
                                        onClick={() => setNeedsLoan(option === 'YES')}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <button className="full-btn" onClick={handleNext}>Next</button>
                        </>
                    )}

                    {step === 8 && (
                        <>
                            <h1>Enter Your Details</h1>
                            
                            {errors.name && <div className="error-message">{errors.name}</div>}
                            <input
                                className="input-field"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                            
                            {errors.email && <div className="error-message">{errors.email}</div>}
                            <input
                                className="input-field"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                            <input
                                className="input-field"
                                type="number"
                                placeholder="Phone (Will be used for WhatsApp)"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            
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
                        <p><strong>Education Topic:</strong> {selectedEducationTopic}</p>
                        <p><strong>CGPA/Percentage:</strong> {currentCgpa}</p>
                        <p><strong>Budget:</strong> {selectedBudget}</p>
                        <p><strong>Student Loan:</strong> {needsLoan ? 'YES' : 'NO'}</p>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>WhatsApp/Phone:</strong> {formData.phone}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudyOptions;