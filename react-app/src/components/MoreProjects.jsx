import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight } from "lucide-react";

const moreProjects = [
  {
    title: "Understanding What I Build",
    tags: ["Current Focus"],
    description: "Moving beyond making things work toward understand why they work - deepening React, JavaScript, application logic, and the systems behind the interfaces I build.",
    footerTag: "Exploring ",
    footer: "frontend architecture • practical JavaScript • stronger engineering fundamentals",
    color: "var(--accent-color)"
  },
  {
    title: "AI, Made Useful",
    tags: ["Next Builds"],
    description: "Exploring AI-powered products that turn complexity into something practical; building tools that help people use AI meaningfully without needing to think like engineers.",
    footerTag: "Interested in ",
    footer: "intelligent planning tools • human-centered AI • product ideas with real utility",
    color: "var(--accent-color-two)"
  },
  {
    title: "Building With Others",
    tags: ["Open To"],
    description: "Looking to grow through collaboration, open source, hackathons, and junior opportunities where I can contribute and keep learning.",
    footerTag: "Seeking ",
    footer: "collaboration • open source • real-world product experience",
    color: "var(--accent-color-three)"
  }
];

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
            <h2 className="section-title">Where I'm Growing</h2>
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

                      <div className="mb-3 mt-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="h5 fw-bold mb-4 text-dark">{project.title}</h3>

                      <p className="small text-muted mb-4 flex-grow-1">{project.description}</p>
                      <span className="small fw-bold">
                        {project.footerTag}
                        <ArrowRight size={16} />
                        </span>
                      <span className="small text-muted mb-2 flex-grow-1">{project.footer}</span>

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