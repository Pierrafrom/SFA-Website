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
        data.destinataire = 'fropierre8@gmail.com';
    }

    console.log('Données à envoyer:', data);

    clear();

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
            runSuccessAlert();
        })
        .catch(error => {
            console.error('Erreur:', error);
            runErrorAlert();
        });
});

function clear() {
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sujet').value = '';
    document.getElementById('message').value = '';
    document.getElementById('destinataire1').checked = false;
    document.getElementById('destinataire2').checked = false;
}

destinataire1.addEventListener('click', () => {
    destinataire2.checked = false;
});

destinataire2.addEventListener('click', () => {
    destinataire1.checked = false;
});

const alertElement = document.getElementById('alert');
const txt = document.getElementById('txt-alert');

function runSuccessAlert() {
    alertElement.classList.remove('hide');
    alertElement.classList.add('success');
    txt.innerHTML = 'Votre message a bien été envoyé !';
    setTimeout(() => {
        alertElement.classList.remove('success');
        alertElement.classList.add('hide');
    }, 5000);
}

function runErrorAlert() {
    alertElement.classList.remove('hide');
    alertElement.classList.add('error');
    txt.innerHTML = 'Une erreur est survenue, veuillez réessayer plus tard.';
    setTimeout(() => {
        alertElement.classList.remove('error');
        alertElement.classList.add('hide');
    }, 5000);
}
