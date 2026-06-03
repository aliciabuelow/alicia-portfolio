import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight } from "lucide-react";
import moreProjects from "../data/moreProjects.js";


export default function MoreProjects() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

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
                  {/* Drop shadow effect */}
                  <div 
                    className="drop-shadow"
                    style={{ 
                      backgroundColor: project.color,
                      borderRadius: '24px'
                    }}
                  ></div>
                  
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