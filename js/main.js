/* ==========================================================================
   For Sale By Inventor - Main JavaScript
   ========================================================================== */

(function() {
    'use strict';

    /* ==========================================================================
       FAQ Accordion
       ========================================================================== */
    function initFAQ() {
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(button => {
            button.addEventListener('click', () => {
                const item = button.parentElement;
                const isOpen = item.classList.contains('open');
                
                // Close all other items
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('open');
                }
            });
        });
    }

    /* ==========================================================================
       Scroll Animations
       ========================================================================== */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    }

    /* ==========================================================================
       Smooth Scroll
       ========================================================================== */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only handle internal anchors
                if (href.length > 1) {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });
    }

    /* ==========================================================================
       Navigation Background on Scroll
       ========================================================================== */
    function initNavScroll() {
        const nav = document.querySelector('.nav');
        
        if (!nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.style.background = 'rgba(10,10,15,0.95)';
            } else {
                nav.style.background = 'rgba(10,10,15,0.85)';
            }
        });
    }

    /* ==========================================================================
       Mobile Menu Toggle (for future use)
       ========================================================================== */
    function initMobileMenu() {
        const menuToggle = document.querySelector('.nav-menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (!menuToggle || !navLinks) return;

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    /* ==========================================================================
       Form Validation (for future use)
       ========================================================================== */
    function initFormValidation() {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                const requiredFields = form.querySelectorAll('[required]');
                let isValid = true;

                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        isValid = false;
                        field.classList.add('error');
                    } else {
                        field.classList.remove('error');
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                }
            });
        });
    }

    /* ==========================================================================
       Initialize All
       ========================================================================== */
    function init() {
        initFAQ();
        initScrollAnimations();
        initSmoothScroll();
        initNavScroll();
        initMobileMenu();
        initFormValidation();
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
