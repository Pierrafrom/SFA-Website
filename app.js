// Importation des modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mailController = require('./controllers/mailController');

// Création de l'application Express
const app = express();

const PORT = process.env.PORT || 6300;

// Configuration du middleware body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuration du moteur de modèle EJS
app.set('view engine', 'ejs');

// Configuration du dossier des vues
app.set('views', path.join(__dirname, 'views'));

// Configuration des fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// afficher les requêtes dans la console
app.use((req, res, next,) => {
  console.log('Requête:', req.method, req.url);
  next();
});

// routes utilisant la méthode GET
// Route pour la page d'accueil
app.use('/', require('./routes/index'));
// Routes pour les autres pages
app.use('/about-SFA-EV', require('./routes/about-SFA-EV'));
app.use('/about-SFA-TP', require('./routes/about-SFA-TP'));
app.use('/contact', require('./routes/contact'));
app.use('/amenagementUrbain', require('./routes/amenagementUrbain'));
app.use('/grosAmenagement', require('./routes/grosAmenagement'));
app.use('/maconnerie', require('./routes/maconnerie'));
app.use('/reseaux', require('./routes/reseaux'));

// routes utilisant la méthode POST
app.post('/envoyer', (req, res) => {
  const data = req.body;
  mailController.envoyerMail(data, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi de l\'e-mail');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.send('E-mail envoyé avec succès');
    }
  });
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log('serveur démarré: http://localhost:' + PORT + '/');
});
