var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradiant");
var ran = document.querySelector(".Random");

function setgradiant() {
body.style.background = 
"linear-gradient(to right," 
+ color1.value 
+ "," 
+ color2.value 
+ ")";

	css.textContent = body.style.background + ";";
}


ran.addEventListener("click", Random);

color1.addEventListener("input", setgradiant);

color2.addEventListener("input", setgradiant);