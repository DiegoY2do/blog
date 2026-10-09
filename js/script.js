
import { renderHeader } from "./components/header.js";
import { renderHero } from "./components/hero.js";
import { renderMusic } from "./components/music.js";
import { renderAlbums } from "./components/albums.js";

const headerContainer = document.querySelector("#header");
headerContainer.innerHTML = renderHeader();

const heroContainer = document.querySelector("#hero");
heroContainer.innerHTML = renderHero();

const musicContainer = document.querySelector("#music");
musicContainer.innerHTML = renderMusic();

const albumContainer = document.querySelector("#albums");
albumContainer.innerHTML = renderAlbums();