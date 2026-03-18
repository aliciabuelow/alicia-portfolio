import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Send, Github, Linkedin, Instagram } from "lucide-react";
import '../styles/Contact.css'

export default function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section id="contact" ref={ref} className="section-contact">
      <div className="container">
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Title */}
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3 text-dark">
                Let's Connect!
              </h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '36rem' }}>
                I'm always open to new opportunities and collaborations.
              </p>
            </div>

            {/* Contact content */}
            <div>
              {/* Email card */}
              <div className="mb-4 shadow-wrapper" style={{ borderRadius: '2rem', display: 'block' }}>
                <div className="drop-shadow" style={{ borderRadius: '2rem', backgroundColor: '#1A0089' }}></div>
                <motion.a 
                  href="mailto:your.email@example.com"
                  className="contact-email-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="d-flex align-items-center justify-content-center gap-4">
                    <div className="contact-icon-wrapper" style={{ backgroundColor: '#1A0089' }}>
                      <Send className="contact-icon" size={28} color="white" />
                    </div>
                    <div className="text-center">
                      <h3 className="h5 fw-bold mb-1 text-dark">Email Me</h3>
                      <p className="mb-0 text-muted">your.email@example.com</p>
                    </div>
                  </div>
                </motion.a>
              </div>

              {/* Social links */}
              <div className="d-flex justify-content-center gap-3 flex-wrap mt-5">
                <motion.a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-center">
                    <Github size={40} className="mb-2 text-dark" />
                    <h3 className="small fw-medium mb-0 text-muted">GitHub</h3>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-center">
                    <Linkedin size={40} className="mb-2 text-dark" />
                    <h3 className="small fw-medium mb-0 text-muted">LinkedIn</h3>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="text-center">
                    <Instagram size={40} className="mb-2 text-dark" />
                    <h3 className="small fw-medium mb-0 text-muted">Instagram</h3>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center footer"
            >
              <p className="small text-muted">
                This webpage was built by Alicia Buelow and is open-sourced on GitHub.
              </p>
              <p className="small text-muted mt-2">
                © 2026 Alicia Buelow
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}