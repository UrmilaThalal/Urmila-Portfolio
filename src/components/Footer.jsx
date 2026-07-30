import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-5 mt-5" style={{ borderTop: '1px solid var(--glass-border)', background: 'rgba(15, 23, 42, 0.5)' }}>
      <Container className="text-center">
        <p className="text-secondary mb-2 fs-5">
          &copy; 2026 Urmila Thalal
        </p>
        <p className="text-white mb-2 fw-medium">
          Frontend Developer
        </p>
        <p className="text-secondary small mb-0 opacity-75">
          Built with React.js
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
