import { useEffect, useState } from "react";
import { MenuIcon, WhatsAppIcon } from "./Icons";
import { openGeneralWhatsApp } from "../utils/whatsapp";

export default function Header({ t, language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  function chooseLanguage(nextLanguage) {
    setLanguage(nextLanguage);
    setMenuOpen(false);
  }

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a className="brand" href="#accueil" onClick={() => setMenuOpen(false)}>
          <img src="/Logo/logo.png" alt="Baamrani Parfum" />
          <span>
            <strong>BAAMRANI</strong>
            <small>PARFUM</small>
          </span>
        </a>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
          {[
            [t.nav.home, "accueil"],
            [t.nav.catalogue, "catalogue"],
            [t.nav.why, "avantages"],
            [t.nav.order, "commander"],
            [t.nav.contact, "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <div className="language-switcher" aria-label="Language">
            <button
              className={language === "fr" ? "is-active" : ""}
              onClick={() => chooseLanguage("fr")}
              aria-pressed={language === "fr"}
            >
              FR
            </button>
            <span />
            <button
              className={language === "ar" ? "is-active" : ""}
              onClick={() => chooseLanguage("ar")}
              aria-pressed={language === "ar"}
            >
              AR
            </button>
          </div>
          <button
            className="button button-gold nav-cta"
            onClick={() => {
              setMenuOpen(false);
              openGeneralWhatsApp();
            }}
          >
            <WhatsAppIcon />
            {t.nav.whatsapp}
          </button>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>
    </header>
  );
}
