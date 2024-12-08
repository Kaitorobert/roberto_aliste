// Array con los datos de prueba sobre destinos y fechas disponibles
const travelOptions = [
    { destination: "París", date: "2024-12-01", available: true },
    { destination: "Nueva York", date: "2024-12-15", available: true },
    { destination: "Tokio", date: "2024-12-10", available: false },
    { destination: "Londres", date: "2024-12-05", available: true }
];

// Función que se ejecuta cuando se presiona el botón de "Buscar"
function search() {
    // Obtener los valores ingresados por el usuario
    const destinationInput = document.getElementById("destination").value.toLowerCase();
    const travelDateInput = document.getElementById("travel-date").value;

    // Contenedor donde se mostrarán los resultados
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Limpiar resultados anteriores

    // Filtrar los destinos basados en los valores ingresados
    const filteredOptions = travelOptions.filter(option => {
        return option.destination.toLowerCase().includes(destinationInput) && option.date === travelDateInput;
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
// Definición del constructor de objetos para Paquete Turístico
function PaqueteTuristico(destino, precio, duracion, disponibilidad) {
    this.destino = destino;
    this.precio = precio;
    this.duracion = duracion;
    this.disponibilidad = disponibilidad;

    // Método para mostrar la información del paquete turístico
    this.mostrarInfo = function() {
        return `${this.destino} - ${this.duracion} días - Precio: $${this.precio} - ${this.disponibilidad ? 'Disponible' : 'No disponible'}`;
    };

    // Método para verificar la disponibilidad del paquete
    this.verificarDisponibilidad = function() {
        return this.disponibilidad ? "Este paquete está disponible." : "Este paquete no está disponible.";
    };
}

// Crear instancias de Paquetes Turísticos
const paquete1 = new PaqueteTuristico("París", 1500, 7, true);
const paquete2 = new PaqueteTuristico("Nueva York", 1200, 5, false);
const paquete3 = new PaqueteTuristico("Tokio", 1800, 10, true);

// Función para mostrar los paquetes turísticos en la página web
function mostrarPaquetes() {
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = ""; // Limpiar los resultados previos

    // Crear un array de los paquetes turísticos
    const paquetes = [paquete1, paquete2, paquete3];

    // Iterar sobre los paquetes y mostrar la información en la página web
    paquetes.forEach(paquete => {
        const paqueteElemento = document.createElement("div");
        paqueteElemento.className = "paquete-item";
        paqueteElemento.textContent = paquete.mostrarInfo();
        resultsContainer.appendChild(paqueteElemento);
    });
}

// Llamar a la función para mostrar los paquetes cuando la página carga
document.addEventListener("DOMContentLoaded", mostrarPaquetes);
// Simulación de la disponibilidad de paquetes y notificación de ofertas especiales

// Función para mostrar una notificación de oferta especial
function mostrarOfertaEspecial() {
    const ofertaEspecial = "¡Oferta Especial! Descuento del 20% en viajes a París por tiempo limitado.";
    alert(ofertaEspecial);
}

// Función para actualizar la disponibilidad en tiempo real
function actualizarDisponibilidad(paquete) {
    const disponibilidadMensaje = paquete.disponibilidad 
        ? `¡El paquete a ${paquete.destino} está disponible!`
        : `Lo sentimos, el paquete a ${paquete.destino} no está disponible.`;
    alert(disponibilidadMensaje);
}

// Evento que simula la llegada de una oferta especial después de 5 segundos
setTimeout(mostrarOfertaEspecial, 5000); // Muestra la oferta especial tras 5 segundos

// Evento para verificar la disponibilidad de un paquete en tiempo real al hacer clic en el botón
document.getElementById("destination").addEventListener("change", function() {
    const destinoSeleccionado = document.getElementById("destination").value;

    // Ejemplo de actualización de disponibilidad
    if (destinoSeleccionado === "París") {
        actualizarDisponibilidad(paquete1);
    } else if (destinoSeleccionado === "Nueva York") {
        actualizarDisponibilidad(paquete2);
    } else if (destinoSeleccionado === "Tokio") {
        actualizarDisponibilidad(paquete3);
    }
});

// Simulación de actualización de disponibilidad de un paquete en tiempo real
document.getElementById("travel-date").addEventListener("change", function() {
    const fechaSeleccionada = document.getElementById("travel-date").value;

    // Actualizar disponibilidad en función de la fecha seleccionada (simulado)
    alert(`Has seleccionado la fecha: ${fechaSeleccionada}. Actualizando la disponibilidad...`);
    // Lógica de actualización en tiempo real podría agregarse aquí
});
