import {
  ExternalLinkIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";
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
            href="https://www.instagram.com/ba3mrani_parfum"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">{t.contact.instagram}</span>
            <strong>@ba3mrani_parfum</strong>
            <span className="contact-link-icons">
              <InstagramIcon />
              <ExternalLinkIcon />
            </span>
          </a>
          <a
            className="contact-link"
            href="https://wa.me/212680975966"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">{t.contact.whatsapp}</span>
            <strong>+212 680-975966</strong>
            <span className="contact-link-icons">
              <PhoneIcon />
              <ExternalLinkIcon />
            </span>
          </a>
          <a
            className="contact-link"
            href={settings.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-link-label">{t.contact.facebook}</span>
            <strong>Baamrani Parfum</strong>
            <span className="contact-link-icons">
              <FacebookIcon />
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
