import React from 'react'
import './About.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation , faUsers, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import about from '../../assets/about-2.png'
import about2 from '../../assets/about-3.jpg'
import show_1 from '../../assets/showroom-1.jpeg';
import show_2 from '../../assets/showroom-2.jpeg';
import show_3 from '../../assets/showroom-3.jpeg';
import show_4 from '../../assets/showroom-4.jpeg';

function About() {
  return (
    <div className=' container'> 
    <div className="about">
    <div className="about-left">
      <div><img src={about} alt="" className='about-img'/></div>
      <div><img src={about2} alt="" className='about-img1'/></div>
      </div>
      <div className="about-right">
        <h2> ABOUT THE COMPANY </h2>
        <h3>A commitment to excellence and customer satisfaction.</h3>
        <p>
          Our mission is to provide reliable and high-quality products to industries 
          across various sectors, including manufacturing, construction, automotive, aerospace, and more. 
          We work closely with trusted manufacturers and suppliers to ensure that we offer only the best-in-class 
          products to our customers.
        </p>
        <div className='aboutprofiles'>
          <ul>
            <li><FontAwesomeIcon icon={faMapLocation} /></li>
            <li>Best Delivery Resources</li>
          </ul>
          <ul>
            <li><FontAwesomeIcon icon={faUsers} /></li>
            <li>Best in customer service</li>
          </ul>
        </div>
        <ul className='abt-lst mt-3'>
          <li className='mb-3'><FontAwesomeIcon icon={faCircleCheck} /> <span className='text-content'>Offer 100 % Genuine Assistance</span></li>
          <li className='mb-3'><FontAwesomeIcon icon={faCircleCheck} /> <span className='text-content'>It’s Faster & Reliable Execution</span></li>
          <li><FontAwesomeIcon icon={faCircleCheck} /> <span className='text-content'>Accurate & Expert Advice</span></li>
        </ul>
      </div> 
    </div>
     
    <div>
      <h3 className='key1'>Our Exclusive Showroom</h3>
        <div className='showroom'>
        <div><img src={show_1} alt="" /></div>
        <div><img src={show_2} alt="" /></div>
        <div><img src={show_3} alt="" /></div>
        <div><img src={show_4} alt="" /></div>
        </div>
      </div>
     
    </div>
    
  )
}

export default About
