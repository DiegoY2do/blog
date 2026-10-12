export function renderArtist() {
    const artistsRow1 = [
        { name: "Un Verano Sin Ti", image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72" },
        { name: "SOUR", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn1CJ-FWbFGzZvzURIMnWYNEbSIcUvw1GWAw65Hte-2Q&s=10" },
        { name: "Hollywood's Bleeding", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsYClTYB-WUxh198Gfgx78aX_WgbDN3Eak7vN_IJzHYw&s=10" },
        { name: "Lover ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlxYZGVX9KTJj4h4UgyGi_umL5Wc_cY2KjoXvUvCtiMQ&s" },
        { name: "Beerbongs & Bentleys", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1o8T-bu1kWDmaIK-UHSpYj_ONTEQ1-6NhgGl6DLS_7Q&s=10" },
        { name: "Beauty Behind the Madness", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9azrrfFe6_zivEFYBjnHmDPM_gjjSE3fiUrsxuWWEQ&s=10" },
        { name: "Midnights", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvEZLh-z3LLLjhbkK3xnRWIVkDRQCZrYB89Ufu5pEpsQ&s" },
        { name: "Doo-Wops & Hooligan", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYJyUxP1WmKk1t8QDzCStDoVuYdmRxPLnMbfrRhXgRw&s=10" }
    ];

    const artistsRow2 = [
        { name: "Starboy", image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452" },
        { name: "SOS ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRncyZTS63oegy_31kUvzZ-v8-6fiuIPIKpGDlZQms6Yg&s=10" },
        { name: "Future Nostalgia ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryVD6dnkV2FoljafPHPdzdZdYpGM02-o_zkJyeDsF2A&s" },
        { name: "AM ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJFuyKQ9VK02y5ulDnhR8cHutWUnkiNqdstwNAVeJCQ&s=10" },
        { name: "?", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhY0Aa7kHbjMyuNeVm-3Mjg7-aO4oS-w3SkIhrYyCv1Q&s=10" },
        { name: "YHLQMDLG", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1QW_Zbd6WHu5BhfoZPPSbadT0kHZT_prT-Kwzx-RaA&s" },
        { name: "Scorpion", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHIr-mQXPZfUYFs5p-4Fj7TeRretIDQUxje_905DIioA&s" },
        { name: "GUTS ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnYMW0lKK5i0ExeLGQJRuayvYDfENAtXmB_4ETbV2BMg&s" }
    ];

    const artistsRow3 = [
        { name: "÷ (Divide)", image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96" },
        { name: "After Hours", image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36" },
        { name: "Dua Lipa", image: "https://i.scdn.co/image/ab6761610000e5eb0c68f6c95232e716f0abee8d" },
        { name: "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKm4c94W4R89B947HHhL4CCqycCwbfgDYFL4uGWhpv_Q&s" },
        { name: "Purpose", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkd4sLmOzWZ-MHbQzq4iuRRrCaDrsJRMhgQJB0oExVXg&s=10" },
        { name: "Mañana Será Bonito", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKJ0crs1AdgC2BEdB5LZWr6pqFZDizq7fSj0iffaV5g&s=10" },
        { name: "Views", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7akwlXCYx9d5vC5ZJqecROCXS6BrxyjgBC-FegxVKA&s" },
        { name: "nadie sabe lo que va a pasar mañana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlVgzHIcYaMV54O1ke7eFTMaxydznKgun2cFoqRsgTVg&s" }
    ];

    const COPIES = 4;

function renderRow(artists, rowClass, direction) {
    return `
        <div class="artist-row ${rowClass}">
            <div class="artist-track ${direction}">
                ${artists.map(artist => {
                    const imagePath = artist.image.startsWith("http")
                        ? artist.image
                        : `assets/image/${artist.image}`;

                    return `
                        <div class="artist-card">
                            <img src="${imagePath}" alt="${artist.name}" loading="lazy">
                        </div>
                    `;
                }).join("")}
            </div>
        </div>
    `;
}

    return `
        <section class="artist">
            <div class="artist-gallery">
                ${renderRow(artistsRow1, "row-one", "move-left")}
                ${renderRow(artistsRow2, "row-two", "move-right")}
                ${renderRow(artistsRow3, "row-three", "move-left")}
            </div>
        </section>
    `;
}

export function initArtistMarquee() {
    const tracks = document.querySelectorAll(".artist-track");
    if (!tracks.length) return;

    const SPEEDS = { "row-one": 15, "row-two": 12, "row-three": 15 };

    tracks.forEach(track => {
        track.dataset.set = track.innerHTML;
    });

    function fill() {
        tracks.forEach(track => {
            const row = track.parentElement;

            track.innerHTML = track.dataset.set;
            const setWidth = track.scrollWidth;
            if (!setWidth) return;

            const copiesPerHalf = Math.ceil(row.clientWidth / setWidth);
            track.innerHTML = track.dataset.set.repeat(copiesPerHalf * 2);

            const rowClass = [...row.classList].find(c => SPEEDS[c]);
            const speed = SPEEDS[rowClass] ?? 15;

            track.style.animationDuration = `${(track.scrollWidth / 2) / speed}s`;
        });
    }

    fill();

    let timer;
    window.addEventListener("resize", () => {
        clearTimeout(timer);
        timer = setTimeout(fill, 200);
    });
}