// ===== Votre numéro WhatsApp (format international, sans + ni espaces) =====
const WHATSAPP_NUMBER = "212600000000";
const DEFAULT_MESSAGE = "Bonjour, je souhaite des informations sur vos offres TV et VOD.";

function waLink(message) {
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}
function openInNewTab(el) { el.target = "_blank"; el.rel = "noopener"; }

// Liens WhatsApp généraux
document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.href = waLink(DEFAULT_MESSAGE);
  openInNewTab(el);
});

// Boutons des offres : ouvrent WhatsApp avec l'offre choisie
document.querySelectorAll("[data-plan]").forEach((el) => {
  el.href = waLink("Bonjour, je souhaite m'abonner à l'offre " + el.dataset.plan + ".");
  openInNewTab(el);
});

// Flèches des rangées
document.querySelectorAll(".row").forEach((row) => {
  const track = row.querySelector(".row__track");
  row.querySelectorAll(".arrow").forEach((btn) => {
    btn.addEventListener("click", () => {
      track.scrollBy({ left: Number(btn.dataset.dir) * track.clientWidth * 0.8, behavior: "smooth" });
    });
  });
});

// En-tête opaque au défilement
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll);
onScroll();

// Menu mobile
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Année du pied de page
document.getElementById("year").textContent = new Date().getFullYear();
