import { ArrowIcon } from "./Icons";

export default function ProductShowcase({ t }) {
  return (
    <section className="section showcase">
      <div className="container showcase-shell" data-reveal>
        <div className="showcase-image">
          <img
            src="/generated/Prada/hero-02.png"
            alt={t.showcase.imageAlt}
            loading="lazy"
          />
        </div>
        <div className="showcase-copy">
          <div className="eyebrow">{t.showcase.eyebrow}</div>
          <h2>{t.showcase.title}</h2>
          <p>{t.showcase.text}</p>
          <a className="text-link" href="#catalogue">
            {t.showcase.link} <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
