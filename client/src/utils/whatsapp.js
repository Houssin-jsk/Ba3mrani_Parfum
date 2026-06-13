export const WHATSAPP_NUMBER = "212605953279";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
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
