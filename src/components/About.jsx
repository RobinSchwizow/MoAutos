export default function About() {
  return (
    <section className="section ueber-uns" id="ueber-uns" aria-labelledby="ueber-uns-heading">
      <div className="container ueber-inner">
        <div className="ueber-text" data-animate="fade-right">
          <span className="section-eyebrow">Wer wir sind</span>
          <h2 id="ueber-uns-heading" className="section-title">
            ÜBER <span className="text-red">UNS</span>
          </h2>
          <p className="ueber-desc">
            MoAutosDe unterstützt Sie dabei, Ihr Wunschfahrzeug schnell, sicher und unkompliziert zu finden. Wir
            begleiten Sie von der Fahrzeugsuche bis zur Übergabe.
          </p>
          <p className="ueber-desc">
            Unser Ziel ist es, den Fahrzeugkauf so einfach wie möglich zu machen. Mit unserem Netzwerk und unserer
            Erfahrung finden wir das passende Fahrzeug für jeden Anspruch - transparent, zuverlässig und persönlich.
          </p>
          <div className="ueber-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Vermittelte Fahrzeuge</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Zufriedene Kunden</span>
            </div>
            <div className="stat">
              <span className="stat-number">8</span>
              <span className="stat-label">Schritte bis zur Übergabe</span>
            </div>
          </div>
          <a href="#kontakt" className="btn btn-primary btn-lg ueber-cta">
            Jetzt anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
