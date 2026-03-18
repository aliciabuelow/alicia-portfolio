import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import '../styles/Skills.css'

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "HTML5", color: "#B7CF4F" },
      { name: "CSS3", color: "#B7CF4F" },
      { name: "JavaScript", color: "#B7CF4F" },
      { name: "Python", color: "#B7CF4F"}
    ]
  },
  {
    category: "Frameworks/Libraries",
    skills: [
      { name: "React", color: "#FF5E33" },
      { name: "Bootstrap", color: "#FF5E33" },
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git & GitHub", color: "#1A0089" },
      { name: "VS Code", color: "#1A0089" },
      { name: "Shopify", color: "#1A0089"},
      { name: "Vercel & Netlify", color: "#1A0089"}
    ]
  },
  {
    category: "Design/UX",
    skills: [
      { name: "Responsive Design", color: "#B7CF4F" },
      { name: "Figma", color: "#B7CF4F" },
      { name: "Adobe Photoshop", color: "#B7CF4F" },
      { name: "Adobe Illustrator", color: "#B7CF4F" },
      { name: "Accessibility", color: "#B7CF4F" },
    ]
  }
];

export default function Skills() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="section-skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-title-wrapper">
            <h2 className="section-title">My Skills</h2>
          </div>

          {/* Skills by category */}
          <div>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="mb-5"
              >
                <h3 className="h5 fw-bold mb-3 text-muted">{category.category}</h3>
                <div className="d-flex flex-wrap">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.15 + index * 0.1 }}
                      className="skill-badge-wrapper"
                    >
                      <div className="shadow-wrapper" style={{ borderRadius: '50px' }}>
                        {/* Colored shadow */}
                        <div 
                          className="drop-shadow"
                          style={{ 
                            backgroundColor: skill.color,
                            borderRadius: '50px'
                          }}
                        ></div>
                        {/* White badge */}
                        <div className="skill-badge">
                          <h4 className="small fw-medium mb-0 text-dark">{skill.name}</h4>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}