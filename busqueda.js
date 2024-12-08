// Array con los datos de prueba sobre destinos y fechas disponibles (en formato DD-MM-YYYY)
const travelOptions = [
    { destination: "París", date: "01-12-2024", available: true },
    { destination: "New York", date: "15-12-2024", available: true },
    { destination: "Tokio", date: "10-12-2024", available: false },
    { destination: "Londres", date: "05-12-2024", available: true }
];

// Función para convertir una fecha de YYYY-MM-DD a DD-MM-YYYY
function formatDateToDDMMYYYY(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
}

// Función que se ejecuta cuando se presiona el botón de "Buscar"
function search() {
    // Obtener los valores ingresados por el usuario
    const destinationInput = document.getElementById("destination").value.toLowerCase();
    const travelDateInput = document.getElementById("travel-date").value; // Este valor será YYYY-MM-DD

    // Convertimos el valor de la fecha seleccionada a formato DD-MM-YYYY
    const travelDateFormatted = formatDateToDDMMYYYY(travelDateInput);

    // Verificar si la fecha está vacía o no es válida
    if (!travelDateInput) {
        alert("Por favor, selecciona una fecha válida.");
        return;
    }

    // Contenedor donde se mostrarán los resultados
    const resultsContainer = document.getElementById("results-container-search");
    resultsContainer.innerHTML = ""; // Limpiar resultados anteriores

    // Filtrar los destinos basados en los valores ingresados
    const filteredOptions = travelOptions.filter(option => {
        return option.destination.toLowerCase().includes(destinationInput) && option.date === travelDateFormatted;
    });

    // Si no hay resultados coincidentes
    if (filteredOptions.length === 0) {
        const noResults = document.createElement("p");
        noResults.textContent = "No se encontraron resultados para su búsqueda.";
        resultsContainer.appendChild(noResults);
        return;
    }

    // Mostrar los resultados filtrados
    filteredOptions.forEach(option => {
        const result = document.createElement("div");
        result.className = "result-item";
        result.textContent = `${option.destination} - Fecha: ${option.date} - ${option.available ? 'Disponible' : 'No disponible'}`;
        resultsContainer.appendChild(result);
    });
}

// Asignar el evento "click" al botón de búsqueda
document.getElementById("search-btn").addEventListener("click", search);
