import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={7} className="text-center text-lg-start mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-secondary fs-5 mb-2">Hi, I'm</p>
              <h1 className="display-3 fw-bold mb-3">
                Urmila <span className="text-gradient">Thalal</span>
              </h1>
              <h2 className="fs-3 fw-medium text-secondary mb-4">
                Frontend Developer
              </h2>
              <p className="lead text-white-50 mb-5" style={{ maxWidth: '600px' }}>
                "Building modern, responsive and user-friendly web applications."
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <Link to="projects" smooth={true} offset={-70} duration={500}>
                  <button className="btn-premium">View Projects</button>
                </Link>
                <Link to="contact" smooth={true} offset={-70} duration={500}>
                  <button className="btn-outline-premium">Contact Me</button>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline-premium">
                  View Resume
                </a>
              </div>

              <div className="d-flex gap-4 mt-5 justify-content-center justify-content-lg-start">
                <a href="https://github.com/UrmilaThalal" target="_blank" rel="noreferrer" className="text-secondary fs-4 custom-social-icon">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="text-secondary fs-4 custom-social-icon">
                  <FaLinkedin />
                </a>
                <a href="mailto:email@example.com" className="text-secondary fs-4 custom-social-icon">
                  <FaEnvelope />
                </a>
              </div>
            </motion.div>
          </Col>
          <Col lg={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Fallback to code illustration if image is missing */}
              <div className="glass-card p-4 d-inline-block shadow-lg mx-auto" style={{ borderRadius: '30px' }}>
                <img 
                  src="https://raw.githubusercontent.com/abhisheknaiidu/abhisheknaiidu/master/code.gif" 
                  alt="Developer coding illustration" 
                  className="img-fluid rounded-4"
                  style={{ maxWidth: '350px' }}
                />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      
      <style>{`
        .custom-social-icon {
          transition: all 0.3s ease;
        }
        .custom-social-icon:hover {
          color: var(--accent-purple) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
};

export default Hero;
