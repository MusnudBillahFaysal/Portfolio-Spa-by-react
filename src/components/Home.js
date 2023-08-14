import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Services from './Services';
import Skills from './Skills';
import Portfolio from './Portfolio';

const Home = () => {
  // State for the word animation
  const words = ['Designer', 'Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  // State for the active link
  // const [activeLink, setActiveLink] = useState('');

  // State for the active link
  const [activeLink, setActiveLink] = useState('home'); // Set 'home' as the default active link

  // Effect for word animation
  useEffect(() => {
    const fadeInOut = () => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    const interval = setInterval(fadeInOut, 2000); // Changed to 2000ms for word animation

    return () => clearInterval(interval);
  }, []);

  // Ref for the Services section
  // Refs for the sections
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToSection = (ref) => {
    if (ref && ref.current) {
      let sectionTop = ref.current.offsetTop;

      // Add conditions based on the ref to adjust the sectionTop if needed
      if (ref === servicesRef) {
        // Add an offset for the 'Services' section (example: 100 pixels)
        sectionTop += 100;
      } else if (ref === skillsRef) {
        // Add an offset for the 'Skills' section (example: 150 pixels)
        sectionTop += 150;
      }
      // Add more conditions for other sections if necessary

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  const handleNavLinkClick = (linkName, ref) => {
    setActiveLink(linkName);
    handleScrollToSection(ref);
  };
  // const handleScrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     const sectionTop = ref.current.offsetTop;
  //     window.scrollTo({
  //       top: sectionTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  // Function to update the active link state and scroll to the section
  // const handleNavLinkClick = (linkName, ref) => {
  //   setActiveLink(linkName);
  //   handleScrollToSection(ref);
  // };
  // Function to update the active link state and scroll to the section
  // const handleNavLinkClick = (linkName, ref) => {
  //   if (linkName !== 'home') {
  //     window.scrollTo({
  //       top: 0, // Scroll to the top (home section)
  //       behavior: 'smooth', // Use smooth scrolling
  //     });
  //   } else {
  //     setActiveLink(linkName);
  //     handleScrollToSection(ref);
  //   }
  // };

  return (
    <div className="grid-container">
      <header>
        <a href="#">KRINKY</a>
        <nav>
          <ul>
            <li>
              <Link
                to="#"
                className={activeLink === 'home' ? 'active-link' : ''}
                onClick={() => handleNavLinkClick('home', homeRef)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === 'services' ? 'active-link' : ''}
                onClick={() => handleNavLinkClick('services', servicesRef)}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === 'skills' ? 'active-link' : ''}
                onClick={() => handleNavLinkClick('skills', skillsRef)}
              >
                SKILLS
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === 'portfolio' ? 'active-link' : ''}
                onClick={() => handleNavLinkClick('portfolio', portfolioRef)}
              >
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={activeLink === 'contact' ? 'active-link' : ''}
                onClick={() => handleNavLinkClick('contact', contactRef)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
        <div className="contact-now-container">
          {/* Container for "Contact Now" */}
          <Link
            to="/"
            className="contact-now-btn"
            onClick={() => handleNavLinkClick('contact', contactRef)}
          >
            CONTACT NOW
          </Link>
        </div>
      </header>
      <main>
        <div className="body">
          <div className="intro-container">
            <div className="intro-content-text">
              <h3 className="text-black uppercase text-[14px] md:text-[16px] tracking-[2px] font-[600] mb-[20px] md:mb-[30px]">
                👋, My name is Krinky
              </h3>
              <h1 className="text-black font-[600] text-[40px] md:text-[60px] xl:text-[70px] leading-[1] mb-[25px] md:mb-[35px]">
                <span>I'm a</span>
                <span className="word-transition"> {currentWord}</span>
              </h1>
              <div className="Lets-Start-btn-container">
                <p>Based in Los Angeles, California.</p>
                <Link
                  to="/"
                  className="Lets-Start-btn"
                  onClick={() => handleNavLinkClick('contact', contactRef)}
                >
                  LET'S START
                </Link>
              </div>
            </div>
            <div className="intro-content-img">
              <img
                src="/images/home-banner.png"
                alt="Image"
                className="w-48 h-auto"
              />
            </div>
          </div>
        </div>
        <footer>
          <h1>Rony</h1>
          <h1>SkinY</h1>
          <h1>Shopy</h1>
          <h1>PROMPT</h1>
          <h1>e Learn.</h1>
        </footer>

        <div className="service-container" ref={servicesRef}>
          <Services />
        </div>
        <div className="service-container" ref={skillsRef}>
          <Skills />
        </div>

        <div className="service-container" ref={portfolioRef}>
          <Portfolio />
        </div>
        <div className="service-container" ref={contactRef}>
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Home;
