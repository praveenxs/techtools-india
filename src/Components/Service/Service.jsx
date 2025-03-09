import React, { useEffect, useState, useRef } from 'react';
import './Service.css';
import service_1 from '../../assets/koroly.png';
import service_2 from '../../assets/ehwa.png';
import service_3 from '../../assets/mituto.png';
import service_4 from '../../assets/rudrali.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonMilitaryPointing, faSmile, faCog, faThumbsUp, faGlobe } from '@fortawesome/free-solid-svg-icons';

const counters = [
  { id: 1, label: 'SUCCESS RATES', target: 98, symbol: '%', icon: faThumbsUp },
  { id: 2, label: 'HAPPY TRADERS', target: 90, symbol: '+', icon: faSmile },
  { id: 3, label: 'PRODUCTS', target: 1000, symbol: '+', icon: faCog },
  { id: 4, label: 'NETWORKS', target: 25, symbol: '+', icon: faGlobe }
];

function Service() 
{
  const [counts, setCounts] = useState(counters.map(() => 0));
  const duration = 1000; // Duration in milliseconds
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.unobserve(entry.target);
        }
      });
    });

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    counters.forEach((counter, index) => {
      let start = 0;
      const increment = counter.target / (duration / 100);
      const timer = setInterval(() => {
        start += increment;
        if (start > counter.target) {
          start = counter.target;
          clearInterval(timer);
        }
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(start);
          return newCounts;
        });
      }, 100);
    });
  };

  return (
    <div ref={serviceRef}>
      <div className='service container1 container2 '>
        <div className='counter'>
          {counters.map((counter, index) => (
            <div key={counter.id} className='counter1'>
              <div className='box-1'></div>
              <div className='box-2'>
                <FontAwesomeIcon icon={counter.icon} />
              </div>
              <div className='box-3'></div>
              <div className='box-4'>
                <h5>{counter.label}</h5>
                <h3>{counts[index]}{counter.symbol}</h3>
              </div>
            </div>
          ))}
        </div>
        <h3 className='key'>Key Associates</h3>
        <div className='key-ass'>
          <div><img src={service_1} alt="" /></div>
          <div><img src={service_2} alt="" /></div>
          <div><img src={service_3} alt="" /></div>
          <div><img src={service_4} alt="" /></div>
        </div>
      </div>
    </div>
  );
}

export default Service;