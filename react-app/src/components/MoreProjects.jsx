import { useState } from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import moreProjects from "../data/moreProjects.js";


export default function MoreProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [openCaseStudy, setOpenCaseStudy] = useState(null);

  return (
    <section id="more-projects" ref={ref} className="section-more-projects">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="section-title-wrapper">
            <h2 className="section-title">More Work</h2>
          </div>

          

          {/* Projects grid */}
          <div className="row g-4">
            {moreProjects.map((project, index) => (
              <div key={project.title} className="col-md-6 col-lg-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="shadow-wrapper h-100"
                  style={{ borderRadius: '24px', display: 'block' }}
                >
                  
                  {/* Project card */}
                  <div className="small-project-card">
                    <div className="d-flex flex-column h-100">
                  
                  {/* Project preview */}
                      <div className="more-project-preview">
                        <img src={project.preview} alt={`preview of ${project.title}`} />
                      </div>

                  {/* Project info */}
                      <div className="mt-3">
                        <h3 className="h5 fw-bold mb-2 text-dark">{project.title}</h3>
                        <p className="small text-muted mb-3">{project.description}</p>
                      </div>

                        <div className="mb-3">
                          {project.tags.map(tag => (
                            <span key={tag} className="more-project-tag" style={{ backgroundColor: project.color }}>
                              {tag}
                            </span>
                          ))}
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

                    {project.caseStudy && (
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
                    </button>)}


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
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}