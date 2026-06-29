import { useEffect, useState } from 'react';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Legal from './components/Legal.jsx';
import Maps from './components/Maps.jsx';
import Navbar from './components/Navbar.jsx';
import Process from './components/Process.jsx';
import ScrollTop from './components/ScrollTop.jsx';
import Services from './components/Services.jsx';
import { useAnimateOnScroll } from './hooks/useAnimateOnScroll.js';

const CONSENT_STORAGE_KEY = 'moautos-consent-v1';

export default function App() {
  useAnimateOnScroll();

  const [activeLegal, setActiveLegal] = useState(null);
  const [consent, setConsent] = useState(null);
  const [isConsentOpen, setIsConsentOpen] = useState(false);

  useEffect(() => {
    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawConsent) {
      setIsConsentOpen(true);
      return;
    }

    try {
      setConsent(JSON.parse(rawConsent));
    } catch {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      setIsConsentOpen(true);
    }
  }, []);

  function saveConsent(nextConsent) {
    const normalizedConsent = {
      necessary: true,
      externalMedia: Boolean(nextConsent.externalMedia),
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(normalizedConsent));
    setConsent(normalizedConsent);
    setIsConsentOpen(false);
  }

  function allowExternalMedia() {
    saveConsent({
      necessary: true,
      externalMedia: true,
    });
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Faq />
        <Contact onOpenLegal={setActiveLegal} />
        <Maps canLoadExternalMedia={consent?.externalMedia === true} onAllowExternalMedia={allowExternalMedia} />
      </main>
      <Footer onOpenLegal={setActiveLegal} onOpenCookieSettings={() => setIsConsentOpen(true)} />
      <Legal activeLegal={activeLegal} onClose={() => setActiveLegal(null)} />
      <CookieBanner
        consent={consent}
        isOpen={isConsentOpen}
        onSave={saveConsent}
        onOpenLegal={setActiveLegal}
        onClose={() => setIsConsentOpen(false)}
      />
      <ScrollTop />
    </>
  );
}
