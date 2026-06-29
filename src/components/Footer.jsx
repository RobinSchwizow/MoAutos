import { navItems, whatsappUrl } from '../data/content.js';
import Icon from './Icon.jsx';
import { publicAsset } from '../utils/assets.js';

export default function Footer({ onOpenLegal, onOpenCookieSettings }) {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={publicAsset('images/logo.jpg')} alt="MoAutosDe Logo" className="footer-logo" loading="lazy" />
          <p className="footer-tagline">Ihr Wunschfahrzeug - wir kümmern uns um den Rest.</p>
          <div className="footer-socials">
            <a href={whatsappUrl} className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" width="20" height="20" />
            </a>
            <a href="#" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" width="20" height="20" />
            </a>
          </div>
        </div>
        <div className="footer-nav">
          <h4 className="footer-nav-heading">Navigation</h4>
          <ul role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="footer-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4 className="footer-nav-heading">Kontakt</h4>
          <ul role="list" className="footer-contact-list">
            <li>
              <Icon name="phone" width="16" height="16" stroke="#e11d2e" />
              <a href="tel:+491234567890" className="footer-link">
                +49 123 456 7890
              </a>
            </li>
            <li>
              <Icon name="mail" width="16" height="16" stroke="#e11d2e" />
              <a href="mailto:info@moautos.de" className="footer-link">
                info@moautos.de
              </a>
            </li>
            <li>
              <Icon name="pin" width="16" height="16" stroke="#e11d2e" />
              <span>Musterstraße 1, 60329 Frankfurt am Main</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; 2025 MoAutosDe. Alle Rechte vorbehalten.</p>
          <div className="footer-legal">
            <button type="button" className="footer-link-sm footer-link-button" onClick={() => onOpenLegal('impressum')}>
              Impressum
            </button>
            <button type="button" className="footer-link-sm footer-link-button" onClick={() => onOpenLegal('datenschutz')}>
              Datenschutz
            </button>
            <button type="button" className="footer-link-sm footer-link-button" onClick={onOpenCookieSettings}>
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
