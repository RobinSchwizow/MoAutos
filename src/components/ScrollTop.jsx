import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 500);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`scroll-top ${isVisible ? 'visible' : ''}`}
      type="button"
      aria-label="Nach oben scrollen"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="up" width="20" height="20" strokeWidth="2.5" />
    </button>
  );
}
