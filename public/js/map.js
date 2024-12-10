// Tableau de 15 coordonnées GPS pour des villages dans les Yvelines
const points = [
  [48.8666, 1.9837], // Mantes-la-Jolie
  [48.8, 2.1333], // Saint-Germain-en-Laye
  [48.8708, 2.0241], // Poissy
  [48.7857, 2.1191], // Versailles
  [48.7831, 1.9595], // Aubergenville
  [48.7917, 1.9275], // Epône
  [48.84, 1.9267], // Guerville
  [48.8583, 2.1283], // Louveciennes
  [48.8728, 1.8211], // Septeuil
  [48.7853, 2.0411], // Mareil-Marly
  [48.8347, 2.1067], // Chatou
  [48.8333, 1.8139], // Montfort-l'Amaury
  [48.8325, 1.7739], // Gambais
  [48.8025, 2.0856], // Le Vésinet
  [48.7961, 2.08], // Croissy-sur-Seine
];

// Initialiser la carte avec une vue sur les Yvelines
const map = L.map("map").setView([48.8, 1.9833], 10);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18,
}).addTo(map);

// Fonction pour ajouter un marqueur pour chaque coordonnée du tableau
points.forEach((point, index) => {
  const marker = L.marker(point).addTo(map);
  marker.bindPopup(`<b>Chantier ${index + 1}</b><br>Chantier réalisé par SFA.`);

  // Ouvrir le popup au survol
  marker.on("mouseover", function () {
    this.openPopup();
  });

  // Rediriger lors du clic selon la taille de la fenêtre
  marker.on("click", function () {
    if (window.innerWidth > 991) {
      window.location.href = `html/chantier/chantier${index + 1}.html`;
    }
  });
});
