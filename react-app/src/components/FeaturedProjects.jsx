import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "./hooks/useInView.js";

const projects = [
  {
    title: "React Dictionary App",
    description: "React-based dictionary app combining multiple APIs to deliver rich, real-time word data and images.",
    tags: ["React", "HTML5/CSS3", "REST APIs"],
    color: "#1A0089",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "React Weather App",
    description: "Interactive React app providing accurate weather data in a clean interface, based on user-searched locations.",
    tags: ["React", "HTML5/CSS3", "REST API"],
    color: "#1A0089",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AI Travel Itinerary Builder",
    description: "A full-stack travel planner that uses AI to generate realistic, season-aware itineraries tailored to the user's destination, budget, travel style, and interests.",
    tags: ["React", "JavaScript", "Express", "Node.js", "OpenAI API", "CSS3", "Vite"],
    color: "#1A0089",
    demoUrl: "https://ai-travel-app-mauve.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/AI-travel-app"
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
                          <Github size={16} />
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