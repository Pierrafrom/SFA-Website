const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http"); // Package nécessaire

const app = express();

// Configuration middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

// Fichiers statiques
app.use(express.static(path.join(__dirname, "../public")));

// routes utilisant la méthode GET
// Route pour la page d'accueil
app.use("/", require("./routes/index"));
// Routes pour les autres pages
app.use("/about-SFA-EV", require("./routes/about-SFA-EV"));
app.use("/about-SFA-TP", require("./routes/about-SFA-TP"));
app.use("/contact", require("./routes/contact"));
app.use("/amenagementUrbain", require("./routes/amenagementUrbain"));
app.use("/grosAmenagement", require("./routes/grosAmenagement"));
app.use("/maconnerie", require("./routes/maconnerie"));
app.use("/reseaux", require("./routes/reseaux"));
app.use("/prestation", require("./routes/prestation"));
app.use("/voirie", require("./routes/voirie"));
app.use("/creationPaysageExt", require("./routes/creationPaysageExt"));
app.use(
  "/entretienAmenagementPaysage",
  require("./routes/entretienAmenagementPaysage")
);
app.use("/vegetalisation", require("./routes/vegetalisation"));
//app.use('/realisation', require('./routes/arrosage'));
app.use("/elagage", require("./routes/elagage"));
app.use("/cloturePortail", require("./routes/cloturePortail"));
app.use("/genieVegetalEcologique", require("./routes/genieVegetalEcologique"));
app.use("/arrosage", require("./routes/arrosage"));

// Exporter en tant que fonction serverless
module.exports = app;
module.exports.handler = serverless(app); // Ajoutez cette ligne
