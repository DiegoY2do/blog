function initHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const toggle = header.querySelector(".header-toggle");
  const BREAKPOINT = 1024;
  const OFFSET = 50;

  function updateScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > OFFSET);
  }

  function setMenu(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  }

  updateScroll();
  window.addEventListener("scroll", updateScroll, { passive: true });

  toggle.addEventListener("click", () => {
    setMenu(!header.classList.contains("is-open"));
  });

  header.querySelectorAll(".header-panel a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > BREAKPOINT) setMenu(false);
  });
}

function initConcerts() {
  const extra = document.getElementById("concerts-extra");
  const button = document.querySelector(".concerts-toggle");
  if (!extra || !button) return;

  extra.addEventListener("show.bs.collapse", () => {
    button.textContent = "MOSTRAR MENOS ↑";
  });
  extra.addEventListener("hidden.bs.collapse", () => {
    button.textContent = "MOSTRAR MÁS ↓";
  });
}

function initArtistMarquee() {
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

function initNewsletter() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('newsletterEmail');

    const appendAlert = (message, type) => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('');

        alertPlaceholder.append(wrapper);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        appendAlert(`¡Listo! Te has suscrito con <strong>${emailInput.value}</strong>`, 'success');
        form.reset();
    });
}

function initFooter() {
  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
 
  const status = form.querySelector(".contact-status");
  let timer;
 
  form.addEventListener("submit", event => {
    event.preventDefault();
 
    if (!form.checkValidity()) {
      form.classList.add("was-validated"); // Bootstrap muestra los invalid-feedback
      return;
    }
 
    form.reset();
    form.classList.remove("was-validated");
    status.textContent = "¡Mensaje enviado! Gracias por escribirnos.";
    status.dataset.state = "ok";
 
    clearTimeout(timer);
    timer = setTimeout(() => {
      status.textContent = "";
      status.dataset.state = "";
    }, 5000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initConcerts();
  initArtistMarquee();
  initNewsletter();
  initContactForm();
  initFooter();
});
