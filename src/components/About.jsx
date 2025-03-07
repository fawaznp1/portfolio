import { useEffect } from 'react';
import './Home.css'

const AboutMeSection = ({ fawazimage }) => {
  useEffect(() => {
    gsap.from(".fawazimg", {
      x: -100, // Animation from the left side
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".section-paragraph", {
      x: 100, // Animation from the right side
      opacity: 0,
      duration: 1,
      delay: 0.2, // Slight delay to make it more dynamic
      ease: "power3.out"
    });
  }, []);

  return (
   
  );
};

export default AboutMeSection;
