var orgABV = 0;
var orgVol = 0;
var numShots = 0;
var NGS = 0;
var orgLAlc = 0;
var totalLAlc = 0;

var p = document.querySelector("#results");
var button = document.querySelector("button");

var orgABVField = document.querySelector("#orgABV");
var orgVolField = document.querySelector("#orgVol");
var numShotsField = document.querySelector("#numShots");

orgABVField.addEventListener("change", function(){
	orgABV = Number(orgABVField.value);});
orgVolField.addEventListener("change", function(){
	orgVol = Number(orgVolField.value);});
numShotsField.addEventListener("change", function(){
	numShots = Number(numShotsField.value);});

button.addEventListener("click", function(){
	if (orgABV <= 0 || orgVol <= 0 || numShots <= 0){
		p.innerHTML = "Please enter valid values.";
	}
	else {
		calculate(); 
		p.innerHTML = "You have " + orgVol + " litres of " + orgABV + "% gin that is " + numShots + " shot. You need to add " + NGS + " litres of 96% neutral spirit to make it one shot.";
		}});

function calculate(){
	orgLAlc = (orgABV * orgVol) / 100;
	totalLAlc = orgLAlc * numShots-1;
	NGS = Math.round((totalLAlc - orgLAlc) * 0.96);};

	
		


