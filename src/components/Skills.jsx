import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { 
  SiHtml5, SiJavascript, SiReact, SiBootstrap, SiTailwindcss,
  SiPython, SiDjango, SiPostgresql, SiSqlite, SiGit, SiGithub,
  SiPycharm, SiDocker, SiPostman, SiFigma, SiVite,
  SiVercel, SiRender
} from 'react-icons/si';
import { FaServer, FaCss3Alt } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Python", icon: <SiPython />, color: "#3776AB" },
      { name: "Django", icon: <SiDjango />, color: "#092E20" },
      { name: "Django REST Framework", icon: <FaServer />, color: "#A30000" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "SQLite", icon: <SiSqlite />, color: "#003B57" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: <SiGit />, color: "#F05032" },
      { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
      { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
      { name: "PyCharm", icon: <SiPycharm />, color: "#000000" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
      { name: "Vite", icon: <SiVite />, color: "#646CFF" }
    ]
  },
  {
    category: "Deployment",
    skills: [
      { name: "Vercel", icon: <SiVercel />, color: "#ffffff" },
      { name: "Render", icon: <SiRender />, color: "#46E3B7" }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="position-relative">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title mb-2">My <span className="text-gradient">Skills</span></h2>
        </div>

        <Row className="g-4 justify-content-center">
          {skillsData.map((category, idx) => (
            <Col lg={4} md={6} key={idx}>
              <motion.div
                className="glass-card p-4 h-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <h4 className="text-white mb-4 fw-bold">{category.category}</h4>
                <motion.div 
                  className="d-flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.skills.map((skill, sIdx) => (
                    <motion.div 
                      key={sIdx} 
                      className="d-flex align-items-center gap-2 rounded-pill px-3 py-2 fw-medium skill-badge"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 4px 15px ${skill.color}40`
                      }}
                      style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                    >
                      <span style={{ color: skill.color, fontSize: '1.2rem', display: 'flex' }}>
                        {skill.icon}
                      </span>
                      <span className="text-light fs-6">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <style>{`
        .skill-badge:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
