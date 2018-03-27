var orgGrav = 0;
var orgVol = 0;
var reqGrav = 0;
var newVol = 0;
var water = 0;

var p = document.querySelector("#results");
var button = document.querySelector("button");

var orgGravField = document.querySelector("#orgGrav");
var orgVolField = document.querySelector("#orgVol");
var reqGravField = document.querySelector("#reqGrav");

orgGravField.addEventListener("change", function(){
	orgGrav = Number(orgGravField.value);});
orgVolField.addEventListener("change", function(){
	orgVol = Number(orgVolField.value);});
reqGravField.addEventListener("change", function(){
	reqGrav = Number(reqGravField.value);});

button.addEventListener("click", function(){
	if (orgGrav <= 0 || orgVol <= 0 || reqGrav <= 0 || reqGrav >= orgGrav){
		p.innerHTML = "Please enter valid values.";
	}
	else {
		calculate();
		p.innerHTML = "You have " + orgVol + " litres of wort at a gravity of " + orgGrav + ". You need to add " + water + " litres of water to bring it to " + reqGrav + ". Total volume of wort is " + newVol + " litres.";
		}});

function calculate(){
	newVol = Math.round((orgGrav * orgVol) / reqGrav);
	water = newVol - orgVol;};

	
		


