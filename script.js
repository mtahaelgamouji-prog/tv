// ===== Votre numéro WhatsApp (format international, sans + ni espaces) =====
const WHATSAPP_NUMBER = "212600000000";
const DEFAULT_MESSAGE = "Bonjour, je souhaite des informations sur vos offres TV et VOD.";

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

// Liens WhatsApp généraux
document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.href = waLink(DEFAULT_MESSAGE);
  el.target = "_blank";
  el.rel = "noopener";
});

// Boutons "Commander" des offres : ouvre WhatsApp avec l'offre choisie
document.querySelectorAll("[data-plan]").forEach((el) => {
  el.href = waLink("Bonjour, je souhaite commander l'offre " + el.dataset.plan + ".");
  el.target = "_blank";
  el.rel = "noopener";
});

// Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();
