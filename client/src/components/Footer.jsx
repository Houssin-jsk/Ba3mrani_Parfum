export default function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="footer-arc" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/Logo/logo.png" alt="" />
          <div>
            <strong>BAAMRANI PARFUM</strong>
            <p>{t.footer.tagline}</p>
          </div>
        </div>
        <nav aria-label="Navigation de pied de page">
          <a href="#accueil">{t.nav.home}</a>
          <a href="#catalogue">{t.footer.collection}</a>
          <a href="#commander">{t.nav.order}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <p className="copyright">
          © {new Date().getFullYear()} Baamrani Parfum. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
