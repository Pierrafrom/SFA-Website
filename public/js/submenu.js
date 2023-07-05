// Récupération des éléments de sous-menu par ID
const submenu1 = document.getElementById('submenu-1');
const submenu2 = document.getElementById('submenu-2');
const submenu1Items = document.getElementById('submenu-1-items');
const submenu2Items = document.getElementById('submenu-2-items');

// Ajout d'un écouteur d'événement de clic pour chaque sous-menu
submenu1.addEventListener('click', () => {
    // Vérifier si le sous-menu est caché
    const isHidden = submenu1Items.classList.contains('hide');
    if (isHidden) {
        // Retirer la classe "hide" du sous-menu 1
        submenu1Items.classList.remove('hide');
        console.log('submenu1');
    } else {
        // Ajouter la classe "hide" au sous-menu 1
        submenu1Items.classList.add('hide');
    }
});

submenu2.addEventListener('click', () => {
    // Vérifier si le sous-menu est caché
    const isHidden = submenu2Items.classList.contains('hide');
    if (isHidden) {
        // Retirer la classe "hide" du sous-menu 2
        submenu2Items.classList.remove('hide');
        console.log('submenu2');
    } else {
        // Ajouter la classe "hide" au sous-menu 2
        submenu2Items.classList.add('hide');
    }
});
