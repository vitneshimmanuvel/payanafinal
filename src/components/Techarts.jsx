import React from 'react'
import { visaData } from './visaData'; 
import './Techarts.css'

const Techarts = () => {
  return (
    <div className='visa-hero2'>
      <div className="visa-hero2text">
        <h1>Popular visa</h1>
        <p>
          We offer expert guidance and support that increases your chances of visa success.
        </p>
      </div>
      <div className="visa-threed">
        {visaData.map((item, index) => (
          <div className="visa-cardvisa" key={index}>
            <div className="visa-cardvisa-inner">
              <div className="visa-cardvisa-front">
                <h2>{item.name}</h2>
              </div>
              <div className="visa-cardvisa-back">
                <ul>
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Techarts