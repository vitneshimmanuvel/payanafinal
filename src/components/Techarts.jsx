import React from 'react'
import { visaData } from './visaData'; 
import './Techarts.css'
const Techarts = () => {
  return (
       <div className='hero2'>
           <div className="hero2text">
           
             <h1>Popular visa</h1>
             <p>
               We offer expert guidance and support that increases your chances of visa success.
             </p>
           </div>
           <div className="threed">
             {visaData.map((item, index) => (
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

export default Techarts
