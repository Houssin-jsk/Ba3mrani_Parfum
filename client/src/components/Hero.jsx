import { ArrowIcon, WhatsAppIcon } from "./Icons";
import { openGeneralWhatsApp } from "../utils/whatsapp";

export default function Hero({ t }) {
  return (
    <section className="hero section" id="accueil">
      <div className="hero-glow" />
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-animate">{t.hero.eyebrow}</div>
          <h1 className="hero-animate delay-1">
            {t.hero.title}
            <span>{t.hero.titleAccent}</span>
          </h1>
          <p className="hero-subtitle hero-animate delay-2">
            {t.hero.subtitle}
          </p>
          <p className="hero-description hero-animate delay-2">
            {t.hero.description}
          </p>
          <div className="hero-actions hero-animate delay-3">
            <a className="button button-gold" href="#catalogue">
              {t.hero.catalogueBtn} <ArrowIcon />
            </a>
            <button className="button button-ghost" onClick={openGeneralWhatsApp}>
              <WhatsAppIcon /> {t.hero.whatsappBtn}
            </button>
          </div>
          <div className="hero-metrics hero-animate delay-3">
            <div><strong>5</strong><span>{t.hero.signatures}</span></div>
            <div><strong>2</strong><span>{t.hero.formats}</span></div>
            <div><strong>24h</strong><span>{t.hero.response}</span></div>
          </div>
        </div>

        <div className="hero-visual hero-animate delay-2">
          <div className="hero-image-frame">
            <img
              src="/generated/Yara/hero-01.png"
              alt={t.hero.imageAlt}
            />
            <div className="hero-badge">
              <span>{t.hero.from}</span>
              <strong>29 DH</strong>
            </div>
          </div>
          <span className="vertical-label">BAAMRANI • PARFUM • MAROC</span>
        </div>
      </div>
      <a className="scroll-cue" href="#apropos" aria-label={t.hero.discover}>
        <span />
        {t.hero.discover}
      </a>
    </section>
  );
}
