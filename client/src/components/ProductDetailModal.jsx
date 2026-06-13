import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  WhatsAppIcon,
} from "./Icons";
import { orderPerfume } from "../utils/whatsapp";

const allowedGeneratedGalleryFiles = new Set([
  "catalog-angle-left.png",
  "catalog-angle-right.png",
]);

export default function ProductDetailModal({
  product,
  language,
  t,
  onClose,
  onPrevious,
  onNext,
}) {
  const closeButtonRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [unavailableImages, setUnavailableImages] = useState([]);

  const galleryImages = useMemo(() => {
    if (!product) return [];

    const generatedAngles = (product.generatedImages?.gallery ?? [])
      .filter((src) => {
        const fileName = src?.split("/").pop()?.toLowerCase();
        return src && allowedGeneratedGalleryFiles.has(fileName);
      })
      .map((src) => ({
        src,
        alt: `${product.name} ${t.modal.galleryView}`,
      }));

    return [
      { src: product.image, alt: `${t.modal.imageAlt} ${product.name}` },
      {
        src: product.referenceImage,
        alt: `${t.modal.referenceAlt} ${product.inspiredBy}`,
      },
      ...generatedAngles,
    ].filter(({ src }) => src).slice(0, 4);
  }, [product, t]);

  const availableImages = galleryImages.filter(
    ({ src }) => !unavailableImages.includes(src),
  );
  const activeImage = availableImages[selectedImage] ?? availableImages[0];

  useEffect(() => {
    setSelectedImage(0);
    setUnavailableImages([]);
  }, [product]);

  useEffect(() => {
    if (selectedImage >= availableImages.length) setSelectedImage(0);
  }, [availableImages.length, selectedImage]);

  useEffect(() => {
    if (!product) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  function markImageUnavailable(src) {
    setUnavailableImages((current) =>
      current.includes(src) ? current : [...current, src],
    );
  }

  function moveGallery(direction) {
    setSelectedImage((current) => {
      if (availableImages.length < 2) return 0;
      return (current + direction + availableImages.length) % availableImages.length;
    });
  }

  useEffect(() => {
    if (!product) return undefined;

    function handleGalleryKeys(event) {
      if (event.key === "ArrowLeft") moveGallery(language === "ar" ? 1 : -1);
      if (event.key === "ArrowRight") moveGallery(language === "ar" ? -1 : 1);
    }

    window.addEventListener("keydown", handleGalleryKeys);
    return () => window.removeEventListener("keydown", handleGalleryKeys);
  }, [product, language, availableImages.length]);

  if (!product) return null;

  const description =
    language === "ar"
      ? product.shortDescriptionAr
      : product.shortDescriptionFr;
  const notes = language === "ar" ? product.notesAr : product.notesFr;

  return (
    <div
      className="product-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        style={{ "--accent": product.accent }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={t.modal.close}
          ref={closeButtonRef}
        >
          <span />
          <span />
        </button>

        <div className="modal-product-visual">
          <span className="modal-index">
            BAAMRANI · {String(product.id).padStart(2, "0")}
          </span>
          <div className="modal-halo" />
          <div className="modal-gallery">
            <div className="modal-main-image">
              {activeImage && (
                <img
                  key={activeImage.src}
                  className="modal-bottle"
                  src={activeImage.src}
                  alt={activeImage.alt}
                  onError={() => markImageUnavailable(activeImage.src)}
                />
              )}
              {availableImages.length > 1 && (
                <>
                  <button
                    className="gallery-arrow gallery-arrow-previous"
                    type="button"
                    onClick={() => moveGallery(-1)}
                    aria-label={t.modal.previousImage}
                  >
                    <ChevronLeftIcon />
                  </button>
                  <button
                    className="gallery-arrow gallery-arrow-next"
                    type="button"
                    onClick={() => moveGallery(1)}
                    aria-label={t.modal.nextImage}
                  >
                    <ChevronRightIcon />
                  </button>
                  <span className="gallery-counter">
                    {selectedImage + 1} / {availableImages.length}
                  </span>
                </>
              )}
            </div>
            <div className="modal-thumbnails" aria-label={t.modal.gallery}>
              {availableImages.map((image, index) => (
                <button
                  className={selectedImage === index ? "is-active" : ""}
                  key={image.src}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  aria-label={`${t.modal.showImage} ${index + 1}`}
                  aria-pressed={selectedImage === index}
                >
                  <img
                    src={image.src}
                    alt=""
                    onError={() => markImageUnavailable(image.src)}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-product-info">
          <p className="modal-inspired">
            {t.modal.inspired} {product.inspiredBy}
          </p>
          <h2 id="product-modal-title">{product.name}</h2>
          <p className="modal-description">{description}</p>

          <div className="modal-notes">
            <span>{t.modal.notes}</span>
            <div>
              {notes.map((note) => (
                <strong key={note}>{note}</strong>
              ))}
            </div>
          </div>

          <div className="modal-order">
            <p>{t.modal.sizes}</p>
            <div className="modal-options">
              {product.options.map((option) => (
                <button
                  key={option.size}
                  onClick={() =>
                    orderPerfume(product.name, option.size, option.price)
                  }
                >
                  <span>{option.size}</span>
                  <strong>{option.price} DH</strong>
                  <span className="modal-order-label">
                    <WhatsAppIcon /> {t.modal.order}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="modal-navigation">
            <button onClick={onPrevious} aria-label={t.modal.previous}>
              <span className="nav-arrow previous">
                <ArrowIcon />
              </span>
              {t.modal.previous}
            </button>
            <button onClick={onNext} aria-label={t.modal.next}>
              {t.modal.next}
              <span className="nav-arrow">
                <ArrowIcon />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
