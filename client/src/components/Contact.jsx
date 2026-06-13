import { ArrowIcon, FacebookIcon, WhatsAppIcon } from "./Icons";
import { openGeneralWhatsApp } from "../utils/whatsapp";

export default function Contact({ t, settings }) {
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
          <a className="contact-link" href="tel:+212680975966">
            <span>{t.contact.whatsapp}</span>
            <strong>+212 680-975966</strong>
            <ArrowIcon />
          </a>
          <a
            className="contact-link"
            href={settings.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{t.contact.facebook}</span>
            <strong>Baamrani Parfum</strong>
            <FacebookIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
