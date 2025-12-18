import { data } from "../assets/data/data.js";
import { addClassElement, getQueryParameter, removeClassElement } from "../utils/helper.js";

export const welcome = () => {
    const welcomeElement = document.querySelector('.welcome');
    const homeElement = document.querySelector('.home');
    const navbarElement = document.querySelector('header nav');

    const [_, figureElement, weddingToElement, openWeddingButton] = welcomeElement.children;
    const [audioMusic, audioButton] = document.querySelector('.audio').children;
    const [iconButton] = audioButton.children;

    /* ===============================
       FOTO + NAMA MEMPELAI (FIXED)
       =============================== */
    const generateFigureContent = (bride) => {
    const { couple: coupleImage } = bride;

    return `
        <div class="photo-frame welcome-frame">
            <img class="photo-img" src="${coupleImage}" alt="couple photo">
        </div>
        <figcaption class="welcome-names">
            <span>Agung</span>
            <span class="amp">&</span>
            <span>Nurhalimah</span>
        </figcaption>
    `;
};

    /* ===============================
       PARAMETER TAMU
       =============================== */
    const generateParameterContent = () => {
        const name = document.querySelector('#name');
        const params = getQueryParameter('to');

        if (params) {
            weddingToElement.innerHTML = `
                Kepada Yth Bapak/Ibu/Saudara/i<br>
                <span>${params}</span>
            `;
            name.value = params;
        } else {
            weddingToElement.innerHTML = `
                Kepada Yth Bapak/Ibu/Saudara/i<br>
                <span>Teman-teman semua</span>
            `;
        }
    };

    /* ===============================
       AUDIO
       =============================== */
    const initialAudio = () => {
        let isPlaying = false;

        audioMusic.innerHTML = `<source src="${data.audio}" type="audio/mp3"/>`;

        audioButton.addEventListener('click', () => {
            if (!isPlaying) {
                addClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-play-circle');
                addClassElement(iconButton, 'bx-pause-circle');
                audioMusic.play();
            } else {
                removeClassElement(audioButton, 'active');
                removeClassElement(iconButton, 'bx-pause-circle');
                addClassElement(iconButton, 'bx-play-circle');
                audioMusic.pause();
            }
            isPlaying = !isPlaying;
        });
    };

    /* ===============================
       OPEN WEDDING
       =============================== */
    openWeddingButton.addEventListener('click', () => {
        addClassElement(document.body, 'active');
        addClassElement(welcomeElement, 'hide');

        setTimeout(() => {
            addClassElement(homeElement, 'active');
            addClassElement(navbarElement, 'active');
            addClassElement(audioButton, 'show');
            removeClassElement(iconButton, 'bx-play-circle');
            addClassElement(iconButton, 'bx-pause-circle');
            audioMusic.play();
        }, 1500);

        setTimeout(() => {
            addClassElement(audioButton, 'active');
        }, 3000);
    });

    /* ===============================
       INIT
       =============================== */
    const initializeWelcome = () => {
        figureElement.innerHTML = generateFigureContent(data.bride);
        generateParameterContent();
        addClassElement(welcomeElement, 'active');
    };

    initializeWelcome();
    initialAudio();
};