import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetailModal from "./ProductDetailModal";

export default function Catalogue({ products, source, t, language }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedProduct =
    selectedIndex === null ? null : products[selectedIndex];

  function moveProduct(direction) {
    setSelectedIndex((current) => {
      if (current === null) return 0;
      return (current + direction + products.length) % products.length;
    });
  }

  return (
    <>
      <section className="section catalogue" id="catalogue">
        <div className="catalogue-orbit" />
        <div className="container">
          <div className="section-heading" data-reveal>
            <div>
              <div className="eyebrow">{t.catalogue.eyebrow}</div>
              <h2>{t.catalogue.title}</h2>
            </div>
            <p>{t.catalogue.intro}</p>
          </div>
          <div className="product-grid" data-product-source={source}>
            {products.map((product, index) => (
              <ProductCard
                product={product}
                index={index}
                key={product.slug}
                onOpen={() => setSelectedIndex(index)}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>
      <ProductDetailModal
        product={selectedProduct}
        language={language}
        t={t}
        onClose={() => setSelectedIndex(null)}
        onPrevious={() => moveProduct(-1)}
        onNext={() => moveProduct(1)}
      />
    </>
  );
}
