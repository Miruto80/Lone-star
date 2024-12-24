document.addEventListener("DOMContentLoaded", carga);
function carga() {
    let b = document.getElementById("bimagen");
    let B = document.getElementById("Barra");
    let h1 = document.getElementById("Titulo");
    let body = document.getElementById("body");
    let cartas = document.querySelectorAll(".car");

    // Función para cambiar a "Cleaning"
	
    // Evento para alternar entre modos
    b.onchange = function () {
		if (this.checked) {
			cambiarlimpieza();
        } else {
			cambiarmudanza();
        }
    };

function cambiarlimpieza() {
	B.style.background = "#00b2b7";
	h1.textContent = "Cleaning with Care";
	h1.style.color = "white";
	body.style.background = "#19e6e8";
	cartas.forEach(carta => {
		carta.style.display = "none"; // Oculta todas las cartas
		if (carta.id === "Cleaningcard") {
			carta.style.display = "block"; // Muestra solo la carta de limpieza
		}
	});
}

function cambiarmudanza(){
	B.style.background = "#C3B6A7";
	h1.textContent = "Moving Made Simple";
	h1.style.color = "#4A3C31";
	body.style.background = "#dcd5cc";
	cartas.forEach(carta => {
		carta.style.display = "block"; // Muestra todas las cartas
		if (carta.id === "Cleaningcard") {
			carta.style.display = "none"; // Oculta la carta de limpieza
		}
	});
}

}

function prevImage(button) {
    const carDiv = button.closest('.car');
    const images = carDiv.querySelectorAll('.car-images img');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

    images[currentIndex].style.display = 'none';
    if (currentIndex === 0) {
        images[images.length - 1].style.display = 'block';
    } else {
        images[currentIndex - 1].style.display = 'block';
    }
}

function nextImage(button) {
    const carDiv = button.closest('.car');
    const images = carDiv.querySelectorAll('.car-images img');
    let currentIndex = Array.from(images).findIndex(img => img.style.display === 'block');

    images[currentIndex].style.display = 'none';
    if (currentIndex === images.length - 1) {
        images[0].style.display = 'block';
    } else {
        images[currentIndex + 1].style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const carDivs = document.querySelectorAll('.car');

    carDivs.forEach(carDiv => {
        const images = carDiv.querySelectorAll('.car-images img');
        images.forEach((img, index) => {
            if (index === 0) {
                img.style.display = 'block'; // Muestra solo la primera imagen
            } else {
                img.style.display = 'none'; // Oculta todas las demás imágenes
            }
        });
    });
});