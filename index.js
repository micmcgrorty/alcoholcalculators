var spirit = document.querySelector("#spirit");
var beer = document.querySelector("#beer");
var spiritList = document.querySelector(".spiritList");
var beerList = document.querySelector(".beerList");

spirit.addEventListener("click", function(){
	spiritList.classList.toggle("listHidden");
	spirit.classList.toggle("selectedList");
});

beer.addEventListener("click", function(){
	beerList.classList.toggle("listHidden");
	beer.classList.toggle("selectedList");
});