var orgABV = 0;
var orgDen = 0;
var orgVol = 0;
var reqDen = 0;
var reqABV = 0;
var newVol = 0;
var lAlc = 0;
var orgWeight = 0;
var newWeight = 0;
var water = 0;

var p = document.querySelector("#results");
var button = document.querySelector("button");

var orgABVField = document.querySelector("#orgABV");
var orgDenField = document.querySelector("#orgDen");
var orgVolField = document.querySelector("#orgVol");
var reqABVField = document.querySelector("#reqABV");
var reqDenField = document.querySelector("#reqDen");

orgABVField.addEventListener("change", function(){
	orgABV = Number(orgABVField.value);});
orgDenField.addEventListener("change", function(){
	orgDen = Number(orgDenField.value);});
orgVolField.addEventListener("change", function(){
	orgVol = Number(orgVolField.value);});
reqABVField.addEventListener("change", function(){
	reqABV = Number(reqABVField.value);});
reqDenField.addEventListener("change", function(){
	reqDen = Number(reqDenField.value);});

button.addEventListener("click", function(){
	if (orgABV <= 0 || orgDen <= 0 || orgVol <= 0 || reqABV <= 0 || reqDen <= 0){
		p.innerHTML = "Please enter valid values.";
	}
	else {
		calculate();
		p.innerHTML = "You have " + orgVol + " litres of " + orgABV + "%" + " spirit at " + orgDen + " weighing " + orgWeight + "kg. You need to add <strong>" + water + "</strong> litres/kg of water to bring this to " + reqABV + "% at " + reqDen + " weighing " + newWeight + "kg.";
		}});

function calculate(){
	lAlc = (orgVol * orgABV) / 100;
	newVol = (lAlc / reqABV) * 100;
	orgWeight = Math.round(orgVol * orgDen);
	newWeight = Math.round(newVol * reqDen);
	water = Math.round(newWeight - orgWeight);};

	
		


