export function renderAbout() {
    const stats = [
        { number: "00", label: "Conciertos" },
        { number: "00", label: "Artistas" },
        { number: "00", label: "Años de historia" }
    ];

    return `
        <section class="about">
            <div class="container">
                <div class="about-container">
                    <div class="subtitle">
                        <h2>SOBRE NOSOTROS.</h2>
                        <br>
                        <h3>Una plataforma hecha para la escena.</h3>
                        <p></p>
                    </div>

                    <div class="about-content">
                        <div class="about-text">
                            <p>Soy una persona que encuentra inspiración en la música, el diseño y todo aquello que transmite una idea o una emoción. Me gusta explorar nuevas perspectivas, descubrir sonidos y transformar lo que me apasiona en algo visual y auténtico. Creo que los pequeños detalles pueden contar grandes historias y que cada proyecto es una oportunidad para expresar una parte de quién soy.</p>
                            <br>
                            <p><span>ECO CLUB</span> nace de esa conexión entre creatividad, música y cultura. Más que un espacio para compartir gustos, es una forma de reunir ideas, sonidos e influencias que forman parte de mi mundo. Este es solo el comienzo de algo que seguirá creciendo, evolucionando y encontrando nuevas formas de expresarse.</p>
                            <br>
                            <a href="./about.html">CONOCE MÁS&nbsp; →</a>
                        </div>

                        <div class="about-stats">
                            ${stats.map(stat => `
                                <div class="about-stat">
                                    <h4>${stat.number}</h4>
                                    <p>${stat.label}</p>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}