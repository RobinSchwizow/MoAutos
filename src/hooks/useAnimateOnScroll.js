import { useEffect } from 'react';

export function useAnimateOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('animated');
        element.setAttribute('data-revealed', 'true');
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const element = entry.target;
          const delay = Number.parseInt(element.getAttribute('data-delay') || '0', 10);

          window.setTimeout(() => {
            element.classList.add('animated');
            element.setAttribute('data-revealed', 'true');
            element.style.opacity = '';
          }, delay);

          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}
