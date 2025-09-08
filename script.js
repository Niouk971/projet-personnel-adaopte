document.querySelector('#search-button').addEventListener('click', (e) => {
    e.preventDefault();

    console.log('hellooooo');
});

// async function loadAnimals() {
//     try {
//         const response = await fetch('./data/animals.json');
//         const data = await response.json();
//         console.log(data[0].name);
//     } catch (error) {
//         console.error('Erreur lors du chargement du JSON :', error);
//     }
// }

// loadAnimals();
