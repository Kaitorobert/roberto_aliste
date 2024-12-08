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
    const resultsContainer = document.getElementById("results-container-packages");
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
