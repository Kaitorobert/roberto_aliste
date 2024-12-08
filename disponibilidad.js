document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar una notificación de oferta especial
    function mostrarOfertaEspecial() {
        const ofertaEspecial = "¡Oferta Especial! Descuento del 20% en viajes a París por tiempo limitado.";
        alert(ofertaEspecial);  // Muestra la oferta especial en una alerta
    }

    // Función para actualizar la disponibilidad en tiempo real
    function actualizarDisponibilidad(paquete) {
        const disponibilidadMensaje = paquete.disponibilidad 
            ? `¡El paquete a ${paquete.destino} está disponible!`
            : `Lo sentimos, el paquete a ${paquete.destino} no está disponible.`;
        alert(disponibilidadMensaje);  // Muestra la disponibilidad en una alerta
    }

    // Evento que simula la llegada de una oferta especial después de 5 segundos
    setTimeout(mostrarOfertaEspecial, 5000);  // Muestra la oferta especial tras 5 segundos

    // Evento para verificar la disponibilidad de un paquete en tiempo real al cambiar el destino
    document.getElementById("destination").addEventListener("change", function() {
        const destinoSeleccionado = document.getElementById("destination").value.toLowerCase(); // Convertimos a minúsculas

        // Verificar la disponibilidad basada en el destino seleccionado
        if (destinoSeleccionado === "parís") {
            actualizarDisponibilidad(paquete1);   // Verifica la disponibilidad de París (basada en paquete1)
        } else if (destinoSeleccionado === "nueva york") {
            actualizarDisponibilidad(paquete2);   // Verifica la disponibilidad de Nueva York (basada en paquete2)
        } else if (destinoSeleccionado === "tokio") {
            actualizarDisponibilidad(paquete3);   // Verifica la disponibilidad de Tokio (basada en paquete3)
        } else {
            alert("Destino no encontrado.");
        }
    });

    // Función para convertir una fecha de YYYY-MM-DD a DD-MM-YYYY
    function formatDateToDDMMYYYY(dateString) {
        const [year, month, day] = dateString.split("-");
        return `${day}-${month}-${year}`;
    }

    // Evento para simular la actualización de disponibilidad según la fecha seleccionada
    document.getElementById("travel-date").addEventListener("change", function() {
        const fechaSeleccionada = document.getElementById("travel-date").value;

        // Verificamos que la fecha seleccionada no esté vacía y la convertimos a formato DD-MM-YYYY
        if (fechaSeleccionada) {
            const fechaFormateada = formatDateToDDMMYYYY(fechaSeleccionada);
            console.log(`Fecha seleccionada: ${fechaFormateada}`);
            // Actualizar disponibilidad en función de la fecha seleccionada (simulación)
            alert(`Has seleccionado la fecha: ${fechaFormateada}. Actualizando la disponibilidad...`);
        } else {
            alert("Por favor, selecciona una fecha válida.");
        }
    });
});

