document.addEventListener("DOMContentLoaded", carga);
function carga() {
    let b = document.getElementById("bimagen");
    let B = document.getElementById("Barra");
    let h1 = document.getElementById("Titulo");
    let body = document.getElementById("body");
    let cartas = document.querySelectorAll(".car,.we-do"); //Para ahorrar tiempo agregue las dos clases en un solo queryselectorAll pero usualmente usa una
    const processSteps = document.getElementById("process-steps");
    const processTitle = document.getElementById("process-title");
	
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
	body.style.background = "#6af6f6";
	cartas.forEach(carta => {
		if (carta.classList.contains("cleaning-card") || carta.classList.contains("cleaning-service")) {
            carta.classList.remove("hidden");
        } else {
            carta.classList.add("hidden");
        }
	});
    processTitle.textContent="Our Cleaning process";
    processSteps.innerHTML = `
        <div class="step">
            <span class="step-number">1.</span>
            <p class="step-description">Waste removal: Collect and dispose of trash and unnecessary items.</p>
        </div>
        <div class="step">
            <span class="step-number">2.</span>
            <p class="step-description">Initial cleaning: Remove dust, dirt, or visible debris using appropriate tools.</p>
        </div>
        <div class="step">
            <span class="step-number">3.</span>
            <p class="step-description">Product application: Apply specific detergents or cleaners according to the surface.</p>
        </div>
        <div class="step">
            <span class="step-number">4.</span>
            <p class="step-description">Disinfection: Use disinfectants to eliminate microorganisms.</p>
        </div>
        <div class="step">
            <span class="step-number">5.</span>
            <p class="step-description">Rinsing or drying: Remove product residues and dry surfaces as needed.</p>
        </div>
        <div class="step">
            <span class="step-number">6.</span>
            <p class="step-description">Final inspection: Ensure everything is clean and in optimal condition.</p>
        </div>
    `;
}

function cambiarmudanza(){
	B.style.background = "#C3B6A7";
	h1.textContent = "Moving Made Simple";
	h1.style.color = "#4A3C31";
	body.style.background = "#dcd5cc";
	cartas.forEach(carta => {
        if (carta.classList.contains("cleaning-card") || carta.classList.contains("cleaning-service")) {
            carta.classList.add("hidden");
        } else {
            carta.classList.remove("hidden");
        }
	});
    processTitle.textContent="Our Moving process";
    processSteps.innerHTML = `
        <div class="step">
            <span class="step-number">1.</span>
            <div class="step-content">
                <p class="step-description">Initial Review</p>
                <ul>
                    <li>Team introduction and confirmation of service details.</li>
                    <li>Review of belongings and the agreed plan with the client.</li>
                </ul>
            </div>
        </div>
        <div class="step">
            <span class="step-number">2.</span>
            <div class="step-content">
                <p class="step-description">Preparation and Loading</p>
                <ul>
                    <li>Protection of the site (floors and walls).</li>
                    <li>Final packing of pending items and disassembly of furniture if needed.</li>
                    <li>Safe and organized loading into the truck, with special care for fragile items.</li>
                </ul>
            </div>
        </div>
        <div class="step">
            <span class="step-number">3.</span>
            <div class="step-content">
                <p class="step-description">Unloading at the New Location</p>
                <ul>
                    <li>Unloading belongings in the areas indicated by the client.</li>
                    <li>Furniture assembly and necessary adjustments.</li>
                    <li>Client confirmation that everything is in order.</li>
                </ul>
            </div>
        </div>
        <div class="step">
            <span class="step-number">4.</span>
            <div class="step-content">
                <p class="step-description">Completion</p>
                <ul>
                    <li>Final review and professional farewell.</li>
                    <li>Contact information provided for any post-service inquiries.</li>
                </ul>
            </div>
        </div>
    `;
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