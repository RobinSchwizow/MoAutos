import { useEffect, useState } from 'react';
import { navItems } from '../data/content.js';
import Icon from './Icon.jsx';
import { publicAsset } from '../utils/assets.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 60);

      const current = [...document.querySelectorAll('section[id]')].reduce((active, section) => {
        return window.scrollY >= section.offsetTop - 120 ? section.id : active;
      }, 'hero');
      setActiveSection(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Hauptnavigation">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo" aria-label="MoAutosDe Startseite" onClick={() => setIsOpen(false)}>
          <img src={publicAsset('images/logo.jpg')} alt="MoAutosDe Autohändler Logo" className="logo-img" />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`} role="list">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#kontakt" className="btn btn-primary nav-cta">
          <Icon name="truck" width="18" height="18" />
          Fahrzeug anfragen
        </a>
      </div>
    </nav>
  );
}
