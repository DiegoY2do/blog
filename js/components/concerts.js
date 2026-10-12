export function renderConcerts() {
    const VISIBLE = 3; 

    const concerts = [
        { 
            day: "20",
            month: "NOV", 
            name: "Corona Capital", 
            place: "Autódromo Hermanos Rodríguez · Ciudad de México", 
            link: "https://www.coronacapital.com.mx/" 
        },
        {
            day: "28",
            month: "NOV",
            name: "Rich Vago$ Fest",
            place: "Pepsi Center · Ciudad de México",
            link: "https://www.ticketmaster.com.mx/gera-mx-mexico-28-11-2026/event/14006538AE0FA0EC"
        },
        { 
            day: "28", 
            month: "NOV", 
            name: "Coca-Cola Flow Fest", 
            place: "Autódromo Hermanos Rodríguez · Ciudad de México", 
            link: "https://www.cocacolaflowfest.com.mx/" 
        },
        { 
            day: "05", 
            month: "DIC", 
            name: "Knotfest México", 
            place: "Estadio Fray Nano · Ciudad de México", 
            link: "https://knotfest.com/pages/mexico?srsltid=AU7gw4VDbsC2hCKNLc1POX-DlThnsJ9KzA_gYuU_qod2BGQgfamNbtbY" 
        },
        { 
            day: "09", 
            month: "DIC", 
            name: "Strings & Sol 2026", 
            place: "Dreams Sapphire Resort & Spa Puerto Morelos, Mexico", 
            link: "https://stringsandsol.com/" 
        },
        { 
            day: "16", 
            month: "DIc", 
            name: "Maná", 
            place: "Estadio GNP Seguros · Ciudad de México", 
            link: "https://www.ticketmaster.com.mx/mana-boletos/artist/759223?gad_source=1&gad_campaignid=24334441325&gbraid=0AAAAAoMy5br7O1mOP_T4Gy2XCm8Qz0fVh&gclid=CjwKCAjw56zWBhB0EiwAdPOQOd6URw7h32ZJ7rhnJnbr6vLwZjtiXH5ZlvzjnLQKwNk7T7hY83bBqhoClEgQAvD_BwE" 
        }
    ];

    const visible = concerts.slice(0, VISIBLE);
    const extra = concerts.slice(VISIBLE);

    function renderItem(concert) {
        return `
            <div class="concert-item">
                <div class="concert-date">
                    <h4>${concert.day}</h4>
                    <span>${concert.month}</span>
                </div>

                <div class="concert-info">
                    <h4>${concert.name}</h4>
                    <p>${concert.place}</p>
                </div>

                <a href="${concert.link}" target="_blank" rel="noopener noreferrer">BOLETOS&nbsp; →</a>
            </div>
        `;
    }

    return `
        <section class="concerts">
            <div class="container">
                <div class="concerts-container">
                    <div class="subtitle">
                        <h2>PRÓXIMOS CONCIERTOS.</h2>
                        <br>
                        <h3>Aparta tu lugar en la siguiente fecha.</h3>
                        <p></p>
                    </div>

                    <div class="concerts-list">
                        ${visible.map(renderItem).join("")}

                        ${extra.length ? `
                            <div class="concerts-extra" id="concerts-extra">
                                <div class="concerts-extra-inner">
                                    ${extra.map(renderItem).join("")}
                                </div>
                            </div>
                        ` : ""}
                    </div>

                    ${extra.length ? `
                        <button
                            class="concerts-toggle"
                            type="button"
                            aria-expanded="false"
                            aria-controls="concerts-extra"
                        >MOSTRAR MÁS ↓</button>
                    ` : ""}
                </div>
            </div>
        </section>
    `;
}

export function initConcerts() {
    const button = document.querySelector(".concerts-toggle");
    const extra = document.querySelector("#concerts-extra");
    if (!button || !extra) return;

    button.addEventListener("click", () => {
        const open = extra.classList.toggle("is-open");

        button.textContent = open ? "MOSTRAR MENOS ↑" : "MOSTRAR MÁS ↓";
        button.setAttribute("aria-expanded", open);
    });
}