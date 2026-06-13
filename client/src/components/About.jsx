export default function About({ t }) {
  return (
    <section className="section about" id="apropos">
      <div className="container about-grid">
        <div className="about-intro" data-reveal>
          <div>
            <div className="eyebrow">{t.about.eyebrow}</div>
            <h2>{t.about.title}</h2>
          </div>
          <div className="about-visual" aria-hidden="true">
            <img src="/generated/AmiratAlArab/hero-02.png" alt="" loading="lazy" />
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <p className="about-lead">{t.about.lead}</p>
          <p>{t.about.text}</p>
          <div className="gold-rule" />
          <p className="signature">{t.about.signature}</p>
        </div>
      </div>
    </section>
  );
}
