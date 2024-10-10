// Cargar los datos del JSON
let augmentsData = [];

// Función para cargar el archivo JSON
async function fetchAugments() {
    const response = await fetch('unique_augments_data.json');
    const data = await response.json();
    augmentsData = data;
    showRandomAugment();
}

// Variables para almacenar el aumento actual y su avg placement
let currentAugment = null;
let currentAvgPlacement = null;

// Función para mostrar un aumento aleatorio
function showRandomAugment() {
    const randomIndex = Math.floor(Math.random() * augmentsData.length);
    currentAugment = augmentsData[randomIndex];
    currentAvgPlacement = parseFloat(currentAugment.avg_placement);

    // Mostrar el aumento y la imagen en la página
    document.getElementById('augment-name').textContent = currentAugment.name;
    document.getElementById('augment-image').src = currentAugment.image_url;

    // Limpiar el input y feedback
    document.getElementById('avg-placement-input').value = '';
    document.getElementById('feedback').textContent = '';
}

// Función para verificar el valor del avg placement ingresado
function checkPlacement() {
    const userInput = parseFloat(document.getElementById('avg-placement-input').value);
    
    if (isNaN(userInput)) {
        document.getElementById('feedback').textContent = 'Please, select a valid number.';
        return;
    }

    if (userInput < currentAvgPlacement) {
        document.getElementById('feedback').textContent = 'Avg placement higher.';
    } else if (userInput > currentAvgPlacement) {
        document.getElementById('feedback').textContent = 'Avg placement lower.';
    } else {
        document.getElementById('feedback').textContent = 'Awesome! Try with a new one!.';
        // Mostrar otro aumento tras acertar
        setTimeout(showRandomAugment, 2000);
    }
}

// Cargar los datos cuando la página cargue
window.onload = fetchAugments;
