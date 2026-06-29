export const whatsappUrl = 'https://wa.me/491234567890';

export const navItems = [
  { href: '#hero', label: 'Startseite' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#ablauf', label: 'Ablauf' },
  { href: '#ueber-uns', label: 'Über uns' },
  { href: '#faq', label: 'FAQ' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const serviceHighlights = [
  { icon: 'search', label: 'Individuelle Fahrzeugsuche' },
  { icon: 'shield', label: 'Technische Fahrzeugprüfung' },
  { icon: 'lock', label: 'Sichere Kaufabwicklung' },
  { icon: 'file', label: 'Zulassung & Anmeldung' },
  { icon: 'truck', label: 'Transport bis zur Haustür' },
  { icon: 'user', label: 'Persönliche Betreuung' },
];

export const services = [
  {
    icon: 'search',
    title: 'Individuelle Fahrzeugsuche',
    description: 'Wir finden das Fahrzeug, das perfekt zu Ihren Wünschen und Ihrem Budget passt.',
  },
  {
    icon: 'target',
    title: 'Technische Fahrzeugprüfung',
    description: 'Jedes Fahrzeug wird vor dem Kauf sorgfältig geprüft.',
  },
  {
    icon: 'lock',
    title: 'Sichere Kaufabwicklung',
    description: 'Wir übernehmen die komplette Kaufabwicklung transparent und zuverlässig.',
  },
  {
    icon: 'fileText',
    title: 'Zulassung & Anmeldung',
    description: 'Wir kümmern uns um sämtliche Formalitäten.',
  },
  {
    icon: 'truck',
    title: 'Transport bis vor Ihre Haustür',
    description: 'Sicher und zuverlässig bis zum Wunschort.',
  },
  {
    icon: 'user',
    title: 'Persönliche Betreuung',
    description: 'Ein persönlicher Ansprechpartner begleitet Sie während des gesamten Prozesses.',
  },
];

export const processSteps = [
  {
    icon: 'fileText',
    title: 'Anfrage senden',
    description: 'Sie senden uns Ihre Fahrzeugwünsche ganz einfach über unser Formular.',
    image: '/images/Ablauf/Karte1_Fahrzeuganfrage.png',
  },
  {
    icon: 'searchPlus',
    title: 'Wir suchen passende Angebote',
    description: 'Wir vergleichen passende Angebote aus Deutschland und wählen die besten für Sie aus.',
    image: '/images/Ablauf/Karte2_Farzeugsuche.png',
  },
  {
    icon: 'message',
    title: 'Sie wählen aus',
    description: 'Sie erhalten unsere Vorschläge und entscheiden sich für Ihr Wunschfahrzeug.',
    image: '/images/Ablauf/Karte3_Fahrzeugauswahl.png',
  },
  {
    icon: 'shield',
    title: 'Technische Fahrzeugprüfung',
    description: 'Das Fahrzeug wird vor dem Kauf von uns technisch geprüft.',
    image: '/images/Ablauf/Karte4_Untersuchung.png',
  },
  {
    icon: 'users',
    title: 'Kaufabwicklung',
    description: 'Wir kümmern uns um die komplette Kaufabwicklung - sicher und transparent.',
    image: '/images/Ablauf/Karte5_Vertrag.png',
  },
  {
    icon: 'file',
    title: 'Zulassung',
    description: 'Wir übernehmen die Zulassung und alle notwendigen Formalitäten für Sie.',
    image: '/images/Ablauf/Karte6_Zulassung.png',
  },
  {
    icon: 'truck',
    title: 'Transport',
    description: 'Wir organisieren den sicheren Transport bis zu Ihnen nach Hause.',
    image: '/images/Ablauf/Karte7_Transport.png',
  },
  {
    icon: 'key',
    title: 'Übergabe an den Kunden',
    description: 'Sie erhalten Ihr Fahrzeug und können direkt losfahren. Viel Freude damit!',
    image: '/images/Ablauf/Karte8_Übergabe.png',
  },
];

export const faqs = [
  {
    question: 'Wie läuft die Vermittlung ab?',
    answer:
      'Sie senden uns über unser Kontaktformular Ihre Wünsche für das gewünschte Fahrzeug. Wir suchen anschließend passende Angebote, prüfen diese technisch und begleiten Sie bis zur vollständigen Übergabe inklusive Zulassung und Transport.',
  },
  {
    question: 'Kann ich jedes Fahrzeug anfragen?',
    answer:
      'Grundsätzlich ja. Wir vermitteln nahezu alle Marken und Modelle - von Gebrauchtwagen bis Neuwagen, von Kompaktklasse bis Luxussegment. Teilen Sie uns einfach Ihre Wünsche mit.',
  },
  {
    question: 'Wird jedes Fahrzeug geprüft?',
    answer:
      'Ja. Vor dem Kauf führen wir eine technische Prüfung durch, um sicherzustellen, dass das Fahrzeug den vereinbarten Anforderungen entspricht und keine versteckten Mängel hat.',
  },
  {
    question: 'Wie erfolgt die Bezahlung?',
    answer:
      'Die Zahlung erfolgt in zwei Schritten: 50 % Anzahlung bei Auftragserteilung und die verbleibenden 50 % nach erfolgreicher Kaufabwicklung und vor der Übergabe.',
  },
  {
    question: 'Übernehmt ihr die Zulassung?',
    answer:
      'Ja, wir übernehmen auf Wunsch die vollständige Zulassung und Anmeldung des Fahrzeugs auf Ihren Namen. Sie müssen sich um nichts kümmern.',
  },
  {
    question: 'Wird das Fahrzeug geliefert?',
    answer: 'Ja, wir organisieren den sicheren Transport und liefern das Fahrzeug bis vor Ihre Haustür - bundesweit.',
  },
];

export const contactFields = [
  { id: 'vorname', label: 'Vorname', placeholder: 'Max', autoComplete: 'given-name' },
  { id: 'nachname', label: 'Nachname', placeholder: 'Mustermann', autoComplete: 'family-name' },
  { id: 'telefon', label: 'Telefon', type: 'tel', placeholder: '+49 123 456789', autoComplete: 'tel' },
  { id: 'email', label: 'E-Mail', type: 'email', placeholder: 'max@mustermann.de', autoComplete: 'email' },
  { id: 'marke', label: 'Marke', placeholder: 'z.B. Mercedes-Benz' },
  { id: 'modell', label: 'Modell', placeholder: 'z.B. E-Klasse' },
  { id: 'baujahr', label: 'Baujahr', placeholder: 'z.B. 2020', inputMode: 'numeric', pattern: '[0-9]{4}', maxLength: 4 },
  { id: 'farbe', label: 'Farbe', placeholder: 'z.B. Schwarz' },
  { id: 'km', label: 'Kilometerstand', placeholder: 'z.B. 50000', inputMode: 'numeric' },
  { id: 'budget', label: 'Budget (€)', placeholder: 'z.B. 25000', inputMode: 'numeric' },
];

export const selectFields = [
  {
    id: 'kraftstoff',
    label: 'Kraftstoff',
    options: [
      ['benzin', 'Benzin'],
      ['diesel', 'Diesel'],
      ['hybrid', 'Hybrid'],
      ['elektro', 'Elektro'],
      ['lpg', 'LPG/Autogas'],
    ],
  },
  {
    id: 'getriebe',
    label: 'Getriebe',
    options: [
      ['automatik', 'Automatik'],
      ['manuell', 'Manuell (Schaltgetriebe)'],
    ],
  },
];
