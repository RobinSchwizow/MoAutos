import { useState } from 'react';
import { contactFields, selectFields } from '../data/content.js';
import Icon from './Icon.jsx';
import SectionHeader from './SectionHeader.jsx';

const initialErrors = {};

function validateField(name, value, required = true) {
  const trimmedValue = `${value || ''}`.trim();

  if (required && !trimmedValue) return 'Dieses Feld ist erforderlich.';
  if (!trimmedValue) return '';

  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
    return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
  }

  if (name === 'telefon' && !/^[+]?[\d\s\-()]{7,20}$/.test(trimmedValue)) {
    return 'Bitte geben Sie eine gültige Telefonnummer ein.';
  }

  if (name === 'baujahr') {
    const year = Number.parseInt(trimmedValue, 10);
    if (!/^\d{4}$/.test(trimmedValue) || year < 1950 || year > new Date().getFullYear() + 2) {
      return 'Bitte geben Sie ein gültiges Baujahr ein (z.B. 2020).';
    }
  }

  if (name === 'budget' && !/^\d+$/.test(trimmedValue.replace(/\./g, '').replace(/,/g, ''))) {
    return 'Bitte geben Sie nur Zahlen ein.';
  }

  if (name === 'km' && !/^\d+$/.test(trimmedValue.replace(/\./g, ''))) {
    return 'Bitte geben Sie nur Zahlen ein.';
  }

  return '';
}

export default function Contact({ onOpenLegal }) {
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleBlur(event) {
    const { name, value, required } = event.target;
    setErrors((current) => ({ ...current, [name]: validateField(name, value, required) }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = {};

    [...contactFields, ...selectFields].forEach((field) => {
      nextErrors[field.id] = validateField(field.id, formData.get(field.id), true);
    });

    if (!formData.get('datenschutzAccepted')) {
      nextErrors.datenschutz = 'Bitte akzeptieren Sie die Datenschutzerklärung.';
    }

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  }

  if (isSubmitted) {
    return (
      <section className="section kontakt" id="kontakt" aria-labelledby="kontakt-heading">
        <div className="container">
          <SectionHeader
            eyebrow="Sprechen wir"
            title="FAHRZEUG"
            redTitle="ANFRAGEN"
            subtitle="Teilen Sie uns Ihre Wünsche mit - wir melden uns innerhalb von 24 Stunden."
            headingId="kontakt-heading"
          />
          <div className="kontakt-form form-success" role="status" aria-live="polite">
            <Icon name="check" width="32" height="32" stroke="#e11d2e" />
            <p>Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section kontakt" id="kontakt" aria-labelledby="kontakt-heading">
      <div className="container">
        <SectionHeader
          eyebrow="Sprechen wir"
          title="FAHRZEUG"
          redTitle="ANFRAGEN"
          subtitle="Teilen Sie uns Ihre Wünsche mit - wir melden uns innerhalb von 24 Stunden."
          headingId="kontakt-heading"
        />
        <form className="kontakt-form" noValidate aria-label="Fahrzeuganfrageformular" onSubmit={handleSubmit}>
          <div className="form-grid">
            {contactFields.map((field) => (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id} className="form-label">
                  {field.label} <span className="required" aria-hidden="true">*</span>
                </label>
                <input
                  type={field.type || 'text'}
                  id={field.id}
                  name={field.id}
                  className={`form-input ${errors[field.id] ? 'error' : ''}`}
                  placeholder={field.placeholder}
                  required
                  autoComplete={field.autoComplete}
                  inputMode={field.inputMode}
                  pattern={field.pattern}
                  maxLength={field.maxLength}
                  onBlur={handleBlur}
                  onInput={(event) => {
                    if (errors[field.id]) handleBlur(event);
                  }}
                />
                <span className="form-error" role="alert">
                  {errors[field.id]}
                </span>
              </div>
            ))}

            {selectFields.map((field) => (
              <div className="form-group" key={field.id}>
                <label htmlFor={field.id} className="form-label">
                  {field.label} <span className="required" aria-hidden="true">*</span>
                </label>
                <select
                  id={field.id}
                  name={field.id}
                  className={`form-input form-select ${errors[field.id] ? 'error' : ''}`}
                  required
                  onBlur={handleBlur}
                  onChange={(event) => {
                    if (errors[field.id]) handleBlur(event);
                  }}
                >
                  <option value="">Bitte wählen</option>
                  {field.options.map(([value, label]) => (
                    <option value={value} key={value}>
                      {label}
                    </option>
                  ))}
                </select>
                <span className="form-error" role="alert">
                  {errors[field.id]}
                </span>
              </div>
            ))}

            <div className="form-group form-full">
              <label htmlFor="nachricht" className="form-label">
                Weitere Wünsche / Nachricht
              </label>
              <textarea
                id="nachricht"
                name="nachricht"
                className="form-input form-textarea"
                placeholder="Beschreiben Sie hier weitere Wünsche, Ausstattung, etc."
                rows="4"
              />
            </div>

            <div className="form-group form-full">
              <label className="form-checkbox-label">
                <input type="checkbox" id="datenschutz-accept" name="datenschutzAccepted" className="form-checkbox" required />
                <span className="checkbox-custom" aria-hidden="true" />
                <span>
                  Ich habe die{' '}
                  <button type="button" className="form-link form-link-button" onClick={() => onOpenLegal('datenschutz')}>
                    Datenschutzerklärung
                  </button>{' '}
                  gelesen und akzeptiere diese. <span className="required" aria-hidden="true">*</span>
                </span>
              </label>
              <span className="form-error" role="alert" id="datenschutz-error">
                {errors.datenschutz}
              </span>
            </div>
          </div>

          <div className="form-submit-wrap">
            <button type="submit" className="btn btn-primary btn-xl btn-submit" disabled={isSubmitting}>
              {isSubmitting ? (
                'Wird gesendet...'
              ) : (
                <>
                  <Icon name="send" width="20" height="20" />
                  Anfrage absenden
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
