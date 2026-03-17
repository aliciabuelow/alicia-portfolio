import { motion } from "motion/react";
import { ExternalLink, Binary } from "lucide-react";
import { useInView } from "./hooks/useInView.js";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A fully responsive online store built with React and modern CSS. Features include product filtering, cart functionality, and smooth animations.",
    tags: ["React", "CSS3", "JavaScript"],
    color: "#B7CF4F",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "An interactive weather app that displays real-time weather data with beautiful visualizations and a clean, user-friendly interface.",
    tags: ["JavaScript", "API", "HTML5"],
    color: "#FF5E33",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Portfolio CMS",
    description: "A content management system for creatives to showcase their work. Built with React and features drag-and-drop functionality.",
    tags: ["React", "Tailwind", "JavaScript"],
    color: "#1A0089",
    demoUrl: "#",
    githubUrl: "#"
  }
];

export default function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="featured" ref={ref} className="section-featured">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-title-wrapper">
            <h2 className="section-title">Featured Projects</h2>
          </div>

          {/* Projects */}
          <div>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                style={{ borderRadius: '2rem', display: 'block' }}
              >
                {/* White content card */}
                <div className="project-card">
                  <div className="row g-4">
                    {/* Project preview */}
                    <div className="col-md-4">
                      <div className="project-preview">
                        💻
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="h2 fw-bold mb-3 text-dark">{project.title}</h3>
                        <p className="text-muted mb-3">{project.description}</p>
                        
                        <div className="mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="project-tag" style={{ backgroundColor: project.color }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        <a 
                          href={project.demoUrl}
                          className="project-link-demo"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a 
                          href={project.githubUrl}
                          className="project-link-code"
                        >
                          <Binary size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}