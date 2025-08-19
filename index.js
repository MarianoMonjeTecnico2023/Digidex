const digimonContainer = document.getElementById('digimon-container');

// Listas de Digimon por tipo
const vaccineDigimon = ["Koromon", "Tsunomon", "Yokomon", "Motimon", "Tanemon", "Bukamon", "Tokomon", "Agumon","WereGarurumon", "Gabumon", "Biyomon", "Tentomon", "Palmon", "Gomamon", "Patamon", "Angemon", "Whamon", "Frigimon", "Centarumon", "Elecmon", "Botamon", "Punimon", "Poyomon", "Yuramon", "Nyaromon", "Salamon", "Chuumon", "Kokuwamon", "SnowAgumon", "Piximon", "Wizardmon", "Lillymon", "Floramon", "Cherrymon", "Muchomon", "Piddomon", "Mushroomon", "Blossomon", "Jijimon", "Babamon", "Kiwimon", "Hanumon", "Syakomon", "Penguinmon", "MarineAngemon","Angewomon","Snimon","MegaKabuterimon","MagnaAngemon","WarGreymon","Parrotmon","HerculesKabuterimon","Phoenixmon","Goldramon","Armadillomon","Wormmon","Flamedramon","Raidramon","Magnamon","Sethmon","Submarimon","Bucchiemon","Pegasusmon","Nefertimon","ExVeemon","Ankylomon","Paildramon","Shakkoumon","Imperialdramon","Valkyrimon","Vikemon","Seraphimon","Omnimon"];
const dataDigimon = ["Kuwagamon", "Greymon", "Shellmon", "Garurumon", "Seadramon", "Monochromon", "Birdramon", "Meramon", "Kabuterimon", "Andromon", "Togemon", "Numemon", "Monzaemon", "Ikkakumon", "Unimon", "Leomon", "Mojyamon", "Sukamon", "Gazimon", "Kokatorimon", "Tyrannomon", "Datamon", "MetalGreymon", "Digitamamon", "Vegiemon", "Otamamon", "ShogunGekomon", "Flymon", "Gatomon", "Nanimon", "Devidramon", "Dokugumon", "Mammothmon", "Gesomon", "Raremon", "Mamemon", "Veedramon", "AeroVeedramon", "Betamon", "Guardromon", "Psychemon", "ModokiBetamon", "Saberdramon", "Icemon", "Airdramon", "MetalTyrannomon", "Akatorimon", "Geremon", "Vermilimon", "Meteormon", "Thunderballmon", "Gigadramon", "Cyberdramon", "MetalGarurumon","Drimogemon","SkullMeramon","MetalSeadramon","Scorpiomon","Divermon","Deramon","SaberLeomon","Candlemon","FlareRizamon","Rosemon","Hawkmon","Halsemon","Shurimon","Toucanmon","Stegomon","Stingmon","Aquillamon","Silphymon","Azulongmon"];
const virusDigimon = ["Ogremon", "Devimon", "Bakemon", "SkullGreymon", "DemiDevimon",  "Pagumon", "DarkTyrannomon", "Gizamon", "Zudomon", "MegaSeadramon", "Phantomon", "Pumpkinmon", "Gotsumon", "Mekanorimon", "Tankmon", "Hagurumon", "WaruMonzaemon", "LadyDevimon", "Vilemon", "Apocalymon", "Kunemon", "Musyamon", "Starmon", "Revolvermon", "Plesiomon", "Megadramon", "BlueMeramon", "Magnadramon", "Gorillamon", "Boltmon", "ExTyrannomon", "SkullSatamon", "Milleniummon", "Daemon", "KingEtemon","Piedmon","Puppetmon","Etemon","Myotismon","Gekomon","Tuskmon","VenomMyotismon","Machinedramon","Garbagemon","MetalEtemon","RedVegiemon","PlatinumSukamon","Tsukaimon","Soulmon","Dinobeemon","GranKuwagamon","Zhuqiaomon"];

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
  digimonContainer.innerHTML = '';

  if (!digimon || digimon.length === 0) {
    displayError('No se encontraron Digimon.');
    return;
  }

  digimon.forEach((digimon, index) => {
    let digimonType = "Unknown";

    // Determinar el tipo del Digimon
    if (vaccineDigimon.includes(digimon.name)) {
      digimonType = "Vacuna";
    } else if (dataDigimon.includes(digimon.name)) {
      digimonType = "Dato";
    } else if (virusDigimon.includes(digimon.name)) {
      digimonType = "Virus";
    }

    // Ajustar el nivel si es necesario
    const levelText = digimon.level === "In Training" || digimon.level === "Training" ? "Básico" : digimon.level === "Fresh" ? "Bebé" : digimon.level;

    const cardHTML = `
      <div class="digimon-card ${digimonType}">
        <img src="${digimon.img}" alt="${digimon.name}">
        <h2>${digimon.name}</h2>
        <p>Level: ${levelText}</p>
        <button class="details-button" data-name="${digimon.name}" data-type="${digimonType}">Ver detalles</button>
      </div>
    `;
    digimonContainer.innerHTML += cardHTML;
  });

  // Event listeners para los botones "Ver detalles"
  const detailsButtons = document.querySelectorAll('.details-button');
  detailsButtons.forEach(button => {
    button.addEventListener('click', () => {
      const digimonName = button.dataset.name;
      const digimonType = button.dataset.type; // Obtener el tipo del botón
      showDigimonDetails(digimonName, digimonType);
    });
  });
}

function showDigimonDetails(digimonName, digimonType) { 
  alert(`${digimonName} es un Digimon de tipo ${digimonType}`);
}

// Función para mostrar errores
function displayError(message) {
  digimonContainer.innerHTML = `<p class="error-message">${message}</p>`;
}

fetchDigimon();
