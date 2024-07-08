const digimonContainer = document.getElementById('digimon-container');

async function fetchDigimon() {
  try {
    const response = await fetch('https://digimon-api.vercel.app/api/digimon');
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const digimonData = await response.json();
    displayDigimon(digimonData);
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    displayError('Error al cargar los Digimon. Por favor, inténtalo de nuevo más tarde.');
  }
}

function displayDigimon(digimon) {
    // ... (código anterior igual)

    digimon.forEach((digimon, index) => {
        let levelText = digimon.level; // Inicializamos con el nivel original

        // Reemplazamos los niveles específicos que no siguen la regla
        if (levelText === "In Training" || levelText === "Training") {
            levelText = "Básico";
        } else if (levelText === "Fresh") {
            levelText = "Bebé";
        }
       

        const digimonType = getDigimonType(digimon.name);
        const cardHTML = `
            <div class="digimon-card ${digimonType}">
                <img src="${digimon.img}" alt="${digimon.name}">
                <h2>${digimon.name}</h2>
                <p>Level: ${levelText}</p>
                <button class="details-button" data-name="${digimon.name}">Ver detalles</button>
            </div>
        `;
        digimonContainer.innerHTML += cardHTML;
    });

  // Event listeners para los botones "Ver detalles"
  const detailsButtons = document.querySelectorAll('.details-button');
  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const digimonName = button.dataset.name;
      // Aquí puedes implementar la lógica para mostrar los detalles
      alert(`Detalles de ${digimonName}`); // Ejemplo simple
    });
  });
}

function getDigimonType(digimonName) {
  const nameLower = digimonName.toLowerCase();
  if (nameLower.includes("vaccine")) return "Vaccine";
  if (nameLower.includes("data")) return "Data";
  if (nameLower.includes("virus")) return "Virus";
  return "Unknown"; 
}

// Función para mostrar errores
function displayError(message) {
  digimonContainer.innerHTML = `<p class="error-message">${message}</p>`;
}

fetchDigimon();
