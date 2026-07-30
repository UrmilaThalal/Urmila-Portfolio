import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 position-relative">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">Get In <span className="text-gradient">Touch</span></h2>
        </div>

        <Row className="g-5">
          <Col lg={5}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-100 d-flex flex-column justify-content-center"
            >
              <h3 className="fw-bold mb-5 text-white">Contact Information</h3>

              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="glass-card p-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                    <FaEnvelope className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white mb-1 fw-bold">Email</h6>
                    <a href="mailto:utsabithalal@gmail.com" className="text-secondary text-decoration-none hover-text-white">utsabithalal@gmail.com</a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="glass-card p-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                    <FaLinkedin className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white mb-1 fw-bold">LinkedIn</h6>
                    <a href="https://www.linkedin.com/in/urmila-thalal-a-b69313a8/" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none hover-text-white">linkedin.com/in/urmila-thalal</a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="glass-card p-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                    <FaGithub className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white mb-1 fw-bold">GitHub</h6>
                    <a href="https://github.com/UrmilaThalal" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none hover-text-white">github.com/UrmilaThalal</a>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div className="glass-card p-3 d-flex align-items-center justify-content-center rounded-circle" style={{ width: '50px', height: '50px' }}>
                    <FaMapMarkerAlt className="text-white fs-5" />
                  </div>
                  <div>
                    <h6 className="text-white mb-1 fw-bold">Location</h6>
                    <span className="text-secondary">Pepsicola, Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={7}>
            <motion.div
              className="glass-card p-4 p-md-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="fw-bold mb-4 text-white">Send Me a Message</h3>
              <Form>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="text" placeholder="Name" className="bg-transparent text-white custom-input py-3" style={{ border: '1px solid var(--glass-border)' }} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="email" placeholder="Email" className="bg-transparent text-white custom-input py-3" style={{ border: '1px solid var(--glass-border)' }} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Control as="textarea" rows={6} placeholder="Message" className="bg-transparent text-white custom-input py-3" style={{ border: '1px solid var(--glass-border)' }} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button variant="none" className="btn-premium py-3 px-5 mt-2 d-inline-flex align-items-center justify-content-center gap-2" type="submit">
                      Send Message <FaPaperPlane />
                    </Button>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style>{`
        .custom-input:focus {
          background-color: rgba(0,0,0,0.2) !important;
          border-color: var(--accent-purple) !important;
          box-shadow: 0 0 0 0.25rem rgba(139, 92, 246, 0.25) !important;
          color: white !important;
        }
        .custom-input::placeholder {
          color: rgba(255,255,255,0.5);
        }
        .hover-text-white {
          transition: color 0.3s ease;
        }
        .hover-text-white:hover {
          color: white !important;
        }
      `}</style>
    </section>
  );
};

export default Contact;
