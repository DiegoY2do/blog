import { renderHeader, initHeader } from "./components/header.js";
import { renderContactIntro, renderContact, initContactForm } from "./components/contact.js";
import { renderFooter } from "./components/footer.js";

const mount = (selector, html) => {
    document.querySelector(selector).innerHTML = html;
};

mount("#header", renderHeader("../index.html"));
initHeader();

mount("#contact-intro", renderContactIntro());
mount("#contact", renderContact());
initContactForm(); 

mount("#footer", renderFooter("../index.html"));