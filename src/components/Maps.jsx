import SectionHeader from './SectionHeader.jsx';

export default function Maps({ canLoadExternalMedia, onAllowExternalMedia }) {
  return (
    <section className="section maps-section" id="maps" aria-label="Standort">
      <div className="container">
        <SectionHeader eyebrow="Unser Standort" title="SO FINDEN SIE" redTitle="UNS" />
      </div>
      <div className="maps-wrapper">
        {canLoadExternalMedia ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.123456789!2d8.6821267!3d50.1109221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMoAutosDe!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MoAutosDe Standort auf Google Maps"
            aria-label="Google Maps - MoAutosDe Standort"
          />
        ) : (
          <div className="maps-consent-card">
            <h3 className="maps-consent-title">Google Maps ist derzeit deaktiviert</h3>
            <p className="maps-consent-text">
              Die Karte wird erst geladen, wenn Sie externe Inhalte erlauben. Dabei können Daten an Google übertragen
              werden.
            </p>
            <button type="button" className="btn btn-primary" onClick={onAllowExternalMedia}>
              Externe Inhalte erlauben und Karte laden
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
