import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="position-fixed" style={{ bottom: '30px', right: '30px', zIndex: 999 }}>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn-premium d-flex align-items-center justify-content-center p-0 rounded-circle"
          style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}
          title="Go to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
