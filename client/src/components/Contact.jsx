import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { openGeneralWhatsApp } from "../utils/whatsapp";

export default function Contact({ t }) {
  return (
    <section className="section contact" id="contact">
      <div className="container contact-card" data-reveal>
        <div>
          <div className="eyebrow">{t.contact.eyebrow}</div>
          <h2>{t.contact.title}</h2>
        </div>
        <div className="contact-actions">
          <button className="button button-gold" onClick={openGeneralWhatsApp}>
            <WhatsAppIcon /> {t.contact.cta}
          </button>
          <a
            className="contact-link"
            href="https://instagram.com/ba3mrani_parfum"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.contact.instagram}</span>
            <strong>@ba3mrani_parfum</strong>
            <ArrowIcon />
          </a>
          <a className="contact-link" href="tel:+212605953279">
            <span>{t.contact.whatsapp}</span>
            <strong>+212 605 953 279</strong>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
