import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "./hooks/useInView.js";
import travelPreviewImg from "./images/AI-Travel-Preview.png"
import shopifyPreviewImg from "./images/mollymilly-preview.png"

const projects = [
  {
    preview: travelPreviewImg,
    title: "Travel Itinerary Builder",
    description: "Multi-day, custom travel planner focused on turning unpredictable AI responses into structured, realistic, and readable itineraries.",
    features: ["Formatted AI output & response parsing", "Prompt engineering to control formatting", "Deployed full-stack application"],
    tags: ["React", "Express", "Node.js", "OpenAI API", "Vite"],
    color: "#1A0089",
    demoUrl: "https://ai-travel-app-mauve.vercel.app/",
    githubUrl: "https://github.com/aliciabuelow/AI-travel-app"
  },
  {
    preview: shopifyPreviewImg,
    title: "E-commerce Art Store",
    description: "Designed and launched a Shopify storefront to sell original artwork and digital designs, focusing on branding, usability, and real customer experience.",
    features: ["Custom storefront and product page design for visual consistency", "Integrated print-on-demand services for automated fulfilment", "SEO optimization with structured product listings and metadata", "Processed 150+ customer orders"],
    tags: ["Shopify", "Adobe Creative Suite", "SEO", "HTML/CSS"],
    color: "#1A0089",
  },
  {
    preview: "",
    title: "Project Tracker",
    description: "Under construction",
    features: [""],
    tags: ["React"],
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

                    <div className="d-flex gap-2">
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