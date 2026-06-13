import { WhatsAppIcon } from "./Icons";
import { openGeneralWhatsApp } from "../utils/whatsapp";

export default function FloatingWhatsApp({ t }) {
  return (
    <button
      className="floating-whatsapp"
      onClick={openGeneralWhatsApp}
      aria-label={t.floating}
    >
      <WhatsAppIcon />
      <span>{t.nav.whatsapp}</span>
    </button>
  );
}
