import { serviceHighlights, whatsappUrl } from '../data/content.js';
import Icon from './Icon.jsx';
import { publicAsset } from '../utils/assets.js';

export default function Hero() {
  const heroImage = publicAsset('images/hero-bg.png');

  return (
    <section className="hero" id="hero" aria-label="Hero Bereich">
      <div className="hero-bg">
        <img
          src={heroImage}
          alt="Schwarzer Mercedes vor Frankfurt Skyline bei Nacht"
          className="hero-img hero-img-backdrop"
          loading="eager"
          aria-hidden="true"
        />
        <img
          src={heroImage}
          alt="Schwarzer Mercedes vor Frankfurt Skyline bei Nacht"
          className="hero-img hero-img-main"
          loading="eager"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container hero-inner">
        <div className="hero-content" data-animate="fade-up">
          <h1 className="hero-title">
            <span className="hero-title-white">SIE SUCHEN.</span>
            <span className="hero-title-red">WIR FINDEN.</span>
          </h1>
          <p className="hero-subtitle">
            Ihr Wunschfahrzeug - <br />
            wir kümmern uns um den Rest.
          </p>
          <div className="hero-divider" />
          <p className="hero-desc">
            Sie teilen uns einfach Ihre Wünsche mit. Wir finden das passende Fahrzeug, vergleichen verschiedene Angebote,
            prüfen das Fahrzeug technisch und begleiten Sie bis zur sicheren Übergabe. Von der ersten Anfrage bis zur
            Zulassung übernehmen wir den gesamten Prozess für Sie.
          </p>
          <div className="hero-buttons">
            <a href="#kontakt" className="btn btn-primary btn-lg">
              <Icon name="truck" width="20" height="20" />
              Fahrzeug anfragen
            </a>
            <a href={whatsappUrl} className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" width="20" height="20" />
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </div>
      <div className="service-bar">
        <div className="container service-bar-inner">
          {serviceHighlights.map((item) => (
            <div className="service-item" key={item.label}>
              <Icon name={item.icon} width="22" height="22" stroke="#e11d2e" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
