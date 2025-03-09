import React, { useState, useEffect } from 'react';
import './Contact.css';
import msg_icon from '../../assets/msg.png';
import white_arrow from '../../assets/white_arrow.png';
import korea_flag from '../../assets/south-korea.png';
import india_flag from '../../assets/india.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});
  
  const validateForm = (formData) => {
    const errors = {};

    // Validate mobile number
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.get('phone'))) {
      errors.phone = 'Invalid mobile number. It should be 10 digits.';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.get('email'))) {
      errors.email = 'Invalid email address.';
    }

    // Check required fields
    ['name', 'phone', 'message'].forEach(field => {
      if (!formData.get(field)) {
        errors[field] = 'This field is required.';
      }
    });

    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f10179ce-fa72-455b-9025-d6ad0d7fc1d7");

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setResult("Form contains errors.");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setErrors({});
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    });

    const elements = document.querySelectorAll('.contact, .contact-col, .contact form, .contact-col ul li');
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="cont-bg container1">
      <div className='contact'>
        <div className="contact-col">
          <h3 className='snd_msg'>Send us a Message <img src={msg_icon} alt="" /></h3>
          <p>
            For any questions or inquiries, don't 
            hesitate to reach out to us via email.
            Our dedicated team is standing by to 
            provide you with the information and 
            support you need.
          </p>
          <ul>
            <li>
              <div className='contact-sub'>
                <div>
                  <div className='cont-hed'><FontAwesomeIcon icon={faEnvelope} /> Mail Us</div> 
                  <div className='mail-info'>
                    <span><img src={korea_flag} alt="" />tnt.md.kim@gmail.com </span>
                    <span><img src={india_flag} alt="" />admin@techtools-india.com</span> 
                    <span><img src={india_flag} alt="" />tnt.purchase.selvam@gmail.com </span>
                    <span><img src={india_flag} alt="" />tnt.vj25@gmail.com</span> 
                  </div>
                </div>
                <div>
                  <div className='cont-hed'><FontAwesomeIcon icon={faPhone} /> Call Us</div>
                  <div className='mail-info'>
                    <span><img src={korea_flag} alt="" /> +91 70948 59537</span>
                    <span><img src={india_flag} alt="" /> +91 86753 40241</span> 
                    <span><img src={india_flag} alt="" /> +91 95971 20904</span>
                    <span><img src={india_flag} alt="" /> +91 95970 21367</span> 
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className='address'>
              <div className='cont-hed'><FontAwesomeIcon icon={faMapMarkerAlt} /> Location</div>
              <div className='address-point'>
                <div><FontAwesomeIcon icon={faLocationArrow} /></div>
                <div style={{ paddingLeft: 10 }}>
                  No 100, J-1 Tower, Banglore HighRoad,
                  Chettipedu Village Sriperumbudur, 
                  Kanchipuram Dt. TamilNadu - 602 105
                </div>
              </div> 
              <div className='address-point'>
                <div><FontAwesomeIcon icon={faLocationArrow} /></div>
                <div style={{ paddingLeft: 10 }}>
                  125A, VGP Queens town 
                  apartments, Chettipedu Village,
                  Sriperumbudur, Kancheepuram Dt. 60215, Tamil Nadu
                </div>
              </div> 
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            {errors.name && <p className="error">{errors.name}</p>}
            <label>Email</label>
            <input type="email" name='email' placeholder='Enter your email' required/>
            {errors.email && <p className="error">{errors.email}</p>}
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            {errors.phone && <p className="error">{errors.phone}</p>}
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <div className='btn-prd'>
              <button type='submit' className='btn dark-btn' style={{marginTop: '40px'}}> Submit now <img src={white_arrow} alt="" /></button>
            </div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
