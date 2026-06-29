import { useEffect } from 'react';
import Icon from './Icon.jsx';

const legalContent = {
  impressum: {
    eyebrow: 'Rechtliches',
    title: 'Impressum',
    body: [
      'MoAutosDe',
      'Musterstraße 1',
      '60329 Frankfurt am Main',
      'Deutschland',
      'E-Mail: info@moautos.de',
      'Telefon: +49 123 456 7890',
      'Vertreten durch: Max Mustermann',
    ],
  },
  datenschutz: {
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    body: [
      'Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze. Wenn Sie uns über das Formular kontaktieren, verwenden wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage und für eine eventuelle Rückmeldung.',
      'Zu den verarbeiteten Daten können insbesondere Name, Telefonnummer, E-Mail-Adresse sowie Ihre übermittelten Fahrzeugwünsche gehören. Rechtsgrundlage ist in der Regel Art. 6 Abs. 1 lit. b DSGVO oder Art. 6 Abs. 1 lit. f DSGVO, soweit es um die Bearbeitung vorvertraglicher Anfragen oder berechtigte Kommunikationsinteressen geht.',
      'Auf dieser Website wird Google Maps als externer Inhalt nur nach Ihrer Einwilligung geladen. Erst nach Ihrer Freigabe kann eine Verbindung zu Servern von Google aufgebaut werden. Dabei können personenbezogene Daten, insbesondere Ihre IP-Adresse sowie technische Nutzungsdaten, an Google übermittelt werden.',
      'Unsere WhatsApp-Verlinkung ist als externer Link eingebunden. Wenn Sie auf den WhatsApp-Link klicken, verlassen Sie unsere Website und es kann zu einer Datenverarbeitung durch WhatsApp Ireland Limited bzw. Meta kommen. Auf diese Verarbeitung haben wir keinen vollständigen Einfluss.',
      'Ihre Cookie- und Inhalteinstellungen speichern wir lokal in Ihrem Browser, damit Ihre Auswahl für notwendige und externe Inhalte berücksichtigt werden kann. Diese Speicherung dient ausschließlich der Verwaltung Ihrer Einwilligungsentscheidung.',
      'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch nach Maßgabe der gesetzlichen Bestimmungen. Datenschutzanfragen richten Sie bitte an info@moautos.de.',
    ],
  },
};

export default function Legal({ activeLegal, onClose }) {
  useEffect(() => {
    if (!activeLegal) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLegal, onClose]);

  if (!activeLegal) return null;

  const content = legalContent[activeLegal];

  return (
    <div className="legal-modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="legal-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`legal-${activeLegal}-title`}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="legal-modal-close" aria-label="Fenster schließen" onClick={onClose}>
          <Icon name="close" width="18" height="18" />
        </button>
        <span className="legal-modal-eyebrow">{content.eyebrow}</span>
        <h2 id={`legal-${activeLegal}-title`} className="legal-modal-title">
          {content.title}
        </h2>
        <div className="legal-card legal-card-modal">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
