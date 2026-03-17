import { motion } from "motion/react";
import { useInView } from "./hooks/useInView.js";
import aboutPhoto from './images/profilepic.jfif'
import '../styles/About.css'


export default function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="section-about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section title */}
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
          </div>

          <div className="row g-5">
            {/* Photo */}
            <div className="col-md-6">
              <div className="about-photo sticky-md-top-custom" style={{ borderRadius: '40px' }}>
                <div className="about-photo-content">
                  <img src={aboutPhoto} alt="black & white selfie of woman" />
                </div>
              </div>
            </div>

            {/* About text cards */}
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="shadow-wrapper"
                style={{ borderRadius: '1.5rem', display: 'block' }}
              >
                <div className="drop-shadow" style={{ borderRadius: '24px' }}></div>
                <div className="about-card">
                  <p className="mb-0 text-muted">
                    Hey! I'm a junior frontend developer who just completed an intensive coding bootcamp. 
                    I'm passionate about creating beautiful, functional websites that make a difference.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="shadow-wrapper"
                style={{ marginLeft: '3rem', borderRadius: '1.5rem', display: 'block' }}
              >
                <div className="drop-shadow" style={{ borderRadius: '24px', backgroundColor: '#1A0089' }}></div>
                <div className="about-card">
                  <p className="mb-0 text-muted">
                    My journey into web development started with curiosity and grew into a genuine love for 
                    problem-solving and bringing creative ideas to life through code.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="shadow-wrapper"
                style={{ marginLeft: '24px', borderRadius: '24px', display: 'block' }}
              >
                <div className="drop-shadow" style={{ borderRadius: '24px', backgroundColor: '#FF5E33' }}></div>
                <div className="about-card">
                  <p className="mb-0 text-muted">
                    When I'm not coding, you can find me exploring design trends or enjoying a good cup of coffee ☕
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}