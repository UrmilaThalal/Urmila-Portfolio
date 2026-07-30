import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "AI Resume Builder Reviewer & Cover Letter",
    description: "An AI-powered web application that enables users to build professional resumes, receive AI-generated resume reviews, and generate personalized cover letters using Google Gemini AI. The application includes authentication, resume management, and deployment for a complete user experience.",
    tech: ["React.js", "Bootstrap", "Django REST Framework", "PostgreSQL", "Google Gemini API"],
    github: "https://github.com/UrmilaThalal/AI-Resume-Builder-Reviewer-Cover-Letter-",
    demo: null
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A modern responsive portfolio website designed to showcase my technical skills, projects, and professional profile. The website emphasizes clean UI, responsive layouts, smooth animations, and an improved user experience.",
    tech: ["React.js", "Bootstrap", "CSS"],
    github: "https://github.com/UrmilaThalal/Urmila-Portfolio",
    demo: null
  },
  {
    id: 3,
    title: "Inventory Management System",
    description: "A desktop-based inventory management application that provides complete CRUD functionality for managing products efficiently using a relational database.",
    tech: ["Java", "SQLite"],
    github: "https://github.com/UrmilaThalal", // Placeholder, user will add link
    demo: null
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">Featured <span className="text-gradient">Projects</span></h2>
        </div>

        <Row className="g-4">
          {projects.map((project, idx) => (
            <Col lg={4} md={6} key={project.id}>
              <motion.div
                className="glass-card h-100 d-flex flex-column p-4 p-md-5"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                style={{ 
                  borderTop: '4px solid var(--accent-purple)',
                }}
              >
                
                <h4 className="fw-bold mb-3 text-white">{project.title}</h4>
                <p className="text-secondary fs-6 mb-4 flex-grow-1 lh-lg">
                  {project.description}
                </p>
                
                <div className="mb-5 d-flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="badge rounded-pill fw-normal" style={{ backgroundColor: 'rgba(59, 130, 246, 0.15)', color: 'var(--accent-blue)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="d-flex gap-3 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-outline-premium d-flex align-items-center gap-2 px-3 py-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn-premium d-flex align-items-center gap-2 px-3 py-2"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
