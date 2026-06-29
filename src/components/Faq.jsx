import { useState } from 'react';
import { faqs } from '../data/content.js';
import SectionHeader from './SectionHeader.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section faq" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <SectionHeader eyebrow="Häufige Fragen" title="HÄUFIG GESTELLTE" redTitle="FRAGEN" headingId="faq-heading" />
        <div className="faq-list" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-${index + 1}`;

            return (
              <div
                className={`faq-item ${isOpen ? 'open' : ''}`}
                data-animate="fade-up"
                data-delay={index * 50}
                role="listitem"
                key={faq.question}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-answer" id={answerId} role="region" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
