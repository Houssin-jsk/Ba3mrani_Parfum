import { ArrowIcon } from "./Icons";
import { orderPerfume } from "../utils/whatsapp";

export default function ProductCard({ product, index, onOpen, t }) {
  const lowestPrice = Math.min(...product.options.map(({ price }) => price));

  return (
    <article
      className="product-card"
      style={{ "--accent": product.accent, "--delay": `${index * 70}ms` }}
      data-reveal
      onClick={onOpen}
    >
      <div className="product-index">0{index + 1}</div>
      <div className="product-image">
        <div className="product-halo" />
        <img src={product.image} alt={`Parfum ${product.name}`} loading="lazy" />
      </div>
      <div className="product-content">
        <p className="inspired">{t.catalogue.inspired} {product.inspiredBy}</p>
        <h3>{product.name}</h3>
        <div className="product-price-preview">
          <span>{t.catalogue.from}</span>
          <strong>{lowestPrice} DH</strong>
        </div>
        <button
          className="details-button"
          onClick={(event) => {
            event.stopPropagation();
            onOpen();
          }}
        >
          {t.catalogue.details} <ArrowIcon />
        </button>
        <p className="quick-order-label">{t.catalogue.quickOrder}</p>
        <div className="product-options">
          {product.options.map((option) => (
            <button
              key={option.size}
              onClick={(event) => {
                event.stopPropagation();
                orderPerfume(product.name, option.size, option.price)
              }}
            >
              <span>{option.size}</span>
              <strong>{option.price} DH</strong>
              <ArrowIcon />
            </button>
          ))}
        </div>
      </div>
    </article>
  );
}
