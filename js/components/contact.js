const CONTACT_EMAIL = "contacto@arixv.com.mx";

export function renderContactIntro() {
    return `
        <section class="page-intro">
            <div class="container">
                <div class="page-intro-container">
                    <div class="subtitle">
                        <h2>CONTACTO.</h2>
                        <br>
                        <h3>Hablemos.</h3>
                        <p>Cuéntanos tu idea, tu duda o tu propuesta y te responderemos lo antes posible.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function renderContact() {
    return `
        <section class="contact">
            <div class="container">
                <div class="contact-container">

                    <div class="contact-info">
                        <div class="contact-block">
                            <span>CORREO</span>
                            <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
                        </div>

                        <div class="contact-block">
                            <span>REDES</span>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                            <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">Spotify</a>
                        </div>
                    </div>

                    <form class="contact-form" id="contact-form" novalidate>
                        <div class="contact-field">
                            <label for="contact-name">Nombre</label>
                            <input type="text" id="contact-name" name="name" autocomplete="name" required>
                        </div>

                        <div class="contact-field">
                            <label for="contact-email">Correo</label>
                            <input type="email" id="contact-email" name="email" autocomplete="email" required>
                        </div>

                        <div class="contact-field">
                            <label for="contact-subject">Asunto</label>
                            <select id="contact-subject" name="subject" required>
                                <option value="Colaboración">Colaboración</option>
                                <option value="Conciertos y boletos">Conciertos y boletos</option>
                                <option value="Prensa">Prensa</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        <div class="contact-field">
                            <label for="contact-message">Mensaje</label>
                            <textarea id="contact-message" name="message" rows="6" required></textarea>
                        </div>

                        <input type="submit" value="Enviar mensaje">
                        <p class="contact-status" role="status" aria-live="polite"></p>
                    </form>

                </div>
            </div>
        </section>
    `;
}

export function initContactForm() {
    const form = document.querySelector("#contact-form");
    if (!form) return;

    const status = form.querySelector(".contact-status");
    let timer;

    form.addEventListener("submit", event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        form.reset();
        status.textContent = "¡Mensaje enviado! Gracias por escribirnos.";
        status.dataset.state = "ok";

        clearTimeout(timer);
        timer = setTimeout(() => {
            status.textContent = "";
            status.dataset.state = "";
        }, 5000);
    });
}