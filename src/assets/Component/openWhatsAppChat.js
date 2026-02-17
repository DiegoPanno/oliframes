export const phoneNumber = "+5492235639547"; // Reemplaza con tu número de teléfono
export const message = "¡Hola! vengo del sitio web, necesito más info por un servicio";


export const openWhatsAppChat = () => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'WhatsApp_Click', {
      event_category: 'Interacción',
      event_label: 'Botón WhatsApp Clickeado'
    });
  }
};