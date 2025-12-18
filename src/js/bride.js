import { data } from "../assets/data/data.js";
import { renderElement } from "../utils/helper.js";

export const bride = () => {
    const brideCouple = document.querySelector('.bride_couple ul');

    const brideListItem = (item) => (
        `<li data-aos="zoom-in" data-aos-duration="1000">
            <figure>
                <figcaption>${item.name}</figcaption>
            </figure>

            <p>
                ${item.child} <br>
                dari <br>
                Bapak ${item.father} & Ibu ${item.mother}
            </p>

            <span style="display: ${item.id === 2 ? 'none' : 'block'}">&</span>
        </li>`
    );

    const brideData = [data.bride.L, data.bride.P];

    renderElement(brideData, brideCouple, brideListItem);
};