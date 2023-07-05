const nodemailer = require('nodemailer');
const fs = require('fs');

// Créer un transporteur SMTP réutilisable à l'aide des informations de connexion par défaut
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true pour 465, false pour les autres ports
    auth: {
        user: 'smtp.fro@gmail.com', // adresse e-mail de l'expéditeur
        pass: 'password' // mot de passe de l'expéditeur
    }
});

function envoyerMail(data, callback) {
    // Définir les options de l'e-mail
    const mailOptions = {
        from: data.email,
        to: 'pierrefromont@outlook.fr',
        subject: data.sujet,
        text: '\n---------------------------------------------------------------------------------------------\n' + 
        'Ce message a été envoyé depuis le site web de l\'entreprise' + 
        '\n---------------------------------------------------------------------------------------------\n\n' +
        data.message +
        '\n\n' + data.nom + ' ' + data.prenom + '\n' + data.email,
        replyTo: data.email // Permettre à l'utilisateur de répondre directement à l'e-mail
    };

    /*
    // Ajouter une pièce jointe si le champ fichier n'est pas vide
    if (data.fichier && data.fichier.path) {
        const fichier = {
            filename: data.fichier.name,
            content: fs.createReadStream(data.fichier.path)
        };
        mailOptions.attachments = [fichier];
    } else {
        console.error('Le fichier est manquant ou le chemin d\'accès est incorrect');
    }
    */

    // Envoyer l'e-mail
    transporter.sendMail(mailOptions, callback);
}

module.exports = {
    envoyerMail
};