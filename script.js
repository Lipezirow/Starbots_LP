/**
 * STARBOTS FTC - Script principal
 * - Menu mobile
 * - Scroll suave para âncoras
 * - Animações ao scroll (Intersection Observer)
 * - Header com efeito ao rolar
 * - Microinterações em botões e cards
 */

(function () {
    'use strict';

    // ---------- Menu mobile ----------
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            const isOpen = navMenu.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', isOpen);
        });

        // Fechar ao clicar em um link
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---------- Scroll suave para âncoras (#) ----------
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const header = document.querySelector('.header');
                const headerHeight = header ? header.offsetHeight : 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---------- Header: sombra ao rolar ----------
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ---------- Animações ao scroll (Intersection Observer) ----------
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observar elementos com data-aos
    document.querySelectorAll('[data-aos]').forEach(function (el) {
        observer.observe(el);
    });

    // ---------- Timeline premium: fade + slide ao scroll (mobile-first, 60fps) ----------
    const tlCards = document.querySelectorAll('[data-timeline-card]');
    if (tlCards.length) {
        const tlObserverOptions = {
            root: null,
            rootMargin: '0px 0px -15% 0px',
            threshold: 0.12
        };
        const tlObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('tl-card--visible');
                }
            });
        }, tlObserverOptions);
        tlCards.forEach(function (card) {
            tlObserver.observe(card);
        });
    }

    // ---------- Microinterações: botões ----------
    document.querySelectorAll('.btn').forEach(function (btn) {
        btn.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-3px)';
        });
        btn.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // ---------- Microinterações: cards (hover leve) ----------
    document.querySelectorAll('.block-card, .premio-card, .timeline-content').forEach(function (card) {
        card.addEventListener('mouseenter', function () {
            this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease';
        });
    });

    // ---------- Logo: efeito hover (opcional) ----------
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function () {
            this.querySelector('.logo-text').style.letterSpacing = '0.2em';
        });
        logo.addEventListener('mouseleave', function () {
            this.querySelector('.logo-text').style.letterSpacing = '0.15em';
        });
    }

    console.log('STARBOTS FTC - Site carregado.');
})();
