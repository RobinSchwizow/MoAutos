/* ============================================
   MoAutosDe – Main JavaScript
   ============================================ */

(function() {
  'use strict';

  // ==========================================
  // NAVBAR: scroll effect + mobile toggle
  // ==========================================
  const navbar  = document.getElementById('navbar');
  const toggle  = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  toggle.addEventListener('click', function() {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // ==========================================
  // ACTIVE NAV: update based on scroll
  // ==========================================
  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    let current = '';
    sections.forEach(function(sec) {
      const sectionTop = sec.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = sec.getAttribute('id');
      }
    });

    navLinkItems.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // ==========================================
  // INTERSECTION OBSERVER: animate-on-scroll
  // ==========================================
  const animElements = document.querySelectorAll('[data-animate]');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
        setTimeout(function() {
          el.classList.add('animated');
          el.style.opacity = '';
        }, delay);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animElements.forEach(function(el) {
    observer.observe(el);
  });

  // ==========================================
  // FAQ ACCORDION
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function(item) {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', function() {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(function(other) {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').hidden = true;
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.hidden = false;
      }
    });
  });

  // ==========================================
  // SCROLL TO TOP
  // ==========================================
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ==========================================
  // FORM VALIDATION
  // ==========================================
  const form = document.getElementById('kontaktForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (validateForm()) {
        // Simulate submission
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';

        setTimeout(function() {
          form.style.display = 'none';
          formSuccess.hidden = false;
        }, 1200);
      }
    });

    // Real-time validation
    form.querySelectorAll('.form-input').forEach(function(input) {
      input.addEventListener('blur', function() {
        validateField(input);
      });
      input.addEventListener('input', function() {
        if (input.classList.contains('error')) {
          validateField(input);
        }
      });
    });
  }

  function validateForm() {
    let valid = true;
    form.querySelectorAll('.form-input').forEach(function(input) {
      if (!validateField(input)) valid = false;
    });

    const checkbox = document.getElementById('datenschutz');
    const checkboxError = document.getElementById('datenschutz-error');
    if (!checkbox.checked) {
      checkboxError.textContent = 'Bitte akzeptieren Sie die Datenschutzerklärung.';
      valid = false;
    } else {
      checkboxError.textContent = '';
    }

    return valid;
  }

  function validateField(input) {
    const group  = input.closest('.form-group');
    const error  = group ? group.querySelector('.form-error') : null;
    const name   = input.name;
    const value  = input.value.trim();
    const required = input.hasAttribute('required');
    let msg = '';

    if (required && !value) {
      msg = 'Dieses Feld ist erforderlich.';
    } else if (value) {
      if (name === 'email') {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          msg = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }
      } else if (name === 'telefon') {
        if (!/^[+]?[\d\s\-()]{7,20}$/.test(value)) {
          msg = 'Bitte geben Sie eine gültige Telefonnummer ein.';
        }
      } else if (name === 'baujahr') {
        if (!/^\d{4}$/.test(value) || parseInt(value) < 1950 || parseInt(value) > new Date().getFullYear() + 2) {
          msg = 'Bitte geben Sie ein gültiges Baujahr ein (z.B. 2020).';
        }
      } else if (name === 'budget') {
        if (!/^\d+$/.test(value.replace(/\./g, '').replace(/,/g, ''))) {
          msg = 'Bitte geben Sie nur Zahlen ein.';
        }
      } else if (name === 'km') {
        if (!/^\d+$/.test(value.replace(/\./g, ''))) {
          msg = 'Bitte geben Sie nur Zahlen ein.';
        }
      }
    }

    if (input.tagName === 'SELECT' && required && !value) {
      msg = 'Bitte wählen Sie eine Option aus.';
    }

    if (error) error.textContent = msg;
    input.classList.toggle('error', !!msg);
    return !msg;
  }

})();
