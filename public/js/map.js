// Définir les coordonnées géographiques pour les 3 points
const point1 = [48.4734, 2.3488];
const point2 = [48.8634, 2.3588];
const point3 = [49.0734, 2.3688];

const map = L.map("map").setView([48.8534, 2.3488], 9);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18,
}).addTo(map);

// Ajouter un fond de carte à la carte
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Ajouter les 3 points à la carte avec des popups et des liens
const marker1 = L.marker(point1).addTo(map);
marker1.bindPopup(
    "<b>Chantier 1</b><br>Informations sur le chantier 1.<br><a href='#'>Chantier 1</a>"
);
marker1.on("click", function () {
    if (window.innerWidth > 991) {
        window.location.href = "html/chantier/chantier1.html";
    }
});

const marker2 = L.marker(point2).addTo(map);
marker2.bindPopup(
    "<b>Chantier 2</b><br>Informations sur le chantier 2.<br><a href='#'>Chantier 2</a>"
);
marker2.on("click", function () {
    if (window.innerWidth > 991) {
        window.location.href = "html/chantier/chantier1.html";
    }
});

const marker3 = L.marker(point3).addTo(map);
marker3.bindPopup(
    "<b>Chantier 3</b><br>Informations sur le chantier 3.<br><a href='#'>Chantier 3</a>"
);
marker3.on("click", function () {
    if (window.innerWidth > 991) {
        window.location.href = "html/chantier/chantier3.html";
    }
});

// Afficher le popup au survol de la souris
marker1.on("mouseover", function () {
    this.openPopup();
});
marker2.on("mouseover", function () {
    this.openPopup();
});
marker3.on("mouseover", function () {
    this.openPopup();
});
