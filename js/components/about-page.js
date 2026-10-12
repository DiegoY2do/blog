export function renderAboutIntro() {
    return `
        <section class="page-intro">
            <div class="container">
                <div class="page-intro-container">
                    <div class="subtitle">
                        <h2>ACERCA DE.</h2>
                        <br>
                        <h3>Somos Eco Club.</h3>
                        <p>Eco Club es un espacio dedicado a la música, el diseño y la cultura que nace de la curiosidad por descubrir nuevos sonidos, explorar distintas influencias y compartir aquello que nos inspira. Más que una página, es una forma de expresar una identidad a través de los álbumes, los artistas y las ideas que dejan huella.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function renderAboutValues() {
    const values = [
        {
            number: "01",
            title: "Misión",
            text: "Crear un espacio digital donde la música y la creatividad se encuentren, compartiendo álbumes, artistas e influencias que inspiren a descubrir nuevas perspectivas y conectar con diferentes expresiones culturales."
        },
        {
            number: "02",
            title: "Visión",
            text: "Convertir a Eco Club en un espacio con una identidad propia, capaz de reunir a personas que comparten el interés por la música, el diseño y la cultura, creciendo y evolucionando junto con las nuevas ideas y sonidos."
        },
        {
            number: "03",
            title: "Valores",
            text: "Creatividad para explorar nuevas ideas, autenticidad para expresar nuestra identidad, curiosidad para descubrir sonidos diferentes y pasión por los detalles que hacen de la música una experiencia personal y compartida."
        }
    ];

    return `
        <section class="about-section">
            <div class="container">
                <div class="about-section-container">
                    <div class="subtitle">
                        <h2>LO QUE NOS MUEVE.</h2>
                        <br>
                        <h3>Misión, visión y valores.</h3>
                        <p>La esencia de Eco Club está en explorar, crear y compartir. Estos principios representan la identidad del proyecto y orientan la manera en que construimos este espacio.</p>
                    </div>

                    <div class="values-grid">
                        ${values.map(value => `
                            <div class="value-item">
                                <span>${value.number}</span>
                                <h4>${value.title}</h4>
                                <p>${value.text}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function renderAboutTimeline() {
    const timeline = [
        {
            year: "2026",
            title: "Cómo empezó todo",
            text: "Eco Club comienza como una idea para reunir la música, la creatividad y el diseño en un mismo espacio, construyendo una identidad visual inspirada en los sonidos y la cultura."
        },
        {
            year: "2026",
            title: "Primer gran paso",
            text: "El proyecto toma forma a través del desarrollo de la página web, la selección de álbumes y la creación de una experiencia visual que refleja los gustos e influencias de Eco Club."
        },
        {
            year: "2026",
            title: "Crecimiento",
            text: "La propuesta se expande con nuevas referencias musicales, ideas visuales y contenidos que permiten explorar diferentes artistas, estilos y formas de expresión."
        },
        {
            year: "2026",
            title: "Hoy",
            text: "Eco Club continúa desarrollando su identidad y construyendo un espacio donde la música y la creatividad conviven. El proyecto sigue abierto a nuevas ideas, descubrimientos y posibilidades."
        }
    ];

    return `
        <section class="about-section">
            <div class="container">
                <div class="about-section-container">
                    <div class="subtitle">
                        <h2>NUESTRA HISTORIA.</h2>
                        <br>
                        <h3>El camino hasta aquí.</h3>
                        <p>Cada proyecto comienza con una idea. Esta es la historia de cómo Eco Club empieza a convertir su pasión por la música y el diseño en un espacio propio.</p>
                    </div>

                    <div class="timeline">
                        ${timeline.map(item => `
                            <div class="timeline-item">
                                <span>${item.year}</span>
                                <div class="timeline-text">
                                    <h4>${item.title}</h4>
                                    <p>${item.text}</p>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>
    `;
}

export function renderAboutCta() {
    return `
        <section class="about-section">
            <div class="container">
                <div class="about-cta">
                    <h3>¿Tienes una idea, una propuesta o quieres colaborar?</h3>
                    <a href="./contact.html">ESCRÍBENOS&nbsp; →</a>
                </div>
            </div>
        </section>
    `;
}
