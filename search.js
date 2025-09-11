// Chargement initial des animaux au démarrage de la page
window.addEventListener('DOMContentLoaded', loadAnimals);

// Soumission du formulaire avec filtres
document.querySelector('#search-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const type = document.querySelector('#type').value.toLowerCase();
    const region = document.querySelector('#region').value.toLowerCase();

    try {
        const response = await fetch('../data/animals.json'); // ajuste le chemin si besoin
        const data = await response.json();

        const filtered = data.filter(animal => {
            const matchType = type === '' || animal.type.toLowerCase() === type;
            const matchRegion = region === '' || animal.city.toLowerCase().includes(region);
            return matchType && matchRegion;
        });

        displayAnimals(filtered);
    } catch (error) {
        console.error('Erreur lors du filtrage des animaux :', error);
    }
});

// Fonction pour charger tous les animaux (sans filtre)
async function loadAnimals() {
    try {
        const response = await fetch('../data/animals.json'); // ajuste le chemin si besoin
        const data = await response.json();
        displayAnimals(data);
    } catch (error) {
        console.error('Erreur lors du chargement du JSON :', error);
    }
}

// Fonction d'affichage des cartes
function displayAnimals(animals) {
    const grid = document.querySelector('#animal-grid');
    grid.innerHTML = '';

    if (animals.length === 0) {
        grid.innerHTML = '<p>Aucun animal trouvé pour ces critères.</p>';
        return;
    }

    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
      <img src="${animal.imageUrl}" alt="${animal.name}">
      <div class="animal-info">
        <h3>${animal.name}</h3>
        <p><strong>Âge :</strong> ${animal.age}</p>
        <p><strong>Race :</strong> ${animal.breed}</p>
        <p><strong>Type :</strong> ${animal.type}</p>
        <p><strong>Ville :</strong> ${animal.city} (${animal.zipcode})</p>
        <p class="description">${animal.description}</p>
        <button>Programmer un moment</button>
      </div>
    `;
        grid.appendChild(card);
    });
}
