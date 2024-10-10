// Lista de aumentos con sus respectivos valores de avg placement
const augmentations = [
    { name: "Augmento 1", avgPlacement: 4.5 },
    { name: "Augmento 2", avgPlacement: 3.0 },
    { name: "Augmento 3", avgPlacement: 2.2 },
    { name: "Augmento 4", avgPlacement: 5.0 },
    { name: "Augmento 5", avgPlacement: 1.8 },
];

// Seleccionar un aumento aleatorio al cargar la página
let currentAug = augmentations[Math.floor(Math.random() * augmentations.length)];

document.getElementById("random-aug").innerText = currentAug.name;

const form = document.getElementById("guess-form");
const resultDiv = document.getElementById("result");
const newAugBtn = document.getElementById("new-aug-btn");

// Función para comprobar si el usuario ha adivinado correctamente
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const guess = parseFloat(document.getElementById("avg-placement").value);
    
    if (guess === currentAug.avgPlacement) {
        resultDiv.innerText = "¡Correcto!";
        resultDiv.classList.remove("hidden");
        newAugBtn.classList.remove("hidden");
    } else if (guess < currentAug.avgPlacement) {
        resultDiv.innerText = "Más alto!";
        resultDiv.classList.remove("hidden");
    } else {
        resultDiv.innerText = "Más bajo!";
        resultDiv.classList.remove("hidden");
    }
});

// Función para reiniciar con un nuevo aumento aleatorio
newAugBtn.addEventListener("click", function () {
    currentAug = augmentations[Math.floor(Math.random() * augmentations.length)];
    document.getElementById("random-aug").innerText = currentAug.name;
    resultDiv.classList.add("hidden");
    newAugBtn.classList.add("hidden");
    document.getElementById("avg-placement").value = '';
});
