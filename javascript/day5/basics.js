var modelEl = document.getElementById('model');
var brandEl = document.getElementById('brand');
var typeEl = document.getElementById('type');
var carColorEl = document.getElementById('color');
var btnEl = document.getElementsByTagName('button')[0];
var newOrder;
btnEl.onclick = function (e){
	// console.log(e)
	e.preventDefault();
	var modelVal = modelEl.value;
	var brandVal = brandEl.value;
	var carColorVal = carColorEl.value;
	var typeVal = typeEl.value;
	newOrder = new TeslaCarModel(modelVal, brandVal, carColorVal, typeVal);
	// console.log('clicked on button element');

}

function TeslaCarModel(model , brand, carcolor,type ) {
	console.log(model + ' ' + brand + ' ' + carcolor + ' ' +  type);
	this.model = model;
	this.brand = brand;
	this.carcolor = carcolor;
	this.type = type;
}
// teslaCarModel();