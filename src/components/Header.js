import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to check scroll position and toggle class
    const checkScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = headerRef.current.offsetHeight; // Use a ref to get the height of the header

      // Add the "header-scrolled" class if scroll position is greater than header height
      if (scrollPosition > headerHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Listen for scroll events and call the checkScroll function
    window.addEventListener('scroll', checkScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  // Ref for the header element
  const headerRef = React.createRef();

  return (
    <header
      className={scrolled ? 'header-scrolled' : 'header-default'}
      ref={headerRef}
    >
      {/* ... Header content ... */}
    </header>
  );
};

export default Header;
