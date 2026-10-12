
import { renderHeader, initHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderMusic } from "./components/music.js";
import { renderParallax } from "./components/parallax.js";
import { renderAlbums } from "./components/albums.js";
import { renderArtist, initArtistMarquee } from "./components/artist.js";
import { renderSpotlight } from "./components/spotlight.js";
import { renderNewsletter } from "./components/newsletter.js";
import { renderConcerts, initConcerts } from "./components/concerts.js";
import { renderAbout } from "./components/about.js";
import { renderFooter } from "./components/footer.js";

const headerContainer = document.querySelector("#header");
headerContainer.innerHTML = renderHeader();
initHeader();

const heroContainer = document.querySelector("#hero");
heroContainer.innerHTML = renderHero();

const musicContainer = document.querySelector("#music");
musicContainer.innerHTML = renderMusic();

const parallaxContainer = document.querySelector("#parallax");
parallaxContainer.innerHTML = renderParallax();

const albumContainer = document.querySelector("#albums");
albumContainer.innerHTML = renderAlbums();

const artistContainer = document.querySelector("#artist");
artistContainer.innerHTML = renderArtist();
initArtistMarquee();

const spotlightContainer = document.querySelector("#spotlight");
spotlightContainer.innerHTML = renderSpotlight();

const newsletterContainer = document.querySelector("#newsletter");
newsletterContainer.innerHTML = renderNewsletter();

const concertsContainer = document.querySelector("#concerts");
concertsContainer.innerHTML = renderConcerts();
initConcerts();

const aboutContainer = document.querySelector("#about");
aboutContainer.innerHTML = renderAbout();

const footerContainer = document.querySelector("#footer");
footerContainer.innerHTML = renderFooter();