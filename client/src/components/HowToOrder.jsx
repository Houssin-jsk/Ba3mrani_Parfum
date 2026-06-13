export default function HowToOrder({ t }) {
  return (
    <section className="section order-section" id="commander">
      <div className="container">
        <div className="center-heading" data-reveal>
          <div className="eyebrow">{t.order.eyebrow}</div>
          <h2>{t.order.title}</h2>
          <p>{t.order.description}</p>
        </div>
        <div className="steps" data-reveal>
          {t.order.steps.map(([title, text], index) => (
            <article className="step" key={title}>
              <div className="step-number">0{index + 1}</div>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
