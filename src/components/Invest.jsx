import React, { useState } from 'react';
import './invest.css';

const Invest = () => {
  const [submissions, setSubmissions] = useState({
    canada: { submitted: false, valid: false },
    us: { submitted: false, valid: false },
    netherlands: { submitted: false, valid: false }
  });

  const handleSubmit = (e, country) => {
    e.preventDefault();
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (!name || !email) {
      setSubmissions(prev => ({
        ...prev,
        [country]: { ...prev[country], valid: false }
      }));
    } else {
      setSubmissions(prev => ({
        ...prev,
        [country]: { ...prev[country], submitted: true, valid: true }
      }));
    }
  };

  return (
    <div className="invest-container">
      <h1 className="invest-heading">Invest in Top Countries</h1>
      
      <div className="invest-flags">
        {[{id: 'canada', name: 'Canada'}, {id: 'us', name: 'USA'}, {id: 'netherlands', name: 'Netherlands'}].map(country => (
          <div key={country.id} className="flag-container">
            <div className="card">
              <div className="card-front">
                <img src={`/${country.name}.png`} alt={`${country.name} Flag`} className="invest-flag" />
                <p className="country-name">{country.name}</p>
              </div>
              <div className="card-back">
                <form 
                  onSubmit={(e) => handleSubmit(e, country.id)}
                  className="contact-form"
                >
                  {submissions[country.id].submitted && submissions[country.id].valid ? (
                    <p className="thank-you">Thank you for your inquiry!</p>
                  ) : (
                    <>
                      <label className="contact-label">Contact Us</label>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        required
                        style={{ borderRadius: '12px' }}
                      />
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        required
                        style={{ borderRadius: '12px' }}
                      />
                      <button 
                        type="submit"
                        style={{ borderRadius: '12px' }}
                      >Submit</button>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invest;