import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About <span className="text-gradient">Me</span></h2>
          
          <Row className="align-items-center justify-content-center">
            <Col lg={4} className="mb-5 mb-lg-0 text-center">
              <div className="position-relative d-inline-block">
                <div 
                  className="position-absolute w-100 h-100 rounded-circle" 
                  style={{ 
                    background: 'var(--gradient-accent)', 
                    filter: 'blur(15px)', 
                    transform: 'scale(1.05)',
                    zIndex: 0
                  }}
                />
                <img 
                  src="/archive/myphoto.jpeg" 
                  alt="Urmila Thalal" 
                  className="img-fluid rounded-circle position-relative shadow"
                  style={{ width: '280px', height: '280px', objectFit: 'cover', border: '4px solid var(--glass-border)', zIndex: 1 }}
                  onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Urmila+Thalal&background=8b5cf6&color=fff&size=280"; }}
                />
              </div>
            </Col>
            <Col lg={7}>
              <div className="glass-card p-4 p-md-5">
                <p className="fs-5 text-white-50 lh-lg mb-0">
                  I am a Frontend Developer and BSc CSIT student with a strong interest in building responsive and user-friendly web applications. I enjoy turning ideas into practical web solutions using modern technologies. Along with frontend development, I have experience working with backend development, REST APIs, databases, deployment, and version control through academic and personal projects. I am continuously improving my technical skills and looking for opportunities to contribute, learn, and grow as a software developer.
                </p>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
