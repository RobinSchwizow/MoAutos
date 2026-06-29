import { useEffect, useState } from 'react';

const defaultPreferences = {
  necessary: true,
  externalMedia: false,
};

export default function CookieBanner({ consent, isOpen, onSave, onOpenLegal, onClose }) {
  const [externalMedia, setExternalMedia] = useState(consent?.externalMedia ?? false);

  useEffect(() => {
    setExternalMedia(consent?.externalMedia ?? false);
  }, [consent, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-modal="true" aria-labelledby="cookie-banner-title">
      <div className="cookie-banner-copy">
        <p className="cookie-banner-eyebrow">Datenschutz</p>
        <h2 id="cookie-banner-title" className="cookie-banner-title">
          Cookie- und Inhalteinstellungen
        </h2>
        <p className="cookie-banner-text">
          Wir verwenden nur notwendige Speichertechniken für den Betrieb der Website. Externe Inhalte wie Google Maps
          laden wir erst nach Ihrer Einwilligung. Weitere Informationen finden Sie in unserer{' '}
          <button type="button" className="form-link form-link-button" onClick={() => onOpenLegal('datenschutz')}>
            Datenschutzerklärung
          </button>
          .
        </p>

        <label className="cookie-option">
          <span>
            <strong>Externe Inhalte</strong>
            <span className="cookie-option-copy">Google Maps und vergleichbare Dienste erst nach Freigabe laden.</span>
          </span>
          <input
            type="checkbox"
            checked={externalMedia}
            onChange={(event) => setExternalMedia(event.target.checked)}
            aria-label="Externe Inhalte erlauben"
          />
        </label>
      </div>

      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-secondary" onClick={() => onSave(defaultPreferences)}>
          Nur notwendige
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => onSave({ necessary: true, externalMedia })}>
          Auswahl speichern
        </button>
        <button type="button" className="btn btn-primary" onClick={() => onSave({ necessary: true, externalMedia: true })}>
          Alle akzeptieren
        </button>
        {consent && (
          <button type="button" className="cookie-banner-close" onClick={onClose}>
            Schließen
          </button>
        )}
      </div>
    </div>
  );
}
