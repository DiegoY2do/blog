import { renderHeader, initHeader } from "./components/header.js";
import {renderAboutIntro, renderAboutValues, renderAboutTimeline, renderAboutCta} from "./components/about-page.js";
import { renderNewsletter } from "./components/newsletter.js";
import { renderFooter } from "./components/footer.js";

const mount = (selector, html) => {
    document.querySelector(selector).innerHTML = html;
};

mount("#header", renderHeader("../index.html"));
initHeader();

mount("#about-intro", renderAboutIntro());
mount("#about-values", renderAboutValues());
mount("#about-timeline", renderAboutTimeline());
mount("#about-cta", renderAboutCta());
mount("#newsletter", renderNewsletter());
mount("#footer", renderFooter("../index.html"));