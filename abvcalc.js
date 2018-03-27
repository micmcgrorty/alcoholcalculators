var orgGrav = 0;
var presentGrav = 0;
var abv = 0;

var p = document.querySelector("#results");
var button = document.querySelector("button");

var orgGravField = document.querySelector("#orgGrav");
var presentGravField = document.querySelector("#presentGrav");

orgGravField.addEventListener("change", function(){
	orgGrav = Number(orgGravField.value);});
presentGravField.addEventListener("change", function(){
	presentGrav = Number(presentGravField.value);});

button.addEventListener("click", function(){
	if (orgGrav <= 0 || presentGrav <= 0 || presentGrav >= orgGrav){
		p.innerHTML = "Please enter valid values.";
	}
	else {
		calculate();
		p.innerHTML = "Estimated ABV is " + abv + "% and attenuation is " + atten + "%.";
	}});

function calculate(){
	abv = (orgGrav - presentGrav) * 0.1285;
	abv = Math.round((abv + 0.00001) * 100) / 100
	atten = Math.round((orgGrav - presentGrav) / orgGrav * 100)};

	
		


