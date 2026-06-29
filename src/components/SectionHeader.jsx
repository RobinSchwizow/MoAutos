export default function SectionHeader({ eyebrow, title, redTitle, subtitle, headingId }) {
  return (
    <div className="section-header" data-animate="fade-up">
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 id={headingId} className="section-title">
        {title} <span className="text-red">{redTitle}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
