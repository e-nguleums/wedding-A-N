import { data } from "../assets/data/data.js";
import { config } from "../assets/data/data.js";
import { monthNameToNumber } from "../utils/helper.js";

export const home = () => {
    const homeContainer = document.querySelector('.home');
    const [_, figureElement, timeElement, homeTime, calendarAnchor] = homeContainer.children;

    /* FOTO + BINGKAI (PAKAI GLOBAL FRAME) */
    const generateFigureContent = ({ bride }) => {
        const { couple: coupleImage } = bride;

        return `
            <div class="photo-frame">
                <img class="photo-img" src="${coupleImage}" alt="couple photo">
            </div>
            <figcaption>
                ${bride.L.name.split(' ')[0]} & ${bride.P.name.split(' ')[0]}
            </figcaption>
        `;
    };

    const generateTimeContent = (event) => {
        const { year, month, date, day } = event;

        return `
            <time datetime="${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}">
                ${day}, ${date} ${month} ${year}
            </time>
        `;
    };

    const generateCountdownMarkup = (days, hours, minutes, seconds) => `
        <div><p>${days}<br><span>Hari</span></p></div>
        <div><p>${hours}<br><span>Jam</span></p></div>
        <div><p>${minutes}<br><span>Menit</span></p></div>
        <div><p>${seconds}<br><span>Detik</span></p></div>
    `;

    const startCountdown = (homeTime, event) => {
        const { year, month, date } = event;
        const endTime = new Date(
            `${year}-${String(monthNameToNumber(month)).padStart(2, '0')}-${String(date).padStart(2, '0')}T00:00:00`
        ).getTime();

        const intervalId = setInterval(() => {
            const now = Date.now();
            const distance = endTime - now;

            if (distance <= 0) {
                clearInterval(intervalId);
                homeTime.innerHTML = generateCountdownMarkup(0, 0, 0, 0);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            homeTime.innerHTML = generateCountdownMarkup(days, hours, minutes, seconds);
        }, 1000);
    };

    const initializeHome = () => {
        const { bride, time, link } = data;
        const mainEvent = time[config.mainEvent];

        figureElement.innerHTML = generateFigureContent({ bride });
        timeElement.innerHTML = generateTimeContent(mainEvent);
        calendarAnchor.href = link.calendar;

        startCountdown(homeTime, mainEvent);
    };

    initializeHome();
};