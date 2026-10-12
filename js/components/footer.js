export function renderFooter(base = "") {
    const menu = [
        { label: "Inicio", href: `${base}#home` },
        { label: "Música", href: `${base}#music` },
        { label: "Álbumes", href: `${base}#albums` },
        { label: "Artistas", href: `${base}#artists` },
        { label: "Conciertos", href: `${base}#concerts` },
        { label: "Acerca de", href: "./about.html" },
        { label: "Contacto", href: "./contact.html" }
    ];

    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-container">
                    <div class="footer-main">
                        <div class="footer-col footer-brand">
                            <span>ECO CLUB</span>
                            <p>La plataforma para vivir la música de la escena.</p>

                            <span class="footer-subtitle">SÍGUENOS</span>
                            <div class="footer-rrss">
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="3" y="3" width="18" height="18" rx="5"/>
                                        <circle cx="12" cy="12" r="4"/>
                                        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>
                                    </svg>
                                </a>

                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5z"/>
                                    </svg>
                                </a>

                                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.503 17.303a.748.748 0 0 1-1.03.248c-2.822-1.725-6.375-2.11-10.56-1.156a.75.75 0 0 1-.334-1.463c4.583-1.046 8.514-.615 11.676 1.341a.75.75 0 0 1 .248 1.03zm1.47-3.27a.937.937 0 0 1-1.289.309c-3.23-1.986-8.155-2.56-11.977-1.4a.938.938 0 0 1-.545-1.794c4.365-1.323 9.786-.683 13.502 1.596a.938.938 0 0 1 .309 1.289zm.126-3.404C15.224 8.375 8.796 8.164 5.067 9.296a1.125 1.125 0 0 1-.653-2.153c4.28-1.3 11.396-1.049 15.893 1.62a1.125 1.125 0 0 1-1.208 1.866z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div class="footer-col">
                            <span>MENÚ</span>
                            <nav class="footer-menu">
                                ${menu.map(item => `<a href="${item.href}">${item.label}</a>`).join("")}
                            </nav>
                        </div>

                        <div class="footer-col">
                            <span>CONTACTO</span>
                            <a href="mailto:contacto@arixv.com.mx">contacto@arixv.com.mx</a>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <p>© ${new Date().getFullYear()}&nbsp; <span>Eco Club.</span> Todos los derechos reservados.</p>
                        <p>Autor: <span class="footer-author">&nbsp;Diego Segundo</span></p>
                    </div>
                </div>
            </div>
        </footer>
    `;
}