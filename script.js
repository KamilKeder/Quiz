var button_start = document.querySelector("#button_start");
var box_app = document.querySelector("#box_app");
var button_odpowiedz = document.querySelectorAll(".button_odpowiedz");
button_start.addEventListener("click",start);
var span_wynik = document.querySelector("#span_wynik");
var span_pytanie= document.querySelector("#span_pytanie");
var div_pytanie = document.querySelector("#div_pytanie");
var odpowiedz_A = document.querySelector("#odpowiedz_A");
var odpowiedz_B = document.querySelector("#odpowiedz_B");
var odpowiedz_C = document.querySelector("#odpowiedz_C");
var button_nastepne = document.querySelector("#button_nastepne");
function start(){
	document.querySelector("#button_nastepne").innerHTML = "Nastepne pytanie"
			odpowiedzi = 0;
			los1 = 0;
			los2 = 0;
			los3 = 0;
			los4 = 0;
	box_app.classList.remove("ukryty");
	button_start.classList.add("ukryty");
	button_start.classList.remove("btn");
	button_start.classList.remove("btn-success");
}
var odpowiedzi = 0;
var los1 = 0;
var los2 = 0;
var los3 = 0;
var los4 = 0;

for(const e of button_odpowiedz){
	e.addEventListener('click',()=>{
		if(e.getAttribute("data-poprawny") == "true"){
			e.classList.add("btn-success");
			e.disabled = true;
			if(odpowiedzi == 0){
				span_wynik.innerHTML = Number(span_wynik.innerHTML)+1;
			}
			odpowiedzi = 1;
			document.querySelector("#button_nastepne").classList.remove("ukryty");
			document.querySelector("#button_nastepne").classList.add("btn");
			document.querySelector("#button_nastepne").classList.add("btn-warning");
			if(los1 == 1 & los2 == 2 & los3 == 3 & los4 ==4){
				document.querySelector("#button_nastepne").innerHTML = "Zakoncz"
			}
		}else{
			e.classList.add("btn-danger");
			e.disabled = true;
			odpowiedzi = 1;


		}
		
	})
}
function nastepne(){
	document.getElementById("span_pytanie").innerHTML = Number(span_pytanie.innerHTML)+1;
	reset();
	losowanie();
	odpowiedzi = 0;
	document.querySelector("#button_nastepne").classList.add("ukryty");
	document.querySelector("#button_nastepne").classList.remove("btn");
	document.querySelector("#button_nastepne").classList.remove("btn-warning");
}
function losowanie(){
	var losowanie = Math.floor(Math.random()*4)+1
	if (losowanie !== los1 &
		losowanie !== los2 &
		losowanie !== los3 &
		losowanie !== los4){
	if (losowanie == 1) {
		los1 = 1;
		document.getElementById("div_pytanie").innerHTML = "W którym roku była wojna pod grunwaldem?";
		document.querySelector("#odpowiedz_A").innerHTML = "1921";
		document.querySelector("#odpowiedz_B").innerHTML = "1410";
		document.querySelector("#odpowiedz_C").innerHTML = "1919";
		document.querySelector("#odpowiedz_A").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_B").dataset.poprawny = "true";
		document.querySelector("#odpowiedz_C").dataset.poprawny = "false";
	
	}
	if (losowanie == 2) {
		los2 = 2;
		document.getElementById("div_pytanie").innerHTML = "Jak nazywał się pierwszy komputer?";
		document.querySelector("#odpowiedz_A").innerHTML = "IBM";
		document.querySelector("#odpowiedz_B").innerHTML = "ENIAC";
		document.querySelector("#odpowiedz_C").innerHTML = "Commodore";
		document.querySelector("#odpowiedz_A").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_B").dataset.poprawny = "true";
		document.querySelector("#odpowiedz_C").dataset.poprawny = "false";
		
	}
	if (losowanie == 3) {
		los3 = 3;
		document.getElementById("div_pytanie").innerHTML = "Ile kości ma dorosły człowiek?";
		document.querySelector("#odpowiedz_A").innerHTML = "18";
		document.querySelector("#odpowiedz_B").innerHTML = "153";
		document.querySelector("#odpowiedz_C").innerHTML = "206";
		document.querySelector("#odpowiedz_A").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_B").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_C").dataset.poprawny = "true";
		
	}
	if (losowanie == 4) {
		los4 = 4;
		document.getElementById("div_pytanie").innerHTML = "Człowiek to:";
		document.querySelector("#odpowiedz_A").innerHTML = "Ssak";
		document.querySelector("#odpowiedz_B").innerHTML = "Homo";
		document.querySelector("#odpowiedz_C").innerHTML = "Obie odpowiedzi są poprawne";
		document.querySelector("#odpowiedz_A").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_B").dataset.poprawny = "false";
		document.querySelector("#odpowiedz_C").dataset.poprawny = "true";
		
	}
	}else{
		if(los1 == 1 & los2 == 2 & los3 == 3 & los4 ==4){
			alert("Gratuluje konczysz quiz z wynikiem: "+span_wynik.innerHTML+"/5");
			box_app.classList.add("ukryty");
			button_start.classList.remove("ukryty");
			button_start.classList.add("btn");
			button_start.classList.add("btn-success");
			span_wynik.innerHTML = 0;
			span_pytanie.innerHTML = 1;
		}
			else{
		lacznik();
	}

	}
	
}
function lacznik(){
	losowanie()
}
function reset(){
	document.querySelector("#odpowiedz_A").disabled = false;
	document.querySelector("#odpowiedz_B").disabled = false;
	document.querySelector("#odpowiedz_C").disabled = false;

	document.querySelector("#odpowiedz_B").classList.remove("btn-danger")
	document.querySelector("#odpowiedz_A").classList.remove("btn-danger")
	document.querySelector("#odpowiedz_C").classList.remove("btn-danger")
	document.querySelector("#odpowiedz_B").classList.remove("btn-success")
	document.querySelector("#odpowiedz_A").classList.remove("btn-success")
	document.querySelector("#odpowiedz_C").classList.remove("btn-success")

	document.querySelector("#odpowiedz_B").classList.add("btn-secondary")
	document.querySelector("#odpowiedz_A").classList.add("btn-secondary")
	document.querySelector("#odpowiedz_C").classList.add("btn-secondary")

	document.querySelector("#odpowiedz_A").disabled = false;
	document.querySelector("#odpowiedz_B").disabled = false;
	document.querySelector("#odpowiedz_C").disabled = false;
}
