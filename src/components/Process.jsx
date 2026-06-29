import { processSteps } from '../data/content.js';
import Icon from './Icon.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Process() {
  return (
    <section className="section ablauf" id="ablauf" aria-labelledby="ablauf-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Schritt für Schritt"
          title="UNSER"
          redTitle="ABLAUF"
          subtitle="In 8 einfachen Schritten zu Ihrem Wunschfahrzeug."
          headingId="ablauf-heading"
        />
        <div className="ablauf-grid">
          {processSteps.map((step, index) => (
            <article className="ablauf-card" data-animate="fade-up" data-delay={(index % 4) * 100} key={step.title}>
              <div className="ablauf-number">{index + 1}</div>
              <div className="ablauf-img-wrap">
                <img src={step.image} alt={step.title} className="ablauf-img" loading="lazy" />
              </div>
              <div className="ablauf-body">
                <div className="ablauf-icon-wrap">
                  <Icon name={step.icon} width="26" height="26" stroke="#e11d2e" />
                </div>
                <h3 className="ablauf-title">{step.title}</h3>
                <p className="ablauf-desc">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
