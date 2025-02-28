// Définition des pages sous forme d'un tableau
const pages = [
    { name: "Accueil", url: "main.html" },
    { name: "Semaine 1", url: "semaine_1.html" },
    { name: "Semaine 2", url: "semaine_2.html" },
];

// Sélectionne le conteneur du menu
const menuContainer = document.getElementById("menu");

// Génère dynamiquement les boutons du menu
pages.forEach(page => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    let link = document.createElement("a");
    link.href = page.url;
    link.textContent = page.name;

    menuItem.appendChild(link);
    menuContainer.appendChild(menuItem);
});
