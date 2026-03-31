import { useState } from "react";
import { Menu, X } from "lucide-react";
import '../styles/Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Main navbar */}
      <nav className="navbar-custom">
        <div className="container">
          <div className="navbar-inner navbar-bg">
            <div className="d-flex align-items-center justify-content-between">
              
              {/* Logo */}
              <button onClick={() => goToSection('Hero')} className="navbar-logo">
                AB<span className="navbar-logo-accent">.</span>
              </button>

              {/* Desktop nav */}
              <div className="d-none d-md-flex gap-3">
                <button onClick={() => goToSection('featured')} className="navbar-link">
                  Featured Work
                </button>
                <button onClick={() => goToSection('more-projects')} className="navbar-link">
                  More Projects
                </button>
                <button onClick={() => goToSection('about')} className="navbar-link">
                  About
                </button>
                <button onClick={() => goToSection('skills')} className="navbar-link">
                  Skills
                </button>
                <button onClick={() => goToSection('contact')} className="navbar-link">
                  Contact
                </button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="d-md-none mobile-menu-btn"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <div className="mobile-menu-content" style={{ backgroundColor: '#fff' }}>
              <button onClick={() => goToSection('featured')} className="mobile-menu-link">
                Featured Work
              </button>
              <button onClick={() => goToSection('more-projects')} className="mobile-menu-link">
                More Projects
              </button>
              <button onClick={() => goToSection('about')} className="mobile-menu-link">
                About
              </button>
              <button onClick={() => goToSection('skills')} className="mobile-menu-link">
                Skills
              </button>
              <button onClick={() => goToSection('contact')} className="mobile-menu-link">
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}