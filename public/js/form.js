const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    const data = {
        nom: document.querySelector('#nom').value,
        prenom: document.querySelector('#prenom').value,
        email: document.querySelector('#email').value,
        sujet: document.querySelector('#sujet').value,
        message: document.querySelector('#message').value,
        // fichier: document.querySelector('#fichier').files[0] // Ajouter la propriété fichier
    };


    if (document.querySelector('#destinataire1').checked) {
        data.destinataire = 'pierrefromont@outlook.fr';
    } else if (document.querySelector('#destinataire2').checked) {
        data.destinataire = 'depuybaudethenri@gmail.com';
    }

    console.log('Données à envoyer:', data);

    // Envoyer les données du formulaire vers le serveur Node.js
    fetch('/envoyer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau');
            }
            if (response.headers.get('content-type').indexOf('application/json') === -1) {
                throw new Error('Réponse invalide du serveur');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});