import React, { useEffect } from 'react';
import anime from 'anime.js/lib/anime.es.js';
import './About.css'; // Ensure your CSS is imported

const About = () => {
  useEffect(() => {
    anime({
      targets: '.about-left',
      translateX: [-100, 0],
      duration: 3000,
      easing: 'linear',
    });
  }, []);

  return (
    <div className="about">
      <div className="about-left">
        {/* Your content here */}
      </div>
      <div className="about-right">
        {/* Your content here */}
      </div>
    </div>
  );
};

export default About;
