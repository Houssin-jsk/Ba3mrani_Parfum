export default function Advantages({ t }) {
  return (
    <section className="section advantages" id="avantages">
      <div className="container">
        <div className="section-heading" data-reveal>
          <div>
            <div className="eyebrow">{t.advantages.eyebrow}</div>
            <h2>{t.advantages.title}</h2>
          </div>
          <p>{t.advantages.intro}</p>
        </div>
        <div className="advantages-grid" data-reveal>
          {t.advantages.items.map(([title, text], index) => (
            <article className="advantage-card" key={title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="corner-mark" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
