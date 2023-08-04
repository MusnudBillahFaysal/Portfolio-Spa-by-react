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
    const sectionTop = ref.current.offsetTop; // Get the top position of the section
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth', // Use smooth scrolling for a better user experience
    });
  };

  // Function to update the active link state and scroll to the section
  const handleNavLinkClick = (linkName, ref) => {
    setActiveLink(linkName);
    handleScrollToSection(ref);
  };

  return (
    <div className="grid-container">
      <header>
        <a href="#">KRINKY</a>
        <nav>
          <ul>
            <li>
              <Link
                to="/"
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
          <Link to="/contact" className="contact-now-btn">
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
                <Link className="Lets-Start-btn" ref={contactRef}>
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
