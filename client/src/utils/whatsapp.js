export const WHATSAPP_NUMBER = "212605953279";
let whatsappNumber = WHATSAPP_NUMBER;

export function configureWhatsAppNumber(value) {
  if (typeof value === "string" && /^\d{8,15}$/.test(value)) {
    whatsappNumber = value;
  }
}

function openWhatsApp(message) {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function orderPerfume(productName, size, price) {
  openWhatsApp(
    `Salam, bghit ncommandi parfum ${productName} ${size} b ${price} DH. Wach mazal disponible?`,
  );
}

export function openGeneralWhatsApp() {
  openWhatsApp("Salam, bghit nswel 3la parfums dyalkom.");
}
