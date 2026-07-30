import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const CustomNavbar = () => {
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColor);
    return () => window.removeEventListener('scroll', changeNavColor);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top"
      className={navColor ? 'glass-card' : ''}
      style={{ 
        padding: navColor ? '15px 0' : '25px 0', 
        transition: 'all 0.3s ease',
        border: navColor ? '1px solid rgba(255,255,255,0.05)' : 'none',
        borderRadius: navColor ? '0 0 16px 16px' : '0',
        background: navColor ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-white">
          Urmila<span className="text-gradient">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <Nav.Link 
                key={item}
                as={Link}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white mx-2 fw-medium"
                style={{ cursor: 'pointer' }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
