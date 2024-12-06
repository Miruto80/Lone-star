document.onload = carga();
function carga(){
	let b = document.getElementById("bimagen");
	let B =document.getElementById("Barra");
	let h1 = document.getElementById("Titulo");
	let body= document.getElementById("body");
	let cartas = document.querySelectorAll(".car")
	
	b.onchange = function(){
		if (this.checked){
			B.style.background="#00b2b7";
			h1.textContent = "Cleaning with Care";
			h1.style.color="white";
			body.style.background="#19e6e8";
			cartas.forEach(carta => {
                 carta.style.display="none";
				 if(carta.id==="Cleaningcard"){
					 carta.style.display="block";
				 }
			});
		}
		else{
			B.style.background="#C3B6A7";
			h1.textContent = "Moving Made Simple";
			h1.style.color="#4A3C31";
			body.style.background="#dcd5cc";
			cartas.forEach(carta => {
				carta.style.display="block";
				if(carta.id==="Cleaningcard"){
					carta.style.display="none";
				}
		   });
			
		}
	}
}

