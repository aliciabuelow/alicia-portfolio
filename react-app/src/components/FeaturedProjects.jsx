import { motion } from "motion/react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { useInView } from "./hooks/useInView.js";
import projects from "../data/projects.js";
import { useState } from 'react';

export default function FeaturedProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

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
                        <img src={project.preview} alt="preview of project webpage" />
                      </div>
                    </div>

                    {/* Project info */}
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                      <div>
                        <h3 className="h2 fw-bold mb-3 text-dark">{project.title}</h3>
                        <p className="text-muted mb-3">{project.description}</p>
                        
                        <div className="mb-3 text-muted">
                          {project.features.map(feature => (
                            <div key={feature} className="project-feature">
                              • {feature}
                            </div>
                          ))}
                        </div>

                        <div className="mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="project-tag" style={{ backgroundColor: project.color }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                    <div className="project-links d-flex gap-2">
                      {project.demoUrl && (
                        <a 
                          href={project.demoUrl}
                          className="project-link-demo"
                          target="_blank"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}

                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          className="project-link-code"
                          target="_blank"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      className="project-link-casestudy mt-2"
                      onClick={() =>
                        setOpenCaseStudy(
                          openCaseStudy === project.title ? null : project.title
                        )
                      }
                      >
                        {openCaseStudy === project.title ? "Hide Case Study" : "Case Study"}
                        <ChevronRight size={16} />
                    </button>


                    {openCaseStudy === project.title && (
                      <div className="project-case-study mt-3">
                        <p><strong>Overview</strong> {project.caseStudy.overview}</p>
                        <p><strong>Role</strong> {project.caseStudy.role}</p>
                        <p><strong>Challenges</strong> {project.caseStudy.challenges}</p>
                        <p><strong>What I learned</strong> {project.caseStudy.learning}</p>
                      </div>
                    )}

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