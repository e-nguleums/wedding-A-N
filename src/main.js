import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    // Add AOS attributes to ornaments and frames (for entrance) and headings
    (function addAosIfMissing() {
        // ornaments (staggered)
        document.querySelectorAll('.site-ornament').forEach((el, i) => {
            if (!el.hasAttribute('data-aos')) {
                        el.setAttribute('data-aos', 'fade');
                el.setAttribute('data-aos-duration', '1200');
                el.setAttribute('data-aos-delay', String(180 * i));

        // frames (welcome/home)
        document.querySelectorAll('.photo-frame, .welcome-frame').forEach((el) => {
            if (!el.hasAttribute('data-aos')) {
                el.setAttribute('data-aos', 'zoom-in');
                el.setAttribute('data-aos-duration', '1300');
                el.setAttribute('data-aos-easing', 'ease-out-cubic');
            }
        });

        // headings and paragraphs
        const selectors = ['section h2', 'section h3', 'section p', '.bride .bride_couple li', '.wishas div:nth-of-type(1) > div figure', '.home figure figcaption'];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                if (!el.hasAttribute('data-aos')) {
                    el.setAttribute('data-aos', 'fade-up');
                    el.setAttribute('data-aos-duration', '1200');
                    el.setAttribute('data-aos-easing', 'ease-out-cubic');
                }
            });
        });
    })();

    // Initialize AOS with mirror and allow repeat animations on enter/leave
    AOS.init({
        disable: false, // enable AOS on all devices
        duration: 1200, // slightly slower default duration for smoother effect
        easing: 'ease-out-cubic',
        once: false, // allow animation to happen more than once
        mirror: true // animate out when scrolling past and back in when revisiting
    });

    // Refresh AOS after dynamic attribute insertion
    AOS.refresh();

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();
});