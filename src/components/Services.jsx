import { services } from '../data/content.js';
import Icon from './Icon.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Services() {
  return (
    <section className="section leistungen" id="leistungen" aria-labelledby="leistungen-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Was wir bieten"
          title="UNSERE"
          redTitle="LEISTUNGEN"
          subtitle="Alles aus einer Hand - von der Suche bis zur Übergabe."
          headingId="leistungen-heading"
        />
        <div className="leistungen-grid">
          {services.map((service, index) => (
            <article className="leistung-card" data-animate="fade-up" data-delay={(index % 3) * 100} key={service.title}>
              <div className="leistung-icon">
                <Icon name={service.icon} width="28" height="28" />
              </div>
              <h3 className="leistung-title">{service.title}</h3>
              <p className="leistung-desc">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
