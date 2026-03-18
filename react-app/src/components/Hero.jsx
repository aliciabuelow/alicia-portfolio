import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import Typewriter from './Typewriter'
import '../styles/Hero.css'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Availability badge */}
              <motion.div 
                className="badge-wrapper mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="badge-content">
                  <p className="mb-0 small fw-medium">
                    <Typewriter />
                  </p>
                </div>
              </motion.div>

              {/* Name */}
              <h1 className="hero-title mb-3">
                <motion.span 
                  className="d-block hero-lime-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Alicia
                </motion.span>
                <motion.span 
                  className="d-block hero-orange-text textured-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Buelow
                </motion.span>
              </h1>

              {/* Title */}
              <motion.h2 
                className="display-4 fw-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Frontend Developer
              </motion.h2>

              {/* Welcome */}
              <motion.p 
                className="lead text-muted mb-4"
                style={{ maxWidth: '576px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
              Building clean code, thoughtful design, and continuously learning.
              </motion.p>

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="shadow-wrapper btn-custom" style={{ borderRadius: '50px' }}>
                  <div 
                    className="shadow-blue" 
                    style={{ 
                      borderRadius: '50px',
                      background: 'linear-gradient(135deg, #1A0089 0%, #4A0DAB 100%)'
                    }}
                  ></div>
                  <button onClick={scrollToAbout} className="btn-custom-content">
                    View My Work
                    <ArrowDownRight className="ms-2" size={16} style={{ display: 'inline-block' }} />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}