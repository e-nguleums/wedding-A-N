import {home} from "./js/home.js";
import {bride} from "./js/bride.js";
import {time} from "./js/time.js";
import {galeri} from "./js/galeri.js";
import {wishas} from "./js/wishas.js";
import {navbar} from "./js/navbar.js";
import {welcome} from "./js/welcome.js";

// load content
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        disable: function() { return window.innerWidth <= 768; }, // disable on small devices
        duration: 500, // shorter default animation
        once: true
    });

    // Add AOS attributes to headings/paragraphs that don't explicitly set them
    (function addAosIfMissing() {
        const selectors = ['section h2', 'section h3', 'section p', '.bride .bride_couple li', '.wishas div:nth-of-type(1) > div figure', '.home figure figcaption'];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                if (!el.hasAttribute('data-aos')) {
                    el.setAttribute('data-aos', 'fade-up');
                    el.setAttribute('data-aos-duration', '700');
                }
            });
        });
    })();

    welcome();
    navbar();
    home();
    bride()
    time();
    galeri();
    wishas();
});