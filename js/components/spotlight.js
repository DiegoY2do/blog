export function renderSpotlight() {
    const artists = [
        { name: "Taylor Swift", info: "Pop", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_4.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original", spotify:"https://open.spotify.com/playlist/37i9dQZF1DX5KpP2LN299J"},
        { name: "Bad Bunny ", info: "Reguetón", image: "https://imagenes.elpais.com/resizer/v2/U52QPYUXUZGKDKTFPGSJ7YB5RQ.jpg?auth=1b8b45bd464d922b4b1b9a0881142fd1e9dc605a693f440689f95e2cfa314d95&width=414", spotify:"https://open.spotify.com/playlist/37i9dQZF1DX2apWzyECwyZ"},
        { name: "Drake ", info: "Hip-hop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTD_sDWPj7ZnIXNQFqYEove0QhKrHTyhZ8myCKfuB-zQ&s=10", spotify:"https://open.spotify.com/playlist/37i9dQZF1DX7QOv5kjbU68" }, 
        { name: "The Weeknd ", info: "R&B alternativo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_rxpTvziCNPP8xweW0mLtGizjT8i3GDNrj1un-otJA&s=10", spotify:"https://open.spotify.com/playlist/37i9dQZF1DX6bnzK9KPvrz" }
    ];

    return `
        <section class="spotlight">
            <div class="container">
                <div class="spotlight-container">
                    <div class="subtitle">
                        <h2>Las voces que están marcando la escena.</h2>
                        <br>
                        <h3>Los artistas del momento</h3>
                        <p></p>
                    </div>

                    <div class="spotlight-grid">
                        ${artists.map(artist => `
                            <article class="spotlight-card">
                                <div class="spotlight-img">
                                    <img src="${artist.image}" alt="${artist.name}" loading="lazy">
                                </div>
                                <h4>${artist.name}</h4>
                                <p>${artist.info}</p>
                                <a href="${artist.spotify}" target="_blank">Escúchalo &nbsp; →</a>
                            </article>
                        `).join("")}
                    </div>
                </div>
            </div>
        </section>
    `;
}