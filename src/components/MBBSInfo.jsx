import React from 'react'
import { mbdata } from './mbdata.js'
import './MBBSinfo.css'

const MBBSInfo = () => {
  return (
    <div className='heroii'>
      <div className="hero2text">
        <h1>MBBS Abroad</h1>
        <p>
          Explore top countries to pursue MBBS with expert guidance and support throughout the process.
        </p>
      </div>
      <div className="threed">
        {mbdata.map((item, index) => (
          <div className="cardvisa" key={index}>
            <div className="cardvisa-inner">
              <div className="cardvisa-front">
                <h2>{item.name}</h2>
              </div>
              <div className="cardvisa-back">
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

export default MBBSInfo
